import React from 'react';

const imgGroup1339 = "https://www.figma.com/api/mcp/asset/29a5fa40-9626-4cd7-b2f9-bc1cd6302de6";
const imgGroup1340 = "https://www.figma.com/api/mcp/asset/d21b32a0-9b60-4341-866c-fb7cb9b4a9b5";
const mobImgGroup1339 = "https://www.figma.com/api/mcp/asset/4bb6f80d-9ef7-4fb9-93c6-0ecfbd6177ce";
const mobImgGroup1340 = "https://www.figma.com/api/mcp/asset/917d6874-ce60-4bb5-b24b-6ab0cbc1e373";

export default function DemandsSection() {
  const demands = [
    {
      id: "1",
      title: "A Dedicated SDG Target",
      titleLines: ["A Dedicated", "SDG Target"],
      desc: "Childhood obesity (ages 0–19) must be named explicitly in the SDG framework, not buried inside malnutrition or NCD clauses. Named goals get funded. Footnotes don't.",
      frameId: "2790:7481"
    },
    {
      id: "2",
      title: "Expanded Age Coverage",
      titleLines: ["Expanded Age Coverage"],
      desc: "Current targets stop at age 5. The crisis doesn't. School-age children and adolescents must be explicitly included in WHO monitoring and accountability mechanisms.",
      frameId: "2790:7486"
    },
    {
      id: "3",
      title: "Finalize & Implement Guidelines",
      titleLines: ["Finalize &", "Implement Guidelines"],
      desc: "The WHO management guidelines for children with obesity must be urgently completed and adopted by member states with clear implementation timelines and support for low-income nations.",
      frameId: "2790:7491"
    }
  ];

  return (
    <>
      {/* Mobile Demands Content */}
      <div className="lg:hidden content-stretch flex flex-col gap-[20.835px] items-start overflow-clip relative shrink-0 w-full mb-10">
        <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0 w-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 h-[38.773px] ml-[16.73px] mt-[17.16px] relative row-1 w-[29.102px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={mobImgGroup1339} />
            </div>
            <div className="col-1 h-[21.478px] ml-0 mt-0 relative row-1 w-[21.107px]">
              <div className="absolute inset-[-12.13%_-12.34%]">
                <img alt="" className="block max-w-none size-full" src={mobImgGroup1340} />
              </div>
            </div>
          </div>
          <p className="font-jubilat text-[#e4dbcd] text-[20px] whitespace-nowrap">Three Things We're Demanding</p>
        </div>
        <div className="w-full flex gap-[8px] items-stretch overflow-x-auto scrollbar-hide px-6 relative">
          {demands.map((demand, i) => (
            <div key={i} className="bg-[#51d2a2] border-[#e4dbcd] border-[0.521px] border-solid flex flex-col items-start justify-between p-[10.418px] rounded-[10.418px] w-[190px] min-h-[200px] shrink-0 relative">
              <div className="flex flex-col gap-[10.418px] items-start relative w-full">
                <p className="font-haptik text-[#183a39] text-[12px] uppercase leading-tight w-full h-auto whitespace-pre-wrap">{demand.id === "1" ? "A Dedicated SDG Target" : demand.title}</p>
                <p className="font-['Jubilat'] font-normal text-[#183a39] text-[11px] leading-normal">{demand.desc}</p>
              </div>
              <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] relative shrink-0 text-[33.336px] text-center uppercase whitespace-nowrap">
                <p className="leading-[29.169px]">{demand.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Demands Content */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:relative lg:w-[910px] lg:h-auto mt-[200px]" data-node-id="2790:7478">
        <h2 className="text-[#e4dbcd] text-[32px] font-jubilat uppercase mb-[40px] w-auto h-auto text-center">Three Things We're Demanding</h2>
        <div className="flex gap-[20px] items-center relative w-[910px] h-[336px]" data-node-id="2790:7480">
          {demands.map((demand, i) => (
            <div key={i} className="bg-[#51d2a2] border border-[#e4dbcd] flex flex-col items-start justify-between p-[20px] rounded-[20px] w-[290px] h-full relative" data-node-id={demand.frameId}>
              <div className="flex flex-col gap-[20px] items-start relative w-full">
                <p className="font-haptik text-[#183a39] text-[20px] uppercase leading-tight w-full h-auto whitespace-pre-wrap">{demand.id === "1" ? "A Dedicated SDG Target" : demand.title}</p>
                <p className="font-jubilat text-[#183a39] text-[16px] leading-normal w-[250px] overflow-hidden">{demand.desc}</p>
              </div>
              <p className="font-haptik text-[#183a39] text-[64px] leading-[56px] uppercase w-auto h-auto">{demand.id}</p>
            </div>
          ))}
        </div>
        <div className="absolute left-[20px] top-[-54px] w-[88px] h-[107px]">
          <img src={imgGroup1339} className="absolute left-[32px] top-[33px] w-[56px] h-[74px]" alt="" />
          <img src={imgGroup1340} className="absolute left-[0px] top-[0px] w-[40px] h-[41px]" alt="" />
        </div>
      </div>
    </>
  );
}
