"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DeeperInsights() {
    const featuredInsight = {
        title: "The Weight of a Nation",
        image: "/explore/d1.svg",
        category: "WHITEPAPER",
        date: "JAN 26, 2026",
        link: "#"
    };

    const otherInsights = [
        {
            title: "Is Your Protein Bar Just Candy with Better PR?",
            subtitle: "Is Your Post-Workout Snack Actually Junk Food?",
            image: "/explore/d2.png",
            category: "WHITEPAPER",
            date: "JAN 26, 2026",
            link: "#"
        },
        {
            title: "The Great Screen Reversal: Why Sweden is Going Old School",
            subtitle: "One of the world's most tech-forward nations is halting digital learning to save literacy. Here is why Indian parents need to pause the 'Smart Class' hype.",
            image: "/explore/d3.png",
            category: "WHITEPAPER",
            date: "FEB 06, 2026",
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

            {/* Featured Insight - Large Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10"
            >
                {/* Mobile: Stacked, Desktop: Side by side */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-16">
                    {/* Left Content */}
                    <div className="order-2 md:order-1 md:w-[35%] lg:w-[30%] mt-6 md:mt-0">
                        {/* Category and Date */}
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-[#183A39] text-[#F0EEE6] px-3 py-1 rounded-sm font-haptik text-[10px] md:text-[12px] font-medium tracking-wide">
                                {featuredInsight.category}
                            </span>
                            <span className="font-jubilat text-[10px] md:text-[12px] uppercase text-[#183A39]/60">
                                {featuredInsight.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-jubilat text-[24px] md:text-[28px] lg:text-[32px] xl:text-[52px] text-[#183A39] leading-[1.2] mb-6">
                            {featuredInsight.title}
                        </h3>

                        {/* Download Button */}
                        <button className="bg-[#183A39] text-[#F0EEE6] px-6 py-2.5 rounded-full font-haptik text-[12px] md:text-[14px] font-medium hover:bg-[#183A39]/90 transition-colors">
                            Download
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 md:order-2 md:flex-1">
                        {/* Mobile Image */}
                        <Image
                            src="/explore/d2.svg"
                            alt={featuredInsight.title}
                            width={700}
                            height={438}
                            className="w-full h-auto rounded-[16px] md:hidden"
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/explore/d1.svg"
                            alt={featuredInsight.title}
                            width={816}
                            height={571}
                            className="w-full h-auto rounded-[16px] hidden md:block scale-125 xl:scale-100 xl:w-[816px] xl:h-[571px]"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Other Insights - 2 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 xl:pl-60">
                {otherInsights.map((insight, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`group cursor-pointer xl:w-[400px] ${index === 0 ? 'xl:ml-auto' : 'xl:ml-0'}`}
                    >
                        {/* Image */}
                        <div className="relative aspect-[16/10] xl:aspect-auto xl:w-[400px] xl:h-[249px] w-full rounded-[16px] overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow bg-[#D5D0C4]">
                            <Image
                                src={insight.image}
                                alt={insight.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Category and Date */}
                        <div className="flex items-center gap-4 mb-3">
                            <span className="bg-[#183A39] text-[#F0EEE6] px-3 py-1 rounded-sm font-haptik text-[10px] md:text-[12px] font-medium tracking-wide">
                                {insight.category}
                            </span>
                            <span className="font-jubilat text-[10px] md:text-[12px] uppercase text-[#183A39]/60">
                                {insight.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-jubilat text-[18px] md:text-[20px] xl:text-[24px] text-[#183A39] leading-[1.3] mb-2 group-hover:opacity-80 transition-opacity">
                            {insight.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-jubilat text-[12px] md:text-[13px] xl:text-[16px] text-[#183A39]/70 leading-relaxed line-clamp-3 italic">
                            {insight.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


