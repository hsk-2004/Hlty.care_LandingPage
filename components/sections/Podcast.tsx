"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:pt-32 lg:pb-0 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-xl lg:max-w-[1440px] w-full mx-auto relative z-10">
        {/* Desktop Header Decorative Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block w-full mt-[-100px] mb-[70px] relative z-20"
        >
          <div className="relative w-full flex items-center justify-center">
            {/* The PNG Image */}
            <img
              src="/back5.png"
              alt="Decorative Header"
              className="w-[95%] h-auto object-contain"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-0 mt-[50px]">
              <h1 className="font-serif text-[48px] lg:text-[42px] text-[#183A39] leading-tight mb-4">
                Experiences for Families
              </h1>
              <p className="font-serif text-[16px] lg:text-[20px] text-[#183A39] opacity-90 max-w-2xl px-4">
                Designed for the adults and environments that shape a child&apos;s everyday life.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

          {/* Left Column: Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto lg:mx-0 relative z-10 bg-[#F5B82E] px-6 lg:px-12 pt-10 pb-8 lg:py-12 flex flex-col justify-between gap-4 overflow-hidden lg:!w-[760px] lg:!h-[420px] lg:rounded-[24px]"
            style={{
              width: "340px",
              height: "360px", // Increased height for mobile content
              borderRadius: "16px",
              maxWidth: "100%"
            }}
          >
            <div className="space-y-6 lg:space-y-4">
              {/* Title */}
              <h2 className="font-serif text-[22px] lg:text-[30px] font-normal leading-tight text-[#1a3636]">
                <span className="lg:hidden">Latest Podcast Episode</span>
                <span className="hidden lg:inline">Being Hlty Club</span>
              </h2>

              {/* Body paragraphs */}
              <div className="flex flex-col gap-3 font-serif text-[12px] lg:text-[15px] font-normal leading-relaxed lg:leading-tight text-[#1a3636]">
                <p>
                  Shared experiences designed for children and the adults around
                  them. Families move, play, listen, and explore together — without
                  schedules, outcomes, or &ldquo;doing it right.&rdquo;
                </p>
                <p>
                  These events aren&apos;t workshops or talks. They&apos;re spaces
                  where health shows up naturally through games, stories, and
                  everyday moments families already recognize.
                </p>
                <p className="hidden lg:block">
                  For parents who want to participate with their child, not observe
                  from the sidelines.
                </p>
              </div>
            </div>

            {/* Email input + CTA button */}
            <div className="flex items-center gap-2 bg-[#F0EEE6] rounded-full p-1 pl-4 lg:pl-6 border border-white/20 w-full lg:max-w-[400px] mt-4 lg:mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="flex-1 bg-transparent text-[13px] lg:text-[16px] text-[#1a3636] placeholder:text-[#1a3636]/50 outline-none font-sans min-w-0"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex items-center bg-[#1a3636] text-[#F0EEE6] rounded-full font-sans text-[12px] lg:text-[15px] font-medium whitespace-nowrap hover:bg-[#1a3636]/90 transition-all px-4 py-2 lg:px-6 lg:py-3"
              >
                Join Community
                <ArrowRight size={16} className="ml-2 hidden lg:block" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-first lg:order-last overflow-hidden mx-auto lg:mx-0 lg:w-[45%] lg:!w-[500px] lg:!h-auto lg:rounded-[24px]"
            style={{
              width: "340px",
              height: "278px",
              borderRadius: "13px",
              maxWidth: "100%"
            }}
          >
            <img
              src="/t1.svg"
              alt="Being Hlty Club"
              className="w-full h-full lg:aspect-square object-cover"
              style={{ borderRadius: "inherit" }}
            />
          </motion.div>

          {/* Mobile-only text footer (to match original text content) */}
          <div className="lg:hidden px-2 text-center opacity-70">
            <p className="font-serif text-[12px] text-[#1a3636]">
              For parents who want to participate with their child, not observe from the sidelines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
