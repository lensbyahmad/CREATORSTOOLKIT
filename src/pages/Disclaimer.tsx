import React, { useEffect } from 'react';
import { Shield, AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in transition-colors duration-300">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800/50 mb-6">
          <AlertCircle size={14} />
          Important Information
        </div>
        <h1 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-gray-900 dark:text-white mb-6">
          Legal Disclaimer
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-zinc-400 leading-relaxed max-w-2xl">
          Please read this disclaimer carefully before using CreatorsToolkit. By using our website and tools, you accept this disclaimer in full.
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900/40 border border-gray-200/60 dark:border-zinc-800/60 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="space-y-10 text-sm md:text-base text-gray-700 dark:text-zinc-300 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Shield size={20} className="text-indigo-500" />
              General Information Purposes Only
            </h2>
            <p>
              The information and tools provided by CreatorsToolkit are for general informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
              Any reliance you place on such information or tools is therefore strictly at your own risk. The AI-generated content (including but not limited to YouTube titles, captions, hashtags, and scripts) is produced by automated models and should be reviewed, edited, and fact-checked by you before use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              No Guarantees of Success
            </h2>
            <p>
              CreatorsToolkit provides tools designed to assist content creators. However, we do not guarantee any specific results, including but not limited to increased views, engagement, follower growth, or financial earnings. Social media algorithms are complex and frequently changing. Success on platforms like YouTube, TikTok, Instagram, and others depends on a wide variety of factors beyond the scope of our tools.
            </p>
            <p>
              Any claims or examples of success mentioned on this website are not typical and should not be interpreted as a guarantee or promise of what you will achieve.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Professional Advice
            </h2>
            <p>
              The content on this website does not constitute professional advice (such as legal, financial, or business advice). You should not rely on the information on this website as an alternative to advice from an appropriately qualified professional. If you have any specific questions about any legal, financial, or business matter, you should consult your professional advisor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Affiliate Links and External Resources
            </h2>
            <p>
              From time to time, this website may include links to other websites or affiliate links. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </p>
            <p>
              If you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. This helps support the development and maintenance of CreatorsToolkit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Limitation of Liability
            </h2>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>
          
          <div className="pt-8 border-t border-gray-100 dark:border-zinc-800/60 text-xs text-gray-700 dark:text-zinc-500">
            Last updated: May 20, 2024. If you have any questions about this disclaimer, please contact us.
          </div>

        </div>
      </div>
    </div>
  );
}
