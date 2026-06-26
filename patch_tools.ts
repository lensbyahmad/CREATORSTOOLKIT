import fs from 'fs';

const filePath = 'src/pages/Tools.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /name: "YouTube Title Generator",\s*description: "Harness viral cognitive loops to structure custom SEO-optimised YouTube video titles.",\s*icon: "Youtube",/g,
  `name: "YouTube Title Generator",\n      description: "Harness viral cognitive loops to structure custom SEO-optimised YouTube video titles.",\n      icon: "Youtube",\n      category: "YouTube",`
);

content = content.replace(
  /name: "Caption\/Copy Composer",\s*description: "Transform raw ideas into multi-format, high-conversion captions with scroll-stopping hooks.",\s*icon: "MessageSquare",/g,
  `name: "Caption/Copy Composer",\n      description: "Transform raw ideas into multi-format, high-conversion captions with scroll-stopping hooks.",\n      icon: "MessageSquare",\n      category: "Social Media",`
);

content = content.replace(
  /name: "Hashtag Strategist",\s*description: "Generate structured sets of hashtags balancing popularity density for targeted SEO reach.",\s*icon: "Hash",/g,
  `name: "Hashtag Strategist",\n      description: "Generate structured sets of hashtags balancing popularity density for targeted SEO reach.",\n      icon: "Hash",\n      category: "Social Media",`
);

content = content.replace(
  /name: "AI Video Scriptwriter",\s*description: "Structure ready-to-narrate screenplays complete with verbal pacing hooks and visual cues.",\s*icon: "FileText",/g,
  `name: "AI Video Scriptwriter",\n      description: "Structure ready-to-narrate screenplays complete with verbal pacing hooks and visual cues.",\n      icon: "FileText",\n      category: "YouTube",`
);

content = content.replace(
  /name: "Blog Strategy Architect",\s*description: "Architect complete click-worthy article briefs with keywords and structural outlines.",\s*icon: "Sparkles",/g,
  `name: "Blog Strategy Architect",\n      description: "Architect complete click-worthy article briefs with keywords and structural outlines.",\n      icon: "Sparkles",\n      category: "Blogging",`
);

content = content.replace(
  /name: "AI Content Calendar Generator",\s*description: "Generate a full 30-day content calendar showing what to post, when to post, and what topics to cover.",\s*icon: "Calendar",/g,
  `name: "AI Content Calendar Generator",\n      description: "Generate a full 30-day content calendar showing what to post, when to post, and what topics to cover.",\n      icon: "Calendar",\n      category: "Strategy",`
);

content = content.replace(
  /name: "Viral Score Checker",\s*description: "Check the viral potential of your video title or post caption with actionable improvement suggestions.",\s*icon: "Sparkles",/g,
  `name: "Viral Score Checker",\n      description: "Check the viral potential of your video title or post caption with actionable improvement suggestions.",\n      icon: "Sparkles",\n      category: "Analytics",`
);

content = content.replace(
  /name: "Competitor Analysis Tool",\s*description: "Analyze competitor content strategies and get ideas based on their success.",\s*icon: "Search",/g,
  `name: "Competitor Analysis Tool",\n      description: "Analyze competitor content strategies and get ideas based on their success.",\n      icon: "Search",\n      category: "Analytics",`
);

content = content.replace(
  /name: "AI Thumbnail Text Generator",\s*description: "Generate emotional and high-CTR thumbnail text ideas for your videos.",\s*icon: "Image",/g,
  `name: "AI Thumbnail Text Generator",\n      description: "Generate emotional and high-CTR thumbnail text ideas for your videos.",\n      icon: "Image",\n      category: "YouTube",`
);

content = content.replace(
  /name: "Content Repurpose Tool",\s*description: "Convert a YouTube script or blog post into Instagram captions, Twitter threads, LinkedIn posts, and more.",\s*icon: "RefreshCw",/g,
  `name: "Content Repurpose Tool",\n      description: "Convert a YouTube script or blog post into Instagram captions, Twitter threads, LinkedIn posts, and more.",\n      icon: "RefreshCw",\n      category: "Social Media",`
);

content = content.replace(
  /name: "Niche Finder Tool",\s*description: "Discover the best content niches with earning potential based on your interests and skills.",\s*icon: "Compass",/g,
  `name: "Niche Finder Tool",\n      description: "Discover the best content niches with earning potential based on your interests and skills.",\n      icon: "Compass",\n      category: "Strategy",`
);

content = content.replace(
  /name: "AI Brand Name Generator",\s*description: "Generate unique brand names, domain suggestions, and matching slogans.",\s*icon: "Tag",/g,
  `name: "AI Brand Name Generator",\n      description: "Generate unique brand names, domain suggestions, and matching slogans.",\n      icon: "Tag",\n      category: "Branding",`
);

content = content.replace(
  /name: "Hook Generator",\s*description: "Generate powerful hooks\/opening lines categorized by Curiosity, Shock, Question, and Story.",\s*icon: "Target",/g,
  `name: "Hook Generator",\n      description: "Generate powerful hooks/opening lines categorized by Curiosity, Shock, Question, and Story.",\n      icon: "Target",\n      category: "Social Media",`
);

fs.writeFileSync(filePath, content);
console.log("Patched tools");
