import React from "react";

export default function Faqs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          Frequently <span className="text-indigo-600 dark:text-indigo-400">Asked</span> Questions
        </h1>
        <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto">
          Common queries about CreatorsToolkit, how to use our tools, and our data policy.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-150 dark:border-zinc-800 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What is CreatorsToolkit?</h3>
          <p className="text-gray-700 dark:text-zinc-400 text-sm">
            We are a unified suite of AI tools designed to help writers, video creators, and marketers scale their ideation and production workflows.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-150 dark:border-zinc-800 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Do I need an account to use the tools?</h3>
          <p className="text-gray-700 dark:text-zinc-400 text-sm">
            No, all our AI generation tools are completely free to use without any account or registration.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-150 dark:border-zinc-800 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How safe is my generated data?</h3>
          <p className="text-gray-700 dark:text-zinc-400 text-sm">
            All your generation history is securely stored only on your local browser. We do not transmit or store any of your inputs or outputs to external cloud databases.
          </p>
        </div>
      </div>
    </div>
  );
}
