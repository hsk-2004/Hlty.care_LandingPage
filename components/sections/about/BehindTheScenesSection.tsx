"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BehindTheScenesSection() {
  return (
    <section className="pt-0 pb-0 md:pt-24 md:pb-24 bg-[#F0EEE6] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Text Content */}
        <div className="text-center space-y-8 mb-16">
          <p className="font-jubilat font-normal text-[#1A2E2C] text-[12px] md:text-[14px] lg:text-[20px] xl:text-[20px] leading-relaxed max-w-4xl mx-auto opacity-80">
            We bring together science, storytelling, and a little humor to create small wins that last.<br className="hidden md:block" />
            We are a team of clinicians, designers, educators, technologists, and parents on a<br className="hidden md:block" />
            shared mission: to save childhood and secure the future of health.
          </p>

          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[42px] xl:text-[42px] text-[#183A39] font-normal">
            Behind The Scenes
          </h2>
        </div>

        {/* Scrollable Container */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-12 md:pb-12 px-4 no-scrollbar cursor-grab active:cursor-grabbing">
            {[
              { id: 1, rot: "-rotate-[3.24deg] md:-rotate-[4.05deg]" },
              { id: 2, rot: "rotate-[2.15deg] md:rotate-[4.05deg]" },
              { id: 3, rot: "-rotate-[2.5deg] md:-rotate-[4.15deg]" },
              { id: 4, rot: "rotate-[3.05deg] md:rotate-[4.05deg]" },
              { id: 5, rot: "-rotate-[1.85deg] md:-rotate-[4.05deg]" }
            ].map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex-shrink-0 w-[133.6px] md:w-[320px] lg:w-[353px] h-[130.95px] md:h-[320px] lg:h-[346px] bg-[#E5E2D9] rounded-[12px] md:rounded-[16px] ${card.rot} shadow-sm overflow-hidden relative`}
              >
                {/* Image placeholder - User can add specific images here */}
                <Image
                  src={`/about/bts.png`}
                  alt={`Behind the scenes ${card.id}`}
                  fill
                  className="object-cover opacity-80 mix-blend-multiply"
                />

                {/* Subtle overlay if needed */}
                <div className="absolute inset-0 bg-[#E5E2D9]/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
