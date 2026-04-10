"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    category: "Workshops",
    title: "Family Workshops at Work",
    description: "Short, interactive sessions (45-60 min) that give parents practical tools — not information overload.",
    items: [
      "Food & nutrition without battles",
      "Sleep routines that actually hold",
      "Screen time and digital balance",
      "Movement & body awareness"
    ],
    cta: "Talk To Us"
  },
  {
    category: "Digital Toolkit",
    title: "The Parent Toolkit",
    description: "A curated set of tools parents reach for in real moments — mornings, meals, play, and bedtime.",
    items: [
      "7-Day Family Practice Programme",
      "Routine cue cards & visual systems",
      "Age-by-age health guides",
      "Food & sleep trackers"
    ],
    cta: "Explore Toolkit"
  },
  {
    category: "Environmental",
    title: "Wellness Spaces & Posters",
    description: "Transform your office break rooms, nursing rooms, and common areas into everyday health touchpoints.",
    items: [
      "Pediatric health visual guides",
      "Nutrition & food label posters",
      "Parent corner setups",
      "Branded for your workplace"
    ],
    cta: "See Sample Poster"
  },
  {
    category: "xoxoday Special",
    title: "Monthly Wellness Days",
    description: "Curated, themed family health days organised in partnership with xoxoday — in your office or online.",
    items: [
      "Themed family health challenges",
      "Live Q&A with pediatric experts",
      "Take-home kits for families",
      "Team participation tracking"
    ],
    cta: "View Calendar"
  },
  {
    category: "Expert Access",
    title: "Ask-a-Paediatrician",
    description: "Give your parent-employees direct access to trusted pediatric guidance — no appointment needed.",
    items: [
      "Monthly live Q&A sessions",
      "Async question submission",
      "Curated answer library",
      "Condition-specific deep dives"
    ],
    cta: "Learn More"
  },
  {
    category: "For HR & People Teams",
    title: "Wellbeing Impact Reports",
    description: "Anonymised data on programme engagement and parent participation so you can show what the benefit is actually doing.",
    items: [
      "Quarterly impact summaries",
      "Anonymous participation metrics",
      "Benchmark comparisons",
      "Renewal recommendations"
    ],
    cta: "Request Sample Report"
  }
];

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#f2efe4] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Header - Centered as per desktop reference */}
        <div className="text-center mb-16 lg:mb-24 space-y-6 lg:space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-jubilat text-[36px] md:text-[56px] lg:text-[72px] text-[#183A39] leading-[1.1] font-medium max-w-[1000px] mx-auto"
          >
            Built for parents. <br className="hidden md:block" /> Designed for work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-jubilat text-[15px] md:text-[22px] lg:text-[24px] text-[#183A39]/80 leading-relaxed font-normal max-w-[850px] mx-auto"
          >
            Three delivery formats, one goal: reducing the health friction that follows 
            parents into the office.
          </motion.p>
        </div>

        {/* Desktop View: 3-column Grid matching the reference */}
        <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-10">
           {solutions.map((sol, idx) => (
             <SolutionCard key={idx} solution={sol} index={idx} />
           ))}
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-10 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
           {solutions.map((sol, idx) => (
             <div key={idx} className="w-[280px] shrink-0 snap-center">
                <SolutionCard solution={sol} index={idx} isMobile />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, index, isMobile = false }: { solution: any, index: number, isMobile?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
      className={`bg-[#E5E1D3] rounded-[8px] md:rounded-[40px] ${isMobile ? 'p-4 h-[270px]' : 'p-8 md:p-10 lg:p-12 h-full'} flex flex-col border border-[#183A39]/5 shadow-sm`}
    >
      {/* Category Pill */}
      <div className={`${isMobile ? 'mb-2' : 'mb-6'}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-[#183A39]/10 font-haptik text-[10px] md:text-[11px] xl:text-[12px] uppercase tracking-wider font-bold text-[#183A39]">
          {solution.category}
        </span>
      </div>

      <h3 className={`font-jubilat ${isMobile ? 'text-[14px] mb-1' : 'text-[22px] md:text-[28px] mb-5'} text-[#183A39] font-bold leading-tight`}>
        {solution.title}
      </h3>

      <p className={`font-jubilat ${isMobile ? 'text-[12px] mb-2 leading-tight' : 'text-[14px] md:text-[16px] mb-6 leading-relaxed flex-1'} text-[#183A39]/80 italic md:not-italic overflow-hidden`}>
        {solution.description}
      </p>

      {/* Bullet Points */}
      <ul className={`${isMobile ? 'space-y-0.5 mb-2' : 'space-y-3 mb-10'}`}>
        {solution.items.map((item: string, i: number) => (
          <li key={i} className={`font-jubilat ${isMobile ? 'text-[12px] leading-tight' : 'text-[14px] md:text-[16px]'} text-[#183A39]/70 flex items-start gap-3`}>
            <span className={`${isMobile ? 'mt-1.5' : 'mt-2'} w-1 h-1 bg-[#183A39]/40 rounded-full flex-shrink-0`} />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className={`${isMobile ? 'mt-4' : 'mt-auto'}`}>
        <button className={`bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold uppercase tracking-widest hover:bg-[#122b2a] transition-all flex items-center justify-center ${isMobile ? 'w-[90px] h-[32px] p-0 text-[8px] tracking-tight' : 'px-8 py-4 text-[12px] md:text-[13px] tracking-widest'}`}>
           {solution.cta}
        </button>
      </div>
    </motion.div>
  );
}
