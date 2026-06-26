import { Sparkles, Youtube, Eye, Hash, FileText, ArrowRight, MessageSquare, Star, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import AdPlaceholder from "../components/AdPlaceholder";
import { BLOG_POSTS } from "../data/blog";
import { YoutubeIcon, CaptionIcon, HashtagIcon, ScriptIcon } from "../components/ToolIcons";
import NewsletterForm from "../components/NewsletterForm";

interface HomeProps {
  onNavigate: (page: string) => void;
  onNavigateToBlogPost: (slug: string) => void;
}

export default function Home({ onNavigate, onNavigateToBlogPost }: HomeProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useEffect(() => {
    const storedRating = localStorage.getItem("userRating");
    if (storedRating) {
      setUserRating(parseInt(storedRating, 10));
      setRatingSubmitted(true);
    }
  }, []);

  const handleRatingSubmit = async (rating: number) => {
    if (ratingSubmitted) return; // Only one rating per session/user

    setUserRating(rating);
    setRatingSubmitted(true);
    
    try {
      localStorage.setItem("userRating", rating.toString());
    } catch (error) {
      console.error("Error saving rating:", error);
    }
  };

  // Grab the 3 most recent posts for homepage featured section
  const latestPosts = BLOG_POSTS.slice(0, 3);

  const featuredTools = [
    {
      id: "youtube-title",
      title: "YouTube Title Generator",
      description: "Harness cognitive emotional loops to craft high-CTR titles that optimize search metrics.",
      icon: YoutubeIcon,
      color: "text-red-500 bg-red-50 dark:bg-red-950/25",
      badge: "High Click-Through"
    },
    {
      id: "caption",
      title: "Caption/Copy Composer",
      description: "Structure scroll-stopping hooks and bullet arrangements to keep feed engagement high.",
      icon: CaptionIcon,
      color: "text-violet-500 bg-violet-50 dark:bg-violet-950/25",
      badge: "Viral Hooks"
    },
    {
      id: "hashtag",
      title: "Hashtag Strategist",
      description: "Balance low, mid, and tier-specific hashtag densities to index content searchably.",
      icon: HashtagIcon,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/25",
      badge: "SEO Targeting"
    },
    {
      id: "script",
      title: "AI Video Scriptwriter",
      description: "Compose multi-act vertical script models complete with directional staging hints.",
      icon: ScriptIcon,
      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/25",
      badge: "Pacing Formula"
    }
  ];

  const testimonials = [
    {
      quote: "CreatorsToolkit has single-handedly replaced three disconnected writing apps. The script structuring fits vertical pacing parameters perfectly.",
      author: "Sarah Jenkins",
      handle: "@sarahcreates",
      subscribers: "420K Subscribers",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The title analyzer combined with the hook templates tripled my Instagram account's organic delivery rates in under twenty days of testing.",
      author: "Alex Rivera",
      handle: "@riveramedia",
      subscribers: "170K Followers",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Writing a blog used to take me six hours. Now I generate high-level structured keyword briefs and fill them with authentic case studies.",
      author: "Dave K.",
      handle: "@daveblogs",
      subscribers: "50K Multi-List Subscribers",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div id="home-page-container" className="animate-fade-in transition-colors duration-300">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 bg-white dark:bg-zinc-950">
        {/* Dynamic Eye-catching High-Contrast Glow Orbs in Indigo, Purple, and Cyan */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative select-none z-10">
          
          {/* Extremely premium, interactive animated complex logo utilizing Indigo, Purple, and Cyan */}
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ scale: 0.3, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
              className="relative w-32 h-32 flex items-center justify-center animate-bounce-slow"
            >
              {/* Outer Cyan Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-400/20"
              />
              
              {/* Middle Purple Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-purple-500/30 dark:border-purple-400/30 border-t-transparent border-b-transparent"
              />

              {/* Inner Glowing Orb containing central Sparkle brand symbol */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-6 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]"
              >
                <Sparkles size={40} className="text-white animate-pulse" />
              </motion.div>
              
              {/* Mini orbiting energy beads */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -ml-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                className="absolute inset-2 pointer-events-none"
              >
                <div className="absolute bottom-0 right-1/2 -mr-1 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50 mb-8 tracking-wide shadow-sm">
              <Sparkles size={14} className="text-indigo-500 dark:text-indigo-400" />
              Empowering the Global Creative Economy
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Massively Bold, Eye-catching Creative Title requested by User */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter leading-none mb-8 text-gray-900 dark:text-white">
              Creators<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">Toolkit</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Slogan requested by User */}
            <h2 className="text-base sm:text-lg text-gray-700 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              A helpful AI toolkit for content creators. Save time on first drafts with simple, easy-to-use tools for titles, scripts, and captions.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <button
                onClick={() => onNavigate("tools")}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-sm text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-gray-900/20 dark:shadow-white/10"
              >
                Access Free Tools Hub
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onNavigate("blog")}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-sm text-gray-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
              >
                Read Playbooks
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ad Placement 1 */}
      <section className="py-4 bg-gray-50/30 dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <AdPlaceholder type="leaderboard" />
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-24 bg-gray-50/50 dark:bg-zinc-950/50 border-y border-gray-200/50 dark:border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-gray-900 dark:text-white">
              Helpful Tools for Creators
            </h2>
            <p className="text-base text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
              Our tools are built to help you create better content faster. Type in your ideas and get helpful suggestions right away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => onNavigate("tools")}
                  className="group relative rounded-3xl border border-gray-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:-translate-y-1 cursor-pointer transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className={`p-4 rounded-2xl ${tool.color} shadow-sm`}>
                      <IconComp size={24} />
                    </span>
                    <span className="text-[10px] font-bold font-mono tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full uppercase border border-indigo-100 dark:border-indigo-800/50">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-zinc-400 leading-relaxed mb-6 relative z-10">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all relative z-10">
                    Configure Model <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => onNavigate("tools")}
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/20 px-6 py-3 rounded-full transition-colors"
            >
              Explore all five generation models <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Post Previews */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-gray-900 dark:text-white">
                Helpful Creator Guides
              </h2>
              <p className="text-base text-gray-700 dark:text-zinc-400 mt-2">
                Simple, actionable tips and ideas for writers and video creators.
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => onNavigate("blog")}
              className="mt-6 sm:mt-0 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-2 group bg-indigo-50 dark:bg-indigo-900/20 px-5 py-2.5 rounded-full transition-all"
            >
              Browse complete index <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onNavigateToBlogPost(post.slug)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 cursor-pointer transition-all duration-300"
              >
                {/* Post Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-zinc-400 mb-3 font-mono font-medium">
                      <span>{post.publishDate}</span>
                      <span className="text-gray-300 dark:text-zinc-700">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author metadata */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-zinc-800/60 mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-sm"
                      />
                      <div>
                        <h5 className="text-sm font-bold text-gray-900 dark:text-white">
                          {post.author.name}
                        </h5>
                        <p className="text-xs text-gray-700 dark:text-zinc-400">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center text-gray-700 dark:text-zinc-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/50 dark:bg-zinc-950/50 border-y border-gray-200/50 dark:border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-gray-900 dark:text-white">
              Loved by Creators
            </h2>
            <p className="text-base text-gray-700 dark:text-zinc-400 mt-4 max-w-xl mx-auto">
              See how other creators are using our tools to save time and get past writer's block.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl border border-gray-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm font-medium text-gray-700 dark:text-zinc-300 italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author card */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {t.author}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
                      <span>{t.handle}</span>
                      <span className="text-gray-300 dark:text-zinc-700">•</span>
                      <span>{t.subscribers}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Star Rating Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black font-sans tracking-tight text-gray-900 dark:text-white mb-3">
              Rate Your Experience
            </h2>
            <p className="text-base text-gray-700 dark:text-zinc-400 mb-10">
              Let us know how much value you've gotten from our creator tools so far.
            </p>
            
            <div className="flex justify-center items-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => !ratingSubmitted && setHoverRating(star)}
                  onMouseLeave={() => !ratingSubmitted && setHoverRating(0)}
                  onClick={() => handleRatingSubmit(star)}
                  disabled={ratingSubmitted}
                  className={`transform transition-all ${ratingSubmitted ? 'cursor-default opacity-80' : 'hover:scale-110 hover:-translate-y-1'} focus:outline-none`}
                >
                  <Star
                    size={48}
                    className={`transition-colors duration-200 ${
                      (hoverRating || userRating) >= star
                        ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                        : "text-gray-200 dark:text-zinc-800"
                    }`}
                  />
                </button>
              ))}
            </div>

            {ratingSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-sm font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50"
              >
                <Sparkles size={16} />
                Thank you for your feedback! Every rating helps us improve.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-zinc-950/50 border-y border-gray-200/50 dark:border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </section>

      {/* Call to Action segment */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-950 to-gray-900 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black font-sans tracking-tight mb-6"
          >
            Start Creating Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Try our free tools right now. No sign up is needed. Just type your ideas and get started.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate("tools")}
              className="w-full sm:w-auto py-4 px-10 rounded-2xl font-bold text-base text-indigo-900 bg-white hover:bg-indigo-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Enter the Creation Suite
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Ad Placement */}
      <section className="py-8 bg-gray-50/25 dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <AdPlaceholder type="rectangle" />
        </div>
      </section>
    </div>
  );
}
