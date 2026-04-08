"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    title: "MENTAL LOAD SPILLOVER",
    description: "Unanswered questions about a child’s health don’t stay at home. They surface in meetings, in focus, in decision fatigue."
  },
  {
    title: "MID-DAY RABBIT HOLES",
    description: "Parents spend an average of 40 minutes per day searching for answers to child health questions at work, on their phones."
  },
  {
    title: "PREVENTABLE ABSENCES",
    description: "Appointments that could have been avoided with the right daily habits and information cost both the family and the team."
  },
  {
    title: "UNSPOKEN BENEFIT GAP",
    description: "EAPs and health insurance exist, but neither addresses everyday family health friction — the biggest actual stressor for working parents."
  }
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-[#F0EEE6] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Desktop View: Three-Column Layout (H1 | Image | List) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6 xl:gap-10">
          
          {/* Left Column: Headlines */}
          <div className="space-y-10 lg:pr-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-jubilat text-[32px] md:text-[44px] lg:text-[48px] xl:text-[56px] text-[#183A39] leading-[1.1] font-medium"
            >
              The child is fine. <br />
              But the parent <br /> isn&apos;t here.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-jubilat text-[14px] md:text-[16px] lg:text-[17px] text-[#183A39]/80 leading-relaxed max-w-[340px]"
            >
              It’s not a sick day. It’s the slow drain of unresolved worry, about food, sleep, screen time, or development that follows employees into every meeting.
            </motion.p>
          </div>

          {/* Middle Column: Large Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:w-[554px] lg:h-[478px] rounded-[32px] lg:rounded-[16px] overflow-hidden shrink-0"
          >
             <Image 
               src="/employer/p11.png" 
               alt="Stressed parent illustration" 
               fill 
               className="object-cover" 
             />
          </motion.div>

          {/* Right Column: Key Problems List */}
          <div className="space-y-12">
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-3"
              >
                <h3 className="font-haptik text-[14px] md:text-[15px] xl:text-[16px] text-[#183A39] font-bold uppercase tracking-[0.05em]">
                  {item.title}
                </h3>
                <p className="font-jubilat text-[13px] md:text-[14px] xl:text-[16px] text-[#183A39]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View: Stacked Layout (matches previous mobile request) */}
        <div className="lg:hidden flex flex-col gap-12">
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-jubilat text-[32px] md:text-[44px] text-[#183A39] leading-[1.05] font-medium"
            >
              The child is fine. But the parent isn&apos;t here.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-jubilat text-[14px] md:text-[16px] text-[#183A39]/80 leading-relaxed"
            >
              It’s not a sick day. It’s the slow drain of unresolved worry, about food, sleep, screen time, or development that follows employees into every meeting.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative aspect-[4/3] rounded-[24px] overflow-hidden"
          >
             <Image 
               src="/employer/p11.png" 
               alt="Stressed parent illustration" 
               fill 
               className="object-cover" 
             />
          </motion.div>

          <div className="space-y-10">
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-3"
              >
                <h3 className="font-haptik text-[14px] md:text-[15px] text-[#183A39] font-bold uppercase tracking-[0.05em]">
                  {item.title}
                </h3>
                <p className="font-jubilat text-[13px] md:text-[14px] text-[#183A39]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
