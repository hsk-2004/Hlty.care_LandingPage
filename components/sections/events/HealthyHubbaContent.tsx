"use client";

import Image from "next/image";

export default function HealthyHubbaContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <h3 className="font-haptik text-[12px] md:text-[14px] lg:text-[18px] text-[#183A39] tracking-widest uppercase font-bold">
              THE HEALTHY PASSPORT
            </h3>
            <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[22px] text-[#1a3636] leading-[1.4]">
              Healthy Hubba was designed as a living playground. Children moved through interactive installations, movement circuits, food discovery stations, and a Knowledge Zone navigated through a playful passport.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-haptik text-[12px] md:text-[14px] lg:text-[18px] text-[#183A39] tracking-widest uppercase font-bold">
              HLTY QUOTIENT QUIZ
            </h3>
            <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[22px] text-[#1a3636] leading-[1.4]">
              The Hlty Quotient Quiz is our city-wide health literacy initiative — engaging 45 school teams in a shared exploration of nutrition, science, and everyday health.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-[#183A39]/20 font-jubilat italic text-sm text-center px-8">
              [ Healthy Passport & Quiz Image Placeholder ]
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery and Concluding Text */}
      <div className="mt-16 md:mt-24 space-y-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Full-width (spans all columns on desktop) */}
          <div className="md:col-span-3 aspect-[3/1] rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat">
            [ Wide Gallery Image ]
          </div>
          
          {/* Bottom Three */}
          <div className="aspect-square rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-4 text-center">
            [ Gallery Image 1 ]
          </div>
          <div className="aspect-square rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-4 text-center">
            [ Gallery Image 2 ]
          </div>
          <div className="aspect-square rounded-[24px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-4 text-center">
            [ Gallery Image 3 ]
          </div>
        </div>

        {/* Concluding Text */}
        <p className="font-jubilat text-[14px] md:text-[20px] lg:text-[26px] text-[#1a3636] leading-relaxed max-w-5xl">
          Alongside them, parents participated in expert-led talks and workshops exploring everyday nutrition, emotional wellbeing, sleep, and habit formation. We had people like <span className="font-bold">Nicki Petrossi,</span>
        </p>
      </div>
    </>
  );
}
