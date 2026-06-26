export interface ToolGuide {
  whatIsIt: string;
  howToUse: string[];
  examples: {
    input: string;
    output: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const TOOL_GUIDES: Record<string, ToolGuide> = {
  "youtube-title": {
    whatIsIt: "The YouTube Title Generator utilizes battle-tested engagement loops to formulate titles with extremely high click-through rates. By analyzing viewer psychology, retention drop-offs, and social SEO search intent, it constructs options that trigger immediate curiosity and address specific viewer desires.",
    howToUse: [
      "Describe your video topic accurately in the main inputs field.",
      "Specify your precise target audience persona (e.g. beginner developers, aspiring food Vloggers).",
      "Pick a copywriting tone that reflects your pacing (e.g. Challenger for bold statements, Curious to open active curiosity gaps).",
      "Add optional target keywords to weave them seamlessly for search engine traffic indices.",
      "Review the output suggestions list and choose the absolute best fit for your thumbnail layout."
    ],
    examples: [
      {
        input: "Topic: '10 Secrets Behind Carbon Trading Markets', Tone: 'Challenger', Audience: 'SaaS Business Execs'",
        output: "• Why Your Current ESG Strategy is Failing: The Carbon Credit Trap\n• The Dirty Secret Behind Modern Carbon Trading Corporate Retainers\n• 10 Trillion-Dollar Carbon Compliance Flaws Standard Consultants Hide"
      },
      {
        input: "Topic: 'How to Survive and Outrun an Avalanche Pack', Tone: 'Curious', Audience: 'Skiers and Snowboarders'",
        output: "• Ski Guides Will Never Tell You the Real Truth About Extreme Slopes...\n• What Happens to Your Body in a Class 4 Avalanche? (And How to Exit First)\n• The Three Ski Patterns That Trigger Snowpacks Insiders Avoid"
      }
    ],
    faqs: [
      {
        question: "Is this tool optimized for search engine algorithms?",
        answer: "Yes. By introducing target keywords, the engine formats headers to meet YouTube SEO schemas without compromising on strong human-centered visual hooks."
      },
      {
        question: "How long should my chosen title be?",
        answer: "We recommend keeping titles under 55 characters so they are fully displayed in standard search panels without cut-offs."
      },
      {
        question: "Does tone matter for clickthrough retention?",
        answer: "Absolutely. High-stake topics perform best with a provocative Challenger tone, while tutorial-related videos reach broader audiences through clear Curiosity loops."
      }
    ]
  },
  "caption": {
    whatIsIt: "The Caption & Copy Composer is designed to turn dry product updates into structured, compelling copy, utilizing clean visual breaks and powerful calls-to-action (CTAs). It ensures your posts are perfectly formatted to hook attention on specific social platforms.",
    howToUse: [
      "State what your social media post is about with a detailed prompt description.",
      "Choose your desired platform context (Reels, TikTok, LinkedIn, or Twitter Thread) to format with platform-specific layouts.",
      "Select your brand's core vocal vibe pattern (Empathetic, FOMO-Driven, Professional, etc.).",
      "Draft a strong, specific Command action (CTA) for your viewers to follow.",
      "Toggle emoji options to automatically insert friendly graphic separators between sections."
    ],
    examples: [
      {
        input: "About: 'New Productivity Notebook', Tone: 'FOMO-Driven', CTA: 'Get 20% off with code FAST20'",
        output: "🚨 Stop trying to structure your workflow using standard empty calendars. Most daily planners fail because they measure hours, not baseline energy levels.\n\nIntroducing the Minimalist Energy Planner—now active with 20% savings. 👇\n\n🎯 Fast-track your focus.\n⏱️ 20% off limited code: FAST20\n\nLink in bio today! 🚀"
      }
    ],
    faqs: [
      {
        question: "Why should I customize layouts for LinkedIn vs TikTok?",
        answer: "LinkedIn readers expect comprehensive bullet-pointed structures and insightful takeaways, while vertical video formats like TikTok require rapid lines and early text hooks."
      },
      {
        question: "How does the emoji injection operate?",
        answer: "The engine inserts emojis as bullet-indicators and alert prefixes, which improves readability and clickthrough metrics."
      }
    ]
  },
  "hashtag": {
    whatIsIt: "The Hashtag Strategist uses organic density algorithms to balance your tags list. Instead of stuffing captions with overly crowded categories where posts disappear instantly, it structures lists across high-reach, mid-volume, and hyper-niche communities.",
    howToUse: [
      "Input your primary niche topic keyword (e.g., mechanical keyboards).",
      "Select your target social media ecosystem (Instagram, TikTok, or LinkedIn).",
      "Set your growth alignment strategy: Broad for reach, Balanced for steady indexing, or Hyper-Niche for direct community interaction.",
      "Choose your target limit (10, 20, or 30 hashtags)."
    ],
    examples: [
      {
        input: "Keyword: 'mechanical keyboards', Platform: 'Instagram', Strategy: 'Balanced Growth'",
        output: "🏷️ HIGH-VOLUME REACH (30%):\n#mechanicalkeyboards #keyboardart #desksetups\n\n🏷️ MEDIUM AUTHORITY (40%):\n#customkeyboards #retrokeycaps #gateronswitches #desktour\n\n🏷️ COMMUNITY HYPER-NICHE (30%):\n#kbd67lite #hotswapkeyboard #lubedswitches"
      }
    ],
    faqs: [
      {
        question: "Why shouldn't I use 30 broad hashtags on every single post?",
        answer: "Massive tags like #lifestyle or #coding have billions of posts. Captions using exclusively generic tags get pushed off search lists in seconds, ruining discovery rates."
      },
      {
        question: "Where is the best place to paste my generated hashtags?",
        answer: "Keep your main captions clean! We recommend putting hashtags at the very bottom of your post description separated by three break-dots, or inside the first comment box."
      }
    ]
  },
  "script": {
    whatIsIt: "The AI Video Scriptwriter builds complete narrative screenplays structured for vertical short-form or long-form video, featuring bracketed video directions and audio cues that help creators deliver compelling, professionally paced voiceovers.",
    howToUse: [
      "Input your core video hook arguments and target facts.",
      "Choose your specific video format (vertical Shorts, 3-minute video, or complete long-form video essay).",
      "Pick your narrator delivery tone (e.g., Conspiratorial for secret knowledge, Authentic Chill Vlogger for casual delivery).",
      "Set your primary metric target (e.g., clicks, saves, or comments) to prompt specific verbal engagement cues."
    ],
    examples: [
      {
        input: "Target: 'Standard 5AM routine causes fatigue', Format: 'Shorts (60s)', Tone: 'Conspiratorial'",
        output: "[Visual: Extreme close-up of a ringing morning alarm clocks] \n(Audio - Whispered): \"Your 5 AM wake-up routine is actually destroying your morning focus. High-performers are lying to you...\"\n\n[Visual: Zoom out showing a frustrated planner user]\n\"Waking up early without aligning with your natural circadian cycles triggers chronic sleep inertia. Here is the daily habit you should use instead...\""
      }
    ],
    faqs: [
      {
        question: "How do I read the bracketed instructions?",
        answer: "Bracketed cues (like [Visual: Camera action]) act as visual guides for what to show on screen while speaking, helping you coordinate seamless edits easily."
      },
      {
        question: "Can I adjust the script length?",
        answer: "Yes. By changing your speech duration parameters, the engine automatically formats the narrative script to meet natural timing baselines."
      }
    ]
  },
  "blog-idea": {
    whatIsIt: "The Blog Strategy Architect behaves like a senior SEO manager. It analyzes target clusters and formats comprehensive article blueprints containing search-optimized title recommendations, focus keywords, structural outlines, and section breakdowns.",
    howToUse: [
      "Define your core search theme (e.g., remote team communication workflows).",
      "Specify your blog domain context to anchor the suggestions (e.g., tech SaaS, interior design, wellness).",
      "Select your exact reader profile to customize terms and references.",
      "Choose your target SEO goal (Informational, Commercial, or Viral Backlinks)."
    ],
    examples: [
      {
        input: "Theme: 'freelance tax prep software', Niche: 'Freelance SaaS finance', Goal: 'Boost High-Intent Commercial Conversions'",
        output: "📰 ARTICLE TITLES: 'The Ultimate Tax Survival Spreadsheet for Independent Contractors in 2026'\n\n📈 TARGET KEYWORDS: freelance write-offs, independent tax software, schedule C spreadsheet\n\n📌 OUTLINE STRUCTURE:\nI. Introduction: The Freelance Tax Season Anxiety Loop\nII. Why Traditional TurboTax Plans Fall Short for Sole Proprietors\nIII. Section-by-Section Write-off Explanations (Self-employed deductions)\nIV. Conclusion & Clickable Voucher Link CTA"
      }
    ],
    faqs: [
      {
        question: "Does this generate ready-to-publish articles?",
        answer: "No. It generates optimized article structures and outlines. This provides a strong framework for your team to write authentic posts, keeping your content aligned with search guidelines."
      },
      {
        question: "What is the difference between Informational and Commercial objectives?",
        answer: "Informational frameworks answer broad, authoritative questions, while Commercial objectives organize articles to support direct product trials, sign-ups, and downloads."
      }
    ]
  },
  "content-calendar": {
    whatIsIt: "The AI Content Calendar Generator provides a full 30-day posting schedule. It tells you what to post, when to post, and what specific topic to cover, tailored for your niche.",
    howToUse: [
      "Enter your content niche or industry focus.",
      "The generator creates a structured 30-day timeline with specific content ideas."
    ],
    examples: [
      {
        input: "Niche: 'YouTube Tech Reviews'",
        output: "Day 1: [Video] Unboxing the newest mechanical keyboard. Hook: 'Is this the best typing experience yet?'\nDay 2: [Shorts] 3 hidden features in iOS 18."
      }
    ],
    faqs: [
      {
        question: "Is this calendar tool free?",
        answer: "Yes, this feature is completely free to use and provides a unique customized schedule for your niche."
      }
    ]
  },
  "viral-score": {
    whatIsIt: "The Viral Score Checker evaluates the viral potential of your video title or post caption out of 100, providing actionable feedback.",
    howToUse: [
      "Paste your drafted title or caption.",
      "Receive a score and detailed breakdown on why it will or won't go viral, along with improved suggestions."
    ],
    examples: [
      {
        input: "Caption: '10 Mistakes You're Making in Your 20s'",
        output: "Score: 85/100. Strong curiosity gap, but needs a more specific emotional trigger. Alternative: 'The 10 Financial Mistakes Keeping You Broke in Your 20s'."
      }
    ],
    faqs: [
      {
        question: "How is the viral score calculated?",
        answer: "It uses predictive algorithms based on emotional valence, curiosity gap presence, and historical engagement data."
      }
    ]
  },
  "competitor-analysis": {
    whatIsIt: "The Competitor Analysis Tool deconstructs a competitor's content strategy and generates ideas inspired by their success.",
    howToUse: [
      "Enter the handle or name of a successful competitor in your niche.",
      "Review the breakdown of their working formats and suggested content ideas for your own channel."
    ],
    examples: [
      {
        input: "Competitor: '@mkbhd'",
        output: "Analysis: High-quality visuals, deep-dive reviews, crisp editing. Idea 1: 'I Used the iPhone 15 Pro for 30 Days (The Honest Truth)'."
      }
    ],
    faqs: [
      {
        question: "Will this copy my competitor?",
        answer: "No, it analyzes their successful structures and suggests how to adapt those principles uniquely to your own voice."
      }
    ]
  },
  "thumbnail-text": {
    whatIsIt: "The AI Thumbnail Text Generator creates punchy, emotional, and high-CTR text ideas specifically designed to fit on video thumbnails.",
    howToUse: [
      "Input your core video topic.",
      "Select from 5 thumbnail text variations targeting different psychological emotions."
    ],
    examples: [
      {
        input: "Topic: 'How to edit faster in Premiere Pro'",
        output: "1. Edit 5x Faster (Desire)\n2. Stop Editing Like This! (Shock)\n3. The Ultimate Shortcut (Curiosity)"
      }
    ],
    faqs: [
      {
        question: "Why should thumbnail text be short?",
        answer: "Viewers scroll quickly on mobile devices; text must be readable at small sizes in a fraction of a second."
      }
    ]
  },
  "repurpose": {
    whatIsIt: "The Content Repurpose Tool converts a single piece of long-form content (like a script or blog post) into multiple optimized social formats.",
    howToUse: [
      "Paste your original script or article.",
      "Copy the generated outputs for Instagram, Twitter, LinkedIn, Pinterest, and YouTube Shorts."
    ],
    examples: [
      {
        input: "Content: 'A 1000-word blog on the benefits of drinking water...'",
        output: "[Twitter Thread] 1/ Water is life, but you're drinking it wrong... [LinkedIn] Professional thoughts on hydration for focus..."
      }
    ],
    faqs: [
      {
        question: "Are the repurposed formats platform-specific?",
        answer: "Yes, each output is tailored to the expected formatting and best practices of that specific platform."
      }
    ]
  },
  "niche-finder": {
    whatIsIt: "The Niche Finder Tool suggests highly profitable content niches based on your unique combination of interests and skills.",
    howToUse: [
      "List your interests, hobbies, or professional skills.",
      "Explore 5 suggested niches with breakdowns of earning potential and growth strategies."
    ],
    examples: [
      {
        input: "Interests: 'coding, mechanical keyboards'",
        output: "Niche 1: 'Developer Desk Setups & Tech Reviews'. High earning potential via affiliate links and software sponsorships."
      }
    ],
    faqs: [
      {
        question: "How do I choose the best niche?",
        answer: "Look for the intersection of your true passion, low existing competition, and clear pathways for monetization."
      }
    ]
  },
  "brand-name": {
    whatIsIt: "The AI Brand Name Generator creates unique, memorable names for your channel or blog, checks domain suitability, and crafts matching slogans.",
    howToUse: [
      "Enter your content niche and choose a brand style.",
      "Select your favorite name from the generated list of 10 options."
    ],
    examples: [
      {
        input: "Niche: 'Travel Vlog', Style: 'Bold & Energetic'",
        output: "Name: 'Nomad Velocity' | Domain: nomadvelocity.com | Slogan: 'Chase the Horizon at Full Speed.'"
      }
    ],
    faqs: [
      {
        question: "Are the suggested domains guaranteed to be available?",
        answer: "The tool suggests highly likely available combinations, but you should verify availability with a domain registrar."
      }
    ]
  },
  "hook-generator": {
    whatIsIt: "The Hook Generator crafts powerful opening lines categorized by psychological triggers (Curiosity, Shock, Question, Story) to maximize viewer retention.",
    howToUse: [
      "Enter your video or post topic.",
      "Review the categorized hooks and select the one that best fits your narrative."
    ],
    examples: [
      {
        input: "Topic: 'Why diets don't work'",
        output: "[Shock]: 'Everything your trainer told you about calories is a lie.' [Curiosity]: 'I stopped dieting for 30 days, and here is what happened.'"
      }
    ],
    faqs: [
      {
        question: "Which hook type works best?",
        answer: "It depends on the platform and content. Shock works well for TikTok, while Curiosity often performs best on YouTube."
      }
    ]
  }
};
