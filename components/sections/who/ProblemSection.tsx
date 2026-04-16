import React from 'react';

const imgVector5881 = "https://www.figma.com/api/mcp/asset/b079f995-8059-4073-a96a-57080d462707";
const imgFrame1437 = "https://www.figma.com/api/mcp/asset/49eef8c7-be1b-4e35-ac79-3da7933cf100";
const mobImgVector5881 = "https://www.figma.com/api/mcp/asset/54cc7b3e-871c-4439-8f78-d30556c6c582";
const mobImgFrame1437 = "https://www.figma.com/api/mcp/asset/272d7701-f19c-42e6-8b44-3d1d6d609b2d";

function StatusBadge({ text, color, textColor }: { text: string, color: string, textColor: string }) {
  return (
    <div className={`${color} ${textColor} flex h-[25px] lg:h-[25px] items-center justify-center px-[20px] rounded-full sm:h-[35px] ${
      text === 'Missing' ? 'lg:w-[89px]' : 
      text === 'Not explicit' ? 'lg:w-[121px]' : 
      text === 'Draft only' ? 'lg:w-[116px]' : 
      text === 'Exists (SDG 2.2)' ? 'lg:w-[134px]' :
      text === 'Partial coverage' ? 'lg:w-[158px]' :
      text === 'Not mandated' ? 'lg:w-[140px]' :
      'lg:w-[121px]'
    }`}>
      <p className="font-haptik text-[12px] uppercase whitespace-nowrap tracking-wider">{text}</p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <>
      {/* Mobile Problem Content */}
      <div className="lg:hidden content-stretch flex flex-col gap-[23.66px] items-start justify-end relative shrink-0 w-[378px]">
        <div className="content-stretch flex flex-col h-[287.303px] items-start justify-between relative shrink-0 w-[378px]">
          <div className="content-stretch flex flex-col gap-[11.267px] items-start relative shrink-0">
            <div className="content-stretch flex h-[18.027px] items-center relative rounded-[11.267px] shrink-0">
              <div className="content-stretch flex h-[13.52px] items-center justify-center py-[5.633px] relative shrink-0">
                <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#51d2a2] text-[10px] text-center uppercase whitespace-nowrap">
                  <p className="leading-[31.547px]">What the Policy Gap Looks Like</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Jubilat'] font-normal gap-[43.377px] items-start leading-[0] not-italic relative shrink-0 text-[#e4dbcd] w-[383.633px]">
              <p className="relative shrink-0 text-[0px] whitespace-nowrap">
                <span className="leading-[normal] text-[24px]">MALNUTRITION IS SEEN.<br aria-hidden="true" />OBESITY IS </span>
                <span className="leading-[normal] text-[#51d2a2] text-[24px]">INVISIBLE.</span>
              </p>
              <div className="relative shrink-0 text-[11.267px] w-[311.526px] whitespace-pre-wrap">
                <p className="leading-[normal] mb-0">WHO has nutrition targets, NCD goals, and SDG indicators — but childhood obesity is buried within them, not named, not ring-fenced, and not adequately funded.</p>
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <p className="leading-[normal] mb-0">The current framework only explicitly covers children under 5. That leaves millions of school-age children and adolescents completely outside the accountability lens.</p>
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <p className="leading-[normal]">Management guidelines for children 0–9 with obesity are still being drafted in 2025. There is no comprehensive clinical standard. No political urgency.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[56.334px] h-[287.303px] items-start relative shrink-0 w-[378px]">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.267px] items-start min-h-px relative">
            <div className="content-stretch flex h-[18.027px] items-center relative rounded-[11.267px] shrink-0">
              <div className="content-stretch flex h-[13.52px] items-center justify-center py-[5.633px] relative shrink-0">
                <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#51d2a2] text-[10px] text-center uppercase whitespace-nowrap">
                  <p className="leading-[31.547px]">What Exists vs. What's Needed</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[56.334px] items-start min-h-px relative">
              <div className="content-stretch flex flex-col h-[210px] items-start justify-between relative shrink-0">
                <div className="content-stretch flex h-[18.027px] items-center relative rounded-[11.267px] shrink-0">
                  <div className="content-stretch flex h-[13.52px] items-center justify-center py-[5.633px] relative shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#566f6e] text-[10px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Issue</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Jubilat'] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#e4dbcd] text-[12px] whitespace-nowrap">
                  <p className="relative shrink-0">Dedicated childhood obesity SDG</p>
                  <p className="relative shrink-0">Coverage for ages 5–19</p>
                  <p className="relative shrink-0">Clinical management guidelines</p>
                  <p className="relative shrink-0">Ring-fenced funding mandate</p>
                  <p className="relative shrink-0">Under-5 overweight targets</p>
                  <p className="relative shrink-0">NCD reduction goal (SDG 3.4)</p>
                  <p className="relative shrink-0">National monitoring obligation</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[210px] items-start justify-between relative shrink-0">
                <div className="content-stretch flex h-[18.027px] items-center relative rounded-[11.267px] shrink-0">
                  <div className="content-stretch flex h-[13.52px] items-center justify-center py-[5.633px] relative shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#566f6e] text-[10px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Current Status</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div className="bg-[rgba(187,11,11,0.5)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4dbcd] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Missing</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(187,11,11,0.5)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4dbcd] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Not explicit</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(252,177,31,0.7)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#183a39] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Draft only</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(187,11,11,0.5)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4dbcd] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Missing</p>
                    </div>
                  </div>
                  <div className="bg-[#51d2a2] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#183a39] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Exists (SDG 2.2)</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(252,177,31,0.7)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#183a39] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Partial coverage</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(187,11,11,0.5)] content-stretch flex h-[15px] items-center justify-center px-[11.267px] relative rounded-[11.267px] shrink-0">
                    <div className="flex flex-col font-['GT_Haptik'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4dbcd] text-[8px] text-center uppercase whitespace-nowrap">
                      <p className="leading-[31.547px]">Not mandated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1.824px] items-center justify-center left-[37.74px] top-[37.11px] w-[184.258px]">
            <div className="flex-none rotate-[0.28deg]">
              <div className="h-[0.912px] relative w-[184.256px]">
                <div className="absolute inset-[-27.41%_-0.14%]">
                  <img alt="" className="block max-w-none size-full" src={mobImgVector5881} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[138.001px] left-[133px] top-[94.09px] w-[88.79px]">
            <div className="absolute inset-[-0.18%_-0.28%]">
              <img alt="" className="block max-w-none size-full" src={mobImgFrame1437} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Problem Content */}
      <div className="hidden lg:flex lg:gap-[42px] lg:items-end lg:relative lg:w-[1280px] lg:h-[510px] mt-[200px]" data-node-id="2790:7431">
        <div className="flex flex-col h-full items-start justify-between relative shrink-0 w-[671px]" data-node-id="2790:7432">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="2790:7433">
            <div className="flex h-[32px] items-center relative rounded-[20px] shrink-0">
              <p className="font-['GT_Haptik'] font-medium text-[#51d2a2] text-[14px] uppercase leading-[56px]">What the Policy Gap Looks Like</p>
            </div>
            <div className="flex flex-col gap-[32px] items-start relative shrink-0 w-[681px]">
              <h2 className="text-[#e4dbcd] text-[42px] font-['Jubilat'] font-normal leading-normal uppercase w-[477px] h-auto">
                MALNUTRITION IS SEEN.<br />
                OBESITY IS <span className="text-[#51d2a2]">INVISIBLE.</span>
              </h2>
              <div className="text-[#e4dbcd] text-[20px] font-['Jubilat'] font-normal leading-normal w-[553px] h-auto flex flex-col gap-[20px]">
                <p>WHO has nutrition targets, NCD goals, and SDG indicators — but childhood obesity is buried within them, not named, not ring-fenced, and not adequately funded.</p>
                <p>The current framework only explicitly covers children under 5. That leaves millions of school-age children and adolescents completely outside the accountability lens.</p>
                <p>Management guidelines for children 0–9 with obesity are still being drafted in 2025. There is no comprehensive clinical standard. No political urgency.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[750px] h-full" data-node-id="2790:7441">
          <div className="flex h-[32px] items-center relative rounded-[20px] mb-[60px]">
            <p className="font-['GT_Haptik'] font-medium text-[#51d2a2] text-[14px] uppercase leading-[56px]">What Exists vs. What's Needed</p>
          </div>
          <div className="flex w-full pb-0 mb-10 relative items-center">
            <p className="font-haptik text-[#566f6e] text-[14px] uppercase tracking-widest leading-none z-10 bg-[#183a39] pr-4">Issue</p>
            <div 
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[8px]" 
              style={{ 
                backgroundImage: 'radial-gradient(circle, #566f6e 1.5px, transparent 1.5px)', 
                backgroundSize: '8px 8px', 
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center'
              }} 
            />
            <div className="z-10 bg-[#183a39] ml-auto w-[180px]">
              <p className="font-haptik text-[#566f6e] text-[14px] uppercase tracking-widest leading-none pl-4 text-left">Current Status</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-[20px]">
            {[
              { label: "Dedicated childhood obesity SDG", status: { text: "Missing", color: "bg-[rgba(187,11,11,0.5)]", textColor: "text-[#e4dbcd]" } },
              { label: "Coverage for ages 5–19", status: { text: "Not explicit", color: "bg-[rgba(187,11,11,0.5)]", textColor: "text-[#e4dbcd]" } },
              { label: "Clinical management guidelines", status: { text: "Draft only", color: "bg-[rgba(252,177,31,0.7)]", textColor: "text-[#183a39]" } },
              { label: "Ring-fenced funding mandate", status: { text: "Missing", color: "bg-[rgba(187,11,11,0.5)]", textColor: "text-[#e4dbcd]" } },
              { label: "Under-5 overweight targets", status: { text: "Exists (SDG 2.2)", color: "bg-[#51d2a2]", textColor: "text-[#183a39]" } },
              { label: "NCD reduction goal (SDG 3.4)", status: { text: "Partial coverage", color: "bg-[rgba(252,177,31,0.7)]", textColor: "text-[#183a39]" } },
              { label: "National monitoring obligation", status: { text: "Not mandated", color: "bg-[rgba(187,11,11,0.5)]", textColor: "text-[#e4dbcd]" } }
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full relative">
                <span className="text-[#e4dbcd] text-[20px] font-['Jubilat'] font-normal whitespace-nowrap z-10 bg-[#183a39] pr-4">{item.label}</span>
                <div 
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[8px]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle, #e4dbcd4d 1.5px, transparent 1.5px)', 
                    backgroundSize: '8px 8px', 
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center'
                  }} 
                />
                <div className="flex justify-start z-10 bg-[#183a39] pl-4 ml-auto w-[180px]">
                  <StatusBadge {...item.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
