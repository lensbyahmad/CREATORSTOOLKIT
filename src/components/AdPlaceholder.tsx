import { useState } from "react";
import { Info, Volume2, X } from "lucide-react";

interface AdPlaceholderProps {
  type: "leaderboard" | "rectangle" | "sidebar";
  className?: string;
}

export default function AdPlaceholder({ type, className = "" }: AdPlaceholderProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Render specific layout dimensions based on standard AdSense formats
  const getLayoutClasses = () => {
    switch (type) {
      case "leaderboard":
        return "w-full min-h-[90px] p-4 flex flex-col md:flex-row md:items-center justify-between";
      case "rectangle":
        return "w-full md:max-w-md min-h-[250px] p-6 flex flex-col justify-between";
      case "sidebar":
        return "w-full max-w-[300px] min-h-[600px] p-6 flex flex-col justify-between hidden lg:flex";
    }
  };

  const getSizingDetails = () => {
    switch (type) {
      case "leaderboard":
        return "728 × 90 Leaderboard AdSlot";
      case "rectangle":
        return "336 × 280 Premium AdSlot";
      case "sidebar":
        return "300 × 600 Wide Skyscraper AdSlot";
    }
  };

  return (
    <div
      id={`adsense-slot-${type}`}
      className={`relative mx-auto rounded-xl border border-dashed border-gray-300 dark:border-zinc-800 bg-gray-50/70 dark:bg-zinc-900/60 transition-all duration-300 group overflow-hidden ${getLayoutClasses()} ${className}`}
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none">
        <span className="font-mono text-5xl md:text-8xl tracking-widest font-black uppercase">AdSense</span>
      </div>

      {/* Top Banner Tag */}
      <div className="flex items-center justify-between w-full pb-2 border-b border-gray-200/50 dark:border-zinc-800/50">
        <div className="flex items-center gap-1.5 text-2xs md:text-xs font-mono font-bold text-gray-700 dark:text-zinc-500 uppercase tracking-widest">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Sponsored Placeholder
        </div>
        <div className="flex items-center gap-2">
          <button
            title="Ad Settings Info"
            className="text-gray-700 hover:text-gray-700 dark:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            <Info size={13} />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-700 hover:text-red-500 dark:text-zinc-600 dark:hover:text-red-400 transition-colors"
            title="Dismiss Ad Placeholder"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Center Advertising Message */}
      <div className="flex-1 flex flex-col justify-center py-4 text-center">
        <h4 className="text-xs font-semibold text-gray-700 dark:text-zinc-400 mb-1">
          Revenue Generator Spot
        </h4>
        <p className="text-2xs text-gray-700 dark:text-zinc-500 max-w-sm mx-auto">
          AdSense automated matching tags will populate here. Optimized for high viewability rates.
        </p>
      </div>

      {/* Footer Dimension Stamp */}
      <div className="pt-2 border-t border-gray-200/50 dark:border-zinc-800/50 flex items-center justify-between text-3xs font-mono text-gray-700 dark:text-zinc-600">
        <span>Slot ID: ct-ads-{type}</span>
        <span className="bg-gray-100 dark:bg-zinc-850 px-1.5 py-0.5 rounded text-gray-700 dark:text-zinc-400">
          {getSizingDetails()}
        </span>
      </div>
    </div>
  );
}
