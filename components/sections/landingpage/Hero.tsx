"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[867px] xl:h-[1131px] flex flex-col items-center justify-start text-center px-4 pt-32 sm:pt-56 md:pt-48 lg:pt-60 xl:pt-[335px]">

      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/landingpage/hero-image.png"
          alt="Explore Hero Background"
          fill
          priority
          className="object-cover object-left-top md:object-bottom scale-110 md:scale-110 lg:scale-110 xl:scale-100 -translate-y-[40px] md:translate-y-0"
        />
        {/* Subtle overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-[#183A39]/10" />

        {/* Decorative Overlay Image (Added layer with specific size) - Hidden on Mobile */}
        <div className="absolute hidden md:block left-[65%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <div className="relative w-[300px] h-[350px] md:w-[827.5px] md:h-[940.5px]">
            <Image
              src="/landingpage/hero-image1.svg"
              alt="Hero decorative overlay"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 space-y-10 -translate-x-[20px] md:-translate-x-0 xl:-translate-x-[60px]">

        {/* Public Badge - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:hidden flex justify-start -mb-6"
        >
          <div className="w-[120px] h-auto">
            <img
              src="/landingpage/public.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Top Trust Badges - Forced Single Line */}
        <div className="translate-y-[30px] md:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-nowrap items-center justify-start gap-x-2.5 md:gap-x-8 font-jubilat text-[10px] md:text-[18px] text-[#183A39]/80 whitespace-nowrap overflow-x-visible mb-0 md:mb-0"
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-base">🏛️</span>
              <span>DPIIT Registered</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-base">🎓</span>
              <span>IIM ALUMNI</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-base">👥</span>
              <span>100+ Families</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-base">🏫</span>
              <span>12 Schools</span>
            </div>
          </motion.div>
        </div>

        {/* Glassmorphism Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/5 md:bg-white/20 backdrop-blur-sm md:backdrop-blur-xl border border-white/20 md:border-white/50 rounded-[12px] md:rounded-[40px] pt-1 px-4 pb-4 md:p-14 lg:p-20 text-left space-y-4 md:space-y-8 shadow-2xl relative overflow-hidden w-[332px] h-[182px] md:w-auto mx-0"
        >
          {/* Decorative Blur and Ring (Subtle) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 blur-3xl -z-10 rounded-full" />

          {/* Main Title */}
          <div className="space-y-3 md:space-y-6">
            <h1 className="font-jubilat text-[28px] md:text-[60px] lg:text-[76px] xl:text-[84px] leading-tight md:leading-[1.1] text-[#183A39] max-w-5xl">
              A world where <span className="font-bold">health feels like home.</span>
            </h1>

            {/* Subheading */}
            <p className="font-jubilat text-[12px] md:text-[28px] lg:text-[32px] text-[#183A39]/90 max-w-4xl leading-normal md:leading-snug">
              Your child builds <span className="font-bold">healthy habits</span> here. Through <br className="hidden md:block" /> <span className="font-bold">stories, play & games.</span> Because lectures don&apos;t work.
            </p>
          </div>

          {/* Process Flow - Mobile Only */}
          <div className="flex md:hidden items-center justify-between gap-1 mt-[-6px] overflow-x-visible">
            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[64px] h-[19px] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[10px]">📖</span>
              <span className="font-jubilat text-[8px] font-bold text-[#183A39]">Stories</span>
            </div>
            <ArrowRight className="w-2 h-2 text-[#183A39]/40" />
            
            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[64px] h-[19px] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[10px]">🛝</span>
              <span className="font-jubilat text-[8px] font-bold text-[#183A39]">Play</span>
            </div>
            <ArrowRight className="w-2 h-2 text-[#183A39]/40" />
            
            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[64px] h-[19px] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[10px]">🔄</span>
              <span className="font-jubilat text-[8px] font-bold text-[#183A39]">Routine</span>
            </div>
            <ArrowRight className="w-2 h-2 text-[#183A39]/40" />
            
            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[64px] h-[19px] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[10px]">💪</span>
              <span className="font-jubilat text-[8px] font-bold text-[#183A39]">Habit</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only CTA Button - Fixed Size */}
        <div className="-translate-y-[40px] md:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:hidden flex justify-start pt-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#183A39] text-white flex items-center justify-between px-4 md:justify-center w-[149px] h-[24px] md:w-fit md:px-10 md:py-4 rounded-full font-jubilat text-[10px] md:text-[20px] font-normal md:font-bold shadow-xl hover:bg-[#183A39]/90 transition-all group"
            >
              <span className="flex-1 text-left md:text-center whitespace-nowrap">Discover Now</span>
              <ArrowRight className="w-3 h-3 md:hidden group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Hero Down Image at the bottom (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 md:hidden left-0 w-full z-10 flex flex-col items-center"
      >
        <div className="relative w-full">
          <Image
            src="/landingpage/hero-down.svg"
            alt="Decoration"
            width={1440}
            height={100}
            className="w-full h-auto"
          />
        </div>

        {/* Category Graphic at bottom */}
        <div className="w-[120px] h-auto ml-auto mr-8 -translate-y-10">
          <img
            src="/landingpage/category.svg"
            alt="Categories"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Hero Bottom Image at the bottom (Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 hidden md:block left-0 w-full z-10"
      >
        <Image
          src="/landingpage/hero-bottom.svg"
          alt="Decoration"
          width={1440}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
