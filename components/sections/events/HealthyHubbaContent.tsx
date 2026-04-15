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

        <div className="w-full lg:w-auto">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:w-[448px] lg:h-[312px] rounded-[24px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 shadow-sm">
            <Image
              src="/events/hh2.png"
              alt="Healthy Passport & Quiz"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Image Gallery and Concluding Text */}
      <div className="mt-16 md:mt-24 space-y-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-x-12">
          {/* Top Full-width (spans all columns on desktop) */}
          <div className="md:col-span-3 aspect-[3/1] lg:aspect-auto lg:w-[1020px] lg:h-[153px] rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/hh3.jpg"
              alt="Healthy Hubba Gallery"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom Three */}
          <div className="aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/hh4.jpg"
              alt="Healthy Hubba Moment 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/hh5.jpg"
              alt="Healthy Hubba Moment 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square lg:aspect-auto lg:w-[308px] lg:h-[280px] rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/hh6.jpg"
              alt="Healthy Hubba Moment 3"
              fill
              className="object-cover"
            />
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
