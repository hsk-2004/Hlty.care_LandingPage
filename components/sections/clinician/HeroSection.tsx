"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="flex-1 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6 pt-24 lg:pt-32 h-auto"
          >
            {/* chero1 - 285 x 228 (2.33 tilt) */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                y: isMobile ? -15 : -45,
                x: isMobile ? -65 : 65,
                rotate: 2.33
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-[211px] h-[167px] lg:w-[285px] lg:h-[228px] shrink-0 transform-gpu"
            >
              <Image
                src="/clinician/chero1.svg"
                alt="Hlty Beings health education card 1"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* chero2 - 295 x 228 (2.01 tilt) */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                y: isMobile ? -80 : 0,
                x: isMobile ? 50 : 0,
                rotate: 2.01
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-[219px] h-[167px] lg:w-[295px] lg:h-[228px] shrink-0 transform-gpu"
            >
              <Image
                src="/clinician/chero2.svg"
                alt="Hlty Beings health education card 2"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
