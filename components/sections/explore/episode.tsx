"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Episode() {
    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative aspect-square rounded-[24px] overflow-hidden"
                >
                    <Image
                        src="/explore/e1.svg"
                        alt="Podcast Episode Illustration"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Content Section (Orange Box) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 bg-[#FCB11F] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-left"
                >
                    <h2 className="font-jubilat text-[24px] md:text-[32px] lg:text-[42px] text-[#183A39] mb-6 leading-tight font-medium">
                        Latest Podcast Episode
                    </h2>

                    <p className="font-jubilat text-[12px] md:text-[18px] text-[#183A39] leading-relaxed mb-10 opacity-90">
                        Each episode is a guided conversation shaped by research, lived experiences, and real-world contexts. We explore how health weaves into daily life &mdash; through routines, food, movement, rest, and the choices families make without always noticing.
                    </p>

                    <button className="bg-[#183A39] text-[#F0EEE6] px-8 py-3 rounded-full font-haptik text-[12px] md:text-[16px] font-medium tracking-wide hover:bg-[#1a3636] transition-all shadow-md">
                        Listen Now
                    </button>
                </motion.div>
            </div>
        </section >
    );
}
