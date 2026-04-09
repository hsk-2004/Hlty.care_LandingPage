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
          <p className="font-jubilat text-[clamp(12px,4vw,24px)] md:text-2xl xl:text-[20px] text-[#183A39] leading-relaxed">
            Hlty Beings works alongside everyday family life — mornings, meals, play, and wind-down. <br className="hidden md:block" />
            Not with rules to follow, but with systems that make healthier choices easier to return to.
          </p>
        </div>

        {/* Dark Green Card */}
        <div className="bg-[#183A39] rounded-[8px] lg:rounded-[16px] overflow-hidden px-4 pt-4 pb-6 lg:p-10 flex flex-col-reverse lg:flex-row gap-8 items-center w-full max-w-[362px] md:max-w-[420px] min-h-[626px] md:min-h-[700px] lg:min-h-0 lg:max-w-[1234px] lg:h-[480px] mx-auto transition-all duration-300">
          {/* Left Column: Content */}
          <div className="flex-1 space-y-6 text-[#F0EEE6] lg:pl-4">
            <h2 className="font-jubilat text-[clamp(24px,5vw,36px)] lg:text-[42px] leading-[1.1] text-[#61D0A1] lg:-translate-y-2">
              Health lives in small, <br /> repeatable moments.
            </h2>

            <div className="space-y-4 lg:space-y-3 font-haptik text-[clamp(12px,3vw,16px)] lg:text-[16px] leading-relaxed lg:leading-tight max-w-md lg:translate-y-0">
              <p className="font-normal">Most habits aren&apos;t built during &quot;health time.&quot;</p>

              <div className="space-y-1 lg:space-y-0.5">
                <p className="font-normal">They form in between everything else:</p>
                <ul className="list-disc pl-5 space-y-1 lg:space-y-0 text-[clamp(12px,3vw,16px)] lg:text-[16px] font-normal">
                  <li>before the school rush</li>
                  <li>at the table</li>
                  <li>during play</li>
                  <li>at bedtime</li>
                </ul>
              </div>

              <p className="font-normal">These moments are easy to miss — and easy to overthink. We design for them instead.</p>
            </div>

            <button className="bg-[#61D0A1] text-[#183A39] w-[318px] lg:w-[412px] h-[32px] lg:h-[40px] px-6 py-2 rounded-full flex items-center justify-between font-haptik font-medium text-[12px] lg:text-[16px] group hover:opacity-90 transition-all lg:translate-y-2">
              <span className="lg:text-[16px]">Check Out Our Summer Camp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 lg:flex-none w-full max-w-[330px] md:max-w-[380px] aspect-[330/243] lg:max-w-[667px] lg:h-[440px] relative rounded-[8px] overflow-hidden lg:translate-x-5">
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
