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
        <div className="bg-[#183A39] rounded-[8px] md:rounded-[40px] lg:rounded-[16px] overflow-hidden px-4 pt-4 pb-6 md:p-10 lg:p-10 flex flex-col-reverse md:flex-row gap-8 items-center w-[362px] h-[626px] lg:w-[1234px] lg:h-[531px] mx-auto">
          {/* Left Column: Content */}
          <div className="flex-1 space-y-6 text-[#F0EEE6] lg:pl-4">
            <h2 className="font-jubilat text-[24px] md:text-[36px] lg:text-[42px] leading-[1.1] text-[#61D0A1] lg:-translate-y-5">
              Health lives in small, <br /> repeatable moments.
            </h2>

            <div className="space-y-4 lg:space-y-3 font-haptik text-[12px] lg:text-[16px] leading-relaxed lg:leading-tight max-w-md lg:translate-y-5">
              <p className="font-normal">Most habits aren&apos;t built during &quot;health time.&quot;</p>

              <div className="space-y-1 lg:space-y-0.5">
                <p className="font-normal">They form in between everything else:</p>
                <ul className="list-disc pl-5 space-y-1 lg:space-y-0 text-[12px] lg:text-[16px] font-normal">
                  <li>before the school rush</li>
                  <li>at the table</li>
                  <li>during play</li>
                  <li>at bedtime</li>
                </ul>
              </div>

              <p className="font-normal">These moments are easy to miss — and easy to overthink. We design for them instead.</p>
            </div>

            <button className="bg-[#61D0A1] text-[#183A39] lg:w-[412px] h-[32px] lg:h-[40px] px-6 py-2 rounded-full flex items-center justify-between font-haptik font-medium text-[12px] group hover:opacity-90 transition-all lg:translate-y-5">
              <span>Check Out Our Summer Camp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 lg:flex-none w-[330px] h-[243px] lg:w-[667px] lg:h-[491px] relative md:aspect-auto md:h-[400px] lg:h-[491px] rounded-[8px] overflow-hidden lg:translate-x-5">
            <Image
              src="/parents/parent3.png"
              alt="Family lifestyle"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Decoration Image Below Green Box */}
        <div className="w-full max-w-[1164px] xl:w-[1164px] mx-auto mt-12 md:mt-16 flex justify-center hidden lg:block">
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
