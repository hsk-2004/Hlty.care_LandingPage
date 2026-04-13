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
                <div className="w-[727px] h-[550px] md:w-full md:h-full relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0 }}
                        whileInView={{ opacity: 1, y: 150, scale: 1.7 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:h-full relative md:scale-100"
                    >
                        <Image
                            src="/landingpage/f1.png"
                            alt="A letter from the Founder"
                            width={727}
                            height={820}
                            className="w-full h-auto md:hidden"
                            priority
                        />
                        <Image
                            src="/landingpage/f1.png"
                            alt="A letter from the Founder"
                            fill
                            className="hidden md:block object-cover object-top"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto relative z-10 flex justify-center mt-[122px] md:mt-[252px] lg:mt-[76px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-[7.69px] lg:rounded-[16px] border-[10px] lg:border-[20px] border-[#E5E2D9] shadow-2xl p-6 lg:p-14 relative w-[336px] lg:w-[699px] h-auto min-h-[668px] lg:h-[1054px] overflow-visible"
                >
                    {/* Founder Photo & Paperclip */}
                    <div className="absolute -top-[-4px] -right-[-15px] lg:right-[50px] lg:top-[10px] w-[78.83px] lg:w-[165px] h-[96.14px] lg:h-[200px] transform rotate-[3.8deg] z-20">
                        <div className="w-full h-full bg-[#FCB11F] rounded-[7.69px] lg:rounded-[16px] border-[2.88px] lg:border-[6px] border-[#E4DBCD] shadow-md overflow-hidden relative">
                            <Image
                                src="/landingpage/founder.png"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Pin - Moved outside overflow-hidden */}
                        <div className="absolute -top-9 -right-1 lg:-top-16 lg:-right-1 w-8 lg:w-16 h-8 lg:h-16 z-30">
                            <Image
                                src="/landingpage/pin.svg"
                                alt="Pin"
                                width={16.91}
                                height={59.63}
                                className="object-contain drop-shadow-md lg:w-full lg:h-auto"
                            />
                        </div>
                    </div>
 
                    {/* Text Content - Scaling text for the smaller container */}
                    <div className="max-w-[95%] font-jubilat text-[#2D4341] space-y-0.5 lg:space-y-1.5 -mt-[10px] md:-mt-[2px] lg:-mt-[2px] pt-0 md:pt-0 lg:pt-[2px]">
                        <h1 className="font-jubilat text-[24px] lg:text-[48px] font-medium leading-[1.1] mb-3 lg:mb-8 text-[#1A2E2C]">
                            A letter from <br className="hidden md:block" /> the Founder
                        </h1>

                        <p className="font-jubilat text-[10px] lg:text-[16px]">
                            Dear parent,
                        </p>
                        <div className="h-[3px] md:h-1" />

                        <div className="space-y-0">
                            <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">The World Is Designed to Make Us Sick</p>
                            <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">The world is designed to keep you fat.</p>
                            <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                                That might sound dramatic, but look closely and it becomes hard to ignore. Our cities encourage sitting. Our food is engineered to be irresistible. Our technology keeps us staring at screens for hours.
                            </p>
                        </div>
                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            I weighed 130 kilograms at my heaviest.
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <div className="space-y-0">
                            <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">I knew everything I was supposed to do.</p>
                            <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">Eat better. Move more. Sleep properly.</p>
                        </div>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            None of it was new information. But knowing something and actually living it, those are completely different things.<br />
                            That gap between knowing and doing is what I kept thinking about.
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            If it&apos;s this hard for an adult who understands the problem, what chance do our kids have? They&apos;re growing up in the most distraction-filled, ultra-processed, sit-still-and-stare-at-a-screen environment in human history. And our answer to that is usually &ldquo;eat your vegetables.&rdquo;
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            We treat health like homework.
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            I started Hlty Beings because I believe we can do better. Not with lectures. Not with rules. But with stories, play, and experiences that make healthy feel like the obvious, natural, fun choice so by the time a child grows up, good habits aren&apos;t a discipline. They&apos;re just who they are.
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            My own journey isn&apos;t finished. I&apos;m in my 90s now, working toward the 80s. That unfinished road is exactly why this matters to me.
                        </p>

                        <div className="h-[3px] md:h-1" />
                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            If adults fight this hard to stay healthy, the least we can do is build a world where children never have to fight that same battle uphill.<br />
                            That&apos;s what we&apos;re building.
                        </p>

                        <p className="text-[10px] lg:text-[16px] leading-snug lg:leading-snug">
                            Welcome to the playground.
                        </p>

                        <div className="pt-[2px]">
                            <p className="font-jubilat text-[10px] lg:text-[16px]">Warmly,</p>
                            <p className="font-jubilat text-[10px] lg:text-[16px]">Suraj Prasad</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
