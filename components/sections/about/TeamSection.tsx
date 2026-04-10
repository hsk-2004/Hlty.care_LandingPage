"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Suraj Prasad",
    role: "FOUNDER",
    bgColor: "#F5A623",
    textColor: "#1A2E2C",
    forceNowrap: true,
    paragraphs: [
      "At Hlty Beings, Suraj builds the thing he wished\nexisted, a health ecosystem that reaches children\nbefore the system needs to.",
      "A pharmacist and IIM Kozhikode graduate\nwith 22 years in healthcare, he’s also a sci-fi\nauthor and storytelling professor, which\nexplains a lot about how Hlty Beings thinks.\nHis background blends clinical knowledge,\nbusiness strategy, and narrative but what\ndrives him most is a simple belief: that\nhealth should feel accessible, playful, and\nworth returning to. Not a burden you\nmanage. A life you actually want.",
    ],
    image: "/about/man.png",
    imageDimensions: { width: 186, height: 227 }
  },
  {
    name: "Ankita Dey",
    role: "CREATIVE LEAD",
    bgColor: "#51D2A2",
    textColor: "#1A2E2C",
    forceNowrap: true,
    paragraphs: [
      "At Hlty Beings, Ankita leads creatives, shaping\neverything from how the brand speaks to how\na picture book feels in a child's hands.",
      "Her background blends visual\ncommunication, information design,\nand brand strategy, but what drives\nher most is finding the throughline:\nthe logic that makes a product feel\ninevitable, not just good-looking.\nShe's the person asking \"does this\nfeel right?\" at every step and making\nsure the answer is yes.",
    ],
    image: "/about/girl.png",
    imageDimensions: { width: 220, height: 270 },
    bottomOffset: -24
  },
];

export default function TeamSection() {
  return (
    <section className="hidden lg:block bg-[#F0EEE6] pb-24 lg:pb-32">
      <div className="max-w-[1250px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-jubilat text-[42px] text-[#1A2E2C] font-normal leading-tight mb-6">
            Small team. Big mission.
          </h2>
          <p className="font-jubilat text-[20px] text-[#2D4341] opacity-80 leading-relaxed">
            We&apos;re funded to be lean and intentional.<br />
            Every person here chose this work because they believe in it.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="flex justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-[585px] h-[552px] rounded-[20px] overflow-hidden border-[6px] border-[#E5E2D9] flex-shrink-0"
              style={{ backgroundColor: member.bgColor }}
            >
              <div className="flex flex-col h-full">
                {/* Text Content */}
                <div className="p-8 pb-4 flex-1">
                  <h3
                    className="font-jubilat text-[32px] font-normal leading-tight mb-1"
                    style={{ color: member.textColor }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-haptik text-[16px] font-bold uppercase tracking-[0.15em] mb-5"
                    style={{ color: member.textColor }}
                  >
                    {member.role}
                  </p>

                  <div className="space-y-4">
                    {member.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="font-jubilat text-[20px] leading-[1.5]"
                        style={{
                          color: member.textColor,
                          whiteSpace: (member as any).forceNowrap ? 'nowrap' : 'normal'
                        }}
                      >
                        {para.split('\n').map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Image Area - bottom right absolute */}
                <div
                  className="absolute right-0 overflow-visible"
                  style={{
                    height: `${member.imageDimensions?.height || 227}px`,
                    width: `${member.imageDimensions?.width || 186}px`,
                    bottom: `${(member as any).bottomOffset || 0}px`
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-bottom object-right"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
