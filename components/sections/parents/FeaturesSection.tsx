"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const featureList = [
    {
      title: "TRY A SHORT FAMILY PRACTICE",
      description: "7 days. One small moment at a time. A gentle way to experience how repetition works without changing your schedule.",
      link: "START THE 7-DAY FAMILY PRACTICE"
    },
    {
      title: "USE A SIMPLE TOOLKIT",
      description: "A small set of flexible tools you can reach for in real moments —mornings, meals, play, and nights — without committing to a full routine.",
      link: "EXPLORE THE FAMILY TOOLKIT"
    },
    {
      title: "READ HOW OTHER PARENTS USE IT",
      description: "Not success stories. Just real patterns, adjustments, and trade-offs.",
      link: "READ PARENT STORIES"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

        {/* Left Column: Heading & Intro */}
        <div className="lg:col-span-3 space-y-8">
          <h2 className="font-jubilat text-[24px] md:text-[clamp(28px,6vw,40px)] md:text-[40px] xl:text-[36px] leading-[1.1] text-[#183A39]">
            Hlty Beings fits into your routines that you already follow.
          </h2>
          <div className="space-y-6 font-haptik text-[12px] md:text-[16px] xl:text-[16px] text-[#183A39] opacity-90 leading-relaxed">
            <p>
              Healthy routines stick when the environment does the work. We focus on cues, rhythms, and materials that guide behaviour without reminders, rewards, or willpower.
            </p>
            <p className="pt-2">
              That&apos;s how small choices become familiar.
            </p>

            {/* Mobile-only Image (Integrated) */}
            <div className="lg:hidden relative w-[376px] h-[426px] max-w-full rounded-[16px] overflow-hidden shadow-sm mx-auto mt-6">
              <Image
                src="/parents/parent5.png"
                alt="Feature overview mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle Column: Large Feature Image (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-5 relative xl:w-[496px] xl:h-[521px] rounded-[24px] overflow-hidden shadow-sm mx-auto">
          <Image
            src="/parents/parent5.png"
            alt="Feature overview desktop"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column: Feature List */}
        <div className="lg:col-span-4 space-y-10">
          {featureList.map((item, index) => (
            <div key={index} className="space-y-1 pb-8 border-b-[1px] border-[#183A39]">
              <h3 className="font-haptik font-bold text-[14px] md:text-[16px] xl:text-[20px] tracking-wider text-[#183A39]">
                {item.title}
              </h3>
              <p className="font-haptik text-[15px] md:text-[16px] xl:text-[16px] text-[#183A39] opacity-80 leading-[1.1]">
                {item.description}
              </p>
              <button className="flex items-center gap-2 font-haptikRotalic italic font-bold text-[12px] md:text-[14px] text-[#183A39] group">
                <span className="uppercase tracking-widest border-b border-transparent group-hover:border-[#183A39] transition-all">
                  {item.link}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
