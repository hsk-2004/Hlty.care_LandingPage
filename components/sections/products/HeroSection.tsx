"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-[#F0EEE6] pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden relative">
            {/* Background Image c1 */}
            <div className="hidden md:block absolute top-30 left-1/2 -translate-x-1/2 w-full max-w-[1242px] h-[448px] pointer-events-none z-0">
                <Image
                    src="/products/c1.svg"
                    alt=""
                    fill
                    className="object-contain opacity-80"
                    priority
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                {/* Character Illustration c2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[262px] h-[149.8px] md:w-full md:max-w-[500px] md:h-auto md:aspect-[16/9] mb-4 relative"
                >
                    <Image
                        src="/products/c2.svg"
                        alt="Play Learn Repeat Illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-jubilat font-normal text-[30.53px] md:text-[48px] lg:text-[56px] text-[#183A39] leading-[1.1] mb-4"
                >
                    Play. Learn. Repeat.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-jubilat font-normal text-[11.63px] md:text-[18px] text-[#183A39]/80 max-w-xl leading-relaxed mb-10"
                >
                    Story-led books, games, and tools that make health familiar — <br className="hidden md:block" /> at home and in classrooms.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full max-w-[378px] md:max-w-2xl relative"
                >
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search size={14} className="text-[#183A39]/40 md:scale-125 group-focus-within:text-[#399F87] transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search catalogue..."
                            className="w-full bg-white h-[30.53px] md:h-[60px] pl-10 md:pl-14 pr-6 rounded-full font-haptik text-[12px] md:text-[16px] text-[#183A39] placeholder:text-[#183A39]/30 border border-[#183A39]/5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#399F87]/20 transition-all"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
