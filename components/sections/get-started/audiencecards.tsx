"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const audienceData = [
    {
        label: "FOR FAMILIES",
        description: "I want health to fit into our day",
        bullets: ["Try a 7-Day Family Practice", "Explore Everyday Routines"],
        image: "/get-started/a1.png",
        cta: "PARENT RESOURCES",
        link: "#"
    },
    {
        label: "FOR EDUCATION",
        description: "I'm looking for age-appropriate, low-pressure ways to support children.",
        bullets: ["School Playshops", "Teaching Resources"],
        image: "/get-started/a2.png",
        cta: "EXPLORE SCHOOL PLAYSHOPS",
        link: "#"
    },
    {
        label: "FOR CLINICAL CARE",
        description: "I want preventive health tools that support pediatric care beyond the consultation.",
        bullets: ["Preventive Health Tools", "Parent-Facing Resources"],
        image: "/get-started/a3.png",
        cta: "PARTNER WITH US",
        link: "#"
    },
    {
        label: "FOR WORKPLACES",
        description: "I want to support working parents by reducing everyday friction.",
        bullets: ["Workplace Workshops", "Family Wellbeing Programs"],
        image: "/get-started/a4.png",
        cta: "TALK TO US",
        link: "#"
    }
];

export default function AudienceCards() {
    return (
        <section className="py-12 md:py-24 bg-[#183A39]">
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start mb-10 md:mb-16 gap-4 text-center md:text-left items-center md:items-start">
                <h2 className="font-jubilat italic text-[24px] md:text-[32px] lg:text-[40px] text-[#399F87] leading-tight">
                    Start where you are.<br />
                    We'll take it from there.
                </h2>
                <p className="font-jubilat text-[12px] md:text-[14px] text-[#F0EEE6]/80 max-w-sm leading-relaxed">
                    Everyone arrives at Hlty Beings differently — a parent, an educator, a school, a doctor, an HR or simply curious.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="px-0 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-6 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 md:gap-8 xl:flex xl:justify-center xl:gap-8">
                    {audienceData.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex-shrink-0 rounded-[16px] overflow-hidden w-[307px] sm:w-auto h-[448px] group cursor-pointer hover:shadow-lg transition-shadow snap-center xl:w-[307px] xl:min-w-[307px]"
                        >
                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.label}
                                fill
                                className={`object-cover object-top transition-transform duration-500 group-hover:scale-125 ${index === 0 || index === 1 || index === 3 ? 'scale-150 origin-top' : 'scale-110 origin-top'
                                    }`}
                            />

                            {/* Content */}
                            <div className="relative z-10 p-3 h-full flex flex-col items-center">
                                {/* Text Box */}
                                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] p-4 text-center w-full">
                                    {/* Label */}
                                    <span className="font-haptik text-[10px] md:text-[11px] xl:text-[20px] text-[#183A39] tracking-wider uppercase font-medium block">
                                        {card.label}
                                    </span>

                                    {/* Description */}
                                    <p className="font-jubilat text-[14px] md:text-[16px] xl:text-[16px] text-[#183A39] mt-3 mb-4 leading-snug">
                                        {card.description}
                                    </p>

                                    {/* Bullets */}
                                    <ul className="space-y-1 w-fit mx-auto">
                                        {card.bullets.map((bullet, i) => (
                                            <li key={i} className="font-haptik text-[12px] md:text-[13px] xl:text-[16px] text-[#183A39] flex items-start gap-2">
                                                <span className="text-[#183A39]">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="absolute bottom-10 left-5 right-5 flex items-center justify-between">
                                    <span className="font-haptik text-[10px] md:text-[11px] text-[#183A39]/70 tracking-wider uppercase">
                                        {card.cta}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#183A39]/10 flex items-center justify-center group-hover:bg-[#183A39]/20 transition-colors">
                                        <ArrowRight size={16} className="text-[#183A39]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
