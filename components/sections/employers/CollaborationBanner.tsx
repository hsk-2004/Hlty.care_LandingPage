"use client";

import { motion } from "framer-motion";

export default function CollaborationBanner() {
  return (
    <section className="w-full bg-[#f2efe4] py-12 md:py-20 px-6 md:px-12 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1240px] mx-auto bg-[#E5E1D3] rounded-[24px] md:rounded-[40px] p-8 md:p-12 lg:p-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* Left Column: Logos Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10 shrink-0">
            {/* Hlty Beings Logo Simulation */}
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#183A39]/10" />
               <span className="font-jubilat text-2xl md:text-3xl lg:text-4xl text-[#183A39] font-bold whitespace-nowrap">Hlty Beings</span>
            </div>

            {/* X divider icon */}
            <div className="text-[#183A39]/30 text-2xl lg:text-3xl font-light">✕</div>

            {/* Xoxoday Logo Simulation */}
            <div className="flex items-center">
               <span className="font-jubilat text-2xl md:text-3xl lg:text-4xl text-[#183A39] font-bold whitespace-nowrap">xoxo<span className="text-blue-500">day</span></span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="max-w-[600px] text-center lg:text-left">
            <p className="font-jubilat text-[14px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#183A39]/80 leading-relaxed font-normal">
              Together, we&apos;ve designed a workplace wellbeing programme that combines 
              Hlty Beings&apos; family health systems with xoxoday&apos;s employee experience 
              expertise so your team gets more than perks. They get real change.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
