"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[867px] lg:h-[1300px] flex flex-col items-center justify-start text-center px-4 pt-[clamp(128px,24vh,220px)]">

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
          className="object-cover object-left-top md:object-bottom scale-110 md:scale-110 lg:scale-100 -translate-y-[40px] md:translate-y-0"
        />
        {/* Subtle overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-[#183A39]/10" />

        {/* Decorative Overlay Image (Added layer with specific size) - Hidden on Mobile & Tablet */}
        <div className="absolute hidden lg:block left-[65%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none">
          <div className="relative w-[300px] h-[350px] md:w-[827.5px] md:h-[940.5px] lg:w-[clamp(750px,48vw,950px)] lg:h-[clamp(750px,48vw,950px)]">
            <Image
              src="/landingpage/hero-image1.svg"
              alt="Hero decorative overlay"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Hero Text SVG - Desktop Only */}
        <div className="absolute hidden lg:block left-[70%] top-[38%] min-[1536px]:max-[1679px]:top-[45%] min-[1680px]:top-[41%] min-[1850px]:top-[42%] -translate-x-1/2 -translate-y-1/2 z-[6] pointer-events-none">
          <div className="relative w-[680px] h-[680px] min-[1680px]:w-[740px] min-[1680px]:h-[740px] min-[1850px]:w-[850px] min-[1850px]:h-[850px]">
            <Image
              src="/landingpage/hero-text.svg"
              alt="Hero stylized text"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 space-y-10 -translate-x-[20px] md:-translate-x-0 lg:-translate-x-[clamp(40px,10vw,160px)]">

        {/* Top Trust Badges - Forced Single Line */}
        <div className="translate-y-[30px] md:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-nowrap items-center justify-start gap-x-[clamp(10px,2vw,32px)] font-jubilat text-[clamp(10px,1.5vw,18px)] text-[#183A39]/80 whitespace-nowrap overflow-x-visible mb-0"
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[clamp(10px,1.2vw,16px)]">🏛️</span>
              <span>Registered</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[clamp(10px,1.2vw,16px)]">🎓</span>
              <span>IIM ALUMNI</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[clamp(10px,1.2vw,16px)]">👥</span>
              <span>100+ Families</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[clamp(10px,1.2vw,16px)]">🏫</span>
              <span>12 Schools</span>
            </div>
          </motion.div>
        </div>

        {/* Glassmorphism Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-[clamp(12px,3vw,40px)] pt-1 px-4 pb-4 md:p-[clamp(16px,4vw,32px)] text-left space-y-[clamp(12px,2vw,18px)] md:space-y-[clamp(16px,3vw,24px)] shadow-2xl relative w-[clamp(332px,52vw,673px)] h-auto min-h-[182px] mx-0"
        >
          {/* Decorative Blur and Ring (Subtle) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 blur-3xl -z-10 rounded-full" />

          {/* Main Title */}
          <div className="space-y-3 md:space-y-6">
            <h1 className="font-jubilat text-[clamp(28px,3.5vw,36px)] leading-tight text-[#183A39] lg:max-w-none lg:whitespace-nowrap">
              A world where <span className="font-bold">health feels like home.</span>
            </h1>

            {/* Subheading */}
            <p className="font-jubilat text-[clamp(12px,1.5vw,20px)] text-[#183A39]/90 max-w-4xl leading-normal md:leading-snug">
              Your child builds <span className="font-bold">healthy habits</span> here. Through <br className="hidden lg:block" /> <span className="font-bold">stories, play & games.</span> Because lectures don&apos;t work.
            </p>
          </div>

          {/* Process Flow - Unified for Mobile/Tablet */}
          <div className="flex items-center justify-start gap-0 mt-[-6px] overflow-x-visible">
            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[clamp(64px,8vw,100px)] h-[clamp(19px,2.5vw,30px)] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[clamp(10px,1.2vw,14px)]">📖</span>
              <span className="font-jubilat text-[clamp(8px,1vw,12px)] font-bold text-[#183A39]">Stories</span>
            </div>
            <img src="/landingpage/arrow.svg" alt="arrow" className="w-[clamp(8px,1vw,12px)] h-[clamp(8px,1vw,12px)] lg:w-[16px] lg:h-[8px]" />

            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[clamp(64px,8vw,100px)] h-[clamp(19px,2.5vw,30px)] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[clamp(10px,1.2vw,14px)]">🛝</span>
              <span className="font-jubilat text-[clamp(8px,1vw,12px)] font-bold text-[#183A39]">Play</span>
            </div>
            <img src="/landingpage/arrow.svg" alt="arrow" className="w-[clamp(8px,1vw,12px)] h-[clamp(8px,1vw,12px)] lg:w-[16px] lg:h-[8px]" />

            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[clamp(64px,8vw,100px)] h-[clamp(19px,2.5vw,30px)] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[clamp(10px,1.2vw,14px)]">🔄</span>
              <span className="font-jubilat text-[clamp(8px,1vw,12px)] font-bold text-[#183A39]">Routine</span>
            </div>
            <img src="/landingpage/arrow.svg" alt="arrow" className="w-[clamp(8px,1vw,12px)] h-[clamp(8px,1vw,12px)] lg:w-[16px] lg:h-[8px]" />

            <div className="bg-[#F0EEE6]/80 backdrop-blur-sm border border-[#183A39]/10 rounded-full w-[clamp(64px,8vw,100px)] h-[clamp(19px,2.5vw,30px)] flex items-center justify-center gap-1 shadow-sm">
              <span className="text-[clamp(10px,1.2vw,14px)]">💪</span>
              <span className="font-jubilat text-[clamp(8px,1vw,12px)] font-bold text-[#183A39]">Habit</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only CTA Button - Fixed Size */}
        <div className="-translate-y-[40px] md:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-start pt-3"
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#183A39] text-white flex items-center justify-between px-4 w-[clamp(149px,20vw,240px)] h-[clamp(24px,4vw,48px)] rounded-full font-haptik text-[clamp(10px,1.5vw,16px)] lg:text-[16px] font-medium shadow-xl hover:bg-[#183A39]/90 transition-all group"
              >
                <span className="flex-1 text-left whitespace-nowrap">Get started</span>
                <ArrowRight className="w-[clamp(12px,1.5vw,20px)] h-[clamp(12px,1.5vw,20px)] group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Down Image at the bottom (Mobile/Tablet) */}
      <div className="absolute bottom-[-15px] lg:hidden left-0 w-full z-[40] pointer-events-none">
        <Image
          src="/landingpage/hero-down.svg"
          alt="Decoration"
          width={1440}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Category Graphic - Separate Mobile/Tablet Asset */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="lg:hidden absolute bottom-[60px] right-8 w-[clamp(120px,15vw,200px)] h-auto z-[40] pointer-events-none"
      >
        <img
          src="/landingpage/category.svg"
          alt="Categories"
          className="w-full h-auto object-contain"
        />
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
