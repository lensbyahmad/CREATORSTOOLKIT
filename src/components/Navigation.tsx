import { useState } from "react";
import { Sparkles, Menu, X, Moon, Sun, LogOut, User, Layout, ArrowUpRight } from "lucide-react";
import { auth } from "../firebase";
import { signOut, User as FirebaseUser } from "firebase/auth";

interface NavigationProps {
  user: FirebaseUser | null;
  onOpenAuth: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({
  user,
  onOpenAuth,
  darkMode,
  onToggleDarkMode,
  currentPage,
  onNavigate
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "tools", label: "AI Tools" },
    { id: "blog", label: "Blog" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div
            onClick={() => {
              onNavigate("home");
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <span className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <Sparkles size={18} className="animate-pulse" />
            </span>
            <span className="text-base font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 uppercase select-none">
              CreatorsToolkit
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = currentPage === link.id || (link.id === "blog" && currentPage.startsWith("blog-"));
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 focus:outline-none py-1.5 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/35"
                      : "text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Stack */}
          <div className="hidden md:flex items-center gap-4">
            {/* Color mode control */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 focus:outline-none dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors"
              title="Toggle Color Vibe"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Firebase Auth Account display */}
            {user ? (
              <div className="flex items-center gap-3 pl-3 border-l border-gray-150 dark:border-zinc-800">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-900/50 px-2.5 py-1.5 rounded-xl border border-gray-100 dark:border-zinc-850">
                  <div className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-500 flex items-center justify-center">
                    <User size={13} />
                  </div>
                  <span className="text-xs font-bold text-gray-700 dark:text-zinc-300 max-w-[100px] truncate">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  title="Sign Out Creator Hub"
                  className="p-2 rounded-xl border border-gray-200 dark:border-zinc-850 text-gray-400 focus:outline-none hover:text-red-500 hover:border-red-100 dark:text-zinc-500 dark:hover:text-red-400 dark:hover:border-red-950 transition-all active:scale-95"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="py-1.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/10 active:scale-[0.98] transition-all flex items-center gap-1"
              >
                Launch Hub
                <ArrowUpRight size={13} />
              </button>
            )}
          </div>

          {/* Tablet/Mobile Hamburg Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Color toggle also on mobile */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-zinc-900"
              title="Toggle Vibe"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-zinc-900"
              title="Toggle Menu Links"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-4 px-4 space-y-3 animate-fade-in transition-colors duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = currentPage === link.id || (link.id === "blog" && currentPage.startsWith("blog-"));
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20"
                      : "text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-zinc-900">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-zinc-900/40">
                  <User size={15} className="text-gray-400" />
                  <span className="text-xs font-bold text-gray-700 dark:text-zinc-300">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 font-bold text-xs"
                >
                  Disconnect Space
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 px-4 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 font-bold text-sm"
              >
                Authenticate Hub
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
