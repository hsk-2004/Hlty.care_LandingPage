"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="w-full my-34 bg-white flex flex-col items-center px-4 overflow-hidden">
      <motion.h2
        className="text-primary font-bold text-3xl sm:text-4xl md:text-5xl text-center inline-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works?
        <div
          className="mt-4 w-3/4 mx-auto"
          style={{
            height: "3px",
            background:
              "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
          }}
        />
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-18 mt-8 sm:mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <Image
            src="/book.png"
            alt="Prelims"
            height={256}
            width={256}
            priority
            className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 lg:mr-12"
          />
          <p className="text-center text-primary text-lg sm:text-xl font-bold mt-4">
            Prelims
          </p>
          <p className="text-center text-primary text-base sm:text-lg font-bold mt-2">
            Oct 10-31, 2025
          </p>
          <p className="text-primary text-xs sm:text-sm font-light text-center max-w-xs">
            To be conducted at a set time, date, and center to be announced soon.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <Image
            src="/curly-arrow.png"
            alt="Arrow"
            height={128}
            width={128}
            priority
            className="object-contain lg:-mt-20 lg:-ml-8 w-16 sm:w-20 md:w-24 lg:w-40 rotate-90 lg:rotate-0"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <Image
            src="/button.png"
            alt="Finals"
            height={256}
            width={256}
            priority
            className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <p className="text-center text-primary text-lg sm:text-xl font-bold mt-4">
            Finals
          </p>
          <p className="text-center text-primary text-base sm:text-lg font-bold mt-2">
            Nov 15/16, 2025
          </p>
          <p className="text-primary text-xs sm:text-sm font-light text-center max-w-xs">
            Top 6 teams compete at the <br /> Childhood Obesity Conference
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
