"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 pt-24 pb-12">
      <div className="relative w-full max-w-[1290px] mx-auto aspect-[1290/322] overflow-hidden rounded-[16px] shadow-sm">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/parents/p1.png"
            alt="Family health"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center gap-2 md:gap-4 pointer-events-none"
          >
            <h1 className="font-jubilat font-normal text-[20px] md:text-[32px] lg:text-[42px] leading-[1.4] text-[#183A39] flex flex-col items-center gap-0">
              <span className="bg-[#F0EEE6]/80 backdrop-blur-sm px-8 h-[40px] flex items-center justify-center whitespace-nowrap">
                Health doesn&apos;t need extra time.
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Decoration Image Below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full max-w-[1164px] mx-auto mt-4 md:mt-8 flex justify-center"
      >
        <Image
          src="/parents/parent2.svg"
          alt="Decoration"
          width={1164}
          height={55}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
