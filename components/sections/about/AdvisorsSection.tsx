"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const advisors = [
  { name: "RAFEEK MUHAMMED M", underlined: true, image: "/about/ad1.png" },
  { name: "SRIRAM SUBRAMANI", underlined: true, image: "/about/ad2.png" },
  { name: "AJITH G.", underlined: true, image: "/about/ad3.png" },
  { name: "RATHEESH ELAYAT", underlined: true, image: "/about/ad4.png" },
  { name: "KARTHIK S", underlined: false, image: "/about/ad5.jpg" },
  { name: "SONIKA CHOUDHURY", underlined: false, image: "/about/ad6.jpeg" },
  { name: "PEEYUSH JAIN", underlined: false, image: "/about/ad7.jpg" },
  { name: "TITY LYNGDOH", underlined: false, image: "/about/ad8.jpeg" }
];

export default function AdvisorsSection() {
  return (
    <section className="pt-0 pb-24 md:py-24 px-6 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="font-jubilat text-[32px] md:text-[48px] lg:text-[56px] text-[#183A39] font-normal">
            Advisors
          </h2>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
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
              <div className="w-[167.57px] md:w-full md:max-w-[297.69px] h-[203.12px] md:h-auto md:aspect-[297.69/306.2] bg-[#E5E2D9] rounded-[16px] mb-4 md:mb-6 overflow-hidden relative shadow-sm">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className={`font-haptik text-[10px] md:text-[14px] lg:text-[22px] xl:text-[22px] text-[#183A39] font-medium tracking-wide text-center uppercase ${advisor.underlined ? 'border-b border-[#183A39] pb-0.5' : ''}`}>
                {advisor.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
