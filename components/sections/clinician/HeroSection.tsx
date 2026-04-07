"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F0EEE6] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center min-h-[520px] lg:min-h-[600px] gap-8 lg:gap-0">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center gap-6 pt-32 lg:pt-40 pb-12 lg:pb-16 lg:pr-12 xl:pr-20"
          >
            {/* Badge pill */}
            <div className="inline-flex w-fit items-center px-5 py-2 rounded-full border border-[#183A39]/20 bg-[#F0EEE6]">
              <span className="font-jubilat text-[13px] text-[#183A39]/70 leading-none">
                Reviewed by pediatric dietitians &amp; general physicians
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-jubilat text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-[#183A39] leading-[1.05] font-medium tracking-[-0.02em] max-w-[580px]">
              Activate healthcare spaces
            </h1>

            {/* Body copy */}
            <p className="font-jubilat text-[17px] md:text-[19px] text-[#183A39]/75 leading-[1.55] max-w-[480px]">
              Hlty Beings turns clinic walls, corridors, and waiting areas into
              structured health-education environments.
            </p>

            {/* CTA button */}
            <div className="pt-2">
              <button
                id="clinician-hero-download-btn"
                className="inline-flex items-center gap-5 px-8 py-4 bg-[#183A39] text-[#F0EEE6] rounded-full font-haptik font-bold text-[13px] uppercase tracking-[0.12em] hover:bg-[#0f2827] transition-colors duration-200 shadow-md"
              >
                DOWNLOAD SAMPLE POSTERS
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#F0EEE6]/15">
                  <ArrowDown size={15} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Image slot ── */}
          {/*
           * Import your poster-cards image here.
           * Replace the src below with your actual image path, e.g.:
           *   src="/images/clinician-hero-cards.png"
           * Recommended size: ~780 × 520 px, transparent or matching bg.
           */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="flex-1 flex items-end justify-center lg:justify-end relative pt-24 lg:pt-32 h-[360px] md:h-[460px] lg:h-[600px]"
          >
            {/* ── SWAP THIS with your <Image> once ready ── */}
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Placeholder until image is imported */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 select-none pointer-events-none">
                <span className="font-jubilat text-[#183A39] text-lg">
                  [ poster cards image ]
                </span>
              </div>

              {/*
                UNCOMMENT and update src when you have the image:

                <Image
                  src="/images/clinician-hero-cards.png"
                  alt="Hlty Beings health education poster cards"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
