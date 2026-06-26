import { Sparkles, Users, Award, ShieldCheck, Heart, ArrowUpRight, Compass, ShieldAlert, CheckCircle, TrendingUp, Cpu } from "lucide-react";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const corporateCoreValues = [
    {
      title: "Helpful Suggestions",
      description: "We focus on providing practical, usable text that helps you get past writer's block.",
      icon: Award
    },
    {
      title: "Tools, Not Replacements",
      description: "AI is here to help you draft ideas quickly. We want you to maintain your unique creative voice.",
      icon: ShieldCheck
    },
    {
      title: "Easy to Use",
      description: "We try to keep our tools simple, fast, and free of complicated logins or subscriptions.",
      icon: Heart
    }
  ];

  const milestonesTimeline = [
    {
      date: "January 2025",
      title: "Initial Ideas",
      desc: "We started experimenting with how language models could help outline video scripts and come up with ideas."
    },
    {
      date: "August 2025",
      title: "First Prototype",
      desc: "We tested our first set of tools with a small group of creators to see if they found them useful."
    },
    {
      date: "February 2026",
      title: "Launch",
      desc: "We launched the site with simple tools for YouTube titles, captions, and scripts."
    },
    {
      date: "Present",
      title: "Growing Tools",
      desc: "We continue to update our platform based on feedback from bloggers and video creators."
    }
  ];

  const leadershipTeam = [
    {
      name: "Marcus Sterling",
      role: "Founder",
      bio: "Marcus has spent years creating content and managing digital communities. He focuses on the product direction.",
      credentials: "Over 10 years in digital media",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elana Kim",
      role: "Lead Editor",
      bio: "Elana is a writer and editor who helps make sure our generated outputs are clear and engaging.",
      credentials: "Former tech editor and content strategist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Dr. Darnell Jefferson",
      role: "Researcher",
      bio: "Darnell studies human-computer interaction and helps design our tools to be as intuitive as possible.",
      credentials: "Ph.D. Cognitive Psychology",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div id="about-us-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in transition-colors duration-300 space-y-16">
      
      {/* Premium Hero Banner */}
      <section className="text-center py-16 md:py-24 bg-linear-to-b from-gray-50/50 to-white dark:from-zinc-950 dark:to-zinc-900/10 rounded-3xl border border-gray-150/40 dark:border-zinc-900/60 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-550/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-4xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/20 uppercase tracking-widest">
            <Compass size={11} />
            ABOUT CREATORSTOOLKIT
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-gray-950 dark:text-white leading-tight">
            Building Helpful Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Content Creators</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            CreatorsToolkit was established to help digital creators save time and overcome writer's block with simple, easy-to-use AI tools.
          </p>
        </div>
      </section>

      {/* Detail Core Narrative & Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-indigo-500">
            <Cpu size={16} />
            <h4 className="text-3xs uppercase font-extrabold tracking-widest">Our Mission</h4>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-sans text-gray-950 dark:text-white leading-tight">
            Helping Creators Bypass the Blank Page.
          </h2>
          <p className="text-xs text-gray-700 dark:text-zinc-400 leading-relaxed">
            Every day, writers and video producers sit in front of a blank screen trying to find the perfect idea. We believe that technology should support human creativity by providing practical starting points.
          </p>
          <p className="text-xs text-gray-700 dark:text-zinc-400 leading-relaxed">
            We built CreatorsToolkit to be simple and helpful. By studying successful content patterns, our tools help you structure your scripts, optimize your titles, and generate ideas quickly, so you can spend more time actually making things.
          </p>
          
          <div className="p-4 rounded-xl border border-dashed border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/20 dark:bg-indigo-950/20 flex gap-3.5 items-start">
            <span className="p-2 rounded-lg bg-white dark:bg-zinc-950 text-indigo-500 shadow-xs mt-0.5">
              <ShieldAlert size={16} />
            </span>
            <div>
              <h5 className="text-xs font-bold text-gray-900 dark:text-white">Our Pledge</h5>
              <p className="text-[11px] text-gray-700 dark:text-zinc-400 leading-relaxed mt-0.5">
                We design our tools to help real individuals express themselves. We encourage you to always edit and add your personal touch to any generated content.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate("tools")}
            className="py-3 px-6 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-750 hover:shadow-lg hover:shadow-indigo-600/10 active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            Access AI Tools Hub
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Unsplash Visual Image Block */}
        <div className="lg:col-span-5 relative">
          <div className="absolute top-4 -left-4 w-full h-full bg-indigo-600/10 rounded-2xl -z-10"></div>
          <div className="rounded-2xl overflow-hidden border border-gray-150 dark:border-zinc-900 bg-white/40 shadow-xl h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Creative Team Working"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Millestones Chronological Timeline Section */}
      <section className="py-8 border-t border-b border-gray-150 dark:border-zinc-900">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <h2 className="text-xl sm:text-2xl font-black font-sans text-gray-950 dark:text-white">
            Historical Development Milestones
          </h2>
          <p className="text-4xs text-gray-700 dark:text-zinc-500 uppercase tracking-widest font-mono">
            How we scaled from an analytics sandbox to serving thousands of creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {milestonesTimeline.map((mil, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-150/60 dark:border-zinc-900/60 shadow-xs relative space-y-3 hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xs font-mono font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                  {mil.date}
                </span>
                <span className="text-4xs font-mono text-gray-700">0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                {mil.title}
              </h4>
              <p className="text-[11px] text-gray-700 dark:text-zinc-450 leading-relaxed">
                {mil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Operating Pillars */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-black font-sans text-gray-950 dark:text-white">
            Our Operating Pillars
          </h2>
          <p className="text-4xs text-gray-700 dark:text-zinc-500 uppercase tracking-widest font-mono">
            The core structures which navigate our design and engineering models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporateCoreValues.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 hover:shadow-md transition-all space-y-4"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 block w-fit">
                  <IconComp size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-950 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-2xs text-gray-700 dark:text-zinc-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership/Board of Experts Team Section */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-black font-sans text-gray-950 dark:text-white">
            The Minds Behind the Engine
          </h2>
          <p className="text-4xs text-gray-700 dark:text-zinc-500 uppercase tracking-widest font-mono">
            Scientific advisory directors and copywriting strategists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((lead, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 hover:border-indigo-150 dark:hover:border-zinc-800 transition-all flex flex-col items-center text-center space-y-4 shadow-3xs"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-zinc-800 bg-gray-50 shadow-sm">
                <img
                  src={lead.avatar}
                  alt={lead.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all"
                />
              </div>
              <div className="space-y-1 mb-2">
                <h4 className="text-xs font-bold text-gray-950 dark:text-white">{lead.name}</h4>
                <p className="text-4xs font-bold font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded">
                  {lead.role}
                </p>
              </div>
              <p className="text-2xs text-gray-700 dark:text-zinc-450 leading-relaxed mb-4">
                {lead.bio}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800/50 w-full">
                <p className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 italic">
                  {lead.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Corporate Manifesto Statement Card */}
      <section className="p-8 md:p-10 rounded-2xl bg-gray-50 dark:bg-zinc-900/30 border border-gray-150/40 dark:border-zinc-850/60 flex flex-col md:flex-row gap-6 md:items-center justify-between text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
            <CheckCircle size={14} />
            <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase">LICENSING & bulk INQUIRIES</span>
          </div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
            Need custom model profiles for your corporate publishing deck?
          </h4>
          <p className="text-2xs text-gray-700 dark:text-zinc-400 leading-relaxed">
            We license custom bulk narrative templates, keyword strategy fine-tunings, and direct server integrations for enterprise marketing bureaus and agency syndicates.
          </p>
        </div>
        <button
          onClick={() => onNavigate("contact")}
          className="py-3 px-5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-750 transition-colors whitespace-nowrap self-start md:self-center"
        >
          Consult Strategy Directors
        </button>
      </section>

    </div>
  );
}
