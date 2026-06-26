import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("Subscription failed");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
          <Mail size={24} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Level up your content
        </h3>
        
        <p className="text-gray-600 dark:text-zinc-400 text-sm max-w-md">
          Join over 5,000 creators receiving our monthly newsletter packed with practical content creation tips, AI prompts, and growth strategies.
        </p>

        <div className="w-full pt-4">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-4 text-emerald-600 dark:text-emerald-400 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <CheckCircle2 size={32} className="mb-3" />
              <p className="font-medium text-center">Thanks for subscribing!</p>
              <p className="text-sm opacity-80 text-center mt-1">Keep an eye on your inbox for our next issue.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400 dark:text-zinc-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === "loading"}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600 dark:focus:ring-indigo-500/50 dark:focus:border-indigo-500 transition-all disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
