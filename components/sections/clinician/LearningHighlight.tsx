"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LearningHighlight() {
  return (
    <section className="w-full py-16 md:py-24 flex justify-center bg-[#F0EEE6]">
      <div className="w-[380px] h-[632px] md:w-full md:h-auto md:max-w-4xl px-8 py-10 bg-[#183A39] rounded-[8px] flex flex-col justify-between overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-[#1c3f3f] rounded-[16px] p-2 relative border border-[#F0EEE6]/5 mb-6"
        >
          {/* Main Visual - Compact Size */}
          <div className="aspect-[16/10] rounded-[12px] overflow-hidden relative shadow-inner bg-[#e2dcc8]">
            <img 
               src="/about/bts4.jpg" 
               alt="How children learn visual" 
               className="w-full h-full object-cover opacity-90"
            />
            {/* Takeaways Badge - Compact */}
            <div className="absolute top-2 left-2 px-3 py-1 bg-[#183A39] rounded-full border border-[#51D2A2]/20">
              <span className="font-jubilat text-[10px] text-[#51D2A2] font-medium leading-none">Takeaways</span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col flex-1 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-jubilat text-[30px] md:text-[44px] text-[#F0EEE6] leading-tight font-medium"
          >
            Grounded in how children <span className="italic text-[#51D2A2]">learn</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="font-jubilat text-sm md:text-lg text-[#F0EEE6]/90 leading-relaxed font-normal">
              Every Hlty Beings poster is built on a simple insight: <span className="text-[#51D2A2] font-semibold italic">children retain health information better through illustration than instruction.</span>
            </p>

            <p className="font-jubilat text-[13px] md:text-base text-[#F0EEE6]/60 leading-relaxed font-normal">
              Our materials use age-appropriate visual metaphors designed for ages 6–16 with development consultants and are clinician-reviewed. They are intentionally co-readable — so caregivers and children engage together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto pt-4"
          >
            <button className="w-full flex items-center justify-between px-6 py-4 bg-[#51D2A2] text-[#183A39] rounded-full font-jubilat font-bold text-base md:text-lg hover:bg-[#45b78d] transition-all group">
              Request Walkthrough
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
