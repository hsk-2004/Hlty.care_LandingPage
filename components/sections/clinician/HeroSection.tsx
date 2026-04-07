"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#f2efe4] pt-24 pb-16 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/50 border border-[#183A39]/10 backdrop-blur-sm">
              <span className="font-jubilat text-[14px] md:text-[16px] text-[#183A39]/70 font-medium">
                Reviewed by pediatric dietitians & general physicians
              </span>
            </div>
            
            <h1 className="font-jubilat text-[44px] md:text-[64px] lg:text-[76px] text-[#183A39] leading-[1.1] font-medium tracking-tight">
              Activate healthcare spaces
            </h1>
            
            <p className="font-jubilat text-lg md:text-xl text-[#183A39]/80 leading-snug max-w-xl">
              Hlty Beings turns clinic walls, corridors, and waiting areas into structured health-education environments.
            </p>

            <div className="flex pt-2">
              <button className="flex items-center gap-6 px-10 py-5 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#152e2e] transition-all shadow-lg group">
                DOWNLOAD SAMPLE POSTERS
                <div className="bg-[#F0EEE6]/20 p-2 rounded-full group-hover:translate-y-1 transition-transform">
                  <ArrowDown size={18} strokeWidth={3} />
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[550px] md:h-auto md:aspect-square flex items-center justify-center pt-8"
          >
            {/* Card 1: Hiding Sugar */}
            <motion.div 
               initial={{ x: -20, y: 0, rotate: -2 }}
               animate={{ x: 0, y: -40, rotate: -5 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="absolute top-10 left-0 w-[240px] sm:w-[280px] bg-[#e2dcc8] p-8 rounded-[24px] shadow-xl border border-[#183a39]/5 z-20"
            >
              <div className="relative mb-8">
                {/* SVG Illustration: Cereal Bowl */}
                <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto transform -rotate-6">
                  <path d="M10 50C10 72.0914 27.9086 90 50 90H70C92.0914 90 110 72.0914 110 50V40H10V50Z" fill="#FBBF24" />
                  <path d="M110 40C110 34.4772 105.523 30 100 30H20C14.4772 30 10 34.4772 10 40H110Z" fill="#F59E0B" />
                  <rect x="25" y="45" width="70" height="30" rx="4" fill="white" fillOpacity="0.4" />
                  <path d="M100 0L85 45" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-haptik text-[10px] uppercase tracking-[0.2em] text-[#183A39]/50 font-bold block mb-2">READING LABELS</span>
              <h3 className="font-jubilat text-3xl text-[#183A39] font-medium mb-3">Hiding Sugar</h3>
              <p className="font-jubilat text-[#183A39]/70 text-base leading-snug">
                Fructose syrup, maltose, dextrose, all mean sugar on a label.
              </p>
            </motion.div>

            {/* Card 2: Sleep Routine */}
            <motion.div 
               initial={{ x: 20, y: 40, rotate: 2 }}
               animate={{ x: 20, y: 100, rotate: 3 }}
               transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
               className="absolute top-24 right-0 w-[240px] sm:w-[280px] bg-[#d4ceba] p-8 rounded-[24px] shadow-xl border border-[#183a39]/5 z-10"
            >
               <div className="relative h-24 mb-6">
                  {/* SVG Illustration: Lamp */}
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto transform translate-y-4">
                    <path d="M30 60L70 60L85 20L15 20L30 60Z" fill="#60A5FA" />
                    <rect x="45" y="60" width="10" height="20" fill="#92400E" />
                    <rect x="40" y="78" width="20" height="2" fill="#92400E" />
                    <circle cx="75" cy="55" r="3" fill="#FBBF24" opacity="0.6" />
                  </svg>
              </div>
              <span className="font-haptik text-[10px] uppercase tracking-[0.2em] text-[#183A39]/50 font-bold block mb-2">REST</span>
              <h3 className="font-jubilat text-3xl text-[#183A39] font-medium mb-3">Sleep Routine</h3>
              <p className="font-jubilat text-[#183A39]/70 text-base leading-snug">
                Wind down rituals. No screens 1 hour before bed. Consistent wake time.
              </p>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-1/4 w-32 h-32 bg-[#51D2A2] rounded-full blur-[100px] opacity-20"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background Texture/Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#183A39]/5 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
