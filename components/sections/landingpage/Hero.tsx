"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-start text-center px-4 pt-36 md:pt-60">

      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/landingpage/hero image.svg"
          alt="Explore Hero Background"
          fill
          priority
          className="object-cover object-[75%_center] md:object-center"
        />
        {/* Subtle overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-[#183A39]/10" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[28px] md:text-[64px] leading-[1.1] text-[#183A39] drop-shadow-sm px-4"
        >
          A new way for children <br className="hidden md:block" /> to grow up healthier
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans italic text-[12px] md:text-[18px] text-[#183A39] opacity-90 max-w-[260px] md:max-w-xl mx-auto leading-relaxed"
        >
          We are building a playground of stories, play and daily routines for health and nutrition.
        </motion.p>

        {/* Optional: Add a call to action or scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-2 flex justify-center"
        >
          <button className="bg-[#183A39] text-[#F0EEE6] w-[175px] h-[32px] md:w-auto md:h-auto md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 font-sans text-[10px] md:text-[14px] font-medium tracking-[0.2em] group hover:bg-[#1a3636] transition-all shadow-lg">
            GET STARTED
            <ArrowRight className="w-3 h-3 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Hero Down Image at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 md:-bottom-20 left-0 w-full z-10"
      >
        <Image
          src="/landingpage/hero down.svg"
          alt="Decoration"
          width={1440}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
