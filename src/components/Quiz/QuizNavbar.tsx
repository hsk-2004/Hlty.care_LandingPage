"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QuizNavbar() {
  return (
    <nav className="bg-[#FFE6B6] flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 2
        }}
        className="transition-transform duration-300"
      >
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/solutionec.png"
              alt="Hlty Logo"
              width={684}
              height={184}
              className="rounded-full w-46 sm:w-66  md:w-66  lg:w-96"
            />
          </div>
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <Link href="/">
          <motion.button 
            className="bg-yellow text-white px-4 py-2 sm:px-6 sm:py-2 shadow-md font-medium cursor-pointer hover:bg-yellow/90 transition-all duration-200"
            whileHover={{ 
              scale: 1.08, 
              y: -3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              rotate: -1
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Home
          </motion.button>
        </Link>
      </motion.div>
    </nav>
  );
}
