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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-[#183A39] p-5 md:p-10 rounded-[20px] md:rounded-[40px] flex flex-col items-start justify-center min-h-[160px] md:min-h-[280px]"
            >
              <div className="mb-4 md:mb-6">
                <span className="font-jubilat text-3xl md:text-6xl lg:text-7xl text-[#51D2A2] font-semibold leading-none tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="font-jubilat text-[11px] md:text-[16px] lg:text-[18px] text-[#51D2A2]/90 leading-tight md:leading-[1.5] max-w-[280px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
