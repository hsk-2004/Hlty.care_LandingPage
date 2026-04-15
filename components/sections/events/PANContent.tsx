"use client";

import Image from "next/image";

export default function PANContent() {
  return (
    <div className="pt-0 flex flex-col lg:flex-row gap-12 lg:gap-20">
      <div className="hidden lg:block lg:w-[486px]">
        <div className="relative lg:h-[496px] aspect-[4/5] lg:aspect-auto rounded-[32px] overflow-hidden shadow-sm">
          <Image
            src="/events/pan1.jpg"
            alt="PAN Medical Conference"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:hidden w-full">
         <div className="relative aspect-video rounded-[24px] overflow-hidden mb-8">
          <Image
            src="/events/pan1.jpg"
            alt="PAN Medical Conference"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
