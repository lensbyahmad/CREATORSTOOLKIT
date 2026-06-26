import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Youtube,
  MessageSquare,
  Hash,
  FileText,
  MousePointer,
  Copy,
  Check,
  RefreshCw,
  Loader2,
  Trash2,
  Info,
  ChevronRight,
  Bookmark,
  Calendar,
  AlertCircle,
  HelpCircle,
  BookOpen,
  HardDrive,
  Mail,
  Search,
  Image,
  Compass,
  Tag,
  Target
} from "lucide-react";
import AdPlaceholder from "../components/AdPlaceholder";
import { ToolType, ToolDefinition } from "../types";
import { TOOL_GUIDES } from "../data/guides";
import { YoutubeIcon, CaptionIcon, HashtagIcon, ScriptIcon, SparklesIcon } from "../components/ToolIcons";

interface ToolsProps {
}

export default function Tools({ }: ToolsProps) {
  // Available tool definitions
  const TOOLS: ToolDefinition[] = [
    {
      id: "youtube-title",
      name: "YouTube Title Generator",
      description: "Harness viral cognitive loops to structure custom SEO-optimised YouTube video titles.",
      icon: "Youtube",
      category: "YouTube",
      inputs: [
        { id: "topic", label: "Video Topic / Core Theme", type: "text", placeholder: "e.g. 10 Secrets behind modern carbon credit markets", helpText: "Describe what your video is primarily about" },
        { id: "audience", label: "Target Audience", type: "text", placeholder: "e.g. Aspiring eco-investors or business students", helpText: "Who are we tailoring the hook for?" },
        { id: "tone", label: "Desired Vibe / Copywriting Tone", type: "select", options: ["Challenger (Provocative & bold)", "Energetic (Enthusiastic & fast)", "Informational (Authoritative)", "Curious (Intriguing open gaps)", "Standard SaaS Professional"], defaultValue: "Challenger (Provocative & bold)" },
        { id: "keywords", label: "Primary SEO Keywords (Optional)", type: "text", placeholder: "e.g. carbon trade, eco investments", helpText: "Target terms you want naturally included in titles" }
      ]
    },
    {
      id: "caption",
      name: "Caption/Copy Composer",
      description: "Transform raw ideas into multi-format, high-conversion captions with scroll-stopping hooks.",
      icon: "MessageSquare",
      category: "Social Media",
      inputs: [
        { id: "description", label: "What is your post about?", type: "textarea", placeholder: "e.g. Launching a brand new minimalist productivity planner with a 20% discount code this weekend only.", helpText: "Be as descriptive as needed" },
        { id: "platform", label: "Target Platform", type: "select", options: ["Instagram Feed/Reels", "TikTok Vertical Video", "LinkedIn Professional Post", "Twitter/X Thread Starter"], defaultValue: "Instagram Feed/Reels" },
        { id: "tone", label: "Brand Tone Profile", type: "select", options: ["Empathetic & Warm", "Highly Professional & Analytical", "FOMO Driven & Snappy", "Playful & Humorous"], defaultValue: "Snapped & Snappy" },
        { id: "callToAction", label: "Call to Action (CTA) Objective", type: "text", placeholder: "e.g. Click link in bio to use coupon 'FAST20'", helpText: "What command do you want readers to take?" },
        { id: "includeEmojis", label: "Inject Engaging Emojis", type: "checkbox", defaultValue: true, helpText: "Gracefully sprinkles relevant emojis throughout text blocks" }
      ]
    },
    {
      id: "hashtag",
      name: "Hashtag Strategist",
      description: "Generate structured sets of hashtags balancing popularity density for targeted SEO reach.",
      icon: "Hash",
      category: "Social Media",
      inputs: [
        { id: "topic", label: "Main Core Topic / Keywords", type: "text", placeholder: "e.g. retro mechanical keyboards, productivity workspaces", helpText: "Enter the precise topic vertical" },
        { id: "platform", label: "Social Platform Ecosystem", type: "select", options: ["Instagram Business", "TikTok Trends", "LinkedIn Professional", "YouTube Tags"], defaultValue: "Instagram Business" },
        { id: "style", label: "Strategy Style Alignment", type: "select", options: ["Broad High-Reach (Volume limits)", "Balanced Growth (Mix of Vol & Niche)", "Hyper-Niche (Community specificity)"], defaultValue: "Balanced Growth (Mix of Vol & Niche)" },
        { id: "count", label: "Hashtags Count Limit", type: "select", options: ["10 Tags", "20 Tags", "30 Tags"], defaultValue: "20 Tags" }
      ]
    },
    {
      id: "script",
      name: "AI Video Scriptwriter",
      description: "Structure ready-to-narrate screenplays complete with verbal pacing hooks and visual cues.",
      icon: "FileText",
      category: "YouTube",
      inputs: [
        { id: "topic", label: "Core Narrative Hook / Topic", type: "textarea", placeholder: "e.g. Why standard productivity advice like waking up at 5AM is actually reducing your baseline cognitive levels.", helpText: "Give details on core argument or conflict" },
        { id: "platform", label: "Video Distribution Format", type: "select", options: ["Shorts/Reels (Vertical 60s)", "YouTube Essay (L-form 8-12m)", "TikTok Insight Series (3m Video)"], defaultValue: "Shorts/Reels (Vertical 60s)" },
        { id: "duration", label: "Target Speech Duration", type: "text", placeholder: "e.g. 60 Seconds / approx 150 words", helpText: "Approximate length spec" },
        { id: "tone", label: "Narrator Delivery Vibe", type: "select", options: ["Conspiratorial (Inside knowledge)", "Fast-Talking Educator", "Authentic Chill Vlogger", "Inspiring Leader"], defaultValue: "Fast-Talking Educator" },
        { id: "targetGoal", label: "Primary Video Metric Goal", type: "text", placeholder: "e.g. Bookmarks, Comments or link clicks", helpText: "What state indicators are we targeting?" }
      ]
    },
    {
      id: "blog-idea",
      name: "Blog Strategy Architect",
      description: "Architect complete click-worthy article briefs with keywords and structural outlines.",
      icon: "Sparkles",
      category: "Blogging",
      inputs: [
        { id: "topic", label: "Core SEO Theme", type: "text", placeholder: "e.g. remote work mental wellness workflows", helpText: "What main topic cluster are you designing for?" },
        { id: "niche", label: "Primary Blog Focus Domain", type: "text", placeholder: "e.g. Digital Nomads lifestyle & SaaS productivity", helpText: "Who is your blog's specific domain context?" },
        { id: "audience", label: "Target Reader Persona", type: "text", placeholder: "e.g. Work-from-home corporate mid-level executives", helpText: "Who is reading this article?" },
        { id: "targetGoals", label: "Major Keyword SEO Goal", type: "select", options: ["Build Informational Authority", "Boost High-Intent Commercial Conversions", "Maximize Viral Backlink Potentials"], defaultValue: "Build Informational Authority" }
      ]
    },
    {
      id: "content-calendar",
      name: "AI Content Calendar Generator",
      description: "Generate a full 30-day content calendar showing what to post, when to post, and what topics to cover.",
      icon: "Calendar",
      category: "Strategy",
      inputs: [
        { id: "niche", label: "Your Niche / Industry", type: "text", placeholder: "e.g. YouTube Tech Reviews, Fitness Photography", helpText: "Describe your content focus area." }
      ]
    },
    {
      id: "viral-score",
      name: "Viral Score Checker",
      description: "Check the viral potential of your video title or post caption with actionable improvement suggestions.",
      icon: "Sparkles",
      category: "Analytics",
      inputs: [
        { id: "content", label: "Video Title or Post Caption", type: "textarea", placeholder: "e.g. 10 Mistakes You're Making in Your 20s", helpText: "Paste your drafted title or caption here." }
      ]
    },
    {
      id: "competitor-analysis",
      name: "Competitor Analysis Tool",
      description: "Analyze competitor content strategies and get ideas based on their success.",
      icon: "Search",
      category: "Analytics",
      inputs: [
        { id: "competitor", label: "Competitor Name / Handle", type: "text", placeholder: "e.g. @mkbhd, MrBeast", helpText: "Enter the channel name or handle." }
      ]
    },
    {
      id: "thumbnail-text",
      name: "AI Thumbnail Text Generator",
      description: "Generate emotional and high-CTR thumbnail text ideas for your videos.",
      icon: "Image",
      category: "YouTube",
      inputs: [
        { id: "topic", label: "Video Topic", type: "text", placeholder: "e.g. How to edit faster in Premiere Pro", helpText: "What is the core topic of the video?" }
      ]
    },
    {
      id: "repurpose",
      name: "Content Repurpose Tool",
      description: "Convert a YouTube script or blog post into Instagram captions, Twitter threads, LinkedIn posts, and more.",
      icon: "RefreshCw",
      category: "Social Media",
      inputs: [
        { id: "content", label: "Original Content (Script / Blog)", type: "textarea", placeholder: "Paste your script or article here...", helpText: "Provide the base content to repurpose." }
      ]
    },
    {
      id: "niche-finder",
      name: "Niche Finder Tool",
      description: "Discover the best content niches with earning potential based on your interests and skills.",
      icon: "Compass",
      category: "Strategy",
      inputs: [
        { id: "interests", label: "Your Interests & Skills", type: "text", placeholder: "e.g. coding, mechanical keyboards, videography", helpText: "List a few things you are good at or enjoy." }
      ]
    },
    {
      id: "brand-name",
      name: "AI Brand Name Generator",
      description: "Generate unique brand names, domain suggestions, and matching slogans.",
      icon: "Tag",
      category: "Branding",
      inputs: [
        { id: "niche", label: "Content Niche", type: "text", placeholder: "e.g. Travel Vlog, Coding Tutorials", helpText: "What is your channel or blog about?" },
        { id: "style", label: "Brand Style", type: "select", options: ["Modern & Minimalist", "Bold & Energetic", "Professional & Corporate", "Fun & Quirky"], defaultValue: "Modern & Minimalist" }
      ]
    },
    {
      id: "hook-generator",
      name: "Hook Generator",
      description: "Generate powerful hooks/opening lines categorized by Curiosity, Shock, Question, and Story.",
      icon: "Target",
      category: "Social Media",
      inputs: [
        { id: "topic", label: "Video or Post Topic", type: "text", placeholder: "e.g. Why diets don't work", helpText: "What are you trying to hook the viewer into?" }
      ]
    }
  ];

  const [selectedTool, setSelectedTool] = useState<ToolType | null>(null);
  const [activeGuideTab, setActiveGuideTab] = useState<"what" | "how" | "examples" | "faqs">("what");
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generationResult, setGenerationResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Local history from localStorage
  const [pastGenerations, setPastGenerations] = useState<any[]>([]);

  const currentTool = TOOLS.find((t) => t.id === selectedTool) || TOOLS[0];

  // Initialize form default fields whenever selectedTool switches
  useEffect(() => {
    const defaults: Record<string, any> = {};
    currentTool.inputs.forEach((inp) => {
      defaults[inp.id] = inp.defaultValue !== undefined ? inp.defaultValue : "";
    });
    setFormValues(defaults);
    setGenerationResult(null);
    setErrorMessage(null);
  }, [selectedTool]);

  // Load user generation history dynamically from localStorage
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    try {
      const stored = localStorage.getItem("localGenerations");
      if (stored) {
        setPastGenerations(JSON.parse(stored).slice(0, 5));
      }
    } catch (err) {
      console.error("Local history recall error:", err);
    }
  };

  const handleInputChange = (fieldId: string, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleImportText = (text: string) => {
    let primaryField = "topic";
    if (selectedTool === "caption") {
      primaryField = "description";
    }
    setFormValues((prev) => ({
      ...prev,
      [primaryField]: text
    }));
  };

  const handleCopy = async () => {
    if (!generationResult) return;
    try {
      await navigator.clipboard.writeText(generationResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failure copying clipboard content:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setGenerationResult(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toolType: selectedTool,
          inputs: formValues
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "The creator server was unable to fulfill this request. Ensure standard endpoints exist.");
      }

      setGenerationResult(data.result);

      // Save to localStorage
      const newGen = {
        id: Date.now().toString(),
        toolType: selectedTool,
        inputs: formValues,
        result: data.result,
        createdAt: new Date().toISOString()
      };
      
      const stored = localStorage.getItem("localGenerations");
      const currentHistory = stored ? JSON.parse(stored) : [];
      const updatedHistory = [newGen, ...currentHistory];
      localStorage.setItem("localGenerations", JSON.stringify(updatedHistory));
      
      loadHistory(); // reload logs dynamically
    } catch (err: any) {
      console.error("Tool execution error", err);
      setErrorMessage(err.message || "Failed to communicate with the text synthesis core.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteHistoryItem = (docId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const stored = localStorage.getItem("localGenerations");
      if (stored) {
        const currentHistory = JSON.parse(stored);
        const updatedHistory = currentHistory.filter((item: any) => item.id !== docId);
        localStorage.setItem("localGenerations", JSON.stringify(updatedHistory));
        loadHistory();
      }
    } catch (err) {
      console.error("Delete history item error:", err);
    }
  };

  // Maps custom color/icon styles
  const getToolIcon = (id: string, size = 18) => {
    switch (id) {
      case "youtube-title":
        return <YoutubeIcon size={size} />;
      case "caption":
        return <CaptionIcon size={size} />;
      case "hashtag":
        return <HashtagIcon size={size} />;
      case "script":
        return <ScriptIcon size={size} />;
      case "blog-idea":
        return <SparklesIcon size={size} />;
      case "content-calendar":
        return <Calendar size={size} />;
      case "viral-score":
        return <Sparkles size={size} />;
      case "competitor-analysis":
        return <Search size={size} />;
      case "thumbnail-text":
        return <Image size={size} />;
      case "repurpose":
        return <RefreshCw size={size} />;
      case "niche-finder":
        return <Compass size={size} />;
      case "brand-name":
        return <Tag size={size} />;
      case "hook-generator":
        return <Target size={size} />;
      default:
        return <SparklesIcon size={size} />;
    }
  };

  return (
    <div className="relative min-h-screen pb-20">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-cyan-50/50 dark:from-indigo-950/20 dark:via-transparent dark:to-cyan-950/20 -z-10" />
      
      <div id="tools-panel-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in transition-colors duration-350">
        
        {/* Upper header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-gray-200 dark:border-zinc-800 relative z-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>20+ Free AI Tools</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            AI Tool <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Directory</span>
          </h1>
          <p className="text-sm text-gray-700 dark:text-zinc-400 max-w-xl leading-relaxed">
            Boost your productivity with our suite of free AI-powered tools. Generate YouTube titles, scripts, hashtags, and entire content calendars in seconds.
          </p>
        </div>

        {/* Ad In-line Leaderboard */}
        <div className="w-full md:max-w-md">
          <AdPlaceholder type="leaderboard" className="min-h-[70px] py-1 shadow-xs" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedTool ? (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TOOLS.map((t) => (
              <motion.div
                layoutId={`tool-card-${t.id}`}
                key={t.id}
                onClick={() => setSelectedTool(t.id)}
                className="cursor-pointer bg-white/90 dark:bg-zinc-900/40 backdrop-blur-md p-6 rounded-3xl border border-gray-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group overflow-hidden relative"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <motion.div layoutId={`tool-icon-${t.id}`} className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
                      {getToolIcon(t.id, 24)}
                    </motion.div>
                    {t.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-400 border border-gray-200 dark:border-zinc-700">
                        {t.category}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <motion.h3 layoutId={`tool-title-${t.id}`} className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {t.name}
                    </motion.h3>
                    <motion.p layoutId={`tool-desc-${t.id}`} className="text-sm text-gray-700 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                      {t.description}
                    </motion.p>
                  </div>
                  
                  <div className="mt-5 pt-4 border-t border-gray-200 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    <span>Try Tool</span>
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tool-detail-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            <button
              onClick={() => setSelectedTool(null)}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-colors py-2 px-1 -ml-1"
            >
              <ChevronRight className="rotate-180" size={16} />
              Back to all tools
            </button>

            <motion.div
              layoutId={`tool-card-${selectedTool}`}
              className="bg-white dark:bg-zinc-950 p-6 md:p-8 rounded-3xl border border-gray-150 dark:border-zinc-800 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
                {/* Left Side: Tool Info & History Shelf */}
                <div className="lg:col-span-4 space-y-8">
          
                  <motion.div layoutId={`tool-icon-${selectedTool}`} className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 w-max">
                    {getToolIcon(selectedTool!, 32)}
                  </motion.div>
                  <div>
                    <motion.h3 layoutId={`tool-title-${selectedTool}`} className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {currentTool?.name}
                    </motion.h3>
                    <motion.p layoutId={`tool-desc-${selectedTool}`} className="text-sm text-gray-700 dark:text-zinc-400 leading-relaxed">
                      {currentTool?.description}
                    </motion.p>
                  </div>

          {/* Ad Slot Sidebar */}
          <AdPlaceholder type="rectangle" className="shadow-xs" />

          {/* Persistent History Shelf */}
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-zinc-900">
              <h4 className="text-[11px] font-black uppercase text-gray-700 dark:text-zinc-500 tracking-wider flex items-center gap-1.5">
                <Bookmark size={13} className="text-indigo-500" />
                Durable Creative History
              </h4>
              <span className="text-3xs font-mono bg-gray-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-gray-700">
                Cloud Sync
              </span>
            </div>

            <div className="space-y-3">
              {pastGenerations.length > 0 ? (
                pastGenerations.map((gen) => (
                  <div
                    key={gen.id}
                    onClick={() => {
                      setGenerationResult(gen.result);
                      setFormValues(gen.inputs);
                      setSelectedTool(gen.toolType);
                    }}
                    className="group p-3 rounded-xl border border-gray-100 dark:border-zinc-90 w-full text-left bg-gray-50/40 hover:bg-gray-50 dark:bg-zinc-905/20 dark:hover:bg-zinc-900 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div className="max-w-[80%]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-indigo-500">{getToolIcon(gen.toolType, 12)}</span>
                        <span className="text-3xs font-bold text-gray-800 dark:text-zinc-300 capitalize truncate">
                          {gen.toolType.replace("-", " ")}
                        </span>
                      </div>
                      <p className="text-4xs text-gray-700 dark:text-zinc-500 font-mono flex items-center gap-1">
                        <Calendar size={9} />
                        {new Date(gen.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleDeleteHistoryItem(gen.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded text-gray-700 hover:text-red-500 dark:hover:bg-zinc-800 transition-all focus:outline-none"
                      title="Delete record logs"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-2xs text-gray-700 dark:text-zinc-500 py-4 text-center">
                  No generated histories logs found. Make edits and click generate!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Input Form & Response Previewer Display */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Tool Guidelines & Knowledge Hub */}
          {(() => {
            const guide = TOOL_GUIDES[currentTool.id];
            if (!guide) return null;
            return (
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900/60 shadow-xs space-y-5 animate-fade-in">
                {/* Hub Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-zinc-900 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-550 text-white">
                      <BookOpen size={14} />
                    </span>
                    <h4 className="text-2xs font-extrabold uppercase tracking-widest text-gray-700 dark:text-zinc-450">
                      Tool Documentation & Playbook
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-500 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/20 px-2 py-0.5 rounded-md">
                    Recommended Study
                  </span>
                </div>

                {/* Tabs selection buttons */}
                <div className="flex flex-wrap gap-1.5 border-b border-gray-100 dark:border-zinc-900/30 pb-2 text-3xs sm:text-2xs">
                  {[
                    { id: "what", label: "What is this tool?", icon: HelpCircle },
                    { id: "how", label: "How to use it?", icon: Info },
                    { id: "examples", label: "Practical Examples", icon: Sparkles },
                    { id: "faqs", label: "Frequently Asked FAQs", icon: Bookmark }
                  ].map((tab) => {
                    const isActive = activeGuideTab === tab.id;
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveGuideTab(tab.id as any)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all focus:outline-none ${
                          isActive
                            ? "bg-indigo-50 dark:bg-indigo-950/45 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/20"
                            : "text-gray-700 dark:text-zinc-450 hover:bg-gray-50 dark:hover:bg-zinc-900/50"
                        }`}
                      >
                        <TabIcon size={12} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Content Panel rendering depending on tab */}
                <div className="text-xs leading-relaxed text-gray-700 dark:text-zinc-350">
                  {activeGuideTab === "what" && (
                    <div className="space-y-3">
                      <p>{guide.whatIsIt}</p>
                    </div>
                  )}

                  {activeGuideTab === "how" && (
                    <div className="space-y-3">
                      <p className="font-bold text-gray-900 dark:text-white">Step-by-Step Walkthrough:</p>
                      <ul className="list-decimal pl-5 space-y-1.5 text-xs text-gray-700 dark:text-zinc-350">
                        {guide.howToUse.map((step, idx) => (
                          <li key={idx} className="marker:text-indigo-500 marker:font-black">
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeGuideTab === "examples" && (
                    <div className="space-y-4">
                      {guide.examples.map((ex, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-gray-50/60 dark:bg-zinc-900/30 border border-gray-100 dark:border-zinc-850/70 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span className="font-mono text-[10px] uppercase font-bold text-gray-700 dark:text-zinc-500">Sample Parameters Entry</span>
                          </div>
                          <p className="font-mono text-3xs text-gray-700 dark:text-zinc-400 italic bg-white dark:bg-zinc-950/50 p-2.5 rounded-lg border border-gray-100/30 dark:border-zinc-900/40">
                            {ex.input}
                          </p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            <span className="font-mono text-[10px] uppercase font-bold text-gray-700 dark:text-zinc-500">Output Result Preview</span>
                          </div>
                          <p className="font-mono text-3xs text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-950/50 p-2.5 rounded-lg border border-gray-100/30 dark:border-zinc-900/40 whitespace-pre-wrap">
                            {ex.output}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeGuideTab === "faqs" && (
                    <div className="space-y-4 divide-y divide-gray-100 dark:divide-zinc-900/60">
                      {guide.faqs.map((faq, idx) => (
                        <div key={idx} className={`${idx > 0 ? "pt-4" : ""} space-y-1`}>
                          <h5 className="font-black text-gray-900 dark:text-white flex items-start gap-1.5">
                            <span className="text-indigo-500 font-mono text-4xs bg-indigo-50 dark:bg-indigo-950/50 px-1 py-0.5 rounded">Q</span>
                            {faq.question}
                          </h5>
                          <p className="text-gray-700 dark:text-zinc-400 text-xs pl-5 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Input Parameter Form Card */}
            <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-5">
                {currentTool.inputs.map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label className="block text-2xs font-extrabold text-gray-700 dark:text-zinc-350 tracking-wide uppercase">
                      {field.label}
                    </label>

                    {field.type === "text" && (
                      <input
                        type="text"
                        required
                        placeholder={field.placeholder}
                        value={formValues[field.id] || ""}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/40 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                      />
                    )}

                    {field.type === "textarea" && (
                      <textarea
                        required
                        rows={4}
                        placeholder={field.placeholder}
                        value={formValues[field.id] || ""}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/40 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                      />
                    )}

                    {field.type === "select" && (
                      <select
                        value={formValues[field.id] || ""}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/40 text-gray-900 dark:text-white focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all cursor-pointer"
                      >
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt} className="dark:bg-zinc-950 font-sans text-xs">
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}

                    {field.type === "checkbox" && (
                      <div className="flex items-center gap-3 py-1">
                        <input
                          type="checkbox"
                          id={`chk-${field.id}`}
                          checked={!!formValues[field.id]}
                          onChange={(e) => handleInputChange(field.id, e.target.checked)}
                          className="w-4 h-4 rounded text-indigo-600 border-gray-300 dark:border-zinc-800 focus:ring-indigo-500 focus:outline-none cursor-pointer"
                        />
                        <label htmlFor={`chk-${field.id}`} className="text-2xs text-gray-700 dark:text-zinc-400 cursor-pointer">
                          Activate Option Profile
                        </label>
                      </div>
                    )}

                    {field.helpText && (
                      <p className="text-[10px] text-gray-700 dark:text-zinc-550 italic font-medium flex gap-1 items-center">
                        <Info size={10} />
                        {field.helpText}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/10 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-2 mt-4"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Deconstructing prompt parameters...
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} />
                      Generate Calibrated Copy
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Generated Output Preview Panel */}
            <div className="flex flex-col justify-between self-stretch bg-gray-50/50 dark:bg-zinc-950/40 rounded-2xl border border-gray-150 dark:border-zinc-900 overflow-hidden min-h-[460px]">
              
              {/* Box Header */}
              <div className="bg-white dark:bg-zinc-950 px-5 py-3 border-b border-gray-100 dark:border-zinc-900 flex items-center justify-between">
                <span className="text-3xs font-extrabold text-gray-700 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <RefreshCw size={11} className={isLoading ? "animate-spin text-indigo-500" : "text-gray-700"} />
                  Execution Result
                </span>

                {generationResult && (
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-gray-100 hover:bg-gray-50 dark:border-zinc-850 dark:hover:bg-zinc-900 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all flex items-center gap-1.5 focus:outline-none"
                    title="Copy output response"
                  >
                    {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    <span className="text-4xs font-bold font-mono uppercase tracking-widest">{copied ? "Copied" : "Copy"}</span>
                  </button>
                )}
              </div>

              {/* Box Body Text Area */}
              <div className="flex-1 p-6 overflow-y-auto leading-relaxed text-xs">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <div className="relative flex items-center justify-center w-12 h-12 mb-4">
                      <div className="absolute inset-0 border-4 border-indigo-200 dark:border-indigo-900/30 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-indigo-600 dark:border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <h5 className="text-xs font-bold text-gray-700 dark:text-zinc-300">Generating output...</h5>
                    <p className="text-4xs text-gray-700 dark:text-zinc-500 max-w-xs mt-1 animate-pulse">
                      Fetching your data and processing AI models
                    </p>
                  </div>
                ) : errorMessage ? (
                  <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <AlertCircle size={24} className="text-rose-500 mb-2" />
                    <h5 className="text-xs font-bold text-rose-600 dark:text-rose-450">Generation Failure</h5>
                    <p className="text-4xs text-gray-700 dark:text-zinc-500 max-w-xs mt-1">
                      {errorMessage}
                    </p>
                  </div>
                ) : generationResult ? (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 text-gray-800 dark:text-zinc-200 space-y-4 font-sans leading-relaxed whitespace-pre-wrap select-text selection:bg-indigo-500/20 mb-6">
                      {/* Raw render formatting lists and bold matches cleanly */}
                      {generationResult}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? "Copied to Clipboard!" : "Copy to Clipboard"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center opacity-65 p-4 pointer-events-none select-none">
                    <MousePointer size={28} className="text-gray-700 dark:text-zinc-700 mb-2.5 animate-bounce" />
                    <h5 className="text-2xs font-bold text-gray-700 dark:text-zinc-350">Previewer Ready</h5>
                    <p className="text-3xs text-gray-700 dark:text-zinc-550 mt-1 max-w-2xs leading-relaxed">
                      Fill out the core parameters model forms on the left, then click Generate to output calibrated Copy patterns.
                    </p>
                  </div>
                )}
              </div>

              {/* Mini Ad Box bottom sticker */}
              <div className="bg-white/40 dark:bg-zinc-950/20 px-5 py-2 border-t border-gray-100 dark:border-zinc-900/60 text-center">
                <span className="text-[10px] font-medium text-gray-700 dark:text-zinc-650">
                  AdSense automated matching slot CT-ADS-MINI active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
      </AnimatePresence>

      {/* Dimmed background overlay */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/5 dark:bg-black/40 z-0 pointer-events-none backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}
