import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Mail, MessageSquare, Phone, MapPin, CheckCircle, Loader2, Sparkles, AlertCircle } from "lucide-react";
import AdPlaceholder from "../components/AdPlaceholder";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Feature Inquiry / Request");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error("Please fill out all necessary fields.");
      }

      // Add document directly into Firestore db list 'contact_submissions'
      await addDoc(collection(db, "contact_submissions"), {
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString()
      });

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error("Firestore inquiry submit error:", err);
      setError(err.message || "Unable to save your message. Please verify network links.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-us-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in transition-colors duration-300">
      
      {/* Title */}
      <div className="pb-6 mb-10 border-b border-gray-150 dark:border-zinc-900/60 text-center md:text-left">
        <h1 className="text-3xl font-black tracking-tight text-gray-950 dark:text-white">
          Initiate Creator Consultation
        </h1>
        <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 max-w-lg">
          Do you have feature ideas, custom partnership models, or need professional technical assistance? Speak directly to our strategy developers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info metadata cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-zinc-900">
              Assistance Channels
            </h3>

            {[
              { label: "Dispatch Email Address", text: "support@creatorstoolkit.com", desc: "Monitored round-the-clock by human copy analysts", icon: Mail },
              { label: "Phone Hotline Support", text: "+1 (888) CREATOR-AI", desc: "Mon-Fri 9AM to 5PM Pacific Time Standard", icon: Phone },
              { label: "Silicon Valley Tech HQ", text: "300 Constitution Drive, Menlo Park, CA", desc: "Corporate engineering quarters only", icon: MapPin }
            ].map((chan, idx) => {
              const IconComp = chan.icon;
              return (
                <div key={idx} className="flex gap-4 items-start text-xs sm:text-xs">
                  <span className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 text-indigo-500">
                    <IconComp size={16} />
                  </span>
                  <div>
                    <h5 className="font-extrabold text-gray-900 dark:text-white">{chan.label}</h5>
                    <p className="font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">{chan.text}</p>
                    <p className="text-[10px] text-gray-400 dark:text-zinc-500 italic mt-0.5">{chan.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ad Block inside sidebar */}
          <AdPlaceholder type="rectangle" className="shadow-xs" />
        </div>

        {/* Form panel block */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-gray-150 dark:border-zinc-900 shadow-xs relative">
          
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white">Communication Dispatched Successfully!</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you for your inquiry. A member of CreatorsToolkit's copywriting review board will follow up at the registered email address in under 12 hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-750 transition-all font-sans"
              >
                Dispatch Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-500" />
                Draft Inquiry Brief
              </h3>

              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 text-rose-500 text-xs font-semibold flex gap-2">
                  <AlertCircle size={15} />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold text-gray-700 dark:text-zinc-350 tracking-wide uppercase">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-90 w-full hover:bg-gray-50/50 dark:bg-zinc-900/40 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold text-gray-700 dark:text-zinc-350 tracking-wide uppercase">
                    Dispatch Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@agency.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-90 w-full hover:bg-gray-50/50 dark:bg-zinc-900/40 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold text-gray-700 dark:text-zinc-350 tracking-wide uppercase">
                  Reason for Inquiry
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-900/40 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all cursor-pointer"
                >
                  <option value="Feature Inquiry / Request">Feature Inquiry / Request</option>
                  <option value="Enterprise Integration licensing">Enterprise Integration Licensing</option>
                  <option value="AdSense / Partnership Proposal">AdSense / Sponsor Proposal</option>
                  <option value="Core Bug Report / Assistance">Technical Assistance Desk</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold text-gray-700 dark:text-zinc-350 tracking-wide uppercase">
                  Details message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Provide precise details regarding your requested features, business scale, or coordination targets..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs px-3.5 py-3 rounded-xl border border-gray-200 dark:border-zinc-850 dark:bg-zinc-90 w-full hover:bg-gray-50/50 dark:bg-zinc-900/40 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-750 transition-colors shadow-md shadow-indigo-600/10 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Buffering message transmission...
                  </>
                ) : (
                  <>
                    <MessageSquare size={14} />
                    Submit Brief to Board
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
