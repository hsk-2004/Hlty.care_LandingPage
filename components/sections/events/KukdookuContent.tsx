"use client";

import Image from "next/image";

export default function KukdookuContent() {
  return (
    <>
      <div className="pt-12 md:pt-20 space-y-12">
        {/* Kukdooku Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[3/4] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-6 text-center">
            [ Gallery Photo 1 ]
          </div>
          <div className="aspect-[3/4] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-6 text-center">
            [ Gallery Photo 2 ]
          </div>
          <div className="aspect-[3/4] rounded-[32px] bg-[#183A39]/5 border border-[#183A39]/10 overflow-hidden flex items-center justify-center italic text-[#183A39]/20 font-jubilat p-6 text-center">
            [ Gallery Photo 3 ]
          </div>
        </div>

        {/* Placeholder for Additional Storytelling */}
        <p className="font-jubilat text-[14px] md:text-[18px] lg:text-[22px] text-[#1a3636] leading-relaxed max-w-4xl">
          More detailed experiences from the Kukdooku festival will be shared here. The focus remains on bringing health naturally into the realm of play and exploration for children.
        </p>
      </div>
    </>
  );
}
