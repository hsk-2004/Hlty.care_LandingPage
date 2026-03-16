"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BehindTheScenesSection() {
  return (
    <section className="py-24 bg-[#F0EEE6] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Text Content */}
        <div className="text-center space-y-8 mb-16">
          <p className="font-jubilat text-[#1A2E2C] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[20px] leading-relaxed max-w-4xl mx-auto opacity-80">
            We bring together science, storytelling, and a little humor to create small wins that last.<br className="hidden md:block" />
            We are a team of clinicians, designers, educators, technologists, and parents on a<br className="hidden md:block" />
            shared mission: to save childhood and secure the future of health.
          </p>

          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[42px] xl:text-[42px] text-[#183A39] font-medium">
            Behind The Scenes
          </h2>
        </div>

        {/* Scrollable Container */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-8 pb-12 px-4 no-scrollbar cursor-grab active:cursor-grabbing">
            {[
              { id: 1, rot: "-rotate-[4.05deg]" },
              { id: 2, rot: "rotate-[4.05deg]" },
              { id: 3, rot: "-rotate-[4.15deg]" },
              { id: 4, rot: "rotate-[4.05deg]" },
              { id: 5, rot: "-rotate-[4.05deg]" }
            ].map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex-shrink-0 w-[280px] md:w-[320px] lg:w-[353px] h-[280px] md:h-[320px] lg:h-[346px] bg-[#E5E2D9] rounded-[16px] ${card.rot} shadow-sm overflow-hidden relative`}
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
