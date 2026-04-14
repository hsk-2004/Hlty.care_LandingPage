"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden bg-[#F0EEE6]">
      
      {/* Background Scattered Squares/Dots Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60">
        {/* Desktop Background */}
        <Image
          src="/explore/blog-back.svg"
          alt="Background Pattern"
          width={1228}
          height={390}
          className="object-contain hidden md:block scale-125"
          priority
        />
        {/* Mobile Background */}
        <Image
          src="/explore/blog-mback.svg"
          alt="Background Pattern Mobile"
          width={334}
          height={307}
          className="object-contain block md:hidden scale-150"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-haptik text-[12px] md:text-[20px] lg:text-[24px] text-[#183A39] tracking-[0.1em] uppercase font-medium mb-2 md:mb-4"
        >
          WHAT ARE WE DOING AT
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-bitcountink text-[48px] md:text-[90px] lg:text-[140px] xl:text-[160px] leading-[0.9] mb-6 md:mb-10 !text-[#183A39] -mt-2 lg:-mt-4"
        >
          Hlty Beings
        </motion.h1>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[320px] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl space-y-2"
        >
          <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-[#183A39] leading-[1.3] md:leading-[1.4] font-medium">
            We&apos;ve Brought Our Playground To Health Festivals, Community Gatherings, And Children&apos;s Events. Including Hosting Our Own Healthy Hubba.
          </p>
          <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-[#183A39] leading-[1.3] md:leading-[1.4] font-medium">
            These Spaces Help Us Test Ideas In The Real World And Refine What Children Naturally Return To.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
