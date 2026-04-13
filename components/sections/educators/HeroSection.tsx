"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f2efe4] pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">

          {/* Left Content Column */}
          <div className="flex flex-col lg:w-[45%] order-2 lg:order-1 space-y-8 lg:space-y-0 lg:pt-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center justify-center lg:w-[152px] lg:h-[32px] px-4 py-1.5 lg:px-0 lg:py-0 rounded-full border border-[#183a39]/20 bg-[#e2dcc8]/30 w-fit lg:-mt-20 lg:mb-6"
            >
              <span className="font-jubilat text-[11px] lg:text-[12px] text-[#183A39] font-medium tracking-wide uppercase">
                IIM backed research
              </span>
            </motion.div>

            {/* Description & List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 lg:mb-52"
            >
              <p className="font-jubilat text-[16px] md:text-[18px] lg:text-[20px] text-[#183A39] leading-[1.6] max-w-[480px]">
                Hlty Beings provides classroom activities, resources, and systems designed
                specifically for educators. No prep required. No mandates.
                Just 3-5 minute moments that turn into lifelong habits.
              </p>

              <ul className="space-y-2 pl-1">
                {[
                  "Curriculum-aligned activities",
                  "Teacher-approved"
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3 font-jubilat text-[15px] lg:text-[20px] text-[#183A39]">
                    <span className="w-1.5 h-1.5 bg-[#183A39] rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Buttons Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 max-w-[340px]"
            >
              <button className="w-full lg:w-[337px] lg:h-[40px] flex items-center justify-center bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[11px] lg:text-[12px] uppercase tracking-[0.15em] hover:bg-[#122b2a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                EXPLORE PLAYSHOPS
              </button>
              <button className="w-full lg:w-[337px] lg:h-[40px] border-2 border-[#183A39] text-[#183A39] rounded-full font-haptik font-bold text-[11px] lg:text-[12px] uppercase tracking-[0.15em] hover:bg-[#183A39] hover:text-[#F0EEE6] transition-all flex items-center justify-between px-8 group">
                DOWNLOAD ACTIVITY SHEETS
                <ArrowDown size={18} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-auto order-1 lg:order-2 w-full flex justify-end"
          >
          <div className="w-full lg:w-[709px] lg:h-[577px] aspect-[4/3] lg:aspect-auto rounded-[20px] overflow-hidden relative group shrink-0">
            <Image
              src="/educators/educator1.svg"
              alt="Educators Illustration"
              fill
              priority
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#183a39]/5 to-transparent pointer-events-none" />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
