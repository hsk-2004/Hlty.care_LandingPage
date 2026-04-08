"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "73%", label: "of parents say child health worries affect their work concentration" },
  { value: "4.2x", label: "more likely to stay at employers who support family wellbeing" },
  { value: "₹18k", label: "average annual cost of parent related absenteeism per employee" },
  { value: "6 wks", label: "average time to see measurable shift in family routine habits" }
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#F0EEE6] py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Stats Grid - 2x2 on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-[1400px] lg:max-w-5xl mx-auto justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-[#183A39] px-4 py-6 md:p-10 rounded-[20px] md:rounded-[40px] flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[280px] lg:w-[232px] lg:h-[176px] lg:min-h-0"
            >
              <div className="mb-2 md:mb-6 lg:mb-4">
                <span className="font-jubilat text-3xl md:text-6xl lg:text-[64px] text-[#51D2A2] font-semibold leading-none tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="font-jubilat text-[11px] md:text-[16px] lg:text-[14px] text-[#51D2A2]/90 leading-tight md:leading-[1.3] max-w-[140px] md:max-w-[280px] lg:max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
