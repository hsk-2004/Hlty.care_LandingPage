"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Solutionec" },
  { name: "SKYFORGE SYSTEM SOLUTIONS" }
];

export default function PartnersSection() {
  return (
    <section className="pt-0 pb-24 md:py-24 px-6 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[56px] text-[#183A39] font-normal">
            Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-16">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Image Box */}
              <div className="w-[149.37px] md:w-[280px] lg:w-[298px] h-[57.64px] md:h-auto md:aspect-[298/115] bg-[#E5E2D9] rounded-[12px] md:rounded-[24px] mb-4 md:mb-6 overflow-hidden relative shadow-sm">
                {/* Logo Placeholder */}
                <Image
                  src="/landingpage/microsoft.svg"
                  alt={partner.name}
                  fill
                  className="object-contain p-4 md:p-8 opacity-10 grayscale"
                />
              </div>

              {/* Partner Name */}
              <h3 className="font-haptik text-[10px] md:text-[14px] lg:text-[18px] text-[#183A39] font-medium tracking-widest text-center uppercase max-w-full md:max-w-[280px]">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
