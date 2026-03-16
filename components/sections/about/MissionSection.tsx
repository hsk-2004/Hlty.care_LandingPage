"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative min-h-screen md:min-h-[120vh] lg:min-h-[140vh] pb-24 md:pb-32 lg:pb-40 pt-0 px-4 flex justify-center items-start overflow-hidden bg-[#F0EEE6]">
      {/* Background Image Container - Desktop (Full) */}
      <div className="absolute inset-0 z-0 hidden lg:flex justify-center items-start pointer-events-none">
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
              <h1 className="font-jubilat text-[24px] md:text-[36px] lg:text-[48px] font-medium leading-[1.2] mb-6 md:mb-8 lg:mb-10 text-[#1A2E2C]">
                Building Hlty Beings
              </h1>

              <div className="space-y-1 text-[12px] md:text-[14px] lg:text-[16px] leading-tight text-[#2D4341]/90">
                <p>
                  Healthcare matters deeply.<br />
                  But often, we meet it late.
                </p>

                <p>
                  In India we&apos;ve become strong at treating illness. But we&apos;re still learning how to build the everyday foundations that make health easier to sustain.
                </p>

                <p>
                  By the time a diagnosis appears, habits are already in formed.<br />
                  We believe prevention can begin earlier &mdash; not with warnings, but with familiarity.
                </p>

                <p>
                  Hlty Beings is building a preventive health ecosystem for children and families, starting where habits are still forming.<br />
                  We design research-informed books, games, workshops, and tools that help children explore movement, nutrition, emotional regulation, rest, and technology balance through stories, play, and repetition.
                </p>

                <p>No fear. No moralising.</p>

                <p>
                  Just experiences that make healthy choices easier to return to.<br />
                  We&apos;ve learned that health behaviours aren&apos;t prescribed they&apos;re practiced.<br />
                  So instead of building content that competes for attention, we create tangible systems families can engage with repeatedly at home, in classrooms, and in shared spaces.
                </p>

                <p>
                  Because repetition builds familiarity.<br />
                  And familiarity builds confidence.
                </p>

                <p>
                  Today, we are testing our first physical products and live workshops.<br />
                  Over time, this work has the potential to grow into a larger, curriculum-aligned system that integrates into the environments shaping childhood.
                </p>

                <p>
                  Our ambition is simple:<br />
                  to make healthier defaults feel natural early in life<br />
                  so fewer decisions later feel urgent.<br />
                  Not by telling children what to do.<br />
                  <br />
                  But by designing experiences they want to return to.
                </p>

                <p className="pt-2 text-[12px] md:text-[14px] lg:text-[16px] opacity-100">
                  We bring together science, storytelling, and a little humor to create small wins that last.<br />
                  We are a team of clinicians, designers, educators, technologists, and parents on a shared mission: to save childhood and secure the future of health.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Illustration - Pinned to absolute bottom of fixed-height card */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <div className="w-full relative aspect-[400/260] md:aspect-[500/420] lg:aspect-[808/600] xl:aspect-[808/700]">
              {/* Mobile Image */}
              <div className="md:hidden">
                <Image
                  src="/about/about6.png"
                  alt="Mission Illustration Mobile"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src="/about/about5.svg"
                  alt="Mission Illustration Desktop"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
