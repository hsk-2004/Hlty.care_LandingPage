"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface EnrollForQuizProps {
  isMobileMenuOpen?: boolean;
}

const Hubba = ({ isMobileMenuOpen = false }: EnrollForQuizProps) => {
  return (
    <motion.div
      className={`fixed right-0 top-2/6 transform -translate-y-1/2 z-50 group ${isMobileMenuOpen ? 'hidden' : ''}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* Left border with slide effect */}
        <div className="absolute top-0 -left-1 w-1 bg-[#FFE6B6] z-20 h-full group-hover:h-0 transition-all duration-300 ease-out" />

        {/* Light yellow rounded layer */}
        <div className="absolute left-0 top-0 h-full bg-yellow-200 rounded-l-2xl z-0 w-8" />

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://healthyhubba.com/"
          className="group relative bg-[#FFB21E] text-white px-2 py-3 sm:px-1 sm:py-4 font-bold text-sm sm:text-base flex flex-col items-center gap-2 sm:gap-3 min-w-[32px] sm:min-w-[40px] z-10 group-hover:px-4 sm:group-hover:px-3 sm:group-hover:py-4 transition-all duration-300"
        >
          {/* Vertical text */}
          <motion.span
            className="relative z-10 writing-mode-vertical text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ rotate: "180deg" }}
          >
            Healthy Hubba
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hubba;
