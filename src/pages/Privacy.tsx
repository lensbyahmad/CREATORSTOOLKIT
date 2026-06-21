import { ShieldAlert, BookOpen, Scale, Landmark } from "lucide-react";

export default function Privacy() {
  return (
    <div id="privacy-policy" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in text-gray-750 dark:text-zinc-300 leading-relaxed transition-colors duration-300 text-xs sm:text-xs">
      
      {/* Upper header */}
      <div className="pb-6 mb-10 border-b border-gray-150 dark:border-zinc-900/60 text-center">
        <span className="p-3 bg-red-50 dark:bg-rose-950/20 text-indigo-500 rounded-full inline-block mb-4">
          <ShieldAlert size={26} />
        </span>
        <h1 className="text-2xl sm:text-3xl font-black font-sans text-gray-950 dark:text-white tracking-tight">
          Privacy & AdSense Compliance Policy
        </h1>
        <p className="text-[10px] text-gray-450 font-mono mt-1">
          Last Revised Agenda: June 21, 2026
        </p>
      </div>

      <div className="space-y-8 select-text selection:bg-indigo-500/20">
        
        {/* Intro */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white flex items-center gap-2">
            <BookOpen size={16} className="text-indigo-500" />
            1. Scope of Privacy Management
          </h3>
          <p>
            At **CreatorsToolkit**, accessible from our shared development URLs, protecting the privacy of our visitors is our utmost priority. This Privacy Policy document outlines the specific classifications of data gathered, compiled, and archived by CreatorsToolkit, as well as our processing rules.
          </p>
          <p>
            If you have questions or require further clarifications regarding our compliance parameters, do not hesitate to contact our corporate review board through our contact mechanisms. This policy is strictly applicable to active digital interactions occurring on CreatorsToolkit servers.
          </p>
        </section>

        {/* AdSense compliance disclosures */}
        <section className="space-y-3 p-5 rounded-2xl bg-gray-50 dark:bg-zinc-900/30 border border-gray-150/40 dark:border-zinc-850">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white flex items-center gap-2">
            <Scale size={16} className="text-indigo-500" />
            2. Google AdSense & Cookie Disclosures
          </h3>
          <p>
            CreatorsToolkit displays non-intrusive sponsor matching spaces powered by 3rd-party advertisement modules, specifically **Google AdSense**. Google as a third-party vendor applies specialized cookies to display contextual promotions based on prior clicks occurring across our domain.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              **Third Party Cookware:** Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to CreatorsToolkit and/or other sites on the Internet.
            </li>
            <li>
              **DART Cookie System:** Users may choose to opt-out of the use of the DART cookie by visiting the official Google Ad and Content Network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">https://policies.google.com/technologies/ads</a>.
            </li>
            <li>
              **Choice Controls:** You can choose to disable or selectively turn off our cookies or third-party cookies in your individual browser settings guidelines or preferences.
            </li>
          </ul>
        </section>

        {/* Data storage guidelines (Firebase Auth and Firestore) */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white flex items-center gap-2">
            <Landmark size={16} className="text-indigo-500" />
            3. User Registration Credentials (Firebase Auth)
          </h3>
          <p>
            When registering accounts on CreatorsToolkit, credentials (email addresses, passwords, handles) are processed and authenticated with absolute security using **Firebase Authentication**.
          </p>
          <p>
            Custom tool parameters, inputs, and synthesis text outputs are preserved inside secure **Firebase Firestore** databases. These databases are structured safely with strict Firestore Security Rules, ensuring that only authorized profile owners can query or delete their historical data.
          </p>
        </section>

        {/* GDPR / CCPA right-to-be-forgotten details */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-gray-950 dark:text-white">
            4. User Data Control Rights (CCPA / GDPR)
          </h3>
          <p>
            We support complete data authority. As a values-aligned creator, you have the following rights:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              **The Right to Erasure (Right to be Forgotten):** You may delete historical generation logs in the Past Creations board. To completely erase your authentication account profile, initiate a formal task review in our assistance channels.
            </li>
            <li>
              **The Right to Access:** You have the absolute right to request copies of your archived Firestore document summaries stored on our platform.
            </li>
          </ul>
        </section>

        {/* Consent statement */}
        <section className="pt-6 border-t border-gray-150 dark:border-zinc-900 text-center text-4xs uppercase tracking-widest font-mono text-gray-400">
          By continuing to utilize CreatorsToolkit, you hereby consent to our Privacy policies.
        </section>

      </div>

    </div>
  );
}
