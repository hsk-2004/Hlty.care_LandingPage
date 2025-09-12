"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: "/apple.png",
    title: "Champion Healthy\nFutures",
    description:
      "Give students vital knowledge\non health, nutrition, and fitness\nbeyond textbooks.",
  },
  {
    icon: "/bulb.png",
    title: "Holistic Student\nDevelopment",
    description: "Boost confidence, teamwork,\nand healthy habits.",
  },
  {
    icon: "/graduate.png",
    title: "Prestige &\nRecognition",
    description:
      "Be a thought leader in\nstudent wellness, with\ncity-wide recognition.",
  },
  {
    icon: "/medal.png",
    title: "Certificates, Prizes\n& Impact",
    description:
      "Beyond prizes, students take\nhome healthy life skills,\ncertificates, and goodies.",
  },
  {
    icon: "/socials.png",
    title: "Media & Community\nVisibility",
    description:
      "Highlight your school's\ncommitment through\ncity-wide coverage.",
  },
];

export default function WhyParticipate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile]);

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
    <section className="w-full relative">
      <div className="w-full bg-soft-green flex flex-col pt-12 sm:pt-12 pb-8 sm:pb-12 px-4 justify-center items-center">
        <motion.h2 
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why your school should participate?
          <div
          className="mt-4 w-3/4 mx-auto"
          style={{
            height: "3px",
            background:
              "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
          }}
        />
        </motion.h2>

        {/* Mobile Slider / Desktop Grid */}
        <motion.div 
          className="mt-12 w-full sm:max-w-6xl sm:mx-auto"
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
                      } else if (offset.x < 0 && currentSlide < benefits.length - 1) {
                        goToSlide(currentSlide + 1);
                      }
                    }
                  }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      className="w-full flex-shrink-0 px-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg h-[400px] justify-center">
                        <div className="h-24 w-24 flex items-center justify-center mb-4">
                          <Image
                            src={benefit.icon}
                            alt={benefit.title.replace(/\n/g, " ")}
                            height={128}
                            width={128}
                            priority
                            className="object-contain w-20 h-20"
                          />
                        </div>
                        <div className="h-16 flex items-center justify-center mb-4">
                          <p className="text-primary text-lg font-bold text-center whitespace-pre-line">
                            {benefit.title}
                          </p>
                        </div>
                        <div className="h-20 flex items-start justify-center">
                          <p className="text-primary text-sm text-center whitespace-pre-line">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {benefits.map((_, index) => (
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
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 flex items-center justify-center mb-3 sm:mb-4">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title.replace(/\n/g, " ")}
                      height={128}
                      width={128}
                      priority
                      className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                  </div>
                  <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <p className="text-primary text-base sm:text-lg md:text-xl font-bold text-center whitespace-pre-line">
                      {benefit.title}
                    </p>
                  </div>
                  <div className="h-16 sm:h-18 md:h-20 flex items-start justify-center">
                    <p className="text-primary text-xs sm:text-sm text-center whitespace-pre-line">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      {/* <div className="relative w-full h-8 -mb-1 mt-0"> */}
        <Image
          src="/waves-light.svg"
          alt="Waves-alt"
          width={1000}
          height={30}
          priority
          className="w-full"
        />
      {/* </div> */}
    </section>
  );
}
