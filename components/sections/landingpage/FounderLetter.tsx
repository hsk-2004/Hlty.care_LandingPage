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
                    <div className="absolute -top-[-4px] -right-[-15px] md:-right-[25px] md:-top-[25px] lg:-right-[40px] lg:-top-[40px] w-[78.83px] md:w-[120px] lg:w-[165px] h-[96.14px] md:h-[150px] lg:h-[200px] transform rotate-[3.8deg] z-20">
                        <div className="w-full h-full bg-[#FCB11F] rounded-[7.69px] md:rounded-[12px] lg:rounded-[16px] border-[2.88px] md:border-[4.5px] lg:border-[6px] border-[#E4DBCD] shadow-md overflow-hidden relative">
                            <Image
                                src="/landingpage/founder.png"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Pin - Moved outside overflow-hidden */}
                        <div className="absolute -top-4 -right-1 md:-top-7 md:-right-3 lg:-top-10 lg:-right-4 w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 z-30">
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
                                <div className="absolute -left-6 md:-left-9 lg:-left-12 top-1/2 -translate-y-1/2 flex flex-col space-y-1 md:space-y-1.5 lg:space-y-2 opacity-80">
                                    <div className="w-4 md:w-6 lg:w-8 h-[3px] md:h-[4px] lg:h-[5px] bg-[#DA9100] rounded-full transform -rotate-[20deg]"></div>
                                    <div className="w-5 md:w-7.5 lg:w-10 h-[3px] md:h-[4px] lg:h-[5px] bg-[#DA9100] rounded-full transform rotate-[10deg]"></div>
                                </div>
                                <div className="absolute -right-10 md:-right-15 lg:-right-20 -top-2 md:-top-3 lg:-top-4 w-10 md:w-15 lg:w-20 h-10 md:h-15 lg:h-20 text-[#DA9100] opacity-80 pointer-events-none">
                                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20,60 L40,40 L50,70 L70,30 L85,60" />
                                    </svg>
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
