"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ScienceSaysHero() {
  return (
    <section className="w-full relative">
      <div className="w-full bg-soft-yellow relative pb-35 sm:pb-35 md:pb-45 lg:pb-32 xl:pb-36">
        <div className="max-w-5xl mx-auto text-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-black mb-2 inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Science Says...
            <motion.div
              className="mt-2 w-3/4 mx-auto"
              style={{
                height: "3px",
                background:
                  "repeating-linear-gradient(to right, #FFCD6C 0px, #FFCD6C 8px, transparent 8px, transparent 16px)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            />
          </motion.h1>
          <motion.p
            className="text-primary max-w-2xl mx-auto text-sm sm:text-lg md:text-xl lg:text-2xl relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            In today&apos;s noise-filled parenting world, science helps us find
            clarity. We decode cutting-edge research into simple actions for
            healthier, happier children.
          </motion.p>
        </div>

        {/* Doctor Illustration */}
        <motion.div>
          <Image
            src="/dr-ayla-happy.png"
            alt="Doctor Illustration"
            width={450}
            height={450}
            priority
            className="absolute left-2 sm:left-4 md:left-8 lg:left-12 xl:left-16 2xl:left-20 -bottom-16 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 xl:-bottom-28 2xl:-bottom-32 z-2 w-56 sm:w-64 md:w-80 lg:w-76 xl:w-112 2xl:w-[450px] h-auto"
          />
        </motion.div>

        {/* Magnifying Glass */}
        <motion.div>
          <Image
            src="/magnifying-glass.png"
            alt="Magnifying Glass"
            width={164}
            height={164}
            className="absolute right-10 sm:right-4 md:right-24 lg:right-12 xl:right-46 2xl:right-20 bottom-16 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-20 sm:w-20 md:w-28 lg:w-28 xl:w-32 2xl:w-40 h-auto"
          />
        </motion.div>
      </div>

      {/* Wave Divider */}
      {/* <div
        className="relative w-full -mb-1 mt-0 -z-1"
        style={{ aspectRatio: "16/1" }}
      > */}
        <Image
          src="images/home/yellow-wave.svg"
          alt="Waves"
          width={1000}
          height={30}
          className="w-full"
        />
      {/* </div> */}
    </section>
  );
}
