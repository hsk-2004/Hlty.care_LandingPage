"use client";
import Image from "next/image";
import { Caveat, Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function QuizHero() {
  return (
    <section className="w-full relative">
      <div className="w-full min-h-[600px] bg-soft-yellow relative overflow-hidden">
        {/* Left side - Character illustration */}
        <motion.div
          className="flex-shrink-0 hidden lg:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/Theo-happy.png"
            alt="Quiz character with glasses and checkered scarf"
            width={400}
            height={400}
            className="object-contain absolute -left-0 bottom-15 w-100 xl:w-100 -z-0"
          />
        </motion.div>
        {/* Main Content */}
        <div className="flex items-center justify-between py-4 sm:py-6 md:py-9 max-w-7xl mx-auto px-4 sm:px-8 z-1">
          {/* Center content */}
          <div className="flex-1 text-center px-4 sm:px-8 z-0">
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                  Hlty quotient quiz - 2025
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -60 }}
                  animate={{ opacity: 1, scale: 1, rotate: -60 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src="/three.png"
                    alt="Decorative element"
                    width={32}
                    height={32}
                    className="absolute top-1 -right-6 sm:-right-10 w-6 h-6 sm:w-8 sm:h-8"
                  />
                </motion.div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary mb-4 sm:mb-6">
                Bengaluru Edition
              </h2>
              <div
                className="mt-8 lg:mt-14 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto"
                style={{
                  height: "3px",
                  background:
                    "repeating-linear-gradient(to right, #FDCF76 0px, #FDCF76 8px, transparent 8px, transparent 16px)",
                }}
              />
            </motion.div>

            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Where smart minds meet healthy choices.
            </motion.h3>

            {/* Feature tags */}
            <motion.div
              className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.span
                className={`bg-medium-yellow italic text-primary px-3 py-1 sm:px-4 sm:py-2 rounded-xl font-medium -rotate-2 text-lg sm:text-lg lg:text-lg ${caveat.className}`}
              >
                Grades 5-8
              </motion.span>
              <motion.span
                className={`bg-medium-yellow italic text-primary px-3 py-1 sm:px-4 sm:py-2 rounded-xl font-medium rotate-1 text-lg sm:text-lg lg:text-lg ${caveat.className}`}
              >
                health, nutrition & curiosity
              </motion.span>
              <motion.span
                className={`bg-medium-yellow italic text-primary px-3 py-1 sm:px-4 sm:py-2 rounded-xl font-medium rotate-2 text-lg sm:text-lg lg:text-lg ${caveat.className}`}
              >
                Free registration
              </motion.span>
            </motion.div>

            {/* Description text */}
            <p
              className={`text-primary text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto ${montserrat.className}`}
            >
              Hlty quotient quiz - 2025 invites schools across the city to
              engage their middle schoolers in a one-of-a-kind competition that
              blends knowledge, nutrition, and critical thinking— building
              confidence, curiosity, and{" "}
              <span className="font-semibold text-primary">
                the new healthy future of India.
              </span>
            </p>

            {/* Action buttons */}
            <div className="mt-14 w-full flex items-center justify-center text-white font-medium text-center gap-2 sm:gap-3 flex-wrap">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScHa2R2hB-2gc507-82Mc1FI_A8Yya_u3avJDkj8ZERnaB0lg/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="relative bg-yellow px-4 min-w-[280px] flex items-center justify-center text-center py-2 rounded-none cursor-pointer hover:bg-yellow/90 transition-colors">
                <Image
                  src="/three.png"
                  alt="Three Icon-alt"
                  width={20}
                  height={20}
                  className="absolute -top-3 -left-4 sm:-top-4 sm:-left-5 rotate-180 w-4 h-4 sm:w-5 sm:h-5"
                />
                <p className="text-xl sm:text-xl">Register your school</p>
              </a>
              <div className="relative bg-gray-400 px-4 min-w-[280px] flex items-end justify-center text-center py-2.5 rounded-none">
                <p className="text-xl sm:text-base relative w-full text-center flex items-center justify-center">
                  School pack
                  <span className="text-md text-white font-light italic">
                    (coming soon)
                  </span>
                </p>

                <Image
                  src="/images/quiz/arrow-quiz.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="absolute -top-7 -right-18 hidden lg:block lg:w-16"
                />

                <p
                  className={`text-center text-primary font-bold text-3xl leading-[30px] tracking-normal absolute -bottom-14 -right-80 w-70 hidden lg:block ${caveat.className}`}
                >
                  info for schools, consent forms, rules, etc.
                </p>
              </div>
            </div>

            <p
              className={`text-primary mt-4 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto ${montserrat.className}`}
            >
              Register by 14th October 2025
            </p>
          </div>

          {/* Right side - decorative elements */}
          <div className="flex-shrink-0 relative hidden lg:block">
            <div className="text-right"></div>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full h-8 -mb-1 mt-0 -z-1"> */}
        <Image
          src="/waves-soft-yellow.svg"
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
