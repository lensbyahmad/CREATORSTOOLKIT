import React, { useState, useMemo } from "react";
import { Search, ArrowLeft, Calendar, Clock, User, Bookmark, Heart, Grid, List, ChevronRight, Share2, Twitter, Linkedin, Link } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blog";
import AdPlaceholder from "../components/AdPlaceholder";

interface BlogProps {
  onNavigateToBlogPost: (slug: string) => void;
  selectedPostSlug: string | null;
  onBackToBlogList: () => void;
}

export default function Blog({ onNavigateToBlogPost, selectedPostSlug, onBackToBlogList }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  // Dynamic Filtering based on search query AND category clicked
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Find the currently selected post if viewing details
  const activePost = useMemo(() => {
    if (!selectedPostSlug) return null;
    return BLOG_POSTS.find((p) => p.slug === selectedPostSlug) || null;
  }, [selectedPostSlug]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (slug: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Prompt simple visual copy link alert
      navigator.clipboard.writeText(window.location.href);
      alert("Post link copied to clipboard buffer!");
    }
  };

  const shareOnTwitter = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this post: ${title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  // 1. ARTICLE DETAILS SUBPAGE VIEW
  if (activePost) {
    // Generate related posts filtering by category
    const relatedPosts = BLOG_POSTS.filter((p) => p.category === activePost.category && p.id !== activePost.id).slice(0, 2);

    return (
      <div id="blog-details-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in transition-colors duration-300">
        
        {/* Navigation Bar Back Button */}
        <button
          onClick={onBackToBlogList}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 mb-8 px-3 py-1.5 rounded-lg border border-gray-150 dark:border-zinc-850 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all focus:outline-none"
        >
          <ArrowLeft size={14} />
          Back to Playbooks Index
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Block */}
          <article className="lg:col-span-8 space-y-6">
            
            {/* SEO Tagline & Reading info */}
            <div className="flex flex-wrap items-center gap-3 text-3xs font-mono font-bold uppercase tracking-wider text-gray-700">
              <span className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-md">
                {activePost.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={11} />
                {activePost.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {activePost.readTime}
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-gray-900 dark:text-white leading-tight">
              {activePost.title}
            </h1>

            <p className="text-sm text-gray-700 dark:text-zinc-400 italic font-medium leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 bg-gray-50/50 dark:bg-zinc-900/10 rounded-r-xl">
              "{activePost.excerpt}"
            </p>

            {/* Author Profile details */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-150 dark:border-zinc-900/60">
              <div className="flex items-center gap-3">
                <img
                  src={activePost.author.avatar}
                  alt={activePost.author.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-zinc-800"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">{activePost.author.name}</h4>
                  <p className="text-[10px] text-gray-700 dark:text-zinc-500">{activePost.author.role}</p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => toggleLike(activePost.id, e)}
                  className={`p-2 rounded-xl border focus:outline-none transition-all ${
                    liked[activePost.id]
                      ? "bg-rose-50 border-rose-100 text-rose-500 dark:bg-rose-950/20 dark:border-rose-900"
                      : "border-gray-200 hover:bg-gray-50 text-gray-700 dark:border-zinc-850 dark:hover:bg-zinc-900"
                  }`}
                  title="Like Article"
                >
                  <Heart size={14} fill={liked[activePost.id] ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={(e) => toggleBookmark(activePost.id, e)}
                  className={`p-2 rounded-xl border focus:outline-none transition-all ${
                    bookmarked[activePost.id]
                      ? "bg-indigo-50 border-indigo-150 text-indigo-500 dark:bg-indigo-950/20 dark:border-indigo-900"
                      : "border-gray-200 hover:bg-gray-50 text-gray-700 dark:border-zinc-850 dark:hover:bg-zinc-900"
                  }`}
                  title="Bookmark Article"
                >
                  <Bookmark size={14} fill={bookmarked[activePost.id] ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={(e) => handleShare(activePost.slug, activePost.title, e)}
                  className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 dark:border-zinc-850 dark:hover:bg-zinc-900 transition-all focus:outline-none"
                  title="Copy Link"
                >
                  <Link size={14} />
                </button>
                <button
                  onClick={(e) => shareOnTwitter(activePost.title, e)}
                  className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-[#1DA1F2] dark:border-zinc-850 dark:hover:bg-zinc-900 transition-all focus:outline-none"
                  title="Share on Twitter"
                >
                  <Twitter size={14} />
                </button>
                <button
                  onClick={(e) => shareOnLinkedIn(e)}
                  className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-[#0A66C2] dark:border-zinc-850 dark:hover:bg-zinc-900 transition-all focus:outline-none"
                  title="Share on LinkedIn"
                >
                  <Linkedin size={14} />
                </button>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="h-64 sm:h-[400px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 shadow-sm">
              <img
                src={activePost.imageUrl}
                alt={activePost.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content Markdown Renderer Area */}
            <div className="markdown-body text-gray-800 dark:text-zinc-200 text-xs sm:text-sm leading-relaxed tracking-wide space-y-6 select-text py-4 select-text selection:bg-indigo-500/20">
              {/* Parse string to beautiful styled HTML blocks to simulate markdown content precisely */}
              {activePost.content.split("\n\n").map((chunk, id) => {
                if (chunk.startsWith("###")) {
                  return (
                    <h3 key={id} className="text-sm sm:text-md font-black tracking-tight text-gray-950 dark:text-white pt-4 flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-3.5 bg-indigo-500 rounded-sm"></span>
                      {chunk.replace("###", "").trim()}
                    </h3>
                  );
                } else if (chunk.startsWith("-") || chunk.startsWith("*")) {
                  return (
                    <ul key={id} className="list-disc pl-5 space-y-2 text-gray-750 dark:text-zinc-350 bg-gray-50/40 dark:bg-zinc-900/10 p-4 rounded-xl border border-gray-100 dark:border-zinc-850/40">
                      {chunk.split("\n").map((li, lidx) => (
                        <li key={lidx} className="leading-relaxed">
                          {li.replace(/^[-*]\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  // Standard paragraph text. Support basic bold styling parameters
                  return (
                    <p key={id} className="leading-loose text-gray-700 dark:text-zinc-300">
                      {/* Bold replacement simulation simple regex helper */}
                      {chunk.split("**").map((sub, sidx) =>
                        sidx % 2 === 1 ? <strong key={sidx} className="font-extrabold text-indigo-600 dark:text-indigo-400">{sub}</strong> : sub
                      )}
                    </p>
                  );
                }
              })}
            </div>

            {/* Article Tags tags cloud */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-zinc-900">
              {activePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-3xs font-mono font-bold bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:hover:text-indigo-400 text-gray-700 dark:text-zinc-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Drawer Shelf */}
            {relatedPosts.length > 0 && (
              <div className="pt-10 border-t border-gray-150 dark:border-zinc-900/60 space-y-4">
                <h4 className="text-xs font-black uppercase text-gray-700 dark:text-zinc-550 tracking-wider">
                  Associated Playbooks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onNavigateToBlogPost(rel.slug)}
                      className="group flex gap-4 p-4 rounded-xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-950/60 hover:shadow-md cursor-pointer transition-all duration-300"
                    >
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <h5 className="text-2xs font-extrabold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-500 transition-colors line-clamp-2">
                          {rel.title}
                        </h5>
                        <p className="text-3xs text-gray-700 mt-1">{rel.publishDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </article>

          {/* Details Sidebar containing Scyscraper Ads and dynamic info boxes */}
          <aside className="lg:col-span-4 space-y-8">
            <AdPlaceholder type="sidebar" className="shadow-xs" />
            <AdPlaceholder type="rectangle" className="lg:hidden shadow-xs" />

            {/* Subscription Box */}
            <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 flex items-center justify-center mx-auto">
                <Bookmark size={20} />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-tight text-gray-950 dark:text-white uppercase tracking-wider">
                  Grow Your Newsletter
                </h3>
                <p className="text-4xs text-gray-700 dark:text-zinc-400 mt-1 max-w-2xs mx-auto leading-relaxed">
                  Join 14,000+ creators reading our weekly SEO frameworks and social design breakdown reviews.
                </p>
              </div>

              <form onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                if (!emailInput.value) return;
                try {
                  await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput.value })
                  });
                  alert('Subscribed successfully!');
                  emailInput.value = '';
                } catch (err) {
                  alert('Failed to subscribe.');
                }
              }}>
                <input
                  name="email"
                  type="email"
                  placeholder="Submit your email"
                  required
                  className="w-full text-4xs px-3.5 py-2.5 rounded-xl border border-gray-400 dark:border-zinc-850 dark:bg-zinc-900/35 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:outline-none focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-center mb-3"
                />
                <button type="submit" className="w-full py-2.5 rounded-xl font-bold text-3xs text-white bg-indigo-600 hover:bg-indigo-700 transition-all">
                  Subscribe Weekly
                </button>
              </form>
            </div>
          </aside>

        </div>
      </div>
    );
  }

  // 2. BLOG INDEX TABLE LIST VIEW
  return (
    <div id="blog-index-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in transition-colors duration-300">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-gray-150 dark:border-zinc-900/60 gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-950 dark:text-white">
            Creator's Playbook Channel
          </h1>
          <p className="text-xs text-gray-700 dark:text-zinc-400 mt-1">
            Browse highly strategic, actionable SEO analyses, social channel mechanics, and script frameworks.
          </p>
        </div>

        {/* Inline Search Bar */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <Search size={15} className="absolute left-3.5 top-3.5 text-gray-700 dark:text-zinc-550" />
          <input
            type="text"
            placeholder="Search keywords, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-gray-400 dark:border-zinc-800 dark:bg-zinc-900/40 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:outline-none focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Category selector chips */}
      <div className="flex flex-wrap items-center gap-1.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 focus:outline-none py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10 scale-[1.01]"
                : "text-gray-700 hover:text-gray-900 bg-gray-50/70 hover:bg-gray-100/50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:bg-zinc-900/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Playbooks posts index column */}
        <div className="lg:col-span-8 space-y-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onNavigateToBlogPost(post.slug)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 hover:shadow-xl cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-zinc-900">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-4xs text-gray-700 dark:text-zinc-550 mb-2 font-mono">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-black text-gray-950 dark:text-white leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-3xs text-gray-700 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-900/40">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-6.5 h-6.5 rounded-full object-cover border border-gray-100 dark:border-zinc-850"
                        />
                        <div>
                          <h5 className="text-[10px] font-bold text-gray-800 dark:text-zinc-300">
                            {post.author.name}
                          </h5>
                        </div>
                      </div>

                      <span className="text-4xs font-bold font-mono text-indigo-500 group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase">
                        Read Now <ChevronRight size={10} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50/70 dark:bg-zinc-905/30 rounded-2xl border border-gray-100 dark:border-zinc-90">
              <Search className="mx-auto text-gray-700 dark:text-zinc-650 mb-3" size={32} />
              <h4 className="text-xs font-bold text-gray-700 dark:text-zinc-350">Search parameter empty</h4>
              <p className="text-3xs text-gray-700 dark:text-zinc-500 max-w-sm mx-auto mt-1 leading-relaxed">
                No matching articles could be retrieved for "{searchQuery}". Reset filters or explore other categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-3.5 py-1.5 rounded-xl font-bold text-3xs text-white bg-indigo-600 hover:bg-indigo-750 transition-all font-sans focus:outline-none"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Index Sidebar ad spots */}
        <aside className="lg:col-span-4 space-y-8">
          <AdPlaceholder type="leaderboard" className="lg:hidden shadow-xs" />
          <AdPlaceholder type="sidebar" className="shadow-xs" />
          
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs">
            <h4 className="text-2xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Featured Tag Groups
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {["YouTube", "SEO", "Copywriting", "Retention", "SaaS Strategy", "TikTok Tags", "Instagram Growth"].map((ts) => (
                <button
                  key={ts}
                  onClick={() => setSearchQuery(ts)}
                  className="px-2.5 py-1 text-4xs font-mono font-bold rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                >
                  #{ts}
                </button>
              ))}
            </div>
          </div>
        </aside>

      </div>

    </div>
  );
}
