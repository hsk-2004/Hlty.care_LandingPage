"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConversationSection() {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-[#183A39]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[20px] overflow-hidden bg-[#E4DBCD]"
                >
                    {/* Mobile Layout */}
                    <div className="xl:hidden">
                        {/* Image at Top */}
                        <div className="p-3">
                            <div className="relative w-full h-[200px] sm:h-[280px]">
                                <Image
                                    src="/get-started/c1.png"
                                    alt="Start a conversation"
                                    fill
                                    className="object-cover rounded-[16px]"
                                    style={{ objectPosition: 'center 40%' }}
                                />
                            </div>
                        </div>

                        {/* Content Below */}
                        <div className="p-6 pt-2">
                            <h2 className="font-jubilat italic text-[24px] md:text-[32px] text-[#183A39] leading-tight mb-4">
                                I have something else in mind
                            </h2>
                            
                            <p className="font-haptik text-[14px] md:text-[16px] text-[#183A39]/90 leading-relaxed mb-1">
                                Not everything fits neatly into a category.
                            </p>
                            <p className="font-haptik text-[14px] md:text-[16px] text-[#183A39]/90 leading-relaxed mb-6">
                                If you're thinking about a specific context — a school menu, a program, a space,
                                a routine, or something that doesn't exist yet — we're open to exploring it together.
                            </p>

                            {/* CTA Button */}
                            <button className="w-full flex items-center justify-between bg-transparent border border-[#183A39]/30 rounded-full px-6 py-3 group hover:bg-[#183A39]/5 transition-colors">
                                <span className="font-haptik text-[13px] text-[#183A39] tracking-wider">
                                    Check Out Our Summer Camp
                                </span>
                                <ArrowRight size={18} className="text-[#183A39]" />
                            </button>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden xl:block relative">
                        {/* Background Image */}
                        <Image
                            src="/get-started/c1.png"
                            alt="Start a conversation"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center -580px' }}
                        />

                        {/* Gradient Overlay from Left */}
                        <div 
                            className="absolute inset-0 z-[1]"
                            style={{
                                background: 'linear-gradient(to right, rgba(228, 219, 205, 0.85) 10%, rgba(228, 219, 205, 0.6) 60%, transparent 100%)'
                            }}
                        />

                        {/* Content Overlay */}
                        <div className="relative z-10 p-12 py-16">
                            <h2 className="font-jubilat italic text-[40px] text-[#183A39] leading-tight mb-6 text-left">
                                I have something else in mind
                            </h2>
                            
                            <p className="font-haptik text-[16px] text-[#183A39]/90 leading-relaxed mb-2 text-left">
                                Not everything fits neatly into a category.
                            </p>
                            <p className="font-haptik text-[16px] text-[#183A39]/90 leading-relaxed mb-8 text-left max-w-xl">
                                If you're thinking about a specific context — a school menu, a program, a space,<br />
                                a routine, or something that doesn't exist yet — we're open to exploring it together.
                            </p>

                            {/* CTA Button */}
                            <button className="inline-flex items-center gap-3 bg-[#183A39] border border-[#F0EEE6]/30 rounded-full px-6 py-3 group hover:bg-[#183A39]/90 transition-colors">
                                <span className="font-haptik text-[13px] text-[#F0EEE6] tracking-wider">
                                    Start A Conversation
                                </span>
                                <ArrowRight size={18} className="text-[#F0EEE6]" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
