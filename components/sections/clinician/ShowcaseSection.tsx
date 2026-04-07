"use client";

import { motion } from "framer-motion";

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-[#f2efe4] py-16 lg:py-24 overflow-hidden">
      <div className="w-full">
        {/* Clinician Showcase Image - Full Width Natural Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center overflow-x-hidden"
        >
          <img
            src="/clinician/showcase.svg"
            alt="Clinician Showcase"
            className="w-[506px] h-[330px] md:w-full md:max-w-7xl md:h-auto object-cover md:object-contain"
          />
        </motion.div>
      </div>

      {/* Space Transformation Section - Full Width Display */}
      <div className="w-full mt-16 md:mt-24 lg:mt-32">
        <div className="flex flex-col items-center text-center space-y-8 px-4">
          <h2 className="font-jubilat text-[12px] md:text-[36px] lg:text-[44px] text-[#183A39] leading-tight font-medium max-w-4xl">
            We turn <span className="italic text-[#51D2A2]">healthcare spaces</span> into everyday learning environments.
          </h2>

          <div className="flex flex-nowrap md:flex-wrap justify-center gap-1 md:gap-4 pt-2 w-full md:w-auto px-1">
            {[
              "waiting rooms",
              "consultation zones",
              "pediatric areas",
              "digital touchpoints",
              "corridors"
            ].map((tag, i) => (
              <div
                key={i}
                className="w-[70px] h-[14px] md:w-auto md:h-auto px-0 md:px-6 py-0 md:py-3 rounded-full bg-[#183A39]/5 border border-[#183A39]/10 text-[#51D2A2] font-jubilat italic text-[8px] md:text-base whitespace-nowrap hover:bg-[#183A39]/10 transition-colors cursor-default flex items-center justify-center flex-shrink-0"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
