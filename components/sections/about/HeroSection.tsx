"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-0 md:px-6 lg:px-8 pt-0 md:pt-40 xl:pt-52 pb-0">
      <div className="relative w-full max-w-[1306px] mx-auto overflow-hidden rounded-none md:rounded-[24px] shadow-sm">
        {/* Background Image Container */}
        <div className="relative z-0">
          {/* Desktop Image */}
          <div className="hidden md:block relative aspect-[1306/415]">
            <Image
              src="/about/about1.png"
              alt="Building the Playground"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          {/* Mobile Image - Determines height */}
          <div className="block md:hidden relative w-full">
            <Image
              src="/about/about4.png"
              alt="Building the Playground"
              width={800}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Overlay - Replaced text with about3 image */}
        <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-start md:justify-center text-center px-4 pt-72 md:pt-48 xl:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[205.16px] md:max-w-[420px]"
          >
            <Image
              src="/about/about3.svg"
              alt="Hlty Beings"
              width={420}
              height={106}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
