"use client";

import { motion } from "framer-motion";

export default function IntroStory() {
    return (
        <section className="py-20 px-6 bg-[#F0EEE6]">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="font-serif text-[28px] md:text-[42px] text-[#183A39]">Our Story</h2>
                <p className="font-serif text-[16px] md:text-[20px] leading-relaxed text-[#183A39]/80">
                    Every journey begins with a single step. Ours started with a simple question:
                    How can we make health and wellness a natural part of every child's life?
                </p>
            </div>
        </section>
    );
}
