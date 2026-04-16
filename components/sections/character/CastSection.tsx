"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CastSection() {
  return (
    <section className="bg-[#F0EEE6] pt-8 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[1306px] aspect-[1306/837] lg:h-[837px]"
        >
          <Image
            src="/character/cc1.svg"
            alt="Cast"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
