"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-jubilat text-[32px] md:text-[42px] text-[#183A39] leading-tight max-w-xl"
      >
        Ready to bring wellness into your classroom?
      </motion.h2>

      <div className="flex flex-col items-center w-full max-w-md gap-4 lg:flex-row lg:max-w-3xl lg:justify-center">
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-[375px] h-[40px] lg:w-fit lg:h-auto bg-[#183A39] text-[#F0EEE6] lg:px-8 lg:py-4 rounded-[24px] font-haptik font-bold text-[13px] lg:text-[14px] uppercase tracking-[0.1em] hover:bg-[#152e2e] transition-colors flex items-center justify-center"
        >
          SCHEDULE A FREE 15 MIN CONSULTATION
        </motion.button>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[375px] h-[40px] lg:w-fit lg:h-auto border border-[#183a39] text-[#183A39] lg:px-8 lg:py-4 rounded-[24px] font-haptik font-bold text-[13px] lg:text-[14px] uppercase tracking-[0.1em] flex items-center justify-center gap-3 hover:bg-[#183a39] hover:text-[#F0EEE6] transition-all"
        >
          DOWNLOAD TEACHER SAMPLE
          <ArrowDown size={18} strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  );
}
