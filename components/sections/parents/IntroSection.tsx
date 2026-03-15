"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Top Centered Text */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <p className="font-jubilat text-lg md:text-2xl xl:text-[20px] text-[#183A39] leading-relaxed">
            Hlty Beings works alongside everyday family life — mornings, meals, play, and wind-down. <br className="hidden md:block" />
            Not with rules to follow, but with systems that make healthier choices easier to return to.
          </p>
        </div>

        {/* Dark Green Card */}
        <div className="bg-[#183A39] rounded-[32px] md:rounded-[40px] overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 items-center xl:w-[1234px] xl:h-[531px] mx-auto w-full">
          {/* Left Column: Content */}
          <div className="flex-1 space-y-8 text-[#F0EEE6] xl:pt-4">
            <h2 className="font-jubilat text-3xl md:text-[42px] leading-[1.1] text-[#61D0A1]">
              Health lives in small, <br /> repeatable moments.
            </h2>

            <div className="space-y-4 font-haptik text-[16px] opacity-90 leading-relaxed max-w-md">
              <p>Most habits aren&apos;t built during &quot;health time.&quot;</p>

              <div className="space-y-1">
                <p>They form in between everything else:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>before the school rush</li>
                  <li>at the table</li>
                  <li>during play</li>
                  <li>at bedtime</li>
                </ul>
              </div>

              <p>These moments are easy to miss — and easy to overthink. We design for them instead.</p>
            </div>

            <button className="bg-[#61D0A1] text-[#183A39] xl:w-[412px] xl:h-[40px] px-6 py-2 rounded-full flex items-center justify-between font-haptik font-medium text-[16px] group hover:opacity-90 transition-all">
              <span>Check Out Our Summer Camp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 xl:flex-none w-full xl:w-[667px] xl:h-[491px] relative aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden">
            <Image
              src="/parents/parent3.png"
              alt="Family lifestyle"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Decoration Image Below Green Box */}
        <div className="w-full max-w-[1164px] xl:w-[1164px] mx-auto mt-12 md:mt-16 flex justify-center">
          <Image
            src="/parents/parent4.svg"
            alt="Decoration"
            width={1164}
            height={55}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
