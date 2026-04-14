"use client";

import Image from "next/image";

export default function PANContent() {
  return (
    <div className="pt-8 md:pt-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
      <div className="hidden lg:block w-[45%]">
        {/* Placeholder for the large PAN photo */}
        <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 shadow-sm">
          <div className="absolute inset-0 flex items-center justify-center text-[#183A39]/20 font-jubilat italic text-sm text-center px-8">
            [ PAN Medical Conference Photo ]
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full">
         <div className="relative aspect-video rounded-[24px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 mb-8">
          <div className="absolute inset-0 flex items-center justify-center text-[#183A39]/20 font-jubilat text-sm">
            [ PAN Mobile Photo ]
          </div>
        </div>
      </div>
    </div>
  );
}
