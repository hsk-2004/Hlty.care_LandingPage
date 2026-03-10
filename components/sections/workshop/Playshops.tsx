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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-20 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >

          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-start text-left lg:text-left space-y-8 md:space-y-12 lg:space-y-12 lg:mt-10">
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 lg:space-y-4 pt-0"
            >
              <h2 className="font-jubilat text-[24px] md:text-[40px] lg:text-[36px] lg:font-normal leading-tight lg:leading-none text-[#183A39] max-w-[330px] md:max-w-xl lg:max-w-none mx-0 lg:mx-0">
                School Playshops
              </h2>
              <p className="font-jubilat font-normal not-italic text-[12px] md:text-[18px] lg:text-[16px] leading-tight lg:leading-relaxed text-[#183A39] max-w-sm md:max-w-xl lg:max-w-none mx-0 lg:mx-0">
                Interactive sessions designed to fit into a child's <br className="hidden lg:inline" />
                existing school day — without turning health <br className="hidden lg:inline" />
                into another subject to study.
              </p>
            </motion.div>

            {/* CTA Button - Desktop only here */}
            <motion.button
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex group items-center justify-between gap-4 w-[320px] h-[40px] bg-[#1a3636] text-[#F0EEE6] px-[24px] py-[6px] rounded-[24px] font-haptik font-medium text-[16px] hover:bg-[#1a3636]/90 transition-all shadow-xl lg:!mt-[85px]"
            >
              <span>Book A Playshop</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Center Column: Image */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[480px] md:max-w-[600px] rounded-[24px] overflow-hidden shadow-lg lg:left-2"
            >
              <img
                src="/p1.svg"
                alt="School Playshops"
                className="w-full h-auto rounded-[24px]"
              />
            </motion.div>
          </div>

          {/* Right Column: Feature Points */}
          <div className="lg:col-span-4 space-y-10 lg:space-y-6 w-full lg:pt-16 lg:-mt-10">
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col items-start lg:items-start text-left lg:text-left space-y-2 lg:space-y-5 ${index === 1 ? 'lg:!mt-[40px]' : ''}`}
              >
                <h3 className="font-haptik text-[16px] md:text-[24px] lg:text-[20px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                  {point.title}
                </h3>
                <div className="space-y-2 lg:space-y-1">
                  {point.description.map((desc, dIdx) => (
                    <p key={dIdx} className="font-jubilat font-normal not-italic text-[12px] md:text-[18px] lg:text-[16px] text-[#183A39] leading-relaxed lg:leading-none max-w-md md:max-w-xl mx-0 lg:mx-0">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA Button - stays at the bottom */}
            <motion.button
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="lg:hidden group flex items-center justify-between gap-4 w-full max-w-[381px] md:max-w-md h-[32px] md:h-[48px] bg-[#1a3636] text-[#F0EEE6] px-6 md:px-8 rounded-[24px] font-haptik font-medium text-[12px] md:text-[16px] hover:bg-[#1a3636]/90 transition-all shadow-lg"
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
