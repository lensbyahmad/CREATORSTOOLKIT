import { Sparkles, ArrowUpRight, Github, Twitter, Youtube, CheckCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-zinc-950 border-t border-gray-150 dark:border-zinc-900 transition-colors duration-300 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 dark:bg-indigo-550/5 rounded-full blur-3xl pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/10">
                <Sparkles size={16} />
              </span>
              <span className="text-md font-black tracking-tight text-gray-900 dark:text-white">
                Creators<span className="text-indigo-600 dark:text-indigo-400 font-medium">Toolkit</span>
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              State-of-the-art AI generation utilities helping you compose YouTube titles, captions, scripts, and high-impact SEO ideas instantly.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-3xs font-semibold bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 border border-gray-200/40 dark:border-zinc-850/40">
                <CheckCircle size={10} className="text-indigo-500" />
                V2.6.2 Live
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-3xs font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100/40 dark:border-emerald-900/40">
                AdSafe Compliant
              </span>
            </div>
          </div>

          {/* Column 2: System Features */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 font-sans">
              AI Generation Hub
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "YouTube Title Generator", target: "tools" },
                { label: "Caption Composer", target: "tools" },
                { label: "Hashtag Strategist", target: "tools" },
                { label: "AI Video Scriptwriter", target: "tools" },
                { label: "Blog Strategy Architect", target: "tools" }
              ].map((item, id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(item.target)}
                    className="text-xs text-gray-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Pages */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 font-sans">
              Company Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About CreatorsHub", id: "about" },
                { label: "Creator's Feed Blog", id: "blog" },
                { label: "Get In Touch", id: "contact" },
                { label: "Cookie & Privacy Policy", id: "privacy" }
              ].map((item, id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-xs text-gray-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social / Ad Notice */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider font-sans">
              Sponsor Network
            </h4>
            <p className="text-[11px] leading-relaxed text-gray-400 dark:text-zinc-500">
              CreatorsToolkit displays relevant visual ad slots across specific panels to fuel development servers. Review our compliant policy index for details.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Youtube, url: "https://youtube.com" },
                { icon: Github, url: "https://github.com" }
              ].map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer referrerPolicy"
                    className="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:hover:text-indigo-400 text-gray-400 dark:text-zinc-500 transition-all border border-gray-100 dark:border-zinc-850"
                  >
                    <IconComp size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-150 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs font-mono text-gray-400 dark:text-zinc-650">
          <span>
            © {currentYear} CreatorsToolkit Inc. All rights reserved. Built using standard cloud engines.
          </span>
          <div className="flex gap-4">
            <button onClick={() => onNavigate("privacy")} className="hover:text-gray-600 dark:hover:text-zinc-400">
              Privacy Guidance
            </button>
            <span>•</span>
            <button onClick={() => onNavigate("contact")} className="hover:text-gray-600 dark:hover:text-zinc-400">
              Assistance Line
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
