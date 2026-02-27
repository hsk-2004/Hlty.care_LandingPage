"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const scatteredElements = [
  { top: "15%", left: "30%", color: "blue" },
  { top: "25%", left: "55%", color: "green" },
  { top: "20%", left: "80%", color: "red" },
  { top: "35%", left: "10%", color: "orange" },
  { top: "38%", left: "68%", color: "blue" },
  { top: "45%", left: "22%", color: "green" },
  { top: "50%", left: "48%", color: "red" },
  { top: "55%", left: "88%", color: "orange" },
  { top: "75%", left: "10%", color: "red" },
  { top: "90%", left: "22%", color: "blue" },
  { top: "88%", left: "42%", color: "orange" },
  { top: "92%", left: "68%", color: "red" },
  { top: "85%", left: "88%", color: "green" },
];

const colorMap: Record<string, string> = {
  blue: "#4a6fa5",
  green: "#82c09a",
  red: "#d9534f",
  orange: "#f0ad4e",
};

const DistressedSquare = ({ color }: { color: string }) => {
  return (
    <div
      className="w-10 h-10 opacity-70 will-change-transform"
      style={{
        backgroundColor: colorMap[color],
        maskImage:
          'url("https://www.transparenttextures.com/patterns/distressed-grid.png")',
        WebkitMaskImage:
          'url("https://www.transparenttextures.com/patterns/distressed-grid.png")',
        clipPath: "polygon(2% 2%, 98% 5%, 95% 95%, 5% 98%)",
      }}
    />
  );
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-32 md:pt-40 pb-12 md:pb-32 text-center px-4 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Background SVG Container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-start justify-center pt-20 md:pt-40 overflow-hidden"
        >

          {/* Mobile */}
          <div className="md:hidden">
            <Image
              src="/back.svg"
              alt=""
              width={337}
              height={200}
              priority
              className="select-none pointer-events-none opacity-100"
              style={{ transform: "scaleY(-1)", height: "auto" }}
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <Image
              src="/back1.png"
              alt=""
              width={1100}
              height={190}
              priority
              className="select-none pointer-events-none opacity-100"
              style={{ transform: "scaleY(-1)", height: "auto" }}
            />
          </div>

        </motion.div>

        {/* Scattered Elements */}
        {scatteredElements.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{
              opacity: 0.6,
              scale: 1,
              rotate: 0,
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              delay: i * 0.05,
              duration: 0.8,
              y: {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: {
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute"
            style={{ top: el.top, left: el.left }}
          >
            <DistressedSquare color={el.color} />
          </motion.div>
        ))}

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4 md:mt-16">

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-[24px] md:text-[48px] leading-[100%] text-foreground"
        >
          Experiences for Children
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="font-serif text-[12px] md:text-[18px] leading-tight mx-auto text-foreground opacity-60 text-center"
        >
          <span className="block whitespace-nowrap">
            Designed for children to return to —
          </span>
          <span className="block whitespace-nowrap">
            across schools, camps, and shared spaces.
          </span>
        </motion.p>

      </div>
    </section>
  );
}