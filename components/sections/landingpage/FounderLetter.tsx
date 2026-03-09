"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderLetter() {
    return (
        <section className="relative min-h-screen pb-24 pt-0 px-4 flex justify-center items-start overflow-hidden bg-[#F0EEE6]">
            {/* Background Image Container - User Specific Logic */}
            <div className="absolute inset-0 z-0 flex justify-center items-start pointer-events-none">
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

            <div className="container mx-auto relative z-10 flex justify-center mt-32 md:mt-64">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-[7.69px] border-[10px] border-[#E5E2D9] shadow-2xl p-6 relative w-[336px] h-[668px] overflow-visible"
                >
                    {/* Founder Photo & Paperclip */}
                    <div className="absolute -top-[-4px] -right-[-15px] w-[78.83px] h-[96.14px] transform rotate-[3.8deg] z-20">
                        <div className="w-full h-full bg-[#FCB11F] rounded-[7.69px] border-[2.88px] border-[#E4DBCD] shadow-md overflow-hidden relative">
                            <Image
                                src="/landingpage/founder.png"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Pin - Moved outside overflow-hidden */}
                        <div className="absolute -top-4 -right-1 w-8 h-8 z-30">
                            <Image
                                src="/landingpage/pin.svg"
                                alt="Pin"
                                width={16.91}
                                height={59.63}
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    </div>

                    {/* Text Content - Scaling text for the smaller container */}
                    <div className="max-w-[85%] font-serif text-[#2D4341] space-y-1.5 pt-1">
                        <h1 className="text-[24px] md:text-3xl font-medium leading-[1.1] mb-2 text-[#1A2E2C]">
                            A letter from <br /> the Founder
                        </h1>

                        <p className="italic text-[10px] opacity-90">
                            Health lives in the everyday.
                        </p>

                        <p className="text-[10px] leading-snug">
                            I'm building Hlty Beings because I learned the hard way <br className="hidden lg:block" />
                            that knowing isn't the same as living.
                        </p>

                        <div className="space-y-0.5">
                            <p className="text-[10px] leading-snug">I knew the facts.</p>
                            <p className="text-[10px] leading-snug">I knew what to eat, what to avoid, what "should" work.</p>
                            <p className="text-[10px] leading-snug">
                                But knowledge didn't become habit. And habit didn't <br className="hidden lg:block" />
                                become default.
                            </p>
                            <p className="text-[10px] leading-snug">Some lessons arrive too late.</p>
                        </div>

                        <p className="text-[10px] leading-snug">
                            And some losses change the way you see everything.
                        </p>

                        <div className="space-y-0.5">
                            <p className="text-[10px] leading-snug">
                                When I watch children being warned about "lifestyle <br className="hidden lg:block" />
                                diseases,"
                            </p>
                            <p className="text-[10px] leading-snug">
                                I often wonder if we've misunderstood the order of things.
                            </p>
                            <p className="text-[10px] leading-snug">Fear is not a foundation.</p>
                        </div>

                        <div className="space-y-0.5">
                            <p className="text-[10px] leading-snug">Willpower is not a system.</p>
                            <p className="text-[10px] leading-snug">Children don't need to worry about the future.</p>
                        </div>

                        <div className="space-y-0.5">
                            <p className="text-[10px] leading-snug">They need safe spaces to practice today.</p>
                            <p className="text-[10px] leading-snug">That's what Hlty Beings is building.</p>
                        </div>

                        <div className="space-y-0.5 relative">
                            <p className="text-[10px] leading-snug">Not a program.</p>
                            <p className="text-[10px] leading-snug">Not a lecture.</p>
                            <p className="text-[10px] leading-snug">Not another set of rules.</p>

                            <div className="relative inline-block mt-0.5">
                                <span className="text-[#DA9100] italic font-bold text-[10px] relative z-10">
                                    A playground for practice.
                                </span>
                                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-1 opacity-80">
                                    <div className="w-4 h-[3px] bg-[#DA9100] rounded-full transform -rotate-[20deg]"></div>
                                    <div className="w-5 h-[3px] bg-[#DA9100] rounded-full transform rotate-[10deg]"></div>
                                </div>
                                <div className="absolute -right-10 -top-2 w-10 h-10 text-[#DA9100] opacity-80 pointer-events-none">
                                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20,60 L40,40 L50,70 L70,30 L85,60" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] leading-snug">
                            A space where health becomes familiar through stories, <br className="hidden lg:block" />
                            repetition, and small daily actions until it feels less like <br className="hidden lg:block" />
                            effort and more like environment.
                        </p>

                        <p className="text-[10px] leading-snug">
                            We're starting in Bangalore — <br className="hidden lg:block" />
                            to shape this close to the ground, where we can listen, learn, <br className="hidden lg:block" />
                            and build it well.
                        </p>

                        <div className="pt-3 opacity-90">
                            <p className="text-[10px] italic">Warmly,</p>
                            <p className="text-[10px] font-bold mt-0.5">Suraj Prasad</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
