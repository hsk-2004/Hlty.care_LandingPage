"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// === CONFIGURATION ===
const startDate = new Date("2025-01-01T00:00:00Z"); // Starting from Jan 1, 2025
const baseAdults = 930000000; // Adults as of Jan 1, 2025
const baseChildren = 175000000; // Children as of Jan 1, 2025

const adultRatePerSecond = 1.14; // 36 million/year
const childRatePerSecond = 0.24; // 7.5 million/year

const Tomorrow = () => {
  const [obeseAdults, setObeseAdults] = useState(baseAdults);
  const [obeseChildren, setObeseChildren] = useState(baseChildren);
  const [showAdultsTooltip, setShowAdultsTooltip] = useState(false);
  const [showChildrenTooltip, setShowChildrenTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function formatNumber(n: number): string {
    return n.toLocaleString("en-IN"); // Use 'en-US' if needed
  }

  const updateObesityClock = React.useCallback(() => {
    const now = new Date();
    const secondsPassed = Math.floor(
      (now.getTime() - startDate.getTime()) / 1000
    );

    const currentAdults = Math.floor(
      baseAdults + secondsPassed * adultRatePerSecond
    );
    const currentChildren = Math.floor(
      baseChildren + secondsPassed * childRatePerSecond
    );

    setObeseAdults(currentAdults);
    setObeseChildren(currentChildren);
  }, []);

  useEffect(() => {
    updateObesityClock();
    const interval = setInterval(updateObesityClock, 1000);
    return () => clearInterval(interval);
  }, [updateObesityClock]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAdultsInfoClick = () => {
    if (isMobile) {
      setShowAdultsTooltip(!showAdultsTooltip);
      setShowChildrenTooltip(false); // Close other tooltip
    }
  };

  const handleChildrenInfoClick = () => {
    if (isMobile) {
      setShowChildrenTooltip(!showChildrenTooltip);
      setShowAdultsTooltip(false); // Close other tooltip
    }
  };

  // Close tooltips when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && (showAdultsTooltip || showChildrenTooltip)) {
        const target = event.target as Element;
        // Check if click is outside both tooltip containers and info icons
        if (!target.closest('.tooltip-container') && !target.closest('.info-icon')) {
          setShowAdultsTooltip(false);
          setShowChildrenTooltip(false);
        }
      }
    };

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, showAdultsTooltip, showChildrenTooltip]);

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
    <div className="w-full flex justify-center flex-col items-center overflow-hidden">
      <div className="bg-soft-yellow w-full text-primary py-12">
        {/* Heading Part */}
        <motion.h2
          className="font-aleo font-extrabold text-3xl px-4 md:text-3xl lg:text-5xl  lg:leading-[84px] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Build a Healthier Tomorrow, Today
        </motion.h2>
        <motion.h3
          className="mt-4 text-primary font-montserrat px-4 text-xl md:text-2xl font-medium leading-[30px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Today, over <span className="font-aleo font-extrabold">400M</span> kids are overweight in the world. Start reversing the clock
        </motion.h3>
        {/* <div className="h-1 mt-1 flex justify-center lg:-ml-32">
          <div className="flex -ml-16">
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
            <div className="w-4 h-1 bg-[#FFCD6C] rounded-full"></div>
            <div className="w-4 h-1 bg-transparent"></div>
          </div>
        </div> */}

        {/* Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.instagram.com/hltybeings?igsh=MWdoMTExeDNpajhzcg=="
            className="bg-[#FFB21E] font-aleo font-[700] text-white px-4 py-2 rounded-md text-center relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the movement
            <motion.div>
              <Image
                src="images/home/arrow-above-green.svg"
                alt="arrow"
                width={40}
                height={40}
                className="absolute -top-7 -right-12"
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Grid View */}
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 pt-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div>
            <Image
              src="images/home/crown.svg"
              alt="Grid View"
              width={100}
              height={100}
              className="hidden lg:block absolute -top-5 -left-15"
            />
          </motion.div>

          {/* Grid Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Grid Item 1 */}
            <motion.div
              className="bg-white rounded-3xl shadow-md p-10 hover:shadow-lg transition-shadow relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-2">
                <p
                  className={`text-primary text-xl lg:text-2xl font-bold leading-6 ${montserrat.className}`}
                >
                  👨🏻 Obese Adults
                </p>
                <div className="relative group">
                  <div 
                    className="info-icon w-5 h-5 rounded-full border-2 border-primary text-primary text-xs flex items-center justify-center cursor-help hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={handleAdultsInfoClick}
                  >
                    i
                  </div>
                  <div className={`tooltip-container absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded-lg p-3 transition-opacity duration-300 pointer-events-none z-10 ${
                    isMobile ? (showAdultsTooltip ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
                  } ${
                    isMobile 
                      ? 'w-72 left-1/2 transform -translate-x-1/2 max-w-[calc(100vw-2rem)]' 
                      : 'w-80 left-1/2 transform -translate-x-1/2'
                  }`}>
                    <div className="text-center">
                      <p className="font-semibold mb-2">🧾 Data Sources & Estimation:</p>
                      <p className="text-xs leading-relaxed">
                        Estimates based on WHO (2024), UNICEF, Global Obesity Observatory, JAMA Pediatrics (2024), and internal analysis as of May 2025. &quot;Obese Children&quot; includes ages 0–19, as per WHO/JAMA definitions. Malnutrition reflects stunted, wasted, or underweight status (not additive). Population base used: 1.44 billion (India). For full methodology, visit who.int and jamapediatrics.org.
                      </p>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
              <h3
                className={`mt-4 text-4xl lg:text-5xl font-extrabold text-primary ${montserrat.className}`}
              >
                {formatNumber(obeseAdults)}+
              </h3>
            </motion.div>

            {/* Grid Item 2 */}
            <motion.div
              className="bg-white rounded-3xl shadow-md p-10 hover:shadow-lg transition-shadow relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-2">
                <p
                  className={`text-primary text-xl lg:text-2xl font-bold leading-6 ${montserrat.className}`}
                >
                  🧒 Obese Children
                </p>
                <div className="relative group">
                  <div 
                    className="info-icon w-5 h-5 rounded-full border-2 border-primary text-primary text-xs flex items-center justify-center cursor-help hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={handleChildrenInfoClick}
                  >
                    i
                  </div>
                  <div className={`tooltip-container absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded-lg p-3 transition-opacity duration-300 pointer-events-none z-10 ${
                    isMobile ? (showChildrenTooltip ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
                  } ${
                    isMobile 
                      ? 'w-72 left-1/2 transform -translate-x-1/2 max-w-[calc(100vw-2rem)]' 
                      : 'w-80 left-1/2 transform -translate-x-1/2'
                  }`}>
                    <div className="text-center">
                      <p className="font-semibold mb-2">🧾 Data Sources & Estimation:</p>
                      <p className="text-xs leading-relaxed">
                        Estimates based on WHO (2024), UNICEF, Global Obesity Observatory, JAMA Pediatrics (2024), and internal analysis as of May 2025. &quot;Obese Children&quot; includes ages 0–19, as per WHO/JAMA definitions. Malnutrition reflects stunted, wasted, or underweight status (not additive). Population base used: 1.44 billion (India). For full methodology, visit who.int and jamapediatrics.org.
                      </p>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
              <h3
                className={`mt-4 text-4xl lg:text-5xl font-extrabold text-primary ${montserrat.className}`}
              >
                {formatNumber(obeseChildren)}+
              </h3>
            </motion.div>

            {/* Grid Item 3 - Full Width */}
            <motion.div
              className="bg-white rounded-3xl shadow-md p-12 hover:shadow-lg transition-shadow md:col-span-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-full flex justify-start items-center flex-col md:flex-row">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="images/home/bars.svg"
                    alt="Obese Adults"
                    width={100}
                    height={100}
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col justify-start items-start mt-6 lg:ml-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-bright-teal text-center md:text-left font-aleo text-4xl font-extrabold lg:leading-[52px]">
                    1 in 3 children
                  </h2>
                  <p className="text-primary font-aleo text-xl md:text-2xl text-center md:text-left font-bold lg:leading-[52px]">
                    Today will develop lifestyle diseases earlier than their
                    parents.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Image
        src="images/home/yellow-wave.svg"
        alt="Waves"
        width={1000}
        height={30}
        className="w-full"
      />
    </div>
  );
};

export default Tomorrow;
