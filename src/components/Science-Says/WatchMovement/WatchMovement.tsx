"use client";

import { motion } from "framer-motion";

export default function WatchMovement() {
  return (
    <section className="w-full bg-white py-20 px-4 text-center overflow-hidden">
      <motion.h2 
        className="text-3xl md:text-4xl font-extrabold text-primary mb-4 md:mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-50px" }}
      >
        Watch the Movement in Action
      </motion.h2>
      
      <motion.div 
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-40"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, margin: "-50px" }}
      >
        {/* Video 1 - Takes 3/4 width */}
        <motion.div 
          className="flex-1 md:flex-[3] bg-soft-green rounded-4xl p-2 md:p-4 flex flex-col items-center justify-center min-h-[250px] md:min-h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, margin: "-50px" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <motion.div 
            className="w-full h-full rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4_HEBd1SSus"
              title="The Childhood Health Crisis: India's Wake-Up Call"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Video 2 - Takes 1/4 width */}
        <motion.div 
          className="flex-1 md:flex-[1] bg-soft-green rounded-4xl p-2 md:p-4 flex flex-col items-center justify-center min-h-[200px] md:min-h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false, margin: "-50px" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <motion.div 
            className="w-full h-full rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Cl7BtbwxPAI"
              title="Book Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
