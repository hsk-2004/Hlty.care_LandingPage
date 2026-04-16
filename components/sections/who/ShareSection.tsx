import React from 'react';

const imgGroup1343 = "https://www.figma.com/api/mcp/asset/288b378a-acdd-45cb-9e06-e17c14160c32";
const imgGroup = "https://www.figma.com/api/mcp/asset/a351655b-22b1-412c-b663-b0210830ba11";
const imgIcon = "https://www.figma.com/api/mcp/asset/a756db68-4db7-4619-8c25-895e64861fbc";

function ShareButton({ text, icon, color, textColor }: { text: string, icon: string, color: string, textColor: string }) {
  return (
    <button className={`${color} ${textColor} flex gap-[8px] h-[40px] items-center pl-[24px] pr-[16px] rounded-[24px] group`}>
      <span className="font-['GT_Haptik'] font-medium text-[16px] uppercase leading-[56px]">{text}</span>
      <img src={icon} className="h-[20px] object-contain" alt="" />
    </button>
  );
}

export default function ShareSection() {
  return (
    <div className="mt-[250px] mb-[200px] flex flex-col items-center gap-[40px] relative w-[1440px]" data-node-id="2790:7533">
      <div className="flex flex-col gap-[32px] items-center text-center">
        <h2 className="text-[#e4dbcd] text-[42px] font-['Jubilat'] font-normal uppercase">SPREAD THE WORD.</h2>
        <p className="text-[#e4dbcd] text-[24px] font-['Jubilat'] font-normal w-[813px]">The more voices, the louder the message. Share this page with every parent you know.</p>
      </div>
      <div className="flex gap-[16px] items-start">
        <ShareButton text="SHARE ON" icon={imgGroup1343} color="bg-[#e4dbcd]" textColor="text-[#183a39]" />
        <ShareButton text="SHARE ON" icon={imgGroup} color="bg-[#51d2a2]" textColor="text-[#183a39]" />
        <button className="border border-[#e4dbcd] flex gap-[8px] h-[40px] items-center px-[20px] rounded-[24px] group">
          <span className="font-['GT_Haptik'] font-medium text-[#e4dbcd] text-[16px] uppercase leading-[56px]">COPY LINK</span>
          <img src={imgIcon} className="w-[21px] h-[21px]" alt="" />
        </button>
      </div>
    </div>
  );
}
