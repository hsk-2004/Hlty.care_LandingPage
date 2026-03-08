"use client";

import { motion } from "framer-motion";

export default function FounderLetter() {
    return (
        <section className="py-20 px-6 bg-[#F0EEE6]">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm space-y-8">
                <h2 className="font-serif text-[24px] md:text-[32px] text-[#183A39] italic text-center">A Note from Our Founder</h2>
                <div className="space-y-4 font-serif text-[16px] leading-[1.8] text-[#183A39]/80">
                    <p>
                        "I built hlty.care because I saw a gap in how we approach childhood wellness.
                        It's not about being perfect; it's about being present."
                    </p>
                    <div className="pt-4 border-t border-[#183A39]/10">
                        <p className="font-bold">The Founder Name</p>
                        <p className="text-[14px] opacity-60">Mission Driver, hlty.care</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
