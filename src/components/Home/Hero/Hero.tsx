"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <section className="w-full bg-[#D7FBF4] relative py-8 sm:py-12 md:py-16 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Left Image - Mobile: full width, Desktop: half width */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/home/hero.png"
              alt="Hero Left"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Content - Mobile: full width, Desktop: half width */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-2 flex flex-col"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Right Image */}
            <div className="w-full mb-6 lg:mb-8">
              <Image
                src="/images/home/hero-right.png"
                alt="Hero Right"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <motion.div
              className="w-full flex flex-col items-start lg:items-end justify-end mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.p
                className={`text-primary text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed mb-4 lg:mb-6 w-full lg:w-5/6 ${montserrat.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our children are growing up{" "}
                <span className="font-bold">heavier, slower, and sadder.</span>{" "}
                But behind every healthy child is a parent who paused,
                reflected, and chose differently.
              </motion.p>
              <motion.p
                className="text-primary font-bold text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed w-full lg:w-5/6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We&apos;re here to make that choice easier — with playful tools,
                joyful routines, and habits that heal.
              </motion.p>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              className="w-full lg:w-3/4 flex flex-col items-center lg:items-end justify-end relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="w-full lg:w-fit flex flex-col items-center space-y-3 sm:space-y-4 relative">
                {/* Sparkle Up */}

                {/* Parent Collective Button */}
                <motion.a
                  target="_blank"
                  href="https://chat.whatsapp.com/DsRfG3TSzxd5X3Yscy7Fvm?mode=ems_share_t"
                  className="bg-bright-teal text-white px-5 py-1 sm:px-5 sm:py-1 lg:px-6 lg:py-1 font-semibold text-xl sm:text-base lg:text-2xl hover:bg-bright-teal/90 hover:shadow-lg hover:shadow-bright-teal/25 transition-all duration-300 w-7/8 sm:w-auto text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{
                       duration: 0.6,
                       delay: 1.2,
                       ease: "easeOut",
                     }}
                   >
                    <Image
                      src="/images/home/sparkle-up.svg"
                      alt="Sparkle"
                      width={32}
                      height={32}
                      className="absolute -top-4 -left-4 sm:hidden md:hidden lg:block lg:-top-8 lg:-left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                  </motion.div>
                  Join our Parent Collective
                </motion.a>

                {/* Clinical Collective Button */}
                <motion.a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScHNuEelHfwplb3nE4icYjgGuD0RSDf-NzekFnvG13Tg5QiRQ/viewform"
                  className="bg-[#FFB21E] text-white px-6 py-1 sm:px-5 sm:py-1 lg:px-5 lg:py-1 font-semibold text-xl sm:text-base lg:text-2xl hover:bg-[#FFB21E]/90 hover:shadow-lg hover:shadow-[#FFB21E]/25 transition-all duration-300 w-7/8 sm:w-auto text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join our Clinical Collective
                  {/* Sparkle Down */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="/images/home/sparkle-down.svg"
                      alt="Sparkle"
                      width={32}
                      height={32}
                      className="absolute -bottom-4 -right-4 sm:hidden md:hidden lg:block lg:-bottom-8 lg:-right-9 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          className="my-6 sm:my-8 lg:my-10 pb-6 sm:pb-8 lg:pb-10 text-center text-2xl sm:text-2xl md:text-2xl lg:text-5xl xl:text-5xl font-bold text-primary leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
        >
          Behind every hlty child is a heroic parent
        </motion.h1>
      </div>

      <Image
        src="/images/home/grass.svg"
        alt="waves"
        width={1000}
        height={1000}
        className="absolute -bottom-2 lg:-bottom-10 left-0 w-full"
      />
    </section>
  );
};

export default Hero;
