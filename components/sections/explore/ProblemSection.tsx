"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-serif text-[28px] md:text-[42px] text-[#183A39]">The Challenge</h2>
                    <p className="font-serif text-[16px] md:text-[18px] text-[#183A39]/80">
                        Today's environments often prioritize schedules and outcomes over natural discovery and play.
                        Children are observing more and participating less.
                    </p>
                </div>
                <div className="bg-[#183A39]/5 rounded-2xl h-[300px] flex items-center justify-center">
                    <span className="text-[#183A39]/40 font-serif italic">Problem Illustration</span>
                </div>
            </div>
        </section>
    );
}
