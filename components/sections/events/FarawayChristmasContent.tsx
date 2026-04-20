"use client";

import Image from "next/image";

export default function FarawayChristmasContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 space-y-12">
        {/* Faraway Christmas Gallery Grid */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-[6px] justify-start">
          <div className="aspect-[4/5] lg:aspect-auto lg:w-[407px] lg:h-[396px] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/fc1.jpg"
              alt="Faraway Christmas Moment 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/5] lg:aspect-auto lg:w-[407px] lg:h-[396px] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden relative">
            <Image
              src="/events/fc2.jpg"
              alt="Faraway Christmas Moment 2"
              fill
              className="object-cover"
            />
          </div>
        </div>


      </div>
    </>
  );
}
