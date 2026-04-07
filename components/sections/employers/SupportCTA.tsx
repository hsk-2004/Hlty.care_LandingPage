"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SupportCTA() {
  return (
    <section className="w-full bg-[#f2efe4] py-20 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-[800px] mx-auto flex flex-col items-center space-y-10 lg:space-y-14"
        >
          {/* Header */}
          <div className="space-y-6 lg:space-y-8 text-center">
            <h2 className="font-jubilat text-[32px] md:text-[56px] lg:text-[72px] text-[#183A39] leading-[1.1] font-medium tracking-tight">
              Ready to support <br /> your working parents?
            </h2>

            <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[22px] text-[#183A39]/80 leading-relaxed max-w-[650px] mx-auto">
              Whether you have 50 employees or 5,000, we&apos;ll find the right programme together — in partnership with xoxo days.
            </p>
          </div>

          {/* Buttons: Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
            <button className="w-full md:w-auto min-w-[280px] lg:min-w-[340px] px-10 py-5 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[13px] md:text-[14px] uppercase tracking-[0.15em] border-2 border-[#183A39] hover:bg-[#122b2a] transition-all duration-300">
              TALK TO US
            </button>

            <button className="w-full md:w-auto min-w-[280px] lg:min-w-[340px] px-10 py-5 border-2 border-[#183A39]/30 text-[#183A39] rounded-full font-haptik font-bold text-[13px] md:text-[14px] uppercase tracking-[0.15em] flex items-center justify-between gap-4 hover:border-[#183A39]/60 transition-all duration-300">
              <span>DOWNLOAD PROGRAM OVERVIEW</span>
              <ArrowDown size={18} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
