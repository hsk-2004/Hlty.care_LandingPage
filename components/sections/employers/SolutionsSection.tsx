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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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

        {/* Desktop View: Centered layout to prevent gaps */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 xl:gap-6 max-w-[950px] mx-auto">
           {solutions.map((sol, idx) => (
             <SolutionCard key={idx} solution={sol} index={idx} />
           ))}
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-10 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
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
      className={`bg-[#E4DBCD] rounded-[24px] md:rounded-[40px] ${isMobile ? 'w-[280px] min-h-[311px] p-6' : 'lg:w-[280px] lg:min-h-[311px] p-8 md:p-10 lg:p-7'} flex flex-col border border-[#BEB4A5] shadow-sm shrink-0`}
    >
      {/* Category Pill */}
      <div className="mb-2">
        <span className="inline-flex items-center h-[19px] w-auto px-3 rounded-full bg-[#F2F0E3] border border-[#BEB4A5] font-haptik text-[10px] md:text-[11px] xl:text-[12px] uppercase tracking-wider text-[#183A39]">
          {solution.category}
        </span>
      </div>

      <h3 className="font-jubilat text-[16px] text-[#183A39] font-bold leading-tight mb-3">
        {solution.title}
      </h3>

      <p className={`font-jubilat text-[14px] ${isMobile ? 'mb-2 leading-tight' : 'mb-3 leading-snug'} text-[#183A39] italic md:not-italic`}>
        {solution.description}
      </p>

      {/* Bullet Points */}
      <ul className={`${isMobile ? 'space-y-0.5' : 'space-y-1'}`}>
        {solution.items.map((item: string, i: number) => (
          <li key={i} className="font-jubilat text-[14px] text-[#183A39] flex items-start gap-3 leading-tight">
            <span className="mt-1.5 w-1 h-1 bg-[#183A39]/40 rounded-full flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>


    </motion.div>
  );
}
