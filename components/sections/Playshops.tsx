"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Playshops() {
  const points = [
    {
      title: "WHAT CHILDREN EXPERIENCE",
      description: [
        "Children move, play, listen to stories, solve small challenges, and work together.",
        'There are no tests, no lectures, and no "right answers." The focus is on participation and familiarity.',
      ],
    },
    {
      title: "WHAT STAYS WITH THEM",
      description: [
        "The goal isn't recall.",
        "It's recognition of their bodies, their signals, and everyday choices.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:pt-0 lg:pb-0 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >

          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-start text-left lg:text-left space-y-8 lg:space-y-10">
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-4 pt-0">
              <h2 className="font-serif text-[24px] lg:text-[24px] lg:font-normal leading-tight lg:leading-none text-[#183A39] max-w-[330px] lg:max-w-none mx-0 lg:mx-0">
                School Playshops
              </h2>
              <p className="font-serif text-[10px] lg:text-[16px] lg:font-normal leading-tight lg:leading-relaxed text-[#183A39] opacity-80 lg:opacity-100 max-w-sm lg:max-w-none mx-0 lg:mx-0">
                Interactive sessions designed to fit into a child's <br className="hidden lg:inline" />
                existing school day — without turning health <br className="hidden lg:inline" />
                into another subject to study.
              </p>
            </motion.div>

            {/* CTA Button - Desktop only here */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex group items-center justify-between gap-4 w-[320px] h-[40px] bg-[#1a3636] text-[#F0EEE6] px-[24px] py-[6px] rounded-[24px] font-sans font-medium text-[15px] hover:bg-[#1a3636]/90 transition-all shadow-xl"
            >
              <span>Book A Playshop</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Center Column: Image */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-[480px] rounded-[24px] overflow-hidden shadow-lg lg:left-2"
            >
              <img
                src="/p1.svg"
                alt="School Playshops"
                className="w-full h-auto rounded-[24px]"
              />
            </motion.div>
          </div>

          {/* Right Column: Feature Points */}
          <div className="lg:col-span-4 space-y-10 lg:space-y-6 w-full lg:pt-0">
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-start lg:items-start text-left lg:text-left space-y-2 lg:space-y-1"
              >
                <h3 className="font-sans text-[16px] lg:text-[16px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                  {point.title}
                </h3>
                <div className="space-y-2 lg:space-y-1">
                  {point.description.map((desc, dIdx) => (
                    <p key={dIdx} className="font-sans lg:font-serif text-[10px] lg:text-[12px] lg:font-normal text-[#183A39]/70 lg:text-[#183A39] leading-relaxed lg:leading-none max-w-md mx-0 lg:mx-0">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA Button - stays at the bottom */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="lg:hidden group flex items-center justify-between gap-4 w-full max-w-[381px] h-[32px] bg-[#1a3636] text-[#F0EEE6] px-6 rounded-[24px] font-sans font-medium text-[14px] hover:bg-[#1a3636]/90 transition-all shadow-lg"
            >
              <span>Book A Playshop</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
