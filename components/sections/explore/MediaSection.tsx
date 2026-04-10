"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MediaSection() {
    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-[#F0EEE6]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                {/* Image Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-auto rounded-[16px] overflow-hidden"
                >
                    {/* Mobile Image */}
                    <div className="relative aspect-square w-full md:hidden">
                        <Image
                            src="/explore/m1.svg"
                            alt="HAHA Squad Illustration"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Desktop Image */}
                    <Image
                        src="/explore/m1.svg"
                        alt="HAHA Squad Illustration"
                        width={607}
                        height={640}
                        className="hidden md:block object-cover rounded-[16px]"
                    />
                </motion.div>

                {/* Content Area with background image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:flex-1 relative flex flex-col items-start text-left py-6 md:py-10"
                >
                    {/* Background m2 image */}
                    <div className="absolute top-0 bottom-0 -right-10 lg:-right-20 xl:-right-32 hidden md:flex items-center">
                        <Image
                            src="/explore/m2.svg"
                            alt=""
                            width={659}
                            height={640}
                            className="object-contain xl:scale-100"
                        />
                    </div>

                    <h2 className="font-jubilat text-[22px] md:text-[26px] lg:text-[42px] text-[#183A39] leading-tight font-medium mb-4 relative z-10">
                        HAHA Squad (youtube)
                    </h2>

                    <p className="font-jubilat text-[12px] md:text-[14px] lg:text-[15px] text-[#183A39]/80 leading-relaxed mb-6 max-w-xl relative z-10">
                        <span className="whitespace-nowrap">HAHA Squad is the storytelling arm of Hlty Beings — a growing</span><br />
                        <span className="whitespace-nowrap">library of preschool-friendly videos that introduce food, movement,</span><br />
                        <span className="whitespace-nowrap">sleep, emotions, and routines through characters children return to.</span><br />
                        <span className="whitespace-nowrap">Each episode is built around repetition, familiarity, and small</span><br />
                        <span className="whitespace-nowrap">everyday actions — not rules or lectures.</span>
                    </p>

                    <button className="bg-[#183A39] text-[#F0EEE6] px-6 py-2.5 rounded-full font-haptik text-[12px] md:text-[14px] lg:text-[16px] font-medium tracking-wide hover:bg-[#1a3636] transition-all shadow-md relative z-10">
                        Watch Videos
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
