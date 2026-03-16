"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const advisors = [
  { name: "RAFEEK MUHAMMED M", underlined: true },
  { name: "SRIRAM SUBRAMANI", underlined: true },
  { name: "AJITH G.", underlined: true },
  { name: "RATHEESH ELAYAT", underlined: true },
  { name: "KARTHIK S", underlined: false },
  { name: "SONIKA CHOUDHURY", underlined: false },
  { name: "PEEYUSH JAIN", underlined: false },
  { name: "TITY LYNGDOH", underlined: false }
];

export default function AdvisorsSection() {
  return (
    <section className="py-24 px-6 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-20">
          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[56px] text-[#183A39] font-medium">
            Advisors
          </h2>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {advisors.map((advisor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Image Box */}
              <div className="w-full max-w-[297.69px] aspect-[297.69/306.2] bg-[#E5E2D9] rounded-[16px] mb-6 overflow-hidden relative shadow-sm">
                {/* Image placeholder - User can add specific advisor images here */}
                <Image
                  src="/about/hero.png"
                  alt={advisor.name}
                  fill
                  className="object-cover opacity-10 grayscale"
                />
              </div>

              {/* Name */}
              <h3 className={`font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39] font-semibold tracking-wide text-center uppercase ${advisor.underlined ? 'border-b-2 border-[#183A39] pb-0.5' : ''}`}>
                {advisor.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
