"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SupportCTA() {
  return (
    <section className="w-full bg-[#f2efe4] pt-0 pb-20 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto flex flex-col items-center space-y-10 lg:space-y-14"
        >
          {/* Header */}
          <div className="space-y-4 lg:space-y-8 text-center px-4">
            <h2 className="font-jubilat text-[24px] md:text-[56px] lg:text-[42px] text-[#183A39] leading-[1.1] font-medium tracking-tight">
              Ready to support<br className="md:hidden" /> your working parents?
            </h2>

            <p className="font-jubilat text-[12px] md:text-[18px] lg:text-[24px] text-[#183A39] leading-snug lg:leading-relaxed max-w-[650px] mx-auto opacity-90 lg:opacity-100">
              <span className="block md:inline whitespace-nowrap md:whitespace-normal">Whether you have 50 employees or 5,000, we&apos;ll find the right</span>{" "}
              <span className="block md:inline whitespace-nowrap md:whitespace-normal">programme together — in partnership with xoxo days.</span>
            </p>
          </div>

          {/* Buttons: Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full max-w-[400px] md:max-w-none px-4">
            <button className="w-[375px] max-w-full md:w-auto md:min-w-[141px] h-[40px] px-8 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[12px] md:text-[14px] lg:text-[12px] uppercase tracking-[0.1em] border-2 border-[#183A39] hover:bg-[#122b2a] transition-all duration-300 flex items-center justify-start md:justify-center">
              TALK TO US
            </button>

            <button className="w-[375px] max-w-full md:w-auto md:min-w-[375px] h-[40px] px-5 border border-[#183A39] text-[#183A39] rounded-full font-haptik font-bold text-[12px] md:text-[14px] lg:text-[12px] uppercase tracking-[0.1em] flex items-center justify-between gap-2 hover:bg-[#183A39]/5 transition-all duration-300 overflow-hidden">
              <span className="whitespace-nowrap">DOWNLOAD PROGRAM OVERVIEW</span>
              <ArrowDown size={18} strokeWidth={2.5} className="flex-shrink-0 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
