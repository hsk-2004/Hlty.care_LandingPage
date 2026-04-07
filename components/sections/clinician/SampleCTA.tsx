"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SampleCTA() {
  return (
    <section className="w-full bg-[#F0EEE6] py-20 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-[1000px] mx-auto space-y-12 md:space-y-16"
        >
          {/* Title */}
          <h2 className="font-jubilat text-[36px] md:text-[56px] lg:text-[72px] text-[#183A39] leading-[1.1] font-medium tracking-tight">
            Start with a free sample of our posters
          </h2>

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Download Button */}
            <button className="w-full md:w-auto min-w-[280px] lg:min-w-[340px] flex items-center justify-between px-8 py-5 md:py-6 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] hover:bg-[#122b2a] transition-all group shadow-lg">
              <span className="flex-1 text-center">DOWNLOAD SAMPLE POSTERS</span>
              <div className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#F0EEE6]/10 group-hover:translate-y-1 transition-transform">
                <ArrowDown size={18} strokeWidth={2.5} />
              </div>
            </button>

            {/* Walkthrough Button */}
            <button className="w-full md:w-auto min-w-[280px] lg:min-w-[340px] px-8 py-5 md:py-6 border-2 border-[#183A39] text-[#183A39] rounded-full font-haptik font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] hover:bg-[#183A39] hover:text-[#F0EEE6] transition-all duration-300">
              BOOK A 20 MIN WALKTHROUGH
            </button>
          </div>

          {/* Subtext */}
          <p className="font-jubilat text-[14px] md:text-[17px] lg:text-[18px] text-[#183A39] font-medium tracking-tight">
            No credit card. No commitment. Instant PDF download.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
