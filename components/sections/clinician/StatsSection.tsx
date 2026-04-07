"use client";

import { motion } from "framer-motion";

const stats = [
  { 
    value: "3x", 
    description: "more likely to recall health advice when paired with visual cues." 
  },
  { 
    value: "60%", 
    description: "of clinic visits involve repeat guidance on the same basic topics" 
  },
  { 
    value: "8 min", 
    description: "average wait time, enough for meaningful passive learning" 
  },
  { 
    value: "20+", 
    description: "average wait time, enough for meaningful passive learning" 
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#F0EEE6] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Intro Text */}
        <div className="max-w-[900px] mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <p className="font-jubilat text-[#183A39] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] tracking-tight">
            The average pediatric consultation is <span className="text-[#51D2A2] font-semibold">under 12 minutes.</span> Yet families 
            arrive with months of accumulated confusion about food, screen time, 
            sleep, and growth. You can&apos;t fix that in the room alone.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-[#183A39] px-6 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 rounded-[32px] lg:rounded-[40px] flex flex-col items-center text-center justify-center min-h-[220px] md:min-h-[260px] lg:min-h-[300px]"
            >
              <div className="mb-5 md:mb-6">
                <span className="font-jubilat text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#51D2A2] font-semibold leading-none tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#51D2A2] leading-[1.5] max-w-[240px] opacity-90">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
