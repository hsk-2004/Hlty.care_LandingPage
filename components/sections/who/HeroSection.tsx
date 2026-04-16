import React from 'react';
import { MoveRight } from 'lucide-react';

const imgArrow1 = "https://www.figma.com/api/mcp/asset/89f24f13-f017-4dbd-ba96-6ef091b2364b";
const imgGroup1341 = "https://www.figma.com/api/mcp/asset/ce423798-424a-4e0b-974a-d987fb0ce595";
const imgGroup1342 = "https://www.figma.com/api/mcp/asset/65b67b32-ecb0-4e9a-829c-3c8aa2f033cb";
const mobImgArrow1 = "https://www.figma.com/api/mcp/asset/46b35ae0-fe8b-47f9-b6ad-157369a8e43e";
const mobImgGroup1341 = "https://www.figma.com/api/mcp/asset/3926ffd1-6906-4443-97dc-076a26bb36cf";
const mobImgGroup1342 = "https://www.figma.com/api/mcp/asset/8bbecfdf-cfc1-4439-ab7f-dd2e7bee4621";

export default function HeroSection() {
  return (
    <>
      {/* Mobile Hero Content */}
      <div className="lg:hidden w-full flex flex-col items-center pt-10 px-6 gap-10">
        <div className="w-full flex flex-col gap-6 items-start">
          <div className="flex gap-2 items-center">
            <span className="text-[#51d2a2] text-[12px] font-medium tracking-wider uppercase">🚨 URGENT</span>
            <span className="text-[#51d2a2] text-[12px]">.</span>
            <span className="text-[#51d2a2] text-[12px] font-medium tracking-wider uppercase">OPEN LETTER CAMPAIGN</span>
          </div>
          
          <div className="flex flex-col gap-8">
            <h1 className="text-[#51d2a2] text-[32px] font-['Jubilat'] font-normal leading-tight uppercase">
              160 MILLION CHILDREN. <br />
              A CRISIS 50 YEARS IN THE MAKING. <br />
              STILL WAITING FOR A PLAN THAT ACTUALLY COUNTS.
            </h1>
            
            <p className="text-[#e4dbcd] text-[16px] font-['Jubilat'] leading-relaxed max-w-[340px]">
              <span className="text-[#51d2a2] font-medium">1 in 5 children worldwide lives with obesity.&nbsp;</span>
              The WHO tracks malnutrition but childhood obesity lacks its own dedicated SDG target, its own accountability, and its own urgency. That ends with your voice.
            </p>
          </div>

          <button className="bg-[#e4dbcd] flex items-center justify-between px-6 py-3 rounded-full w-[280px] group transition-all mt-4 border-none outline-none">
            <span className="text-[#183a39] font-['GT_Haptik'] font-medium text-[12px] uppercase whitespace-nowrap">SEND YOUR LETTER TO WHO</span>
            <MoveRight size={20} color="#183A39" strokeWidth={2.5} />
          </button>
        </div>

        <div className="relative w-full aspect-[2/1] max-w-[400px]">
          <img alt="WHO Decoration" className="w-full h-full object-contain" src={mobImgGroup1341} />
        </div>
      </div>

      {/* Desktop Hero Content */}
      <div className="hidden lg:flex lg:gap-[42px] lg:w-[1280px] lg:h-[516px] lg:items-end lg:relative mt-[150px] mb-20">
        {/* Left Side Content */}
        <div className="flex flex-col h-full items-start justify-start gap-[60px] relative shrink-0 w-[701px]">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="flex gap-[8px] h-[32px] items-center relative rounded-[20px] shrink-0">
              <div className="flex h-[24px] items-center justify-center py-[10px] relative shrink-0">
                <p className="font-['GT_Haptik'] font-medium text-[#51d2a2] text-[14px] uppercase tracking-wider leading-[56px]">🚨 URGENT</p>
              </div>
              <div className="flex h-[24px] items-center justify-center pb-[16px] pt-[10px] relative shrink-0">
                <p className="font-['GT_Haptik'] font-medium text-[#51d2a2] text-[14px] leading-[56px]">.</p>
              </div>
              <div className="flex h-[24px] items-center justify-center py-[10px] relative shrink-0">
                <p className="font-['GT_Haptik'] font-medium text-[#51d2a2] text-[14px] uppercase tracking-wider leading-[56px]">OPEN LETTER CAMPAIGN</p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-start relative shrink-0 w-[701px]">
              <h1 className="text-[#51d2a2] text-[42px] font-['Jubilat'] font-normal leading-normal uppercase w-[701px] h-auto">
                160 MILLION CHILDREN. <br />
                A CRISIS 50 YEARS IN THE MAKING. <br />
                STILL WAITING FOR A PLAN THAT ACTUALLY COUNTS.
              </h1>
              <p className="text-[#e4dbcd] text-[20px] font-['Jubilat'] font-normal leading-normal w-[507px] h-auto">
                <span className="text-[#51d2a2] font-medium">1 in 5 children worldwide lives with obesity.&nbsp;</span>
                The WHO tracks malnutrition but childhood obesity lacks its own dedicated SDG target, its own accountability, and its own urgency. That ends with your voice.
              </p>
            </div>
          </div>
          <div className="relative w-[337px] h-[40px]">
            <button className="bg-[#e4dbcd] flex items-center justify-between px-8 py-2 rounded-full w-full h-full group hover:scale-[1.02] transition-all border-none outline-none">
              <span className="text-[#183a39] font-['GT_Haptik'] font-bold text-[16px] uppercase whitespace-nowrap">SEND YOUR LETTER TO WHO</span>
              <MoveRight size={24} color="#183A39" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Right Side WHO logo & Exclamations */}
        <div className="relative w-[500px] h-[350px] flex items-end justify-end">
          <div className="relative">
            <img alt="World Health Organization" className="w-[450px] object-contain opacity-90" src={imgGroup1341} />
            
            {/* Red Exclamation Marks */}
            <div className="absolute -top-12 right-4 flex gap-1">
              <span className="text-[#ff0000] text-[60px] font-bold rotate-[10deg] leading-none">!</span>
              <span className="text-[#ff0000] text-[60px] font-bold rotate-[15deg] leading-none">!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
