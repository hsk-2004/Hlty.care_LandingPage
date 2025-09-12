"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PictureThis() {
  return (
    <section className="w-full h-[100vh] sm:h-[110vh] md:h-[120vh] lg:h-[125vh] relative text-white text-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Image Container */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/picture-this.png"
          alt="Picture This Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative -mt-42 sm:-mt-0 lg:-mt-24 z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-primary h-auto sm:h-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          Picture this
          <motion.div
            className="mt-2 w-3/4 mx-auto"
            style={{
              height: "3px",
              background:
                "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          />
        </motion.h2>
        <motion.p
          className="mb-3 sm:mb-4 lg:w-3/5 text-center mx-auto mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          In 2047, India celebrates 100 years of independence. But which India
          will we be celebrating?
        </motion.p>
        <motion.p
          className="mb-3 sm:mb-4 lg:w-3/5 text-center mx-auto text-sm sm:text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        >
          <strong>Viksit Bharat</strong> – where children grow strong with
          proper nutrition, maintain healthy weights, and develop into
          productive citizens? Or <strong>Roggrast Bharat</strong> – where{" "}
          <span className="font-bold">83 million</span> children are projected
          to be obese by 2035, 18.7% remain malnourished, and lifestyle diseases
          dominate our healthcare system before children even reach adulthood?
        </motion.p>
        <motion.p
          className="mb-3 sm:mb-4 lg:w-3/5 text-center mx-auto text-sm sm:text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        >
          The childhood obesity epidemic is India&apos;s silent emergency.{" "}
          <span className="font-bold">14.4 million</span> children are already
          obese, with rates tripling in urban areas and screen time driving this
          health crisis.
        </motion.p>
        <motion.p
          className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
        >
          The choice starts with your family. Today.
        </motion.p>
      </motion.div>
    </section>
  );
}
