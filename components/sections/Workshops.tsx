"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Workshops() {
    return (
        <section className="relative bg-[#F0EEE6] pt-0 pb-12 md:pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
            <div className="max-w-xl w-full space-y-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-start text-left space-y-3 pt-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-[24px] leading-[100%] text-[#183A39]"
                    >
                        Employer Workshops
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[12px] leading-tight text-[#183A39] opacity-80"
                    >
                        These workshops are designed for working parents — acknowledging
                        limited time, cognitive load, and competing demands.
                    </motion.p>
                </div>

                {/* Main Section Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full rounded-[24px] overflow-hidden"
                >
                    <img
                        src="/e1.svg"
                        alt="Employer Workshops"
                        className="w-full h-auto rounded-[24px]"
                    />
                </motion.div>

                {/* Content Section */}
                <div className="space-y-8 pt-2">
                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="font-sans text-[16px] font-medium uppercase text-[#183A39]">
                            WHAT PARENTS USUALLY TAKE HOME
                        </h3>
                        <div className="font-serif text-[15px] text-[#1a3636] opacity-80 leading-relaxed">
                            <p>
                                Not a list of things to do. But a way to simplify decisions and reduce
                                friction around everyday health moments.
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="font-sans text-[16px] font-medium uppercase text-[#183A39]">
                            WHY EMPLOYERS HOST THIS
                        </h3>
                        <div className="font-serif text-[15px] text-[#1a3636] opacity-80 leading-relaxed">
                            <p>
                                Because supporting parents at home often improves focus,
                                wellbeing, and retention at work — without adding pressure.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group block w-full h-[40px] md:h-[48px] bg-[#1a3636] text-[#F0EEE6] px-6 rounded-[24px] font-sans font-medium text-[14px] md:text-[15px] hover:bg-[#1a3636]/90 transition-all shadow-lg overflow-hidden mt-6"
                >
                    <div className="flex items-center justify-between relative w-full h-full">
                        <span>Book A Workshop</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </motion.button>
            </div>
        </section>
    );
}
