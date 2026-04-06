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

        {/* Auto-scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-12 py-8 md:py-14 px-4 no-scrollbar cursor-default"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Double the cards for infinite scroll effect */}
            {[...Array(2)].map((_, listIdx) => (
              <div key={listIdx} className="flex gap-4 md:gap-12">
                {[
                  { id: 1, rot: -4.55 },
                  { id: 2, rot: 4.05 },
                  { id: 3, rot: 3.65 },
                  { id: 4, rot: -4.55 }
                ].map((card) => (
                  <div
                    key={`${listIdx}-${card.id}`}
                    style={{ rotate: `${card.rot}deg` }}
                    className="flex-shrink-0 w-[161px] md:w-[353px] h-[158px] md:h-[346px] bg-[#E5E2D9] rounded-[12px] md:rounded-[16px] shadow-sm overflow-hidden relative"
                  >
                    <Image
                      src={`/about/bts${card.id}.jpg`}
                      alt={`Behind the scenes photo ${card.id}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
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
