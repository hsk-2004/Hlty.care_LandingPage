"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Workshops() {
    const points = [
        {
            title: "WHAT PARENTS USUALLY TAKE HOME",
            description: [
                "Not a list of things to do. But a way to simplify decisions and reduce",
                "friction around everyday health moments.",
            ],
        },
        {
            title: "WHY EMPLOYERS HOST THIS",
            description: [
                "Supporting parents at home improves focus, wellbeing, and retention",
                "at work — without adding pressure.",
            ],
        },
    ];

    return (
        <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:pt-8 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Heading & CTA */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10">
                        <div className="space-y-4 lg:space-y-4 pt-12 lg:pt-0">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-serif text-[24px] lg:text-[32px] lg:font-normal leading-tight lg:leading-none text-[#183A39] max-w-[330px] lg:max-w-none mx-auto lg:mx-0"
                            >
                                Employer Workshops
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="font-serif text-[12px] lg:text-[16px] lg:font-normal leading-tight lg:leading-none text-[#183A39] opacity-80 lg:opacity-100 max-w-sm lg:max-w-md mx-auto lg:mx-0"
                            >
                                Workshops designed for working parents — acknowledging limited time, cognitive load, and competing demands.
                            </motion.p>
                        </div>

                        {/* CTA Button - Desktop */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="hidden lg:flex group items-center justify-between gap-4 w-[320px] h-[40px] bg-[#1a3636] text-[#F0EEE6] px-[24px] py-[6px] rounded-[24px] font-sans font-medium text-[16px] hover:bg-[#1a3636]/90 transition-all shadow-xl"
                        >
                            <span>Book A Workshop</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Center Column: Image */}
                    <div className="lg:col-span-4 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full max-w-[480px] rounded-[24px] overflow-hidden shadow-lg"
                        >
                            <img
                                src="/e1.svg"
                                alt="Employer Workshops"
                                className="w-full h-auto rounded-[24px]"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Feature Points */}
                    <div className="lg:col-span-4 space-y-10 lg:space-y-12 w-full lg:pt-0">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 lg:space-y-4"
                            >
                                <h3 className="font-sans text-[16px] lg:text-[20px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                                    {point.title}
                                </h3>
                                <div className="space-y-2 lg:space-y-1">
                                    {point.description.map((desc, dIdx) => (
                                        <p key={dIdx} className="font-sans lg:font-serif text-[15px] lg:text-[16px] lg:font-normal text-[#183A39]/70 lg:text-[#183A39] leading-relaxed lg:leading-none max-w-md mx-auto lg:mx-0">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Mobile CTA Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="lg:hidden group flex items-center justify-between gap-4 w-full max-w-[381px] h-[32px] bg-[#1a3636] text-[#F0EEE6] px-6 rounded-[24px] font-sans font-medium text-[14px] hover:bg-[#1a3636]/90 transition-all shadow-lg mx-auto"
                        >
                            <span>Book A Workshop</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}
