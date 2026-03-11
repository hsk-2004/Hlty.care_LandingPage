"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MediaSection() {
    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-[#F0EEE6]">
            {/* Header with Underline */}
            <div className="mb-12">
                <h2 className="font-jubilat text-[20px] md:text-[24px] lg:text-[28px] text-[#183A39] mb-4">
                    Media Section
                </h2>
                <div className="h-[1px] w-full bg-[#183A39]/20" />
            </div>

            <div className="flex flex-col gap-10">
                {/* Image Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full relative aspect-square md:aspect-video rounded-[24px] overflow-hidden shadow-sm"
                >
                    <Image
                        src="/explore/m1.svg"
                        alt="HAHA Squad Illustration"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-start text-left space-y-6"
                >
                    <h2 className="font-jubilat text-[24px] md:text-[32px] text-[#183A39] leading-tight font-medium">
                        HAHA Squad (youtube)
                    </h2>

                    <p className="font-jubilat text-[12px] md:text-[16px] lg:text-[18px] text-[#183A39]/80 leading-relaxed max-w-4xl">
                        HAHA Squad is the storytelling arm of Hlty Beings — a growing library of preschool-friendly videos that introduce food, movement, sleep, emotions, and routines through characters children return to. Each episode is built around repetition, familiarity, and small everyday actions — not rules or lectures.
                    </p>

                    <button className="bg-[#183A39] text-[#F0EEE6] px-8 py-3 rounded-full font-haptik text-[14px] md:text-[12px] font-medium tracking-wide hover:bg-[#1a3636] transition-all shadow-md">
                        Watch Videos
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
