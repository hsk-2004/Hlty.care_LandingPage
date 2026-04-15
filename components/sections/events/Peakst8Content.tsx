"use client";

import Image from "next/image";

export default function Peakst8Content() {
  return (
    <div className="pt-0 flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* This component expects to be placed below the Title in a custom layout or it repeats the text to match the image precisely */}
      {/* For now, I'll assume the user wants the content from the image specifically for Peakst8 */}
      
      <div className="hidden lg:block lg:w-[486px]">
        <div className="relative lg:h-[496px] aspect-[4/5] lg:aspect-auto rounded-[32px] overflow-hidden shadow-sm">
          <Image
            src="/events/pk1.png"
            alt="Peakst8 Event"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:hidden w-full">
         <div className="relative aspect-video rounded-[24px] overflow-hidden mb-8">
          <Image
            src="/events/pk1.png"
            alt="Peakst8 Event"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
