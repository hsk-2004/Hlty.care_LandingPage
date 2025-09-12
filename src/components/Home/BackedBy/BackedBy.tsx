"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/**
 * The BackedBy component is a simple component that displays a
 * grid of empty divs that are styled to look like a company logo.
 *
 * The component is responsive and will adjust its layout based on
 * the screen size. On smaller screens, the grid will be a single
 * column, on medium screens it will be two columns, and on larger
 * screens it will be four columns.
 *
 * The component does not accept any props.
 */
const BackedBy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section className={`w-full py-12 sm:py-16 lg:py-20 text-black ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-3xl text-primary text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Backed By
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg transition-shadow"
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/home/microsoft.png"
              alt="Microsoft"
              width={120}
              height={60}
              className="object-contain w-3/4 sm:w-auto"
            />
          </motion.div>
          <motion.div 
            className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg transition-shadow"
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/home/startup-india.png"
              alt="Startup India"
              width={120}
              height={60}
              className="object-contain w-3/4 sm:w-auto"
            />
          </motion.div>
          <motion.div 
            className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg transition-shadow"
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/home/iim.png"
              alt="IIM"
              width={120}
              height={60}
              className="object-contain w-3/4 sm:w-auto"
            />
          </motion.div>
          <motion.div 
            className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg transition-shadow"
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/home/atal.png"
              alt="ATAL"
              width={120}
              height={60}
              className="object-contain w-3/4 sm:w-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackedBy;
