"use client";

import Image from "next/image";

export default function FarawayChristmasContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 space-y-12">
        {/* Faraway Christmas Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-6 text-center">
            [ Festive Event Photo 1 ]
          </div>
          <div className="aspect-[4/5] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-6 text-center">
            [ Festive Event Photo 2 ]
          </div>
        </div>

        {/* Placeholder for Additional Concluding Text */}
        <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[22px] text-[#1a3636] leading-relaxed max-w-4xl">
           The Faraway Christmas event demonstrated how wellness and tradition can coexist beautifully, creating memories that children cherish.
        </p>
      </div>
    </>
  );
}
