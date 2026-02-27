"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "WHAT A DAY LOOKS LIKE",
      description:
        "A mix of play, stories, and movement breaks, designed to feel like a camp first and a program second.",
    },
    {
      title: "BODY GALAXY THEMES",
      description:
        "Set in the Body Galaxy universe, children explore body systems through narrative and play.",
    },
    {
      title: "WHAT PARENTS USUALLY NOTICE",
      description:
        "Children focus on their feelings and activities rather than just what they \"learned.\"",
    },
  ];

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">

          {/* Left Column (Desktop) / Main Column (Mobile) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10">

            {/* Header Section */}
            <div className="space-y-4 lg:space-y-4 pt-12 lg:pt-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[24px] lg:text-[32px] lg:font-normal leading-tight lg:leading-none text-[#183A39] max-w-[330px] lg:max-w-none mx-auto lg:mx-0"
              >
                Summer Fun Camps
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-[12px] lg:text-[16px] lg:font-normal leading-tight lg:leading-none text-[#183A39] opacity-80 lg:opacity-100 max-w-sm lg:max-w-md mx-auto lg:mx-0"
              >
                Short-term, immersive camps where health is woven into play, stories, and movement—naturally integrated, not scheduled.
              </motion.p>
            </div>

            {/* Mobile-only Image (Restoring the original single image look for phone) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="space-y-1 lg:space-y-2"
                >
                  <h3 className="font-sans text-[16px] lg:text-[20px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                    {feature.title}
                  </h3>
                  <p className="font-sans lg:font-serif text-[15px] lg:text-[16px] lg:font-normal text-[#183A39]/70 lg:text-[#183A39] leading-relaxed lg:leading-none max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * num }}
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

        </div>
      </div>
    </section>
  );
}
