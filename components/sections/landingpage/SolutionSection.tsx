"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SolutionSection() {
    return (
        <section className="pt-12 md:pt-24 lg:pt-32 pb-12 md:pb-24 px-4 md:px-6 bg-[#F0EEE6]">
            {/* Main Dark Teal Container */}
            <div className="max-w-[480px] md:max-w-3xl lg:max-w-[1298px] md:w-full lg:h-[767px] mx-auto bg-[#183A39] rounded-[16px] md:rounded-[16px] lg:rounded-[16px] overflow-hidden shadow-2xl p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row-reverse md:items-center lg:gap-20">

                {/* Solution Image (s1.svg) */}
                <div className="relative w-[330px] h-[425px] -ml-[9px] -mt-2 md:mt-0 md:ml-0 md:w-[727px] md:h-auto lg:w-[620px] lg:h-[727px] md:aspect-[4/5] lg:aspect-auto rounded-[16px] overflow-hidden flex-shrink-0 lg:translate-x-12">
                    {/* Mobile & Tablet Image */}
                    <Image
                        src="/landingpage/s1.svg"
                        alt="Solution Illustration"
                        fill
                        className="object-cover lg:hidden"
                        priority
                    />
                    {/* Desktop Image */}
                    <Image
                        src="/solution-lg-image.svg"
                        alt="Solution Illustration Desktop"
                        fill
                        className="object-cover hidden lg:block"
                        priority
                    />
                </div>

                {/* Text Content Container */}
                <div className="mt-8 md:mt-0 flex-1 space-y-8 md:space-y-12 lg:translate-x-12">

                    {/* Main Highlighting Heading */}
                    <h2 className="font-serif text-[24px] md:text-[32px] lg:text-[42px] leading-[1.2] text-[#5EE2A0] max-w-[95%] lg:max-w-[85%] lg:mt-18">
                        <span className="lg:block lg:whitespace-nowrap">A single preventive health </span>
                        <span className="lg:block lg:whitespace-nowrap">system, designed to adapt to </span>
                        <span className="lg:block lg:whitespace-nowrap">the spaces children grow in.</span>
                    </h2>

                    {/* Sub-sections */}
                    <div className="space-y-12 lg:pt-32">

                        {/* Families Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="font-sans text-[12px] md:text-[14px] lg:text-[20px] font-bold text-[#F0EEE6] tracking-wider uppercase">
                                FOR PARENTS
                            </h3>
                            <p className="font-jubilat font-normal not-italic text-[10px] md:text-[16px] lg:text-[16px] leading-[1.5] text-[#F0EEE6] opacity-80 decoration-0">
                                Hlty Beings offers a calmer way to support children&apos;s health without guilt, pressure, or constant correction. It fits into everyday routines, stories, and play at home.
                            </p>
                            <button className="group flex items-center gap-2 lg:justify-between lg:w-full text-[#F0EEE6] font-serif italic text-[14px] md:text-[16px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase not-italic text-[10px] md:text-[15px] lg:text-[14px] tracking-[0.1em] font-haptik font-bold">SEE HOW THIS WORKS</span>
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Divider? Mockup shows clear spacing */}
                        {/* <div className="h-px bg-[#F0EEE6]/10 w-full" /> */}

                        {/* Schools Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="font-sans text-[12px] md:text-[14px] lg:text-[20px] font-bold text-[#F0EEE6] tracking-wider uppercase">
                                FOR SCHOOLS & EMPLOYERS
                            </h3>
                            <p className="font-jubilat font-normal not-italic text-[10px] md:text-[16px] lg:text-[16px] leading-[1.5] text-[#F0EEE6] opacity-80">
                                Hlty Beings provides structured, age-appropriate experiences that support wellbeing — without adding to curriculum load or administrative burden.
                            </p>
                            <button className="group flex items-center gap-2 lg:justify-between lg:w-full text-[#F0EEE6] font-serif italic text-[14px] md:text-[16px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase not-italic text-[10px] md:text-[15px] lg:text-[14px] tracking-[0.1em] font-haptik font-bold">EXPLORE PROGRAMS</span>
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
