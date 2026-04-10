"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WellnessSection() {
  const gaps = [
    {
      title: "Curriculum overload:",
      description: "Health + academic + behavioral mandates all competing for classroom time"
    },
    {
      title: "Disconnected lessons:",
      description: "Health lessons feel theoretical. Students don't see how they apply to real life"
    },
    {
      title: "Teacher overwhelm:",
      description: "Lack of resources, training time, and confidence to teach wellness"
    },
    {
      title: "Student disengagement:",
      description: "Traditional \"health class\" puts students to sleep"
    },
    {
      title: "No system:",
      description: "Health is taught sporadically, not reinforced consistently"
    }
  ];

  return (
    <section className="py-20 px-0 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-[380px] h-[827px] md:w-full md:h-auto bg-[#183A39] rounded-[8px] md:rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col items-center space-y-10 overflow-hidden"
      >
        {/* Responsive Image Placeholder */}
        <div className="w-full relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] overflow-hidden bg-[#F0EEE6]/10 flex items-center justify-center border border-[#F0EEE6]/5">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F0EEE6]/20 p-8 text-center">
              <span className="font-jubilat text-xl uppercase tracking-widest font-bold">
                [Image Placeholder]
              </span>
              <span className="font-jubilat text-sm mt-2">
                (Import school/classroom photo here)
              </span>
           </div>
        </div>

        {/* Content Section */}
        <div className="w-full space-y-10 lg:grid lg:grid-cols-2 lg:gap-20 lg:space-y-0">
          <div className="space-y-6">
            <h2 className="font-jubilat text-[36px] md:text-[48px] text-[#51D2A2] leading-tight font-medium">
              The school wellness gap
            </h2>
            
            <div className="space-y-8">
               {gaps.map((gap, index) => (
                 <div key={index} className="space-y-2">
                    <p className="font-jubilat text-[14px] md:text-[16px] text-[#F0EEE6]">
                       <span className="font-bold opacity-100">{gap.title}</span>{" "}
                       <span className="opacity-80">{gap.description}</span>
                    </p>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <button className="w-[336px] h-[32px] md:w-full md:max-w-md bg-[#51D2A2] text-[#183A39] px-8 md:py-5 rounded-[8px] md:rounded-full font-haptik font-bold text-[14px] md:text-[16px] flex items-center justify-between hover:opacity-95 transition-opacity group">
              Request Walkthrough
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
