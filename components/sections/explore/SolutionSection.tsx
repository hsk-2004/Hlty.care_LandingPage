"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SolutionSection() {
    return (
        <section className="pt-0 pb-12 md:pb-24 px-4 md:px-6 bg-[#F0EEE6]">
            {/* Main Dark Teal Container */}
            <div className="max-w-[480px] md:max-w-3xl mx-auto bg-[#183A39] rounded-[32px] overflow-hidden shadow-2xl p-6 md:p-10">

                {/* Solution Image (s1.svg) */}
                <div className="relative w-full aspect-[1/1.1] md:aspect-[4/5] rounded-[24px] overflow-hidden">
                    <Image
                        src="/explore/s1.svg"
                        alt="Solution Illustration"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text Content Container */}
                <div className="mt-8 md:mt-12 space-y-12">

                    {/* Main Highlighting Heading */}
                    <h2 className="font-serif text-[24px] md:text-[42px] leading-[1.2] text-[#5EE2A0] max-w-[85%]">
                        A single preventive health system, designed to adapt to the spaces children grow in.
                    </h2>

                    {/* Sub-sections */}
                    <div className="space-y-12">

                        {/* Families Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="font-sans text-[12px] md:text-[18px] font-bold text-[#F0EEE6] tracking-wider uppercase">
                                FOR FAMILIES
                            </h3>
                            <p className="font-serif text-[10px] md:text-[20px] leading-[1.5] text-[#F0EEE6] opacity-80 decoration-0">
                                Hlty Beings offers a calmer way to support children&apos;s health without guilt, pressure, or constant correction. It fits into everyday routines, stories, and play at home.
                            </p>
                            <button className="group flex items-center gap-2 text-[#F0EEE6] font-serif italic text-[14px] md:text-[16px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase not-italic text-[10px] md:text-[15px] tracking-[0.1em] font-sans font-bold">SEE HOW THIS WORKS</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                            <h3 className="font-sans text-[12px] md:text-[18px] font-bold text-[#F0EEE6] tracking-wider uppercase">
                                FOR SCHOOLS & EMPLOYERS
                            </h3>
                            <p className="font-serif text-[10px] md:text-[20px] leading-[1.5] text-[#F0EEE6] opacity-80">
                                Hlty Beings provides structured, age-appropriate experiences that support wellbeing — without adding to curriculum load or administrative burden.
                            </p>
                            <button className="group flex items-center gap-2 text-[#F0EEE6] font-serif italic text-[14px] md:text-[16px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase not-italic text-[10px] md:text-[15px] tracking-[0.1em] font-sans font-bold">EXPLORE PROGRAMS</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
