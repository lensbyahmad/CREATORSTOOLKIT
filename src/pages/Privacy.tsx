import { ShieldAlert, BookOpen, Scale, Landmark, FileText, Lock, Globe, Server, UserCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div id="privacy-policy" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in text-gray-750 dark:text-zinc-300 leading-relaxed transition-colors duration-300 text-sm">
      
      {/* Upper header */}
      <div className="pb-6 mb-10 border-b border-gray-150 dark:border-zinc-900/60 text-center">
        <span className="p-3 bg-red-50 dark:bg-rose-950/20 text-indigo-500 rounded-full inline-block mb-4">
          <ShieldAlert size={26} />
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-sans text-gray-950 dark:text-white tracking-tight">
          Privacy Policy & AdSense Compliance
        </h1>
        <p className="text-xs text-gray-700 font-mono mt-2">
          Last Revised Agenda: June 24, 2026
        </p>
      </div>

      <div className="space-y-10 select-text selection:bg-indigo-500/20">
        
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <BookOpen size={18} className="text-indigo-500" />
            1. Introduction & Scope of Privacy Management
          </h2>
          <p>
            At <strong>CreatorsToolkit</strong>, accessible from our official domain and associated development platforms, protecting the privacy of our visitors is our fundamental priority. This Privacy Policy document outlines in comprehensive detail the specific classifications of data gathered, compiled, and archived by CreatorsToolkit, as well as our strict processing rules, data retention schedules, and your rights as a consumer.
          </p>
          <p>
            We recognize that content creators depend on absolute confidentiality to test ideas, draft scripts, and build hashtag strategies. Therefore, this policy has been architected to ensure complete transparency regarding how your metadata, browser footprint, and local inputs are handled.
          </p>
          <p>
            This Privacy Policy applies solely to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in CreatorsToolkit. This policy is not applicable to any information collected offline or via channels other than this website. By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        {/* AdSense compliance disclosures */}
        <section className="space-y-4 p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900/30 border border-gray-150/40 dark:border-zinc-850">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-200 dark:border-zinc-800 pb-2">
            <Scale size={18} className="text-indigo-500" />
            2. Google AdSense & Third-Party Advertising
          </h2>
          <p>
            CreatorsToolkit displays non-intrusive, sponsor-matching spaces powered by third-party advertisement modules, specifically <strong>Google AdSense</strong>. Google, as a third-party vendor, applies specialized cookies to display contextual promotions based on prior clicks and browsing behaviors occurring across our domain and the broader internet.
          </p>
          <p>
            Our advertising partners, including Google, utilize technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on CreatorsToolkit, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-2 text-gray-700 dark:text-zinc-400">
            <li>
              <strong>Third-Party Cookies:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to CreatorsToolkit and/or other sites on the Internet.
            </li>
            <li>
              <strong>DART Cookie System:</strong> Users may choose to opt-out of the use of the DART cookie by visiting the official Google Ad and Content Network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">https://policies.google.com/technologies/ads</a>.
            </li>
            <li>
              <strong>Choice Controls & Opt-Out:</strong> You can choose to disable or selectively turn off our cookies or third-party cookies in your individual browser settings guidelines or preferences. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites. Note that CreatorsToolkit has no access to or control over these cookies that are used by third-party advertisers.
            </li>
          </ul>
        </section>

        {/* Information we collect */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <FileText size={18} className="text-indigo-500" />
            3. Information We Collect
          </h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. However, for general utilization of the generative AI tools provided on the website, we <strong>do not</strong> require account registration, and we <strong>do not</strong> ask for your email address, phone number, or real name.
          </p>
          <p>
            Like many other Web sites, CreatorsToolkit makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.
          </p>
        </section>

        {/* Data storage guidelines (Local Storage) */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <Server size={18} className="text-indigo-500" />
            4. Local Data Storage & AI Inputs
          </h2>
          <p>
            CreatorsToolkit provides tools for generating YouTube titles, video scripts, captions, and hashtag strategies. All custom tool parameters, inputs, and synthesis text outputs are preserved exclusively inside your <strong>local browser storage (localStorage)</strong>.
          </p>
          <p>
            <strong>No historical data is transmitted or archived to external cloud databases.</strong> The textual content you feed into the AI models is processed temporarily in-memory via our secure API endpoints to generate your requested output, and is immediately discarded from server memory upon response delivery. We do not use your inputs to train our models, nor do we persist your creative drafts on our infrastructure. Your intellectual property remains securely on your local device.
          </p>
        </section>

        {/* GDPR / CCPA right-to-be-forgotten details */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <UserCheck size={18} className="text-indigo-500" />
            5. User Data Control Rights (CCPA / GDPR)
          </h2>
          <p>
            We support complete data authority. As a values-aligned creator, you have the following rights under the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-zinc-400">
            <li>
              <strong>The Right to Access:</strong> You have the right to request copies of your personal data. We may charge you a small fee for this service.
            </li>
            <li>
              <strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
            </li>
            <li>
              <strong>The Right to Erasure (Right to be Forgotten):</strong> You have the right to request that we erase your personal data, under certain conditions. For locally stored generation logs, you may delete these directly from the tools page. Clearing your browser cache will also permanently erase all past creations.
            </li>
            <li>
              <strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.
            </li>
            <li>
              <strong>The Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.
            </li>
            <li>
              <strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
            </li>
          </ul>
          <p className="mt-4">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>
        </section>
        
        {/* Children's Information */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <Lock size={18} className="text-indigo-500" />
            6. Children's Information Protection
          </h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            CreatorsToolkit does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>
        </section>

        {/* Changes and Updates */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
            <Globe size={18} className="text-indigo-500" />
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
          </p>
        </section>

        {/* Consent statement */}
        <section className="pt-8 border-t border-gray-200 dark:border-zinc-800 text-center text-xs uppercase tracking-widest font-mono text-gray-700">
          By continuing to utilize CreatorsToolkit, you hereby consent to our Privacy policies.
        </section>

      </div>

    </div>
  );
}

