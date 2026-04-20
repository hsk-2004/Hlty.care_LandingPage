"use client";

import Image from "next/image";

export default function HealthyHubbaContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <h3 className="font-haptik text-[12px] md:text-[16px] lg:text-[20px] text-[#183A39] tracking-widest uppercase font-bold">
              THE HEALTHY PASSPORT
            </h3>
            <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[20px] text-[#1a3636] leading-[1.4] lg:whitespace-nowrap">
              Healthy Hubba was designed as a living<br />
              playground. Children moved through<br />
              interactive installations, movement circuits,<br />
              food discovery stations, and a Knowledge Zone<br />
              navigated through a playful passport.
            </p>
          </div>

          {/* Mobile Image inserted here */}
          <div className="w-full flex justify-center lg:hidden my-12">
            <Image
              src="/events/hh2.png"
              alt="Healthy Passport & Quiz Mobile"
              width={347}
              height={241}
              className="w-[347px] h-[241px] rotate-[7.12deg] scale-[1.4] object-contain"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-haptik text-[12px] md:text-[16px] lg:text-[20px] text-[#183A39] tracking-widest uppercase font-bold">
              HLTY QUOTIENT QUIZ
            </h3>
            <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[20px] text-[#1a3636] leading-[1.4] lg:whitespace-nowrap">
              The Hlty Quotient Quiz is our city-wide health<br />
              literacy initiative — engaging 45 school teams<br />
              in a shared exploration of nutrition, science,<br />
              and everyday health.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center w-full lg:w-auto">
          <Image
            src="/events/hh2.png"
            alt="Healthy Passport & Quiz"
            width={448}
            height={312}
            className="w-[448px] h-[312px] object-contain rotate-[7.12deg] scale-[1.6]"
          />
        </div>
      </div>

      {/* Image Gallery and Concluding Text */}
      <div className="mt-16 md:mt-24 space-y-12">
        {/* Gallery Grid */}
        <div className="flex flex-col gap-[12px] md:grid md:grid-cols-3 md:gap-6 lg:gap-x-12">
          {/* Top Full-width (spans all columns on desktop) */}
          <div className="md:col-span-3 w-full max-w-[378px] h-[60px] mx-auto md:max-w-none md:w-auto md:h-auto md:aspect-[3/1] lg:aspect-auto lg:w-[960px] lg:mx-auto lg:h-[153px] rounded-[4px] md:rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative shrink-0">
            <Image
              src="/events/hh3.jpg"
              alt="Healthy Hubba Gallery"
              fill
              className="object-cover object-[center_70%]"
            />
          </div>
          
          {/* Bottom Three - Inline on mobile */}
          <div className="flex justify-center items-center w-[378px] relative left-1/2 -translate-x-1/2 gap-[7.5px] md:contents md:left-auto md:translate-x-0">
            <div className="w-[121px] h-[110px] shrink-0 md:w-full md:h-auto md:aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[4px] md:rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
              <Image
                src="/events/hh4.jpg"
                alt="Healthy Hubba Moment 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[121px] h-[110px] shrink-0 md:w-full md:h-auto md:aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[4px] md:rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
              <Image
                src="/events/hh5.jpg"
                alt="Healthy Hubba Moment 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[121px] h-[110px] shrink-0 md:w-full md:h-auto md:aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[4px] md:rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
              <Image
                src="/events/hh6.jpg"
                alt="Healthy Hubba Moment 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Concluding Text */}
        <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[20px] text-[#1a3636] leading-relaxed max-w-5xl lg:whitespace-nowrap">
          Alongside them, parents participated in expert-led talks and workshops exploring everyday<br />
          nutrition, emotional wellbeing, sleep, and habit formation. We had people like <span className="font-bold">Nicki Petrossi,</span>
        </p>
      </div>
    </>
  );
}
