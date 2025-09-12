"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="text-center relative text-primary bg-soft-green w-full py-8 min-h-[450px] h-[45vh] sm:h-[40vh] sm:min-h-[400px] md:h-[40vh] md:min-h-[400px] lg:h-[45vh] lg:min-h-[400px] xl:h-[35vh] xl:min-h-[400px] 2xl:h-[40vh] 2xl:min-h-[400px] flex flex-col items-center justify-center">
        {/* Center Content */}
        <motion.div
          className="flex items-center z-10 justify-center relative max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col">
            <motion.h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold inline-block">
              <motion.div>
                <Image
                  src="/nami-happy.png"
                  alt="Nami Character"
                  width={150}
                  height={150}
                  priority
                  className="absolute -left-30 -top-25 sm:-left-45 sm:-top-20 lg:hidden"
                />
              </motion.div>
              About Us
              <motion.div
                className="flex justify-center mt-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div
                  className="mt-1 w-3/4 mx-auto"
                  style={{
                    height: "3px",
                    background:
                      "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
                  }}
                />
              </motion.div>
            </motion.h1>
          </div>
        </motion.div>

        {/* Main description */}
        <motion.div
          className="text-lg text-[22px] sm:max-w-[50%] sm:text-[16px] lg:max-w-[50%] lg:text-[21px] 2xl:text-2xl font-medium mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-5xl mx-auto z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We bring together science, storytelling, and a little humor to create
          small wins that last.
        </motion.div>

        {/* Secondary description */}
        <motion.div
          className="relative mt-4 text-[14px] sm:text-[14px] sm:max-w-[50%] lg:max-w-[50%] lg:text-[16px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-6xl mx-auto z-10 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div>
            <Image
              src="/nami-happy.png"
              alt="Nami Character"
              width={150}
              height={150}
              priority
              className="absolute -left-100 -bottom-30 hidden lg:block w-104"
            />
          </motion.div>
          We are a team of clinicians, designers, educators, technologists, and
          parents on a shared mission: to save childhood and secure the future
          of health.
          <motion.div
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/kai-happy.png"
              alt="Kai Character"
              width={150}
              height={150}
              priority
              className="absolute right-4 -bottom-46 z-0  sm:-right-20 sm:-bottom-20 sm:w-32 md:-right-30 md:-bottom-24 md:w-36 lg:-right-40 lg:-bottom-28 lg:w-50 xl:-right-40 xl:-bottom-42 xl:w-64  2xl:-right-60 2xl:-bottom-36 2xl:w-56"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* <div className="relative w-full h-8 -mb-1 mt-0 -z-1"> */}
        <Image
          src="/waves-light.svg"
          alt="Waves"
          width={1000}
          height={30}
          priority
          className="w-full"
        />
      {/* </div> */}
    </section>
  );
};

export default Hero;
