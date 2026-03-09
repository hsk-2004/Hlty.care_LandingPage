"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroStory() {

    return (
        <section className="relative py-12 px-6 bg-[#F0EEE6] overflow-hidden">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <p className="font-serif text-[12px] md:text-[18px] leading-relaxed text-[#183A39] opacity-90 max-w-2xl mx-auto">
                        Most of us don&apos;t think about health until something goes wrong.<br className="hidden md:block" />
                        A diagnosis. A warning. A chart. A &ldquo;you should have started earlier.&rdquo;
                    </p>

                    {/* Main Statement */}
                    <div className="space-y-2">
                        <h2 className="font-serif text-[20px] md:text-[40px] leading-[1.1] text-[#1a3636] font-normal">
                            But children don&apos;t live in warnings.
                        </h2>
                        <h2 className="font-serif text-[20px] md:text-[40px] leading-[1.1] text-[#1a3636] font-normal italic">
                            They live in <span className="text-[#3D8D7A]">stories</span>, <span className="text-[#B22222]">routines</span>, <span className="text-[#F3CA52]">play</span>, <br className="hidden md:block" />
                            and <span className="text-[#1E40AF]">repetition</span>.
                        </h2>
                    </div>

                    {/* Bridge Text */}
                    <p className="font-serif text-[12px] md:text-[20px] text-[#183A39] opacity-90">
                        Hlty Beings exists to meet children there.
                    </p>

                    {/* Secondary Paragraphs */}
                    <div className="space-y-8 font-serif text-[14px] md:text-[18px] leading-[1.5] text-[#1a3636] opacity-80 max-w-2xl mx-auto">
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
                    className="mt-20 md:mt-32 w-full max-w-4xl mx-auto"
                >
                    <Image
                        src="/explore/intro-image.svg"
                        alt="Intro Story Illustration"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
}

