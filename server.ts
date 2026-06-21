import express, { Request, Response } from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

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
      default: {
        res.status(400).json({ error: "Invalid tool type provided" });
        return;
      }
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({ success: true, result: response.text });
  } catch (err: any) {
    console.error("Gemini Generation Error:", err);
    res.status(500).json({
      error: "Failed to generate AI contents. Please ensure standard credentials are and wait.",
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
