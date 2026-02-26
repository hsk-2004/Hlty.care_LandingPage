"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      <div className="max-w-xl w-full space-y-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[24px] leading-[100%] text-[#183A39] max-w-[330px] w-full mx-auto"
          >
            Summer Fun Camps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[12px] leading-tight text-[#183A39] opacity-80 max-w-sm mx-auto"
          >
            These are short-term, immersive camps where health is woven into
            play, stories, rest, and movement — not scheduled as a separate activity.
          </motion.p>
        </div>

        {/* Main Section Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full rounded-[40px] overflow-hidden bg-white/5"
        >
          <img
            src="/f1.svg"
            alt="Summer Fun Camps"
            className="w-full h-auto rounded-[40px]"
          />
        </motion.div>

        {/* Feature Points */}
        <div className="space-y-10 pt-4">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="font-sans text-[16px] font-medium uppercase leading-[51px] text-[#183A39]">
              What a day looks like
            </h3>
            <p className="font-sans text-[15px] text-[#1a3636]/70 leading-relaxed">
              A mix of guided play, free exploration, storytelling, movement
              breaks, and shared routines — designed to feel like a camp first, and
              a program second.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="font-sans text-[16px] font-medium uppercase leading-[51px] text-[#183A39]">
              Body Galaxy Themes
            </h3>
            <p className="font-sans text-[15px] text-[#1a3636]/70 leading-relaxed">
              Each camp draws from the Body Galaxy universe, helping children
              explore different body systems through narrative and play.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="font-sans text-[16px] font-medium uppercase leading-[51px] text-[#183A39]">
              What parents usually notice
            </h3>
            <p className="font-sans text-[15px] text-[#1a3636]/70 leading-relaxed">
              Parents often tell us their children talk more about what they felt and
              did than what they "learned."
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group block max-w-[381px] w-full h-[32px] mx-auto bg-[#1a3636] text-[#F0EEE6] px-6 rounded-[24px] font-sans font-medium text-[14px] hover:bg-[#1a3636]/90 transition-all shadow-lg overflow-hidden"
        >
          <div className="flex items-center justify-start relative w-full h-full">
            <span>Register Interest</span>
            <ArrowRight size={20} className="absolute right-0 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
