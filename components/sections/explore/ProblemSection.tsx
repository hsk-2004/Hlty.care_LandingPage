"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProblemSection() {
    const listItems = [
        "repeated",
        "emotionally safe",
        "part of daily life",
        "shared with the adults around a child"
    ];

    return (
        <section className="py-24 px-6 bg-[#F0EEE6]">
            <div className="max-w-2xl mx-auto space-y-6">

                {/* Decorative Indicator */}
                <div className="flex gap-1.5 pb-2">
                    <div className="w-[3px] h-[16px] bg-[#B22222] opacity-60"></div>
                    <div className="w-[3px] h-[16px] bg-black/10"></div>
                    <div className="w-[3px] h-[16px] bg-black/10"></div>
                </div>

                {/* Main Image Holder (Centered) */}
                <div className="relative w-full">
                    {/* Placeholder for the user's image */}
                    <div className="w-full aspect-[16/9] bg-[#183A39]/10 rounded-[20px] overflow-hidden relative">
                        <Image
                            src="/explore/P1.svg"
                            alt="The Problem Illustration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="font-serif text-[12px] md:text-[20px] font-bold text-[#B22222] tracking-wide uppercase">
                        THE PROBLEM
                    </h2>

                    <div className="space-y-4 font-serif text-[12px] md:text-[20px] leading-[1.4] text-[#B22222]">
                        <p>
                            Today, health is often taught as information.<br />
                            Rules to remember. Advice to follow. Instructions to obey.<br />
                            But information doesn&apos;t become habit on its own.
                        </p>

                        <div className="space-y-4">
                            <p>Healthy behaviours stick when they are:</p>
                            <ul className="space-y-2">
                                {listItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B22222]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="pt-4 font-serif italic">
                            Without this, even the best advice fades.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
