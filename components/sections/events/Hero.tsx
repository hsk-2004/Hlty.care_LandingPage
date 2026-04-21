"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-4 pb-0 md:pt-32 md:pb-12 overflow-hidden bg-[#F0EEE6]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Mobile Background */}
        <div className="block md:hidden w-[520px] h-[236px] relative shrink-0 -mt-4">
          <Image
            src="/events/hero-back-m.svg"
            alt="Background Pattern Mobile"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Desktop Background */}
        <Image
          src="/events/eback.svg"
          alt="Background Pattern Desktop"
          width={1208}
          height={337}
          className="hidden md:block object-contain lg:w-[1208px] lg:h-[337px]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center md:-mt-10 lg:-mt-16">
        {/* Main Hero Image Instead of Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-8"
        >
          <Image
            src="/events/ehero.svg"
            alt="What are we doing at Hlty Beings?"
            width={536}
            height={135}
            className="w-[265px] h-[67px] md:w-full md:h-auto md:max-w-xl lg:max-w-[536px] lg:h-[135px]"
            priority
          />
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[320px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-0"
        >
          <p className="font-jubilat text-[12px] md:text-[20px] lg:text-[20px] text-[#183A39] leading-[1.1] font-medium">
            <span className="whitespace-nowrap">We&apos;ve brought our playground to health festivals, community gatherings,</span><br />
            <span className="whitespace-nowrap">and children&apos;s events. including hosting our own Healthy Hubba.</span>
          </p>
          <p className="font-jubilat text-[12px] md:text-[20px] lg:text-[20px] text-[#183A39] leading-[1.1] font-medium">
            <span className="whitespace-nowrap">These spaces help us test ideas in the real world and refine what</span><br />
            <span className="whitespace-nowrap">children naturally return to.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
