"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SampleCTA() {
  return (
    <section className="w-full bg-[#f2efe4] py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-xl mx-auto space-y-8"
        >
          <h2 className="font-jubilat text-3xl md:text-5xl text-[#183A39] leading-tight font-medium">
            Start with a free sample of our posters
          </h2>

          <div className="flex flex-col gap-4">
            <button className="w-full flex items-center justify-between px-10 py-5 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[14px] uppercase tracking-widest hover:bg-[#1a3636] transition-all group">
              DOWNLOAD SAMPLE POSTERS
              <div className="bg-[#F0EEE6]/20 p-2 rounded-full group-hover:translate-y-1 transition-transform">
                <ArrowDown size={18} strokeWidth={3} />
              </div>
            </button>

            <button className="w-full px-10 py-5 border border-[#183A39] text-[#183A39] rounded-full font-haptik font-bold text-[14px] uppercase tracking-widest hover:bg-[#183A39] hover:text-[#F0EEE6] transition-all">
              BOOK A 20 MIN WALKTHROUGH
            </button>
          </div>

          <p className="font-jubilat text-sm md:text-base text-[#183A39] font-bold leading-relaxed px-4">
            No credit card. No commitment.<br />
            Instant PDF download.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
