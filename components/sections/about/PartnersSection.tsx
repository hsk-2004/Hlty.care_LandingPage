"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { 
    name: "Solutionec",
    logo: "/about/solutionec.svg"
  },
  { 
    name: "SKYFORGE SYSTEM SOLUTIONS",
    logo: "/about/skyforge2.svg"
  }
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
          {partners.map((partner, i) => {
            const isSolutionec = partner.name === "Solutionec";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Logo Image */}
                <div 
                  className={`w-[140px] md:w-[240px] lg:w-[280px] h-[60px] md:h-[100px] mb-4 md:mb-6 relative ${
                    isSolutionec ? "bg-transparent p-1 md:p-2" : ""
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={`object-contain ${isSolutionec ? "scale-[2.5]" : "scale-110"}`}
                  />
                </div>

                {/* Partner Name */}
                <h3 className="font-haptik text-[10px] md:text-[14px] lg:text-[18px] text-[#183A39] font-medium tracking-widest text-center uppercase max-w-full md:max-w-[280px]">
                  {partner.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
