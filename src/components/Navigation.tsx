import { useState } from "react";
import { Sparkles, Menu, X, Moon, Sun, Layout, Search } from "lucide-react";

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({
  darkMode,
  onToggleDarkMode,
  currentPage,
  onNavigate
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "ai-tools", label: "AI Tools" },
    { id: "blog", label: "Blog" },
    { id: "about-us", label: "About Us" },
    { id: "contact-us", label: "Contact Us" },
    { id: "faqs", label: "FAQs" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div
            onClick={() => {
              onNavigate("home");
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles size={18} className="animate-pulse" />
            </span>
            <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 select-none">
              CreatorsToolkit
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = currentPage === link.id || (link.id === "blog" && currentPage.startsWith("blog-"));
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id);
                  }}
                  className={`px-4 focus:outline-none py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    active
                      ? "text-white bg-gray-900 dark:bg-white dark:text-gray-900 shadow-md"
                      : "text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Stack */}
          <div className="hidden md:flex items-center gap-4">
            {/* Global Search Bar */}
            <form className="relative group" action="/search" method="get" onSubmit={(e) => {
              e.preventDefault();
              onNavigate("blog"); // mock search behavior
            }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-zinc-500 group-focus-within:text-indigo-500 transition-colors" size={16} />
              <input
                type="search"
                name="q"
                placeholder="Search tools..."
                className="w-56 pl-10 pr-4 py-2.5 text-sm rounded-full border border-gray-400 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/30 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all focus:w-72 shadow-sm"
              />
            </form>

            {/* Color mode control */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none dark:text-zinc-400 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-zinc-900/50 transition-all"
              title="Toggle Color Vibe"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Tablet/Mobile Hamburg Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Color toggle also on mobile */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-lg text-gray-700 dark:text-zinc-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-zinc-900"
              title="Toggle Vibe"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-700 dark:text-zinc-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-zinc-900"
              title="Toggle Menu Links"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-4 px-4 space-y-3 animate-fade-in transition-colors duration-300">
          <form className="mb-4" action="/search" method="get" onSubmit={(e) => {
            e.preventDefault();
            onNavigate("blog"); // mock search behavior
            setMobileMenuOpen(false);
          }}>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-zinc-500" size={14} />
              <input
                type="search"
                name="q"
                placeholder="Search tools, blogs..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-400 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
          </form>
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = currentPage === link.id || (link.id === "blog" && currentPage.startsWith("blog-"));
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20"
                      : "text-gray-700 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
