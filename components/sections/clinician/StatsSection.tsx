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
    <section className="w-full bg-[#F0EEE6] py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <p className="font-jubilat text-[#183A39] text-base md:text-xl leading-relaxed">
            The average pediatric consultation is <span className="text-[#51D2A2] font-semibold">under 12 minutes.</span> Yet families 
            arrive with months of accumulated confusion about food, screen time, 
            sleep, and growth. You can&apos;t fix that in the room alone.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#183A39] p-6 md:p-12 rounded-[32px] md:rounded-[48px] flex flex-col justify-center min-h-[180px] md:min-h-[280px]"
            >
              <div className="mb-4">
                <span className="font-haptik text-[40px] md:text-[80px] text-[#51D2A2] font-bold leading-none tracking-tighter">
                  {stat.value}
                </span>
              </div>
              <p className="font-jubilat text-xs md:text-lg text-[#F0EEE6]/80 leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
