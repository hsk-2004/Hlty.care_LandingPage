"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuizFooter() {
  return (
    <motion.div 
      className="w-full py-18 bg-bright-teal flex flex-col sm:flex-row items-center justify-center text-white font-medium rounded-none shadow-md text-center gap-2 sm:gap-3 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative bg-yellow px-4 py-1 sm:px-6 sm:py-1 rounded-none cursor-pointer hover:bg-yellow/90 transition-colors"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/three.png"
          alt="Three Icon-alt"
          width={20}
          height={20}
          className="absolute -top-3 -left-4 sm:-top-4 sm:-left-5 rotate-180 w-4 h-4 sm:w-5 sm:h-5"
        />
        <p className="text-sm sm:text-lg">Register your school</p>
      </motion.div>
      <motion.div 
        className="relative bg-gray-400 px-2 py-1 flex items-center justify-center text-center rounded-none"
      >
        <Image
          src="/three.png"
          alt="Three Icon-alt"
          width={20}
          height={20}
          className="absolute -bottom-3 -right-4 sm:-bottom-4 sm:-right-5 w-4 h-4 sm:w-5 sm:h-5"
        />
        <p className="text-sm sm:text-lg text-center">School pack <span className="text-xs text-white">(coming soon)</span></p>
      </motion.div>
    </motion.div>
  );
}
