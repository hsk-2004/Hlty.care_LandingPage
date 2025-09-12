"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Nutriroo = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Section - Call to Action Buttons */}
          <motion.div
            className="flex flex-col items-center space-y-6 relative w-full lg:w-auto order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/home/arrow-to.svg"
                alt="Arrow pointing to book"
                width={90}
                height={60}
                className="absolute hidden lg:top-4 lg:-right-26 sm:hidden md:hidden lg:block"
              />
            </motion.div>
            {/* Get Nutriroo Button */}
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://amzn.in/d/5crg2K8"
              className="bg-[#FFB21E] text-white px-6 py-1 flex justify-center items-center sm:px-8 sm:py-1 lg:px-10 lg:py-1 font-bold text-base sm:text-lg lg:text-xl hover:bg-[#FFB21E]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative z-10 w-full sm:w-auto lg:min-w-[350px] lg:max-w-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/home/sparkle-up.svg"
                  alt="Sparkle decoration"
                  width={60}
                  height={20}
                  className="absolute -top-4 -left-4 sm:hidden md:hidden lg:block lg:-top-8 lg:-left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
              Get Nutriroo!
            </motion.a>

            {/* Share with Family & Friends Button */}
            <motion.a
              href="https://wa.me/?text=Check%20out%20this%20amazing%20book%20-%20NutriRoo%20ROFL:%20The%20Food%20Label%20Book%20by%20Suraj%20Prasad!%20It's%20a%20fun%20and%20educational%20way%20to%20teach%20kids%20about%20healthy%20eating%20and%20food%20labels.%20Perfect%20for%20families%20who%20want%20to%20make%20nutrition%20fun!%20%F0%9F%8D%95%F0%9F%8D%9C%F0%9F%8D%9A%0A%0AGet%20it%20here:%20https://amzn.in/d/5crg2K8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bright-teal text-white px-2 py-1 sm:px-4 sm:py-1 lg:px-4 lg:py-1 font-bold text-base sm:text-lg lg:text-xl hover:bg-bright-teal/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 relative z-10 w-full sm:w-auto lg:min-w-[300px] lg:max-w-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={50}
                height={50}
                className="w-7 sm:w-7"
              />
              <span className="text-center">Share with family & friends</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/home/sparkle-down.svg"
                  alt="Sparkle decoration"
                  width={60}
                  height={20}
                  className="absolute -bottom-4 -right-4 sm:hidden md:hidden lg:block lg:-bottom-8 lg:-right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right Section - Book Cover */}
          <motion.div
            className="flex justify-center relative w-full lg:w-auto ml-6 order-1 lg:order-2"
          >
            <motion.div
              className="relative transform rotate-3"
            >
              <a
                href="https://amzn.in/d/5crg2K8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/home/nutriroo.png"
                  alt="NutriRoo ROFL: The Food Label Book by Suraj Prasad"
                  width={400}
                  height={500}
                  className="w-56 h-72 sm:w-72 sm:h-88 lg:w-80 lg:h-96 xl:w-96 xl:h-[500px] object-contain drop-shadow-2xl"
                  priority
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nutriroo;
