"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative min-h-screen md:min-h-[120vh] lg:min-h-[140vh] pb-24 md:pb-32 lg:pb-40 pt-6 md:pt-20 lg:pt-32 xl:pt-40 px-4 flex justify-center items-start overflow-hidden bg-[#F0EEE6]">
      {/* Background Image Container - Desktop (Full) */}
      <div className="absolute inset-0 z-0 hidden lg:flex justify-center items-start pointer-events-none pt-24 lg:pt-52 xl:pt-40">
        <div className="w-full max-w-[1330.225px] h-[1347px] relative">
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src="/about/about2.svg"
              alt="Background Decoration"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Background Image Container - Mobile/Tablet (Hidden) */}
      <div className="absolute inset-0 z-0 hidden justify-center items-start pointer-events-none">
        <div className="w-[727px] h-[550px] relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Image
              src="/about/about2.svg"
              alt="A letter from the Founder"
              width={727}
              height={820}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 flex justify-center mt-0 md:mt-0 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[7.69px] md:rounded-[12px] lg:rounded-[16px] border-[10px] md:border-[15px] lg:border-[20px] border-[#E5E2D9] shadow-2xl relative w-[390px] md:w-[600px] lg:w-[808px] h-[825.16px] md:h-[1000px] lg:h-[1377px] overflow-hidden"
        >
          {/* Text Content */}
          <div className="p-6 md:p-10 lg:p-14 pb-32 md:pb-40">
            <div className="max-w-[90%] font-jubilat text-[#2D4341] space-y-4 md:space-y-6 lg:space-y-4 pt-1 md:pt-3 lg:pt-4">
              <h1 className="font-jubilat text-[24px] md:text-[36px] lg:text-[48px] font-normal leading-[1.2] mb-6 md:mb-8 lg:mb-10 text-[#1A2E2C]">
                Building Hlty Beings
              </h1>

              <div className="space-y-1 md:space-y-2 font-normal text-[12px] md:text-[18px] lg:text-[20px] leading-[1.3] text-[#2D4341] opacity-90">
                <p>
                  The world is quietly designed to make staying healthy hard.
                </p>

                <p>
                  Scientists call it an obesogenic environment, cities built for sitting, food engineered to be irresistible, technology competing for every moment of attention. The system doesn&apos;t plot against anyone. But the result is the same: the easier life gets, the harder health becomes.
                </p>

                <p>
                  This isn&apos;t abstract for us. We have looked at many such stories, including Suraj losing over 35 kilograms and still going, not through willpower alone, but by learning to understand the environment he was fighting against.
                </p>

                <p>
                  That understanding led to one uncomfortable question:<br />
                  If staying healthy is this hard for adults, what chance do our children have?
                </p>

                <p>
                  Today&apos;s kids are growing up in the most obesogenic moment in human history. And the standard response are warnings, lectures, rules. Habits shouldn&apos;t be built on fear and aren&apos;t built through information. They&apos;re built through experience, repetition, and environments that make the right choices feel natural.
                </p>

                <p>
                  So we stopped asking how do we teach children to be healthy and started asking how do we build the environment that makes healthy feel obvious?
                </p>

                <p>
                  That question became Hlty Beings.
                </p>

                <p>
                  We&apos;re not a diet program. We&apos;re not another nutrition lecture. We&apos;re building a preventive health ecosystem for children and families&mdash;one built on stories, play, games, and experiences that make healthy behaviours feel joyful, not forced.
                </p>

                <p className="pt-2 italic">
                  Because habits learned through joy tend to stay for life.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Illustration - Pinned to absolute bottom of fixed-height card */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden transform translate-y-6 md:hidden">
            <div className="w-full relative aspect-[400/260]">
              <Image
                src="/about/about6.png"
                alt="Mission Illustration Mobile"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>



          {/* Desktop About6 Illustration - Pinned to absolute bottom */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden hidden md:block">
            <div className="w-full h-[400px] relative">
              <Image
                src="/about/about6.png"
                alt="Mission Illustration Bottom Desktop"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
