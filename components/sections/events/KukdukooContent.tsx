"use client";

import Image from "next/image";

export default function KukdukooContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 space-y-12">
        {/* Kukdukoo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[3/4] lg:aspect-auto lg:w-[308px] lg:h-[302px] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/kk2.jpg"
              alt="Kukdukoo Momentum 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] lg:aspect-auto lg:w-[308px] lg:h-[302px] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/kk3.jpg"
              alt="Kukdukoo Momentum 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] lg:aspect-auto lg:w-[308px] lg:h-[302px] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/kk4.jpg"
              alt="Kukdukoo Momentum 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Storytelling content can be added here if needed in the future */}
      </div>
    </>
  );
}
