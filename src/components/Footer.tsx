import { Sparkles, ArrowUpRight, Github, Twitter, Youtube, CheckCircle, Facebook } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-zinc-950 border-t border-gray-200/50 dark:border-zinc-800/50 transition-colors duration-300 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none select-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <span className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
                <Sparkles size={18} className="animate-pulse" />
              </span>
              <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                Creators<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Toolkit</span>
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-zinc-400 leading-relaxed max-w-xs">
              Simple AI tools to help you create YouTube titles, captions, scripts, and content ideas quickly.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gray-50 dark:bg-zinc-900/50 text-gray-700 dark:text-zinc-400 border border-gray-200/60 dark:border-zinc-800/60 shadow-sm">
                <CheckCircle size={12} className="text-indigo-500" />
                V2.6.2 Live
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
                AdSafe Compliant
              </span>
            </div>
          </div>

          {/* Column 2: System Features */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
              AI Generation Hub
            </h4>
            <ul className="space-y-3">
              {[
                { label: "YouTube Title Generator", target: "ai-tools" },
                { label: "Caption Composer", target: "ai-tools" },
                { label: "Hashtag Strategist", target: "ai-tools" },
                { label: "AI Video Scriptwriter", target: "ai-tools" },
                { label: "Blog Strategy Architect", target: "ai-tools" }
              ].map((item, id) => (
                <li key={id}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.target);
                    }}
                    className="text-sm text-gray-700 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Pages */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
              Company Ecosystem
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About CreatorsHub", id: "about-us" },
                { label: "Creator's Feed Blog", id: "blog" },
                { label: "Get In Touch", id: "contact-us" },
                { label: "Cookie & Privacy Policy", id: "privacy-policy" },
                { label: "Disclaimer", id: "disclaimer" },
                { label: "Frequently Asked Questions", id: "faqs" }
              ].map((item, id) => (
                <li key={id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-sm text-gray-700 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium block w-fit"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social / Ad Notice */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">
              Sponsor Network
            </h4>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-zinc-400">
              CreatorsToolkit displays relevant visual ad slots across specific panels to fuel development servers. Review our compliant policy index for details.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Youtube, url: "https://youtube.com" },
                { icon: Facebook, url: "https://www.facebook.com/share/1LYW9wg2Wf/?mibextid=wwXIfr" },
                { icon: Github, url: "https://github.com" }
              ].map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer referrerPolicy"
                    className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900/50 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 text-gray-700 dark:text-zinc-500 transition-all border border-gray-200/60 dark:border-zinc-800/60 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <IconComp size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-medium text-gray-700 dark:text-zinc-500">
          <span>
            © {currentYear} CreatorsToolkit Inc. All rights reserved. Built using standard cloud engines.
          </span>
          <div className="flex gap-6">
            <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate("privacy-policy"); }} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Guidance
            </a>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <a href="#contact-us" onClick={(e) => { e.preventDefault(); onNavigate("contact-us"); }} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Assistance Line
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
