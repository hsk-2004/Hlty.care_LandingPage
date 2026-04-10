"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Episode() {
    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-[35%] lg:w-[30%] relative aspect-square rounded-[16px] overflow-hidden"
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
                    className="w-full md:flex-1 bg-[#FCB11F] rounded-[16px] p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start text-left"
                >
                    <h2 className="font-jubilat text-[22px] md:text-[24px] lg:text-[42px] text-[#183A39] mb-4 leading-tight font-medium">
                        Latest Podcast Episode
                    </h2>

                    <p className="font-jubilat text-[12px] md:text-[14px] lg:text-[15px] text-[#183A39] leading-relaxed mb-6 opacity-90">
                        <span className="whitespace-nowrap">Each episode is a guided conversation shaped by</span><br />
                        <span className="whitespace-nowrap">research, lived experience, and real-world contexts.</span><br />
                        <span className="whitespace-nowrap">We explore how health weaves into daily life —</span><br />
                        <span className="whitespace-nowrap">through routines, food, movement, rest, and the choices</span><br />
                        <span className="whitespace-nowrap">families make without always noticing.</span>
                    </p>

                    <button className="bg-[#183A39] text-[#F0EEE6] px-6 py-2.5 rounded-full font-haptik text-[12px] md:text-[14px] font-medium tracking-wide hover:bg-[#1a3636] transition-all shadow-md">
                        Listen Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
