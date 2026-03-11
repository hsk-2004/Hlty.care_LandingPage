"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
    return (
        <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">

            {/* Background elements container (for the colored scattered squares you will import) */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                {/* Desktop Background */}
                <Image
                    src="/explore/blog-back.svg"
                    alt="Background Pattern"
                    width={1228}
                    height={390}
                    className="object-contain hidden md:block"
                    priority
                />
                {/* Mobile Background */}
                <Image
                    src="/explore/blog-mback.svg"
                    alt="Background Pattern Mobile"
                    width={334}
                    height={307}
                    className="object-contain block md:hidden -translate-y-[20px]"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-2 md:space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-jubilat text-[24px] md:text-[44px] lg:text-[52px] leading-[1.2] text-[#183A39]"
                >
                    <span className="whitespace-nowrap">Blogs, stories, and research</span> <br />
                    <span className="whitespace-nowrap">from the Hlty Beings playground.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-jubilat text-[12px] md:text-[18px] lg:text-[20px] text-[#183A39] max-w-2xl mx-auto leading-relaxed"
                >
                    <span className="whitespace-nowrap">Writings about food, play, routines, and how habits form in real life - </span> <br className="hidden md:block" />
                    <span className="whitespace-nowrap">for parents, educators, and anyone shaping childhood environments.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="pt-2 md:pt-4"
                >
                    <div className="flex items-center bg-[#F0EEE6] rounded-full p-0.5 pl-4 w-[254px] h-[32px] md:w-full md:h-auto md:max-w-md mx-auto border border-[#183A39]/20 shadow-sm focus-within:border-[#183A39]/40 transition-colors">
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="bg-transparent flex-1 outline-none text-[12px] md:text-[16px] text-[#183A39] placeholder:text-[#183A39]/40 font-jubilat w-full"
                        />
                        <button className="bg-[#183A39] text-[#F0EEE6] px-4 md:px-8 py-1 md:py-2.5 rounded-full font-haptik text-[12px] md:text-[16px] font-medium tracking-wide hover:opacity-90 transition-opacity ml-1 h-full flex items-center">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
