"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "SOLUTIONEC" },
  { name: "SKYFORGE SYSTEM SOLUTIONS" }
];

export default function PartnersSection() {
  return (
    <section className="py-24 px-6 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[56px] text-[#183A39] font-medium">
            Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center max-w-[400px]"
            >
              {/* Image Box */}
              <div className="w-[280px] lg:w-[298px] aspect-[298/115] bg-[#E5E2D9] rounded-[24px] mb-6 overflow-hidden relative shadow-sm">
                {/* Logo Placeholder */}
                <Image
                  src="/landingpage/microsoft.svg"
                  alt={partner.name}
                  fill
                  className="object-contain p-8 opacity-10 grayscale"
                />
              </div>

              {/* Partner Name */}
              <h3 className="font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39] font-semibold tracking-widest text-center uppercase max-w-[280px]">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
