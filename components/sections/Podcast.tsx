"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-background pt-0 pb-12 md:pb-24 flex flex-col items-center overflow-hidden">
      <div className="max-w-xl w-full relative z-10">

        {/* Top Image — full width, no padding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden mx-auto"
          style={{ width: "340px", height: "278px", borderRadius: "13px" }}
        >
          <img
            src="/t1.svg"
            alt="Latest Podcast Episode"
            style={{ width: "340px", height: "278px", borderRadius: "13px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Bottom Card — amber/yellow card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto relative z-10 bg-[#F5B82E] px-6 pt-6 pb-5 flex flex-col justify-between gap-3 mt-3 overflow-hidden"
          style={{ width: "340px", height: "320px", borderRadius: "16px" }}
        >
          {/* Title */}
          <h2 className="font-serif text-[22px] font-normal leading-[100%] tracking-[0] text-[#1a3636] mt-8">
            Latest Podcast Episode
          </h2>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-2 font-serif text-[12px] font-normal leading-[100%] tracking-[0] text-[#1a3636]/80">
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
            <p>
              For parents who want to participate with their child, not observe
              from the sidelines.
            </p>
          </div>

          {/* Email input + CTA button */}
          <div className="flex items-center gap-2 bg-white rounded-full p-1 pl-3 border border-white/50">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="flex-1 bg-transparent text-[13px] text-[#1a3636] placeholder:text-[#1a3636]/50 outline-none font-sans min-w-0"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex items-center bg-[#1a3636] text-[#F0EEE6] rounded-full font-sans text-[12px] font-medium whitespace-nowrap hover:bg-[#1a3636]/90 transition-all"
              style={{ paddingTop: "4.31px", paddingBottom: "4.31px", paddingRight: "6.47px", paddingLeft: "10.69px", gap: "10.78px" }}
            >
              Join Community
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
