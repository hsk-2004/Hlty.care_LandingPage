"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionSection() {
    return (
        <section className="pt-12 md:pt-24 lg:pt-24 xl:pt-32 pb-12 md:pb-24 px-4 md:px-6 bg-[#F0EEE6]">
            {/* ... container ... */}
            <div className="max-w-[480px] md:max-w-3xl lg:max-w-[1024px] xl:max-w-[1298px] md:w-full lg:h-[600px] xl:h-[767px] mx-auto bg-[#183A39] rounded-[16px] md:rounded-[16px] lg:rounded-[16px] overflow-hidden shadow-2xl p-6 md:p-12 lg:p-12 xl:p-16 flex flex-col lg:flex-row-reverse md:items-center lg:gap-12 xl:gap-20">
                {/* image */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-[330px] md:max-w-[600px] mx-auto aspect-[330/425] md:aspect-[4/3] lg:aspect-auto md:w-[600px] lg:w-[450px] xl:w-[620px] md:h-auto lg:h-[560px] xl:h-[727px] rounded-[16px] overflow-hidden flex-shrink-0 lg:translate-x-6 xl:translate-x-12"
                >
                    <Image
                        src="/landingpage/s1.svg"
                        alt="Solution Illustration"
                        fill
                        className="object-cover lg:hidden"
                        priority
                    />
                    <Image
                        src="/solution-lg-image.svg"
                        alt="Solution Illustration Desktop"
                        fill
                        className="object-cover hidden lg:block"
                        priority
                    />
                </motion.div>

                {/* Text Content Container */}
                <div className="mt-8 md:mt-0 flex-1 space-y-8 md:space-y-12 lg:translate-x-6 xl:translate-x-12">
                    <h2 className="font-jubilat text-[24px] md:text-[40px] lg:text-[32px] xl:text-[42px] leading-[1.2] text-[#5EE2A0] max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] lg:mt-6 xl:mt-12">
                        <span className="lg:block lg:whitespace-nowrap">A single preventive health </span>
                        <span className="lg:block lg:whitespace-nowrap">system, designed to adapt to </span>
                        <span className="lg:block lg:whitespace-nowrap">the spaces children grow in.</span>
                    </h2>

                    {/* Sub-sections */}
                    <div className="space-y-12 lg:pt-8 xl:pt-16">
                        {/* Families Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="font-haptik text-[12px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-medium text-[#F0EEE6] tracking-wider uppercase">
                                FOR PARENTS
                            </h3>
                            <p className="font-jubilat font-normal not-italic text-[10px] md:text-[18px] lg:text-[14px] xl:text-[16px] leading-[1.5] text-[#F0EEE6] opacity-80 decoration-0">
                                Hlty Beings offers a calmer way to support children&apos;s health without guilt, pressure, or constant correction. It fits into everyday routines, stories, and play at home.
                            </p>
                            <Link href="/parents" className="group flex items-center gap-2 lg:justify-between lg:w-full text-[#F0EEE6] font-serif italic text-[14px] md:text-[18px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase text-[10px] md:text-[17px] lg:text-[12px] xl:text-[14px] tracking-[0.1em] font-haptik-rotalic">SEE HOW THIS WORKS</span>
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Schools Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="font-haptik text-[12px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-medium text-[#F0EEE6] tracking-wider uppercase">
                                FOR SCHOOLS & EMPLOYERS
                            </h3>
                            <p className="font-jubilat font-normal not-italic text-[10px] md:text-[18px] lg:text-[14px] xl:text-[16px] leading-[1.5] text-[#F0EEE6] opacity-80">
                                Hlty Beings provides structured, age-appropriate experiences that support wellbeing — without adding to curriculum load or administrative burden.
                            </p>
                            <Link href="/employers" className="group flex items-center gap-2 lg:justify-between lg:w-full text-[#F0EEE6] font-serif italic text-[14px] md:text-[18px] hover:opacity-100 transition-opacity border-b border-[#F0EEE6]/20 pb-0.5">
                                <span className="uppercase text-[10px] md:text-[17px] lg:text-[12px] xl:text-[14px] tracking-[0.1em] font-haptik-rotalic">EXPLORE PROGRAMS</span>
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
