"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutUsSlider = () => {
  return (
    <motion.section 
      className="w-full mt-12" 
      id="about-us-slider"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src="/images/about-us/about-us-wave.svg" alt="wave" width={150} height={150} className="w-full -mb-1" />
        </motion.div>
      <motion.div 
        className="w-full text-primary bg-[#00D4AB] py-8 pb-30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center p-4 w-full items-center">
          <motion.div 
            className=""
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white text-center">Our Team</h2>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUsSlider;
