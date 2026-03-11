"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderLetter() {
    return (
        <section className="relative min-h-screen md:min-h-[120vh] lg:min-h-[140vh] pb-24 md:pb-32 lg:pb-40 pt-0 px-4 flex justify-center items-start overflow-hidden bg-[#F0EEE6]">
            {/* Background Image Container - Desktop (Full) */}
            <div className="absolute inset-0 z-0 hidden lg:flex justify-center items-start pointer-events-none">
                <div className="w-full h-full relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 1 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/landingpage/f1.png"
                            alt="Background Decoration"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Background Image Container - Mobile/Tablet (Untouched) */}
            <div className="absolute inset-0 z-0 flex lg:hidden justify-center items-start pointer-events-none">
                <div className="w-[727px] h-[550px] relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0 }}
                        whileInView={{ opacity: 1, y: 150, scale: 1.7 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full"
                    >
                        <Image
                            src="/landingpage/f1.png"
                            alt="A letter from the Founder"
                            width={727}
                            height={820}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto relative z-10 flex justify-center mt-32 md:mt-64 lg:mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-[7.69px] md:rounded-[12px] lg:rounded-[16px] border-[10px] md:border-[15px] lg:border-[20px] border-[#E5E2D9] shadow-2xl p-6 md:p-10 lg:p-14 relative w-[336px] md:w-[500px] lg:w-[699px] h-[668px] md:h-[850px] lg:h-[1054px] overflow-visible"
                >
                    {/* Founder Photo & Paperclip */}
                    <div className="absolute -top-[-4px] -right-[-15px] md:-right-[25px] md:-top-[25px] lg:right-[50px] lg:top-[10px] w-[78.83px] md:w-[120px] lg:w-[165px] h-[96.14px] md:h-[150px] lg:h-[200px] transform rotate-[3.8deg] z-20">
                        <div className="w-full h-full bg-[#FCB11F] rounded-[7.69px] md:rounded-[12px] lg:rounded-[16px] border-[2.88px] md:border-[4.5px] lg:border-[6px] border-[#E4DBCD] shadow-md overflow-hidden relative">
                            <Image
                                src="/landingpage/founder.png"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Pin - Moved outside overflow-hidden */}
                        <div className="absolute -top-4 -right-1 md:-top-7 md:-right-3 lg:-top-8 lg:-right-1 w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 z-30">
                            <Image
                                src="/landingpage/pin.svg"
                                alt="Pin"
                                width={16.91}
                                height={59.63}
                                className="object-contain drop-shadow-md md:w-full md:h-auto lg:w-full lg:h-auto"
                            />
                        </div>
                    </div>

                    {/* Text Content - Scaling text for the smaller container */}
                    <div className="max-w-[85%] font-jubilat text-[#2D4341] space-y-1.5 md:space-y-3 lg:space-y-2 pt-1 md:pt-3 lg:pt-4">
                        <h1 className="font-jubilat text-[24px] md:text-[36px] lg:text-[48px] font-medium leading-[1.1] mb-2 md:mb-6 lg:mb-8 text-[#1A2E2C]">
                            A letter from <br /> the Founder
                        </h1>

                        <p className="italic text-[10px] md:text-[14px] lg:text-[16px] opacity-90">
                            Health lives in the everyday.
                        </p>

                        <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-relaxed">
                            I&apos;m building Hlty Beings because I learned the hard way <br className="hidden lg:block" />
                            that knowing isn&apos;t the same as living.
                        </p>

                        <div className="space-y-0.5 md:space-y-1.5 lg:space-y-1">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">I knew the facts.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">I knew what to eat, what to avoid, what &ldquo;should&rdquo; work.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug lg:whitespace-nowrap">
                                But knowledge didn&apos;t become habit. And habit didn&apos;t become default.
                            </p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Some lessons arrive too late.</p>
                        </div>

                        <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-relaxed">
                            And some losses change the way you see everything.
                        </p>

                        <div className="space-y-0.5 md:space-y-1.5 lg:space-y-1">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug lg:whitespace-nowrap">
                                When I watch children being warned about &ldquo;lifestyle diseases,&rdquo;
                            </p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">
                                I often wonder if we&apos;ve misunderstood the order of things.
                            </p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Fear is not a foundation.</p>
                        </div>

                        <div className="space-y-0.5 md:space-y-1.5 lg:space-y-1">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Willpower is not a system.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Children don&apos;t need to worry about the future.</p>
                        </div>

                        <div className="space-y-0.5 md:space-y-1.5 lg:space-y-1">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">They need safe spaces to practice today.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">That&apos;s what Hlty Beings is building.</p>
                        </div>

                        <div className="space-y-0.5 md:space-y-1.5 lg:space-y-1 relative">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Not a program.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Not a lecture.</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">Not another set of rules.</p>

                            <div className="relative inline-block mt-0.5 md:mt-1.5 lg:mt-2">
                                <span className="text-[#DA9100] font-jubilat italic text-[10px] md:text-[14px] lg:text-[16px] relative z-10">
                                    A playground for practice.
                                </span>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto md:hidden pointer-events-none">
                                    <Image
                                        src="/landingpage/text-cover.svg"
                                        alt="highlight"
                                        width={148}
                                        height={31}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">
                            <span className="lg:whitespace-nowrap">A space where health becomes familiar through stories, repetition, and small</span>
                            <br className="hidden lg:block" />
                            <span className="lg:whitespace-nowrap">daily actions until it feels less like effort and more like environment.</span>
                        </p>

                        <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-snug md:leading-normal lg:leading-snug">
                            <span>We&apos;re starting in Bangalore &mdash;</span>
                            <br className="hidden lg:block" />
                            <span className="lg:whitespace-nowrap">to shape this close to the ground, where we can listen, learn, and build it well.</span>
                        </p>

                        <div className="pt-3 md:pt-6 lg:pt-8 opacity-90">
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] italic">Warmly,</p>
                            <p className="text-[10px] md:text-[14px] lg:text-[16px] font-bold mt-0.5 md:mt-1.5 lg:mt-2">Suraj Prasad</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
