"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Members = ({
  heading,
  cards,
}: {
  heading: string;
  cards: { name: string; description?: string; image: string; link?: string; style?: string }[];
}) => {
  return (
    <motion.div
      className="w-full text-primary mb-8 sm:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 w-full items-center">
        <div className="flex flex-col items-center mt-12 sm:mt-16 lg:mt-20 w-full max-w-7xl">
          <motion.h2
            className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {cards.map((i, key) => (
              <motion.a
                key={key}
                className="flex flex-col items-center p-2 sm:p-4"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * key,
                  ease: "easeOut",
                }}
                href={i?.link}
                target="_blank"
                rel="noopener noreferrer"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-lg mb-3 sm:mb-4"
                  whileHover={{
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {i?.image ? (
                    <Image
                      src={i?.image}
                      alt={i?.name}
                      width={100}
                      height={100}
                      className={`object-contain w-full h-full ${i?.style}`}
                    />
                  ) : (
                    <></>
                  )}
                </motion.div>
                <motion.p
                  className="mt-2 sm:mt-4 font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * key + 0.3 }}
                  viewport={{ once: true }}
                >
                  {i?.name}
                </motion.p>
                {i?.description ? <motion.p
                  className="text-xs sm:text-sm md:text-base text-gray-700 text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * key + 0.5 }}
                  viewport={{ once: true }}
                >
                  {i.description}
                </motion.p> : <></>}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Members;
