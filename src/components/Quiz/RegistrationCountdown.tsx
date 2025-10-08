"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RegistrationCountdown() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('October 18, 2025 23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDaysLeft(days);
      } else {
        setDaysLeft(0);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="w-full flex items-center justify-center -mt-4 bg-white relative -z-10 px-4 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-primary font-medium text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Registration closes in
        </motion.p>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/sparkle.png"
            alt="Sparkle-alt"
            height={128}
            width={128}
            priority
            className="object-cover w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`${montserrat.className} bg-bright-teal text-white font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-lg shadow-md text-lg whitespace-nowrap sm:text-lg md:text-xl lg:text-2xl`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {daysLeft} days
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/quiz/nami-head.png"
          alt="Nami character"
          height={312}
          width={312}
          priority
          className="object-cover absolute bottom-0 right-2 sm:right-4 md:right-15 lg:right-20 w-32 sm:w-40 md:w-48 lg:w-74"
        />
      </motion.div>
    </motion.div>
  );
}
