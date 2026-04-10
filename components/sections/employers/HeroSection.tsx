"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F0EEE6] pt-24 lg:pt-32 pb-16 lg:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Main Content Column */}
          <div className="flex-1 space-y-8 lg:space-y-12">
            {/* Top Badges */}
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="px-5 py-2.5 lg:p-0 rounded-full bg-[#E5E1D3] border border-[#183A39]/10 lg:w-[132px] lg:h-[32px] flex items-center justify-center">
                <span className="font-jubilat text-[13px] md:text-[14px] text-[#183A39]/80 font-medium whitespace-nowrap">For Workplaces</span>
              </div>
              <div className="px-5 py-2.5 lg:p-0 rounded-full bg-white/40 border border-[#183A39]/10 lg:w-[210px] lg:h-[32px] flex items-center justify-center gap-2">
                <span className="font-jubilat text-[13px] md:text-[14px] text-[#183A39]/60 font-medium leading-none">In collaboration with</span>
                <span className="font-jubilat text-[13px] md:text-[14px] text-[#183A39]/90 font-bold leading-none">xoxo<span className="text-blue-500">day</span></span>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-jubilat text-[38px] md:text-[52px] lg:text-[60px] xl:text-[68px] text-[#183A39] leading-[1.1] font-medium tracking-tight max-w-[600px]"
              >
                Healthy families <br /> make better workers.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39]/80 leading-relaxed max-w-[500px]"
              >
                When parents spend their workday managing a child&apos;s health anxiety, food battles, or sleep fallout — everyone loses. Hlty Beings, together with xoxoday, brings family wellness into your benefits stack.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 w-full"
            >
              <button className="w-full lg:w-[375px] h-[40px] bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[13px] uppercase tracking-[0.15em] border-2 border-[#183A39] hover:opacity-90 transition-all px-6 flex items-center justify-start">
                TALK TO US
              </button>
              <button className="w-full lg:w-[375px] h-[40px] border-2 border-[#183A39]/30 text-[#183A39] rounded-full font-haptik font-bold text-[13px] uppercase tracking-[0.15em] flex items-center justify-between gap-4 px-6 hover:border-[#183A39]/60 transition-all">
                <span>DOWNLOAD PROGRAM OVERVIEW</span>
                <ArrowDown size={18} strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0 relative lg:ml-auto"
          >
            <div className="relative w-full aspect-square lg:w-[711px] lg:h-[711px] rounded-[32px] lg:rounded-[20px] overflow-hidden">
              <Image 
                src="/employer/e1.png" 
                alt="Healthy Families"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
