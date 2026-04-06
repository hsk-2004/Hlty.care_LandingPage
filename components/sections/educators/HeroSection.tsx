"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f2efe4] pt-28 pb-12 lg:pt-40 lg:pb-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col space-y-8 lg:space-y-12">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[152px] h-[32px] lg:w-fit lg:h-auto bg-[#e2dcc8] lg:px-5 lg:py-2.5 rounded-full border border-[#183a39]/5 shadow-sm flex items-center justify-center"
          >
            <span className="font-jubilat text-[12px] lg:text-[13px] text-[#183A39] font-medium opacity-90 leading-none text-center">
              IIM backed research
            </span>
          </motion.div>

          {/* Image Placeholder - User will import actual image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[24px] overflow-hidden aspect-[1.3/1] lg:aspect-[2.4/1] bg-[#e2dcc8]/40 flex items-center justify-center relative shadow-sm border border-[#183a39]/5"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#183a39]/20 p-8 text-center">
              <span className="font-jubilat text-xl lg:text-3xl uppercase tracking-[0.2em] font-bold">
                [Illustration Placeholder]
              </span>
              <span className="font-jubilat text-sm lg:text-base mt-2 opacity-60">
                (Import classroom illustration image here)
              </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="font-jubilat text-[42px] md:text-[56px] lg:text-[72px] text-[#183A39] leading-[1.05] font-medium tracking-tight">
              Wellness shouldn’t compete with academics
            </h1>

            <div className="space-y-6">
              <p className="font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39]/90 leading-relaxed max-w-2xl">
                Hlty Beings provides classroom activities, resources, and systems designed 
                specifically for educators. No prep required. No mandates. 
                Just 3-5 minute moments that turn into lifelong habits.
              </p>

              <ul className="space-y-3">
                {[
                  "Curriculum-aligned activities",
                  "Teacher-approved"
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3 font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#183A39] rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:gap-6">
            <button className="w-[337px] h-[40px] lg:w-fit lg:h-auto lg:px-10 lg:py-5 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#152e2e] transition-all shadow-md flex items-center justify-center">
              EXPLORE PLAYSHOPS
            </button>
            <button className="w-[337px] h-[40px] lg:w-fit lg:h-auto lg:px-10 lg:py-5 border border-[#183A39] text-[#183A39] rounded-full font-haptik font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#183A39] hover:text-[#F0EEE6] transition-all flex items-center justify-center gap-3">
              DOWNLOAD ACTIVITY SHEETS
              <ArrowDown size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
