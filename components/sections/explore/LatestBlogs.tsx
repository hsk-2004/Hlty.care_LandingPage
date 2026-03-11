"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LatestBlogs() {
    const blogs = [
        {
            title: "Is Your Protein Bar Just Candy with Better PR?",
            subtitle: "Is Your Post-Workout Snack Actually Junk Food?",
            image: "/explore/b1.svg",
            category: "HLTY BITES",
            date: "JAN 26, 2025",
        },
        {
            title: "The Great Screen Reversal: Why Sweden is Going Old School",
            subtitle: "Is Your Post-Workout Snack Actually Junk Food? One of the world's most tech-forward nations is halting digital learning to save literacy...",
            image: "/explore/b2.svg",
            category: "HLTY BITES",
            date: "FEB 06, 2025",
        },
        {
            title: "It's Not Just About Cartoons: The Silent Danger of the \"Background\" TV",
            subtitle: "Your child doesn't need to watch the TV for it to affect their brain.",
            image: "/explore/b3.svg",
            category: "HLTY BITES",
            date: "FEB 10, 2025",
        }
    ];

    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-[#F0EEE6]">
            {/* Header with Underline */}
            <div className="mb-12">
                <h2 className="font-jubilat text-[20px] md:text-[24px] lg:text-[28px] text-[#183A39] mb-4">
                    Latest from Hlty Bites
                </h2>
                <div className="h-[1px] w-full bg-[#183A39]/20" />
            </div>

            {/* Blog Posts List/Grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-x-12 lg:gap-y-16">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        {/* Image Container with Rounded Corners */}
                        <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Category and Date Row */}
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-[#399F87] text-[#F0EEE6] px-3 py-1 rounded-sm font-haptik text-[10px] md:text-[12px] font-medium tracking-wide">
                                {blog.category}
                            </span>
                            <span className="font-jubilat text-[10px] md:text-[12px] uppercase text-[#183A39]/60">
                                {blog.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-jubilat text-[18px] md:text-[22px] text-[#183A39] leading-[1.3] mb-3 group-hover:opacity-80 transition-opacity">
                            {blog.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-jubilat text-[12px] md:text-[14px] text-[#183A39]/70 leading-relaxed line-clamp-2 italic">
                            {blog.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

