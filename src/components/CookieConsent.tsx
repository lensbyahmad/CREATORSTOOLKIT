import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Cookie Consent Banner" className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-start gap-3 flex-1 text-sm text-gray-700 dark:text-zinc-400">
        <Info className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
        <p>
          We use cookies to improve your experience, serve personalized ads, and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies. Read our <a href="#privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a> for more details.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          onClick={handleDecline}
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-gray-200 dark:border-zinc-700"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
        >
          Accept All
        </button>
        <button onClick={() => setIsVisible(false)} className="p-2 text-gray-700 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
