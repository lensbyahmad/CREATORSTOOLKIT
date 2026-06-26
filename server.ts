import express, { Request, Response } from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Security Headers (CSP, HSTS)
app.use((req: Request, res: Response, next) => {
  // Strict-Transport-Security (HSTS)
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  
  // Content-Security-Policy (CSP)
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com; frame-src 'self' https://googleads.g.doubleclick.net;"
  );

  // Other standard security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  next();
});

// Initialize Gemini SDK lazily to prevent server crash if key is missing on startup
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not defined. Please add it to your secrets or .env file.");
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

// Initialize Nodemailer transporter lazily
let transporter: nodemailer.Transporter | null = null;
function getTransporter() {
  if (!transporter) {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      process.env.SMTP_HOST === "smtp.example.com" ||
      process.env.SMTP_USER === "my_email@example.com"
    ) {
      console.warn("Real SMTP credentials not provided. Emails will not be sent, only logged.");
      return null;
    }
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

// Subscribe endpoint
app.post("/api/subscribe", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: "Email is required" });
      return;
    }

    const mailer = getTransporter();
    if (mailer) {
      try {
        await mailer.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.SMTP_TO || process.env.SMTP_USER,
          subject: "New Newsletter Subscription",
          text: `A new user has subscribed to the newsletter: ${email}`,
          html: `<p>A new user has subscribed to the newsletter: <strong>${email}</strong></p>`
        });
        console.log(`Email sent for subscription: ${email}`);
      } catch (mailError) {
        console.error("Failed to send subscription email (check SMTP credentials):", mailError);
        // Continue and return success even if email fails
      }
    } else {
      console.log(`[Simulated] Subscription received for: ${email}`);
    }

    res.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Failed to process subscription" });
  }
});

// Diagnostic endpoint to test email configuration
app.get("/api/test-email", async (req: Request, res: Response): Promise<void> => {
  try {
    const mailer = getTransporter();
    if (!mailer) {
      res.status(400).json({ error: "SMTP not configured or using default example credentials" });
      return;
    }

    const testResult = await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: "Diagnostic Test Email",
      text: "This is a test email to verify SMTP configuration.",
    });

    console.log("Diagnostic test email sent successfully:", testResult);
    res.json({ success: true, message: "Test email sent successfully", info: testResult });
  } catch (error: any) {
    console.error("Diagnostic test email failed:", error);
    res.status(500).json({ error: "Failed to send test email", details: error.message, stack: error.stack });
  }
});

// API endpoint for tools generation
app.post("/api/generate", async (req: Request, res: Response): Promise<void> => {
  try {
    const { toolType, inputs } = req.body;

    if (!toolType || !inputs) {
      res.status(400).json({ error: "Missing required parameters: toolType or inputs" });
      return;
    }

    const ai = getAiClient();
    let prompt = "";

    switch (toolType) {
      case "youtube-title": {
        const { topic, tone, keywords, audience } = inputs;
        prompt = `You are an expert YouTube SEO and marketing copywriter. 
Generate 5 highly engaging, clickable (high-CTR), and search-optimized YouTube video titles for the following details:
- Topic: "${topic || "unspecified"}"
- Target Audience: "${audience || "General content consumer"}"
- Writing Tone/Style: "${tone || "energetic"}"
- Primary Keywords to include: "${keywords || "none specific"}"

Focus on psychological triggers, curiosity loops, and proper keyword integration. Provide them in an easy-to-read numbered list with a brief 1-sentence analytical breakdown explaining why each title works.`;
        break;
      }
      case "caption": {
        const { description, tone, platform, includeEmojis, callToAction } = inputs;
        prompt = `You are a social media growth marketing manager specializing in copy optimized for audience engagement.
Generate 3 distinct, high-converting social media captions tailored for ${platform || "Instagram/TikTok"} based on:
- Intent/Core Description: "${description || "unspecified"}"
- Brand Tone: "${tone || "creative & inspiring"}"
- Call-to-Action (CTA): "${callToAction || "unspecified"}"
- Use Emojis: ${includeEmojis ? "Yes (sprinkled gracefully for engagement)" : "No (clean text only)"}

Structure the output with clear headlines (e.g., Option 1, Option 2, Option 3). For each option, include:
1. Hook (The first scroll-stopping line)
2. Body content (Structured with clean line breaks/bullet points)
3. Call to Action/Engagement Prompt
4. Recommended hashtags block`;
        break;
      }
      case "hashtag": {
        const { topic, platform, count, style } = inputs;
        const targetCount = Number(count) || 20;
        prompt = `You are a hashtag strategist. Generate exactly ${targetCount} highly relevant, viral, and active hashtags for:
- Main Topic/Concept: "${topic || "general content creation"}"
- Target Platform: "${platform || "Instagram"}"
- Hashtag Strategy Style: "${style || "balanced"}"

Categorize the generated hashtags cleanly:
1. High-Volume hashtags (Millions of posts - wide reach)
2. Medium Niche hashtags (Tens of thousands - great engagement)
3. Target Specific/Community hashtags (highly contextual)

Additionally, provide a short professional tip on how to hide or place these hashtags on ${platform} for maximum visual cleanliness.`;
        break;
      }
      case "script": {
        const { topic, platform, duration, tone, targetGoal } = inputs;
        prompt = `You are a masterful scriptwriter for creators. Write a complete, ready-to-record video script optimized for:
- Video Topic/Hook: "${topic || "unspecified"}"
- Platform Format: "${platform || "Shorts/Reels (Vertical 60s)"}"
- Estimated Duration: "${duration || "60 seconds"}"
- Vibe/Tone: "${tone || "enthusiastic and quick-paced"}"
- Target Goal of Video: "${targetGoal || "maximize shares and bookmarks"}"

Format the output clearly as a script layout:
- **Hook (0-5s)**: Write the exact scroll-stopping introductory verbal line and visual cue.
- **Introduction (5-15s)**: Briefly introduce the value or core conflict/problem.
- **Main Value/Story Body (15-45s)**: Split into clear, snappy points (Point 1, Point 2, Point 3). Include visual direction cues parenthesized, e.g., (Visual: B-roll showing...).
- **Call-To-Action Outro (45-60s)**: High-impact verbal command prompting likes, subscribes, or page clicks.`;
        break;
      }
      case "blog-idea": {
        const { topic, niche, audience, targetGoals } = inputs;
        prompt = `You are an veteran digital strategist, SEO specialist, and veteran blogger. 
Generate 5 high-potential blog post ideas and structured high-level outlines based on:
- Core Niche/Topic: "${topic || niche || "content marketing"}"
- Main Domain/Niche focus: "${niche || "tech/creative economy"}"
- Target Reader Persona: "${audience || "beginners & enthusiasts"}"
- Main Blog Goals: "${targetGoals || "increase organic SEO search engine visibility"}"

For each of the 5 blog ideas, outline:
1. Click-Worthy Title (optimized with SEO potential)
2. Suggested Focus Keywords & Search Intent Category (e.g. Informational, Commercial)
3. Content Outline / Key Sections Brief (Introduction, Paragraph concepts, H2/H3 ideas)
4. Hook Angle / Why readers would search for this post`;
        break;
      }
      case "content-calendar": {
        const { niche } = inputs;
        prompt = `You are an expert content strategist. Generate a full 30-day content calendar for the niche: "${niche}".
Include:
- What to post (format: video, carousel, short, etc.)
- When to post (time/day)
- Specific topic or hook for each day
Make it actionable and varied to keep audiences engaged.`;
        break;
      }
      case "viral-score": {
        const { content } = inputs;
        prompt = `You are an expert social media analyst. Evaluate the following video title or post caption:
"${content}"

1. Give it a Viral Score out of 100.
2. Explain why it will or won't go viral (analyzing hook, emotion, curiosity, and clarity).
3. Provide 3 improved, highly viral alternatives.`;
        break;
      }
      case "competitor-analysis": {
        const { competitor } = inputs;
        prompt = `You are a YouTube/social media strategist. Provide a comprehensive content analysis for the creator/competitor: "${competitor}".
Analyze:
- What type of content works best for them (formats, topics, editing style).
- Their core audience appeal.
- Suggest 5 high-potential content ideas inspired by their success but with a unique twist.`;
        break;
      }
      case "thumbnail-text": {
        const { topic } = inputs;
        prompt = `You are a YouTube thumbnail expert. For the video topic: "${topic}", generate 5 different thumbnail text ideas (keep them under 5 words each).
For each idea, state which primary emotion it targets (e.g., Shock, Curiosity, Fear, Desire) to maximize Click-Through Rate (CTR).`;
        break;
      }
      case "repurpose": {
        const { content } = inputs;
        prompt = `You are an expert content repurposer. Take the following script or blog post and convert it into 5 distinct formats:
1. An engaging Instagram caption (with emojis and hashtags).
2. A viral Twitter/X thread starter and first few tweets.
3. A professional LinkedIn post.
4. A keyword-rich Pinterest description.
5. A fast-paced YouTube Shorts script (under 60 seconds).

Original Content:
"${content}"`;
        break;
      }
      case "niche-finder": {
        const { interests } = inputs;
        prompt = `You are a creator economy expert. Based on the following interests and skills: "${interests}", suggest 5 highly profitable content niches.
For each niche, explain:
- The earning potential and monetization methods.
- The current competition level.
- Strategies for fast growth in that specific niche.`;
        break;
      }
      case "brand-name": {
        const { niche, style } = inputs;
        prompt = `You are a branding expert. Generate 10 unique, memorable brand/channel names for the niche: "${niche}" with a "${style}" style.
For each name:
- Suggest an available/related domain name (e.g., .com, .co, .io).
- Provide a catchy, matching slogan.`;
        break;
      }
      case "hook-generator": {
        const { topic } = inputs;
        prompt = `You are an elite copywriter. For the topic: "${topic}", generate 10 powerful hooks/opening lines.
Categorize them strictly as follows:
1. Curiosity Hooks (make them need the answer)
2. Shock/Contrarian Hooks (break their expectations)
3. Question Hooks (engage them directly)
4. Story Hooks (pull them into a narrative)

Provide 2-3 hooks for each category.`;
        break;
      }
      default: {
        res.status(400).json({ error: "Invalid tool type provided" });
        return;
      }
    }

    const generateWithRetry = async (prompt: string, retries = 3, delay = 1000): Promise<any> => {
      try {
        return await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: prompt,
        });
      } catch (err: any) {
        if (retries > 0 && (err.status === 503 || err.status === 429)) {
          console.log(`Retrying generation in ${delay}ms... (${retries} retries left)`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return generateWithRetry(prompt, retries - 1, delay * 2);
        }
        throw err;
      }
    };

    const response = await generateWithRetry(prompt);

    res.json({ success: true, result: response.text });
  } catch (err: any) {
    console.error("Gemini Generation Error:", err);
    let userFriendlyError = "Failed to generate AI contents. Please try again.";
    
    if (err.status === 503) {
      userFriendlyError = "The AI model is currently experiencing high demand. Please try again in a few moments.";
    } else if (err.status === 429) {
      userFriendlyError = "The AI model quota has been exceeded. Please try again later.";
    }
    
    res.status(500).json({
      error: userFriendlyError,
      details: err.message
    });
  }
});

// Configure Vite or Static server based on environment
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CreatorsToolkit Backend running on http://localhost:${PORT}`);
  });
}

setupServer();
