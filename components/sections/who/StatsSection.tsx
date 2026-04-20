import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      title: "160M+",
      subtitle: "Children living with obesity",
      desc: "Globally, with numbers rising every year since 1975. Triple what they were in a single generation.",
      id: "2790:7415"
    },
    {
      title: "1 in 5",
      subtitle: "Children in Southern Europe",
      desc: "Nearly 20% of children aged 6–9 are living with obesity in some regions with no dedicated WHO action plan.",
      id: "2790:7419"
    },
    {
      title: "50%",
      subtitle: "Countries off-track",
      desc: "Over half of all tracked nations had NOT met the WHO 2025 childhood overweight target. We're heading for another miss.",
      id: "2790:7423"
    },
    {
      title: "0",
      subtitle: "Standalone SDG targets",
      desc: "Childhood obesity is mentioned only as a sub-clause under malnutrition. No standalone goal. No ring-fenced accountability.",
      id: "2790:7427",
      isIcon: true
    }
  ];

  return (
    <>
      {/* Mobile Stats Content */}
      <div className="lg:hidden grid grid-cols-2 gap-[8px] w-full px-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#51d2a2] border-[#e4dbcd] border-[0.606px] border-solid flex flex-col items-start p-[16px] relative rounded-[15px] shrink-0 w-full h-[153px]">
            <div className="flex flex-col gap-[4px] items-start relative w-full h-full">
              <div className="flex font-haptik items-center justify-center relative shrink-0 text-[32px] text-[#183a39] uppercase leading-none w-full">
                {stat.isIcon ? (
                  <div className="w-[32px] h-[32px] rounded-full border-[3px] border-[#183a39] flex items-center justify-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#183a39]" />
                  </div>
                ) : (
                  <span>{stat.title}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-['Jubilat'] font-bold leading-tight text-[#183a39] text-[12px]">{stat.subtitle}</p>
                <p className="font-['Jubilat'] font-normal leading-[1.15] text-[#183a39] text-[11px]">{stat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Stats Content */}
      <div className="hidden lg:flex lg:gap-[20px] lg:items-start lg:relative lg:w-[1220px] mt-[100px] mb-[100px]" data-node-id="2790:7414">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#51d2a2] border border-[#e4dbcd] flex flex-col items-start p-[24px] rounded-[20px] w-[290px] h-[216px] relative" data-node-id={stat.id}>
            <div className="flex flex-col gap-[24px] items-start relative w-full h-full">
              <div className="font-haptik text-[#183a39] text-[64px] uppercase leading-none h-[64px] flex items-center w-full justify-center">
                {stat.isIcon ? (
                  <div className="w-[50px] h-[50px] rounded-full border-[6px] border-[#183a39] flex items-center justify-center">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#183a39]" />
                  </div>
                ) : (
                  stat.title
                )}
              </div>
              <div className={`flex flex-col gap-2 ${i === 2 ? 'lg:-mt-3' : ''}`}>
                <p className="font-['Jubilat'] font-bold text-[#183a39] text-[16px] leading-tight">{stat.subtitle}</p>
                <p className="font-['Jubilat'] font-normal text-[#183a39] text-[14px] leading-snug">{stat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
