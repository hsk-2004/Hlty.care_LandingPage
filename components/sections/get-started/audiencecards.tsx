"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const audienceData = [
    {
        label: "FOR PARENTS",
        description: "I want health to fit into our day",
        bullets: ["Try a 7-Day Family Practice", "Explore Everyday Routines"],
        image: "/get-started/a1.png",
        cta: "PARENT RESOURCES",
        link: "/parents"
    },
    {
        label: "FOR EDUCATION",
        description: "I'm looking for age-appropriate, low-pressure ways to support children.",
        bullets: ["School Playshops", "Teaching Resources"],
        image: "/get-started/a2.png",
        cta: "EXPLORE SCHOOL PLAYSHOPS",
        link: "/educators"
    },
    {
        label: "FOR CLINICAL CARE",
        description: "I want preventive health tools that support pediatric care beyond the consultation.",
        bullets: ["Preventive Health Tools", "Parent-Facing Resources"],
        image: "/get-started/a3.png",
        cta: "PARTNER WITH US",
        link: "/clinician"
    },
    {
        label: "FOR WORKPLACES",
        description: "I want to support working parents by reducing everyday friction.",
        bullets: ["Workplace Workshops", "Family Wellbeing Programs"],
        image: "/get-started/a4.png",
        cta: "TALK TO US",
        link: "/employers"
    }
];

export default function AudienceCards() {
    return (
        <section className="py-12 md:py-24 bg-[#183A39]">
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start mb-10 md:mb-16 gap-4 text-center md:text-left items-center md:items-start">
                <h2 className="mt-2 md:mt-4 xl:-ml-2 font-jubilat italic text-[24px] md:text-[32px] lg:text-[40px] text-[#399F87] leading-tight">
                    Start where you are.<br />
                    We'll take it from there.
                </h2>
                <p className="font-jubilat text-[12px] md:text-[14px] text-[#F0EEE6]/80 max-w-sm leading-relaxed">
                    Everyone arrives at Hlty Beings differently — a parent, an educator, a school, a doctor, an HR or simply curious.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="px-0 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="flex items-start overflow-x-auto overflow-y-hidden gap-4 pb-4 snap-x snap-proximity scrollbar-hide pl-[calc(50%-153px)] pr-[calc(50%-153px)] sm:pl-0 sm:pr-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 md:gap-8 xl:flex xl:justify-center xl:gap-8">
                {audienceData.map((card, index) => (
                    <Link 
                        href={card.link} 
                        key={index} 
                        className="block shrink-0 snap-center h-[448px] w-[307px] sm:w-auto xl:w-[307px] xl:min-w-[307px] sm:min-w-0"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative rounded-[16px] overflow-hidden w-full h-[448px] group cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            {/* Background Image Container */}
                            <div className="absolute inset-0">
                                <Image
                                    src={card.image}
                                    alt={card.label}
                                    fill
                                    className={`object-cover scale-125 origin-top ${index === 2 ? '-translate-y-[20%]' : 'translate-y-[0%]'}`}
                                />
                            </div>
                            {/* White Gradient Overlay */}
                            <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-white/80 via-white/50 to-transparent z-[5]" />
                            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white/50 to-transparent z-[5]" />

                            {/* Content */}
                            <div className="relative z-10 p-3 h-full flex flex-col items-center">
                                {/* Text Box */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-none px-4 py-0 text-left w-full">
                                    {/* Label */}
                                    <span className="font-haptik font-medium text-[20px] text-[#183A39] tracking-wider block uppercase mb-0">
                                        {card.label}
                                    </span>

                                    {/* Description */}
                                    <p className="font-jubilat text-[16px] text-[#183A39] mt-0 mb-1 leading-tight">
                                        {card.description}
                                    </p>

                                    {/* Bullets */}
                                    <ul className="space-y-0 w-full ml-1">
                                        {card.bullets.map((bullet, i) => (
                                            <li key={i} className="font-jubilat text-[16px] text-[#183A39] flex items-start gap-2 leading-none">
                                                <span className="text-[#183A39] relative top-[2px]">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="absolute bottom-5 left-5 right-5 pt-4 border-t-2 border-black flex items-center justify-between">
                                    <span className="font-haptik-rotalic text-[14px] text-[#183A39] tracking-normal block lowercase first-letter:uppercase">
                                        {card.cta}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#183A39]/10 flex items-center justify-center group-hover:bg-[#183A39]/20 transition-colors">
                                        <ArrowRight size={16} className="text-[#183A39]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    );
}
