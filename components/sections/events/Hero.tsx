"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden bg-[#F0EEE6]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60">
        <Image
          src="/events/eback.svg"
          alt="Background Pattern"
          width={1208}
          height={337}
          className="object-contain lg:w-[1208px] lg:h-[337px]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Hero Image Instead of Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <Image
            src="/events/ehero.svg"
            alt="What are we doing at Hlty Beings?"
            width={536}
            height={135}
            className="w-full h-auto max-w-[320px] md:max-w-xl lg:max-w-[536px] lg:h-[135px]"
            priority
          />
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[320px] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl space-y-2"
        >
          <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[20px] text-[#183A39] leading-[1.3] md:leading-[1.4] font-medium">
            We&apos;ve Brought Our Playground To Health Festivals, Community Gatherings, And Children&apos;s Events. Including Hosting Our Own Healthy Hubba.
          </p>
          <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[20px] text-[#183A39] leading-[1.3] md:leading-[1.4] font-medium">
            These Spaces Help Us Test Ideas In The Real World And Refine What Children Naturally Return To.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
