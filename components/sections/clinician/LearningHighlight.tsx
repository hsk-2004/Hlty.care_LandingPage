"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LearningHighlight() {
  return (
    <section className="w-full bg-[#F0EEE6] py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="mx-auto overflow-hidden bg-[#183A39] rounded-[8px] p-8 md:p-12 lg:p-0 lg:w-[1284px] lg:h-[504px] flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center justify-between lg:px-10">

        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 lg:space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-jubilat text-[24px] md:text-[52px] lg:text-[42px] text-[#51D2A2] leading-[1.1] font-medium"
          >
            Grounded in how <br className="hidden md:block" /> children learn.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:max-w-[480px]"
          >
            <p className="font-jubilat text-[12px] md:text-[20px] lg:text-[16px] text-[#F0EEE6] leading-relaxed">
              Every Hlty Beings poster is built on a simple insight: <br />
              <span className="text-[#51D2A2] font-semibold italic">children retain health information better through illustration than instruction.</span>
            </p>

            <p className="font-jubilat text-[12px] md:text-[17px] lg:text-[16px] text-[#F0EEE6]/80 leading-relaxed">
              Our materials use age-appropriate visual metaphors (designed for ages 6–16 with child development consultants), are clinician-reviewed before print, and are intentionally co-readable — so caregivers and children engage together, building a shared language that extends well beyond the consultation room.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button id="learning-highlight-cta" className="inline-flex items-center justify-between w-[280px] h-[32px] lg:w-[498px] lg:h-[40px] gap-6 px-6 lg:px-10 py-0 bg-[#51D2A2] text-[#183A39] rounded-full font-jubilat font-bold text-[14px] lg:text-[18px] hover:bg-[#45b78d] transition-all group shadow-lg">
              <span>Request Walkthrough</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform shrink-0" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image with Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] w-full max-w-[650px] lg:max-w-none lg:w-[648px] lg:h-[464px] lg:aspect-none shrink-0"
        >
          {/* Badge */}
          <div className="absolute top-[40%] -left-6 z-20 hidden lg:block">
            <div className="relative bg-[#112d2d] border border-[#51D2A2]/30 px-6 py-3 rounded-full shadow-2xl">
              <span className="font-jubilat text-[#51D2A2] text-lg font-medium">Takeaways</span>
              {/* Pointer tail */}
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-[#112d2d] border-b border-r border-[#51D2A2]/30 rotate-45" />
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full rounded-[8px] lg:rounded-[8px] overflow-hidden shadow-2xl">
            <Image
              src="/clinician/learning.png" // Keeping the existing source for now, user can update the image file itself
              alt="Workbook illustration with stickers"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
