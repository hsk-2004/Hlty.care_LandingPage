"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Caveat, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const Prizes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Prize data for mobile slider
  const prizeData = [
    {
      title: "Champions:",
      items: [
        "Rolling Trophy for school",
        "Champion Plaque for school", 
        "Medal for students",
        "+ 60,000/- worth prizes"
      ]
    },
    {
      title: "First Runner Up:",
      items: [
        "Medal for students",
        "Engraved Plaque for school",
        "+ 40,000/- worth prizes"
      ]
    },
    {
      title: "Second Runner Up:",
      items: [
        "Medal for students",
        "Engraved Plaque for school",
        "+ 20,000/- worth prizes"
      ]
    },
    {
      title: "Other 3 finalists:",
      items: [
        "Goodie bags worth ₹10,000 each team + certificates"
      ]
    },
    {
      title: "Students:",
      items: [
        "Top team students will have an opportunity to co-create books, comics, games with HTLY team with credits."
      ]
    },
    {
      title: "Teachers:",
      items: [
        "Prizes + Certificate for teachers for all finalists' team"
      ]
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance slides on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % prizeData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile, prizeData.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative w-full my-34 bg-white flex flex-col items-center px-4">
      <motion.div 
        className="relative pt-8 px-4 sm:pl-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="relative text-primary font-bold text-3xl sm:text-4xl md:text-5xl text-center z-10 bg-transparent inline-block">
          <motion.span
            className={`absolute -top-7 -left-8 sm:-top-7 sm:-left-15 bg-[#FDCF76] text-primary text-sm lg:text-lg py-1 px-4 rounded-lg -z-1 ${caveat.className}`}
            initial={{ opacity: 0, scale: 0, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Prize pool - ₹1.5L
          </motion.span>
          Prizes & Recognition
        </h2>
        <div
          className="mt-4 w-3/4 mx-auto"
          style={{
            height: "3px",
            background:
              "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src="/prizes.png"
          alt="Prizes"
          height={200}
          width={500}
          priority
          className="object-contain mt-16 w-64 sm:w-80 md:w-96 lg:w-[500px]"
        />
      </motion.div>

      {/* Mobile Slider / Desktop Grid */}
      <motion.div 
        className="mt-8 w-full sm:max-w-6xl sm:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {isMobile ? (
          // Mobile Slider
          <div className="relative">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const threshold = 50;
                  if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > 500) {
                    if (offset.x > 0 && currentSlide > 0) {
                      goToSlide(currentSlide - 1);
                    } else if (offset.x < 0 && currentSlide < prizeData.length - 1) {
                      goToSlide(currentSlide + 1);
                    }
                  }
                }}
              >
                {prizeData.map((prize, index) => (
                  <motion.div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col items-center text-center h-[300px] justify-center">
                      <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                        {prize.title}
                      </h3>
                      <div className={`text-primary text-sm sm:text-base ${montserrat.className} space-y-1`}>
                        {prize.items.map((item, itemIndex) => (
                          <p key={itemIndex}>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {prizeData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 transition-colors duration-300 ${
                    index === currentSlide ? "bg-[#6EBCC2]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 sm:pt-8 md:pt-10">
            {/* Champions */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                Champions:
              </h3>
              <div className={`text-primary text-sm sm:text-base ${montserrat.className} space-y-1`}>
                <p>Rolling Trophy for school</p>
                <p>Champion Plaque for school</p>
                <p>Medal for students</p>
                <p>+ 60,000/- worth prizes</p>
              </div>
            </motion.div>

            {/* First Runner Up */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                First Runner Up:
              </h3>
              <div className={`text-primary text-sm sm:text-base ${montserrat.className} space-y-1`}>
                <p>Medal for students</p>
                <p>Engraved Plaque for school</p>
                <p>+ 40,000/- worth prizes</p>
              </div>
            </motion.div>

            {/* Second Runner Up */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                Second Runner Up:
              </h3>
              <div className={`text-primary text-sm sm:text-base ${montserrat.className} space-y-1`}>
                <p>Medal for students</p>
                <p>Engraved Plaque for school</p>
                <p>+ 20,000/- worth prizes</p>
              </div>
            </motion.div>

            {/* Other 3 Finalists */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                Other 3 finalists:
              </h3>
              <div className={`text-primary text-sm sm:text-base w-3/4 mx-auto ${montserrat.className} space-y-1`}>
                <p>Goodie bags worth ₹10,000 each team + certificates</p>
              </div>
            </motion.div>

            {/* Students */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                Students:
              </h3>
              <div className={`text-primary text-sm w-3/4 mx-auto sm:text-base ${montserrat.className}`}>
                <p>Top team students will have an opportunity to co-create books, comics, games with HTLY team with credits.</p>
              </div>
            </motion.div>

            {/* Teachers */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                Teachers:
              </h3>
              <div className={`text-primary w-3/4 mx-auto text-sm sm:text-base ${montserrat.className}`}>
                <p>Prizes + Certificate for teachers for all finalists&apos; team</p>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Prizes;
