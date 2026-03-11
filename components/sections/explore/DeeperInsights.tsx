"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DeeperInsights() {
    const insights = [
        {
            title: "The Weight of a Nation",
            image: "/explore/d1.png", // User will import
            link: "#"
        },
        {
            title: "Insights 2",
            image: "/explore/d2.png", // User will import
            link: "#"
        },
        {
            title: "Insights 3",
            image: "/explore/d3.png", // User will import
            link: "#"
        }
    ];

    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-[#F0EEE6]">
            {/* Header with Underline */}
            <div className="mb-12">
                <h2 className="font-jubilat text-[20px] md:text-[24px] lg:text-[28px] text-[#183A39] mb-4">
                    Deeper Insights
                </h2>
                <div className="h-[1px] w-full bg-[#183A39]/20" />
            </div>

            {/* Insight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {insights.map((insight, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300">
                            {/* Placeholder for the user's images */}
                            <div className="absolute inset-0 bg-[#D1D5DB] animate-pulse flex items-center justify-center">
                                <span className="text-[#183A39]/40 text-sm font-jubilat">Pending Image Import</span>
                            </div>

                            <Image
                                src={insight.image}
                                alt={insight.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 placeholder-shown:opacity-100" // Opacity logic might vary, using next/image features properly
                            />

                            {/* Download Button Overlay */}
                            <div className="absolute bottom-4 right-4 z-10">
                                <button
                                    className="bg-white/20 backdrop-blur-md hover:bg-white/40 border border-white/30 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 group/btn"
                                    aria-label="Download Insight"
                                >
                                    <Download size={20} className="group-hover/btn:translate-y-0.5 transition-transform" strokeWidth={2} />
                                </button>
                            </div>

                            {/* Hover Overlay Title (Optional, can be used if needed) */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-jubilat text-lg">{insight.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


