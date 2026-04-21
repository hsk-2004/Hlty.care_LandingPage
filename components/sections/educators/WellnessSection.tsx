"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import WalkthroughContent from "../walkthrough/WalkthroughContent";

export default function WellnessSection() {
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);

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

  const pillars = [
    {
      badge: "Workshops",
      badgeWidth: "lg:w-[81px]",
      title: "Classroom Playshops",
      image: "/educators/well1.svg",
      imageWidth: 196,
      imageHeight: 107,
      points: [
        "Builds habits through play & storytelling",
        "Curriculum-aligned learning outcomes"
      ],
      buttonText: "Explore",
      buttonWidth: "w-[74px]"
    },
    {
      badge: "Visual Learning Systems",
      badgeWidth: "lg:w-[151px]",
      title: "Posters, charts & daily reminders",
      image: "/educators/well3.svg",
      imageWidth: 80,
      imageHeight: 104,
      points: [
        "Passive reinforcement (students absorb healthier thinking)",
        "Colorful, age-appropriate designs",
        "Ready to print and display",
        "Works alongside regular lessons"
      ],
      buttonText: "Download Sample",
      buttonWidth: "w-[132px]"
    },
    {
      badge: "Teacher Guides & Training",
      badgeWidth: "lg:w-[161px]",
      title: "Everything you need to succeed",
      image: "/educators/well2.svg",
      imageWidth: 200,
      imageHeight: 141,
      points: [
        "One-page guides per activity (zero friction)",
        "Student conversation starters included",
        "Parent engagement templates",
        "Optional training for deeper implementation"
      ],
      buttonText: "Register Interest",
      buttonWidth: "w-[124px]"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <AnimatePresence>
        {isWalkthroughOpen && (
          <WalkthroughContent onClose={() => setIsWalkthroughOpen(false)} />
        )}
      </AnimatePresence>

      <div className="max-w-[1280px] mx-auto">
        {/* Wellness Gap Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1D3633] lg:bg-[#183A39] rounded-[16px] md:rounded-[16px] overflow-hidden p-5 md:p-12 lg:p-20 relative mb-32 w-full h-auto lg:w-[1177px] lg:h-[560px] mx-auto shadow-xl lg:shadow-none"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 md:gap-12 lg:gap-24 relative z-10 lg:h-full">

            {/* Right Column: Image (Ordered first on mobile, second on desktop) */}
            <div className="w-full lg:w-auto lg:h-full flex items-center justify-center order-1 lg:order-2 pb-2 lg:pb-0 lg:ml-auto lg:translate-x-12">
              <div className="w-full aspect-[4/3] md:h-auto md:aspect-[4/3] lg:aspect-auto rounded-[8px] md:rounded-[16px] overflow-hidden relative group lg:w-[437px] lg:h-[520px]">
                <Image
                  src="/educators/educator2.svg"
                  alt="Classroom Wellness"
                  fill
                  priority
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Visual Overlay like the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Left Column: Content */}
            <div className="flex flex-col lg:w-1/2 order-2 lg:order-1 space-y-5 lg:space-y-10 mt-auto lg:mt-0">
              <h2 className="font-jubilat text-[22px] md:text-[42px] lg:text-[42px] text-[#5DE2A2] leading-[1.2] lg:leading-[1.1] font-medium tracking-tight">
                The school wellness gap
              </h2>

              <div className="space-y-5 md:space-y-4 lg:space-y-3 lg:translate-y-12">
                {gaps.map((gap, index) => (
                  <div key={index} className="flex gap-0 md:gap-3 lg:items-start items-start">
                    <span className="hidden md:block w-1.5 h-1.5 bg-[#E4DBCD] rounded-full mt-2.5 shrink-0" />
                    <p className="font-jubilat text-[11px] md:text-[15px] lg:text-[16px] text-[#E4DBCD] leading-[1.6] md:leading-relaxed font-normal">
                      <span>{gap.title}</span>{" "}
                      <span>{gap.description}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 lg:pt-6">
                <button
                  onClick={() => setIsWalkthroughOpen(true)}
                  className="inline-flex items-center justify-between px-6 lg:px-8 bg-[#5DE2A2] text-[#183A39] rounded-full font-haptik text-[14px] lg:uppercase lg:tracking-wider w-full md:w-[340px] lg:w-[498px] py-3.5 lg:py-0 lg:h-[40px] hover:scale-[1.02] transition-transform group"
                >
                  Request Walkthrough
                  <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Three Core Pillars Section */}
        <div
          className="relative bg-[#F2EFE4] lg:bg-transparent lg:bg-[url('/educators/wellness-back.svg')] lg:bg-cover lg:bg-center lg:bg-no-repeat rounded-[24px] lg:rounded-[40px] px-6 md:px-12 lg:px-20 py-12 lg:py-0 mt-12 lg:mt-16 mx-auto lg:w-[1320px] lg:h-[547px] flex flex-col justify-center"
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-center mb-10 lg:mb-16 lg:translate-y-8 pr-6 lg:pr-0"
          >
            <h2 className="font-jubilat text-[28px] md:text-[56px] lg:text-[42px] text-[#183A39] leading-[1.2] lg:leading-[1.1] mb-4 lg:mb-6 font-medium">
              Wellness that integrates,<br className="lg:hidden" /> not interrupts
            </h2>
            <p className="font-jubilat text-[14px] md:text-[24px] lg:text-[24px] text-[#183A39] opacity-80 max-w-3xl mx-auto lg:leading-normal leading-[1.6]">
              Three core pillars designed specifically for classroom realities.
            </p>
          </motion.div>

          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory lg:flex-wrap lg:justify-center gap-6 lg:gap-8 pb-8 -mx-6 px-6 lg:pb-0 lg:-mx-0 lg:px-0 hide-scrollbar lg:overflow-visible">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#EBE4D5] rounded-[20px] pt-4 lg:pt-5 pb-6 lg:pb-7 px-6 lg:px-7 flex flex-col shrink-0 w-[280px] h-[293px] border border-[#183A39]/10 relative group hover:shadow-xl transition-all duration-500 snap-center"
              >
                {/* Badge */}
                <div className="mb-2">
                  <span className={`inline-flex items-center justify-center ${pillar.badgeWidth} lg:h-[19px] px-3 border border-[#BEB4A5] bg-[#F2F0E3] rounded-full text-[8px] md:text-[9px] font-haptik uppercase tracking-tight text-[#183A39]`}>
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-jubilat text-[22px] lg:text-[16px] text-[#183A39] leading-[1.2] mb-2 font-bold">
                    {pillar.title}
                  </h3>

                  <ul className="space-y-0 mb-4">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-[#183A39] opacity-90">
                        <span className="w-1 h-1 bg-[#183A39] rounded-full mt-2 shrink-0" />
                        <p className="font-jubilat text-[13px] lg:text-[14px] leading-tight">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button & Image Overlay */}
                <div className="mt-auto relative flex items-end">
                  <button className={`bg-[#183A39] text-[#F0EEE6] ${pillar.buttonWidth} h-[32px] shrink-0 flex items-center justify-center rounded-full font-haptik text-[9px] uppercase tracking-wider whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] transition-all z-10`}>
                    {pillar.buttonText}
                  </button>
                  <div
                    className={`absolute bottom-0 right-0 ${index === 2
                        ? "translate-x-[100px] translate-y-[80px]"
                        : index === 1
                          ? "translate-x-4 translate-y-12"
                          : "translate-x-12 -translate-y-4"
                      } pointer-events-none`}
                    style={{ width: `${pillar.imageWidth}px`, height: `${pillar.imageHeight}px` }}
                  >
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

