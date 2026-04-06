"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 pt-32 md:pt-40 xl:pt-52 pb-0">
      <div className="relative w-full max-w-[420px] md:max-w-[1306px] h-[135px] md:h-auto md:aspect-[1306/415] mx-auto overflow-hidden rounded-[16px] md:rounded-[24px] shadow-lg">
        {/* Background Image Container */}
        <div className="relative z-0 w-full h-full">
          <Image
            src="/about/about1.png"
            alt="Building the Playground"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Content Overlay - Replaced text with about3 image */}
        <div className="absolute inset-x-0 inset-y-0 z-10 w-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[215px] md:max-w-[420px]"
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

      {/* Mission Text below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-[900px] mx-auto text-center px-6 mt-12 md:mt-16 lg:mt-20"
      >
        <p className="font-jubilat text-[12px] md:text-[24px] lg:text-[32px] text-[#1A2E2C] leading-tight md:leading-snug">
          Small team. Big mission. We&apos;re clinicians, designers, educators, and parents who believe the best time to build healthy habits is childhood.
        </p>
      </motion.div>
    </section>
  );
}
