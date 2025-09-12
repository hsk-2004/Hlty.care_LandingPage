"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      link: "https://theprint.in/ani-press-releases/the-hlty-beings-collective-raises-1-crore-pre-seed-to-build-indias-leading-childhood-wellness-platform/2689310/",
      image: "/images/home/link1.webp",
      title:
        "HLTY Raises ₹1 Crore Pre-Seed to Build India's Leading Childhood Wellness Platform",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7189179849427570689/",
      image: "/images/home/link2.jpeg",
      title: "HLTY Launches Revolutionary Children's Health App",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7274481826180538369/",
      image: "/images/home/link3.jpeg",
      title: "AIC-RMP welcomes the visionary minds of the ViBHA (Viksit Bharat) Cohort 2024!",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-aleo font-extrabold text-primary mb-4 inline-block">
            Press & Media
            <motion.div 
              className="flex justify-center mt-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="mt-2 w-3/4 mx-auto"
                style={{
                  height: "3px",
                  background:
                    "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
                }}
              />
            </motion.div>
          </h2>
        </motion.div>

        {/* Slideshow */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Slide Container */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
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
                    } else if (offset.x < 0 && currentSlide < slides.length - 1) {
                      goToSlide(currentSlide + 1);
                    }
                  }
                }}
              >
                {slides.map((slide, index) => (
                  <motion.a 
                    href={slide.link} 
                    target="_blank" 
                    key={slide.id} 
                    className="w-full cursor-pointer flex-shrink-0 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-4xl overflow-hidden shadow-xl h-[500px] flex flex-col">
                      {/* Image Section */}
                      <motion.div 
                        className="relative flex-1 min-h-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover w-full h-full"
                          priority={slide.id === 1}
                        />
                      </motion.div>

                      {/* Content Section */}
                      <div className="p-6 sm:p-8 flex-shrink-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary text-center leading-tight">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <motion.div 
              className="flex justify-center mt-8 space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-bright-teal" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    scale: index === currentSlide ? 1.2 : 1,
                    backgroundColor: index === currentSlide ? "#00D4AB" : "#D1D5DB"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide;
