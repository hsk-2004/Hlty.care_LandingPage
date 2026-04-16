"use client";

import { motion } from "framer-motion";

const updates = [
  { 
    id: 1, 
    title: "Fueling Up Compilation | Healthy Eating Habits | Kids Nutrition", 
    image: "", // User will import
  },
  { 
    id: 2, 
    title: "Fueling Up Compilation | Healthy Eating Habits | Kids Nutrition", 
    image: "",
  },
  { 
    id: 3, 
    title: "Fueling Up Compilation | Healthy Eating Habits | Kids Nutrition", 
    image: "",
    hasPlayIcon: true
  },
];

export default function LatestSection() {
  return (
    <section className="bg-[#F0EEE6] py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-jubilat text-[32px] md:text-[40px] text-[#183A39] font-normal mb-6">
            Latest from HAHA Squad
          </h2>
          <div className="w-full h-[1px] bg-[#183A39]/30" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {updates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-[#C4C4C4] rounded-[12px] md:rounded-[20px] overflow-hidden mb-6">
                {/* Overlay Icon for the 3rd card (as seen in image) */}
                {item.hasPlayIcon && (
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/80 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                  </div>
                )}
                
                {/* Empty for now as user will import */}
                <div className="w-full h-full bg-[#C4C4C4]" />
              </div>
              
              {/* Card Title */}
              <p className="font-jubilat text-[14px] md:text-[18px] text-[#183A39] leading-[1.4] font-medium pr-4">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
