"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroStory() {

    return (
        <section className="relative py-12 md:py-20 lg:py-32 px-6 bg-[#F0EEE6] overflow-hidden">
            {/* Background Image for Desktop */}
            {/* Background Image for Desktop */}
            <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1334px] h-[807px] z-0 hidden lg:block">
                <Image
                    src="/landingpage/intro-back.svg"
                    alt="Background"
                    width={1334}
                    height={587}
                    priority
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="relative z-10 max-w-3xl lg:max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <p className="font-jubilat text-[12px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#183A39] max-w-2xl lg:max-w-3xl mx-auto">
                        Most of us don&apos;t think about health until something goes wrong.<br className="hidden md:block" />
                        A diagnosis. A warning. A chart. A &ldquo;you should have started earlier.&rdquo;
                    </p>

                    {/* Main Statement */}
                    <div className="space-y-2">
                        <h2 className="font-jubilat text-[20px] md:text-[40px] lg:text-[36px] text-[#183A39] leading-[1.1] font-normal">
                            But children don&apos;t live in warnings.
                        </h2>
                        <h2 className="font-jubilat text-[20px] md:text-[40px] lg:text-[36px] text-[#183A39] leading-[1.1] font-normal italic lg:whitespace-nowrap">
                            They live in <span className="text-[#3D8D7A] font-haptik-rotalic">stories</span>, <span className="text-[#B22222] font-haptik-rotalic">routines</span>, <span className="text-[#F3CA52] font-haptik-rotalic">play</span>, and <span className="text-[#1E40AF] font-haptik-rotalic">repetition</span>.
                        </h2>
                    </div>

                    {/* Bridge Text */}
                    <p className="font-jubilat text-[12px] md:text-[20px] lg:text-[20px] text-[#183A39]">
                        Hlty Beings exists to meet children there.
                    </p>

                    {/* Secondary Paragraphs */}
                    <div className="space-y-8 lg:space-y-12 font-jubilat text-[14px] md:text-[18px] lg:text-[20px] leading-[1.5] text-[#183A39] max-w-2xl lg:max-w-4xl mx-auto">
                        <p>
                            We are building a preventive health system for generations to come, one that doesn&apos;t lecture, diagnose, or moralise, but quietly helps healthy behaviours become part of everyday life, early on.
                        </p>
                        <p>
                            Not by telling children what to do.<br />
                            But by designing experiences they want to return to.
                        </p>
                    </div>
                </motion.div>

                {/* Intro Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 md:mt-32 lg:hidden w-full max-w-2xl mx-auto"
                >
                    <Image
                        src="/landingpage/intro-image.svg"
                        alt="Intro Story Illustration"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>

            </div>

            {/* Intro Down Image (Desktop Only) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative z-10 mt-32 lg:mt-40 translate-y-20 lg:block hidden w-full max-w-7xl mx-auto"
            >
                <Image
                    src="/landingpage/intro-down.svg"
                    alt="Intro Down Illustration"
                    width={1334}
                    height={151}
                    className="w-full h-auto"
                    priority
                />
            </motion.div>
        </section>
    );
}

