"use client";

import Image from "next/image";

export default function Peakst8Content() {
  return (
    <div className="pt-8 md:pt-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* This component expects to be placed below the Title in a custom layout or it repeats the text to match the image precisely */}
      {/* For now, I'll assume the user wants the content from the image specifically for Peakst8 */}
      
      <div className="hidden lg:block w-[45%]">
        {/* Placeholder for the large Peakst8 photo */}
        <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 shadow-sm">
          <div className="absolute inset-0 flex items-center justify-center text-[#183A39]/20 font-jubilat italic text-sm text-center px-8">
            [ Peakst8 Team Photo: Left/Right Layout ]
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full">
         <div className="relative aspect-video rounded-[24px] overflow-hidden bg-[#183A39]/5 border border-[#183A39]/10 mb-8">
          <div className="absolute inset-0 flex items-center justify-center text-[#183A39]/20 font-jubilat text-sm">
            [ Peakst8 Mobile Photo ]
          </div>
        </div>
      </div>
    </div>
  );
}
