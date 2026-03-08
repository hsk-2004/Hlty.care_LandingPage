"use client";

import { motion } from "framer-motion";

export default function Partners() {
    return (
        <section className="py-20 px-6 bg-white border-t border-[#183A39]/5">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="font-serif text-[20px] md:text-[24px] text-center text-[#183A39] opacity-40 tracking-widest uppercase">Trusted Partners</h2>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale">
                    {/* Add partner logos here */}
                    <div className="h-8 w-32 bg-[#183A39]/20 rounded" />
                    <div className="h-8 w-32 bg-[#183A39]/20 rounded" />
                    <div className="h-8 w-32 bg-[#183A39]/20 rounded" />
                    <div className="h-8 w-32 bg-[#183A39]/20 rounded" />
                </div>
            </div>
        </section>
    );
}
