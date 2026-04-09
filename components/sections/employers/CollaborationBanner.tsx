"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CollaborationBanner() {
  return (
    <section className="w-full bg-[#f2efe4] py-12 md:py-20 px-6 md:px-12 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-[380px] max-w-full h-[157px] lg:w-[1037px] lg:h-[120px] mx-auto bg-[#E5E1D3] rounded-[24px] md:rounded-[40px] p-4 md:p-12 lg:p-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full lg:px-10">

          {/* Left Column: Logos Header */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 shrink-0">
            {/* Hlty Beings Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Hlty Beings Logo"
                width={215}
                height={51}
                className="h-8 md:h-10 lg:h-[51px] w-auto object-contain"
              />
            </div>

            {/* X divider icon */}
            <div className="text-[#183A39]/30 text-xl lg:text-xl font-light">✕</div>

            {/* Xoxoday Logo Simulation */}
            <div className="flex items-center">
              <span className="font-jubilat text-xl md:text-2xl lg:text-2xl text-[#183A39] font-bold whitespace-nowrap">xoxo<span className="text-blue-500">day</span></span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="max-w-[580px] text-center lg:text-left">
            <p className="font-jubilat text-xs md:text-sm lg:text-[14px] text-[#183A39]/80 leading-snug font-normal">
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
