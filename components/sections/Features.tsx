"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "WHAT A DAY LOOKS LIKE",
      description: (
        <>
          A mix of guided play, free exploration, storytelling, movement breaks, and shared routines — <br className="hidden lg:inline" />
          designed to feel like a camp first, and a program <br className="hidden lg:inline" />
          second.
        </>
      ),
    },
    {
      title: "BODY GALAXY THEMES",
      description:
        "Each camp draws from the Body Galaxy universe, helping children explore different body systems through narrative and play.",
    },
    {
      title: "WHAT PARENTS USUALLY NOTICE",
      description:
        "Parents often tell us their children talk more about what they felt and did than what they \"learned.\"",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:pt-0 lg:pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start"
        >

          {/* Left Column (Desktop) / Main Column (Mobile) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-start text-left lg:text-left space-y-8 lg:space-y-10">

            {/* Header Section */}
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-4 pt-12 lg:pt-5">
              <h2 className="font-serif text-[24px] lg:text-[32px] lg:font-normal leading-tight lg:leading-tight text-[#183A39] max-w-[330px] lg:max-w-none mx-0 lg:mx-0">
                Summer Fun Camps
              </h2>
              <p className="font-serif text-[10px] lg:text-[16px] lg:font-normal leading-tight lg:leading-relaxed text-[#183A39] opacity-80 lg:opacity-100 max-w-sm lg:max-w-none mx-0 lg:mx-0 whitespace-nowrap lg:whitespace-normal">
                These are short-term, immersive camps where <br className="hidden lg:inline" />
                health is woven into <br className="block lg:hidden" /> play, stories, rest, and <br className="hidden lg:inline" />
                movement — not scheduled as a separate activity.
              </p>
            </motion.div>

            {/* Mobile-only Image */}
            <motion.div
              variants={itemVariants}
              className="lg:hidden relative w-full rounded-[40px] overflow-hidden bg-white/5"
            >
              <img
                src="/f1.svg"
                alt="Summer Fun Camps"
                className="w-full h-auto rounded-[40px]"
              />
            </motion.div>

            {/* Feature Points */}
            <div className="space-y-10 lg:space-y-8 pt-4 lg:pt-0 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-1 lg:space-y-1"
                >
                  <h3 className="font-sans text-[16px] lg:text-[20px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                    {feature.title}
                  </h3>
                  <p className="font-sans lg:font-serif text-[11px] lg:text-[16px] lg:font-normal text-[#183A39]/70 lg:text-[#183A39] leading-relaxed lg:leading-[1.5] max-w-md mx-0 lg:mx-0">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-4 max-w-[381px] lg:max-w-none w-full lg:w-[320px] h-[32px] lg:h-[40px] bg-[#183A39] text-[#F0EEE6] px-6 lg:px-[24px] lg:py-[6px] rounded-[24px] font-sans font-medium text-[14px] lg:text-[16px] hover:bg-[#183A39]/90 transition-all shadow-lg lg:shadow-xl"
            >
              <span>Register Interest</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Column: Desktop Image Grid (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-8">
            <div className="grid grid-cols-2 gap-4 h-full content-center">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  variants={itemVariants}
                  className="relative aspect-[4/3] rounded-[24px] overflow-hidden"
                >
                  <img
                    src={`/f${num}.svg`}
                    alt={`Summer Fun Activity ${num}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Footer Decorative Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block lg:col-span-12 mt-[-25px] flex justify-center"
          >
            <img
              src="/back4.png"
              alt="Decorative Background"
              className="w-[80%] h-auto object-contain mx-auto"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
