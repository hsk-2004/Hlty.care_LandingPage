"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Workshops() {
    const points = [
        {
            title: "WHAT PARENTS USUALLY TAKE HOME",
            description: [
                "Not a list of things to do. But a way to simplify decisions and",
                "reduce friction around everyday health moments.",
            ],
        },
        {
            title: "WHY EMPLOYERS HOST THIS",
            description: [
                "Because supporting parents at home often improves focus,",
                "wellbeing, and retention at work — without adding pressure.",
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative bg-background pt-0 pb-12 md:pb-24 lg:pt-8 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-xl lg:max-w-[1440px] mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
                >

                    {/* Left Column: Heading & CTA */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-start text-left lg:text-left space-y-8 lg:space-y-10">
                        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-4 pt-12 lg:pt-0">
                            <h2 className="font-serif text-[24px] lg:text-[32px] lg:font-normal leading-tight lg:leading-none text-[#183A39] max-w-[330px] lg:max-w-none mx-0 lg:mx-0">
                                Employer Workshops
                            </h2>
                            <p className="font-serif text-[12px] lg:text-[16px] lg:font-normal leading-tight lg:leading-none text-[#183A39] opacity-80 lg:opacity-100 max-w-sm lg:max-w-md mx-0 lg:mx-0">
                                Workshops designed for working parents — acknowledging limited time, cognitive load, and competing demands.
                            </p>
                        </motion.div>

                        {/* CTA Button - Desktop */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden lg:flex group items-center justify-between gap-4 w-[320px] h-[40px] bg-[#1a3636] text-[#F0EEE6] px-[24px] py-[6px] rounded-[24px] font-sans font-medium text-[16px] hover:bg-[#1a3636]/90 transition-all shadow-xl"
                        >
                            <span>Book A Workshop</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Center Column: Image */}
                    <div className="lg:col-span-4 flex justify-center">
                        <motion.div
                            variants={itemVariants}
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
                                variants={itemVariants}
                                className="flex flex-col items-start lg:items-start text-left lg:text-left space-y-2 lg:space-y-4"
                            >
                                <h3 className="font-sans text-[16px] lg:text-[20px] font-medium lg:font-medium uppercase leading-normal lg:leading-tight text-[#183A39]">
                                    {point.title}
                                </h3>
                                <div className="lg:space-y-1">
                                    {/* Mobile: Single wrapping paragraph */}
                                    <p className="lg:hidden font-sans text-[15px] text-[#183A39]/70 leading-relaxed max-w-md">
                                        {point.description.join(" ")}
                                    </p>

                                    {/* Desktop: Forced lines with no wrapping */}
                                    {point.description.map((desc, dIdx) => (
                                        <p key={dIdx} className="hidden lg:block font-serif text-[16px] font-normal text-[#183A39] leading-none lg:max-w-none mx-0 lg:whitespace-nowrap">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Mobile CTA Button */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="lg:hidden group flex items-center justify-between gap-4 w-full max-w-[381px] h-[32px] bg-[#1a3636] text-[#F0EEE6] px-6 rounded-[24px] font-sans font-medium text-[14px] hover:bg-[#1a3636]/90 transition-all shadow-lg"
                        >
                            <span>Book A Workshop</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
