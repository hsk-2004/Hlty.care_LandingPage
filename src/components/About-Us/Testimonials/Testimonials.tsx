"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="bg-white w-full my-8 sm:my-12 mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
    >
      <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 w-full items-center">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-primary text-center text-2xl sm:text-3xl font-bold mb-4 inline-block">
            What People Say...
            <motion.div
              className="flex justify-center mt-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="mt-2 w-3/4 mx-auto"
                style={{
                  height: "3px",
                  background:
                    "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
                }}
              />
            </motion.div>
          </h2>
        </motion.div>

        {/* Person 1 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 mt-8 sm:mt-12 max-w-6xl w-full relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Polaroid box */}
          <motion.div
            className="relative w-full sm:w-3/4 lg:w-1/2 h-80 sm:h-80 lg:h-90 bg-soft-yellow rounded-2xl flex items-center justify-center order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              scale: 1.02,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src="/images/company/suraj.png"
              alt="suraj"
              width={240}
              height={240}
              className="object-top object-cover w-full h-full rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/polaroid-1.png"
                alt="polaroid"
                width={240}
                height={240}
                className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 w-32 h-24 sm:w-40 sm:h-24 lg:w-60 lg:h-40"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-2/3 lg:ml-12 my-4 lg:my-8 order-2 lg:order-2 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Suraj Prasad
            </motion.p>
            <motion.p
              className="text-lg sm:text-lg lg:text-xl xl:text-2xl text-primary mt-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Hlty Founder
            </motion.p>
            <motion.div
              className="border-t-2 border-dashed border-teal w-32 sm:w-40 lg:w-[200px] my-3 lg:my-4 lg:mx-0"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            ></motion.div>
            <motion.p
              className="text-md sm:text-base lg:text-xl xl:text-2xl text-primary mt-2 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              A former super (not duper) obese adult (130 kg → 98 kg and
              counting down)
            </motion.p>
            <motion.p
              className="text-primary mt-2 font-light text-sm sm:text-sm lg:text-base xl:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Suraj transformed his own health and realized most systems fail
              families. A pharmacist and IIM Kozhikode postgraduate, he brings
              over 22 years in healthcare along with a unique background as a
              sci-fi author and storytelling professor. His journey shaped his
              belief that health must be accessible, playful, and lovable—not a
              burden. Favourite Food - Chole Bhature
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Person 2 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 mt-12 sm:mt-16 lg:mt-20 max-w-6xl w-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text */}
          <motion.div
            className="w-full lg:w-2/3 lg:mr-12 my-4 lg:my-8 order-2 lg:order-1 text-right lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Ankita Dey
            </motion.p>
            <motion.p
              className="text-lg sm:text-lg lg:text-xl xl:text-2xl text-primary mt-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Creative Experience Lead
            </motion.p>
            <motion.div
              className="border-t-2 border-dashed border-teal w-32 sm:w-40 lg:w-[200px] my-3 lg:my-4 lg:mx-0 ml-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            ></motion.div>
            <motion.p
              className="text-md sm:text-base lg:text-xl xl:text-2xl text-primary mt-2 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Some background about this person here...
            </motion.p>
            <motion.p
              className="text-primary mt-2 font-light text-sm sm:text-sm lg:text-base xl:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Ankita Dey designs playful, research-driven experiences that make
              science engaging for children and families. With a background in
              visual communication and information design, she brings clarity
              and creativity to complex ideas. Passionate about making health
              educational, empowering, and fun, Ankita leads the creative vision
              across books, games, workshops, and digital platforms—shaping a
              future where prevention feels natural and joyful. Favourite Food -
              Chicken Biryani
            </motion.p>
          </motion.div>

          {/* Polaroid box */}
          <motion.div
            className="relative w-full sm:w-3/4 lg:w-1/2 h-80 sm:h-80 lg:h-90 bg-soft-yellow rounded-2xl flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              scale: 1.02,
              rotate: -2,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src="/images/company/ankita.jpg"
              alt="ankita"
              width={240}
              height={240}
              className="object-top object-cover w-full h-full rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/polaroid-2.png"
                alt="polaroid"
                width={240}
                height={240}
                className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-8 lg:-bottom-12 lg:-left-12 w-32 h-26 sm:w-40 sm:h-40 lg:w-60 lg:h-40"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
