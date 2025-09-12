"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PeopleSay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Triparna Banik",
      content:
        "One of the strengths of Nutri Roo is its ability to simplify complex nutrition facts for younger readers. Nutri Roo's conversations with his food friends are full of easy-to-understand explanations about vitamins, minerals, and how food fuels the body.",
      bgColor: "bg-[#FDCF76]",
      stripColor: "bg-[#F2C6FFCC]",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      name: "Nitin Raj Singh",
      content:
        "As someone who has explored countless children's books, I've come to expect a few standard themes stories with morals, fun adventures, or educational tales aimed at young adults. But NutriRoo ROFL: The Food Label Book genuinely surprised me with its unique approach. It's a rare gem: an educational book specifically designed for kids that's also incredibly engaging and fun.",
      bgColor: "bg-[#00D4AB]",
      stripColor: "bg-[#D5FFABCC]",
      rotation: "rotate-0",
    },
    {
      id: 3,
      name: "Garima Bhatia",
      content:
        "The illustrations in the book add a fun element to it and makes it more interesting. It teaches about healthy eating habits but in a fun way. The book makes a perfect gift for kids to make them understand the importance of adopting healthy eating habits from a young age. Helpful",
      bgColor: "bg-[#F2C6FF]",
      stripColor: "bg-[#D7FBF4CC]",
      rotation: "rotate-2",
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance slides on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
    hidden: { opacity: 0, y: 50, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
  };

  return (
    <section
      className={`my-12 mb-24 sm:my-16 lg:my-20 w-full text-primary ${montserrat.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-aleo font-extrabold text-primary mb-4 inline-block">
            What People Say...
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

        {/* Testimonials - Grid on Desktop, Slider on Mobile */}
        {isMobile ? (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mobile Slider */}
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
                    } else if (offset.x < 0 && currentSlide < testimonials.length - 1) {
                      goToSlide(currentSlide + 1);
                    }
                  }
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`${testimonial.bgColor} p-6 py-25 shadow-lg relative h-full flex flex-col justify-center`}
                    >
                      {/* Overlapping strips */}
                      <div
                        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-12 ${testimonial.stripColor} opacity-60`}
                      ></div>
                      <div
                        className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-12 ${testimonial.stripColor} opacity-60`}
                      ></div>

                      <p
                        className="text-gray-700 text-[18px] leading-[24px] tracking-[0px] font-normal mb-4 relative text-center z-10"
                        style={{ fontFamily: "American Typewriter" }}
                      >
                        {testimonial.content}
                      </p>
                      <p className="text-primary font-semibold text-sm text-center">
                        {testimonial.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>


            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
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
          </motion.div>
        ) : (
          /* Desktop Grid */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`relative transform ${
                  testimonial.rotation
                } hover:rotate-0 transition-transform duration-300 h-full ${
                  index === 1
                    ? "mt-4 mb-4 sm:mt-0"
                    : index === 2
                    ? "mt-12 sm:mt-0"
                    : ""
                }`}
                variants={itemVariants}
                whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
              >
                <div
                  className={`${testimonial.bgColor} p-6 py-20 shadow-lg relative h-full flex flex-col justify-center`}
                >
                  {/* Overlapping strips */}
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-12 ${testimonial.stripColor} opacity-60`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-12 ${testimonial.stripColor} opacity-60`}
                  ></div>

                  <p
                    className="text-gray-700 text-[18px] leading-[24px] tracking-[0px] font-normal mb-4 relative text-center z-10"
                    style={{ fontFamily: "American Typewriter" }}
                  >
                    {testimonial.content}
                  </p>
                  <p className="text-primary font-bold text-lg text-center">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PeopleSay;
