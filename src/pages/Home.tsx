import { Sparkles, Youtube, Eye, Hash, FileText, ArrowRight, MessageSquare, Star, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import AdPlaceholder from "../components/AdPlaceholder";
import { BLOG_POSTS } from "../data/blog";

interface HomeProps {
  onNavigate: (page: string) => void;
  onNavigateToBlogPost: (slug: string) => void;
  onOpenAuth: () => void;
  user: any;
}

export default function Home({ onNavigate, onNavigateToBlogPost, onOpenAuth, user }: HomeProps) {
  // Grab the 3 most recent posts for homepage featured section
  const latestPosts = BLOG_POSTS.slice(0, 3);

  const featuredTools = [
    {
      id: "youtube-title",
      title: "YouTube Title Generator",
      description: "Harness cognitive emotional loops to craft high-CTR titles that optimize search metrics.",
      icon: Youtube,
      color: "text-red-500 bg-red-50 dark:bg-red-950/25",
      badge: "High Click-Through"
    },
    {
      id: "caption",
      title: "Caption/Copy Composer",
      description: "Structure scroll-stopping hooks and bullet arrangements to keep feed engagement high.",
      icon: MessageSquare,
      color: "text-violet-500 bg-violet-50 dark:bg-violet-950/25",
      badge: "Viral Hooks"
    },
    {
      id: "hashtag",
      title: "Hashtag Strategist",
      description: "Balance low, mid, and tier-specific hashtag densities to index content searchably.",
      icon: Hash,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/25",
      badge: "SEO Targeting"
    },
    {
      id: "script",
      title: "AI Video Scriptwriter",
      description: "Compose multi-act vertical script models complete with directional staging hints.",
      icon: FileText,
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
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-linear-to-b from-gray-50/70 via-white to-gray-50/30 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900/40">
        {/* Dynamic Eye-catching High-Contrast Glow Orbs in Indigo, Purple, and Cyan */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative select-none">
          
          {/* Extremely premium, interactive animated complex logo utilizing Indigo, Purple, and Cyan */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0.3, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
              className="relative w-28 h-28 flex items-center justify-center animate-bounce-slow"
            >
              {/* Outer Cyan Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/35 dark:border-cyan-400/30"
              />
              
              {/* Middle Purple Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-2.5 rounded-full border border-purple-500/40 dark:border-purple-400/45 border-t-transparent border-b-transparent"
              />

              {/* Inner Glowing Orb containing central Sparkle brand symbol */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute inset-5 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-500 dark:via-purple-500 dark:to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/40"
              >
                <Sparkles size={32} className="text-white animate-pulse" />
              </motion.div>
              
              {/* Mini orbiting energy beads */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -ml-1  w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80"></div>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute inset-2 pointer-events-none"
              >
                <div className="absolute bottom-0 right-1/2 -mr-1  w-2 h-2 rounded-full bg-purple-400 shadow-sm shadow-purple-400/80"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-black bg-gradient-to-r from-indigo-500/10 via-purple-550/10 to-cyan-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/45 mb-6 tracking-widest uppercase shadow-xs">
            <Sparkles size={11} className="text-cyan-500 dark:text-cyan-400 animate-pulse" />
            Empowering the Global Creative Economy
          </div>

          {/* Massively Bold, Eye-catching Creative Title requested by User */}
          <h1 className="text-5xl sm:text-8xl font-black font-sans tracking-tight leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-450 dark:via-purple-450 dark:to-cyan-400 filter drop-shadow-[0_2px_15px_rgba(99,102,241,0.15)] select-all uppercase">
              CREATORSTOOLKIT
            </span>
          </h1>

          {/* Slogan requested by User */}
          <p className="text-sm sm:text-base text-purple-600 dark:text-purple-400 max-w-2xl mx-auto leading-relaxed mb-10 font-bold select-all tracking-wide">
            The Ultimate Generative Accelerator for Elite Digital Storytelling. Bypass the flat draft curve using models configured natively in Indigo, Purple, and Cyan energy for high-performance Retention, Copywriting, and Audience Analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onNavigate("tools")}
              className="w-full sm:w-auto py-4 px-8 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-700 hover:via-purple-700 hover:to-cyan-700 hover:shadow-xl hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              Access Free Tools Hub
              <ArrowRight size={14} className="animate-pulse" />
            </button>
            <button
              onClick={() => onNavigate("blog")}
              className="w-full sm:w-auto py-4 px-8 rounded-xl font-bold text-xs text-gray-700 dark:text-zinc-350 bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-gray-200/80 dark:border-zinc-800/80 hover:border-indigo-300/40 dark:hover:border-zinc-700 transition-all shadow-xs flex items-center justify-center gap-1.5 uppercase tracking-wider"
            >
              Read Playbooks
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* Ad Placement 1 */}
      <section className="py-4 bg-gray-50/30 dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <AdPlaceholder type="leaderboard" />
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-gray-950 dark:text-white">
              Suite of Specialty Creator Models
            </h2>
            <p className="text-xs text-gray-500 dark:text-zinc-450 max-w-lg mx-auto mt-2">
              Every interface is calibrated natively for creators. Enter core ideas and unlock professional formulations immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onNavigate("tools")}
                  className="group relative rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 p-6 hover:shadow-xl dark:hover:shadow-indigo-600/2 hover:border-indigo-500/40 dark:hover:border-indigo-500/20 hover:bg-gray-50/50 dark:hover:bg-zinc-900/60 cursor-pointer transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`p-3 rounded-xl ${tool.color}`}>
                      <IconComp size={20} />
                    </span>
                    <span className="text-[10px] font-bold font-mono tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full uppercase">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-455 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-2xs text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-1 text-2xs font-extrabold text-indigo-500 group-hover:gap-2 transition-all">
                    Configure Model <ArrowRight size={11} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate("tools")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Explore all five generation models <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blog Post Previews */}
      <section className="py-16 bg-gray-50/30 dark:bg-zinc-900/10 border-y border-gray-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-gray-950 dark:text-white">
                Playbooks & Creative Strategy Guides
              </h2>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
                Practical, actionable growth tactics for writers, hosts, and social developers.
              </p>
            </div>
            <button
              onClick={() => onNavigate("blog")}
              className="mt-4 sm:mt-0 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Browse complete index <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigateToBlogPost(post.slug)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 hover:shadow-xl cursor-pointer transition-all duration-305"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-3xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-3xs text-gray-400 dark:text-zinc-500 mb-2 font-mono">
                      <span>{post.publishDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-2 leading-snug group-hover:text-indigo-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-2xs text-gray-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author metadata */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-900/50">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover border border-gray-100 dark:border-zinc-800"
                    />
                    <div>
                      <h5 className="text-[11px] font-bold text-gray-800 dark:text-zinc-300">
                        {post.author.name}
                      </h5>
                      <p className="text-[10px] text-gray-400 dark:text-zinc-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-gray-900 dark:text-white">
              Endorsed by Fast-Growing Creators
            </h2>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 max-w-md mx-auto">
              Read how creators are bypassing creative blocks and optimizing tactical search algorithms safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-900/20 shadow-xs"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>

                <p className="text-2xs font-medium text-gray-600 dark:text-zinc-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Author card */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-gray-200 dark:border-zinc-800"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                      {t.author}
                    </h4>
                    <div className="flex items-center gap-1.5 text-3xs text-indigo-500 font-mono">
                      <span>{t.handle}</span>
                      <span>•</span>
                      <span>{t.subscribers}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action segment */}
      <section className="py-14 bg-linear-to-r from-indigo-900 to-indigo-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-550/15 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black font-sans tracking-tight mb-4">
            Unleash Your Creator Voice Today
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Create an account to save your generated scripts, log active hashtags strategy collections, and bypass manual copywriting limits for good.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <button
                onClick={() => onNavigate("tools")}
                className="w-full sm:w-auto py-3 px-8 rounded-xl font-bold text-sm text-indigo-900 bg-white hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
              >
                Enter the Creation Suite
                <ArrowRight size={14} />
              </button>
            ) : (
              <>
                <button
                  onClick={onOpenAuth}
                  className="w-full sm:w-auto py-3 px-8 rounded-xl font-bold text-sm text-indigo-900 bg-white hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
                >
                  Join Toolkit Community
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onNavigate("tools")}
                  className="w-full sm:w-auto py-3 px-8 rounded-xl font-bold text-xs text-white border border-indigo-500/40 hover:bg-white/5 transition-all text-center"
                >
                  Try Out Offline Free
                </button>
              </>
            )}
          </div>
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
