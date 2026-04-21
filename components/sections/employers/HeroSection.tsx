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
              <div className="w-[132px] h-[32px] rounded-full bg-[#E4DBCD] border border-[#BEB4A5] flex items-center justify-center">
                <span className="font-jubilat text-[13px] md:text-[14px] text-[#183A39]/80 font-medium whitespace-nowrap">For Workplaces</span>
              </div>
              <div className="w-[210px] h-[32px] rounded-full bg-[#F2F0E3] border border-[#BEB4A5] flex items-center justify-center gap-2">
                <span className="font-haptik text-[11px] md:text-[12px] text-[#183A39]/60 leading-none">In collaboration with</span>
                <div className="relative w-[52px] h-[13px]">
                  <Image 
                    src="/employer/xoxo.svg" 
                    alt="xoxoday logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Mobile Hero Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="lg:hidden mx-auto"
              >
                <div className="relative w-[379px] h-[379px] mx-auto rounded-[8px] overflow-hidden">
                  <Image 
                    src="/employer/e1.png" 
                    alt="Healthy Families"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

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

          {/* Image Column (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block flex-shrink-0 relative lg:ml-auto"
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
