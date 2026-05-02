"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CharacterHero() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-start text-center px-6 pt-4 md:pt-32 pb-4 md:pb-24 overflow-hidden bg-[#F0EEE6]">

      {/* Background Pattern */}
      <div className="absolute top-0 left-0 right-0 h-[550px] md:h-[650px] lg:h-[750px] z-0 pointer-events-none flex items-start justify-center pt-20 md:pt-36">
        <Image
          src="/events/eback.svg"
          alt="Background Pattern"
          width={1208}
          height={337}
          className="object-contain lg:w-[1208px] lg:h-[337px]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
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
          className="max-w-[320px] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl space-y-1 md:space-y-2 mb-4 md:mb-12"
        >
          <p className="font-jubilat text-[12px] md:text-[20px] lg:text-[20px] text-[#183A39] leading-[1.3] md:leading-[1.4] font-medium lg:whitespace-nowrap">
            HAHA Squad Is The Storytelling Arm Of Hlty Beings. A Growing Library<br />
            Of Preschool-Friendly Videos That Introduce Food, Movement, Sleep,<br />
            Emotions, And Routines Through Characters Children Return To. Each<br />
            Episode Is Built Around Repetition, Familiarity, And Small Everyday<br />
            Actions. Not Rules Or Lectures.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
