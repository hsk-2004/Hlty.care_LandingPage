"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const problems = [
        {
            title: "THE PROBLEM",
            image: "/landingpage/P1.svg",
            text: "Today, health is often taught as information. Rules to remember. Advice to follow. Instructions to obey. But information doesn't become habit on its own.",
            extraText: "Healthy behaviours stick when they are:",
            list: ["repeated", "emotionally safe", "part of daily life", "shared with the adults around a child"],
            subtitle: "Without this, even the best advice fades.",
        },
        {
            title: "THE SHIFT",
            image: "/landingpage/p2.svg",
            color: "#214892",
            text: "Hlty Beings approaches health as a system, not a lesson. A system that works across:",
            list: ["children and parents", "homes and schools", "stories and real life"],
            extraText: "We design playful, story-led experiences that help children practice healthy habits, again and again until they feel natural. Health becomes something they do.",
            subtitle: "Not something they're told about.",
        },
        {
            title: "HOW IT WORKS",
            image: "/landingpage/p3.svg",
            color: "#399F87",
            text: "Our work sits at the intersection of three things:",
            list: [
                "Stories give children meaning, memory, and motivation.",
                "Play creates engagement without pressure or fear.",
                "Systems create consistency across time, places, and people.",
            ],
            subtitle: "Together, these help small daily actions turn into lasting habits.",
        }
    ];

    // Create a tall section so the user can scroll normally down the page
    // The inner container will stick to the screen and slide horizontally
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Add mass and damping to the scroll so it isn't completely tied to the fast mouse-wheel tick events
    // This makes the mobile and desktop scroll feel buttery smooth
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Translate 0 to 1 scroll progress into horizontal movement
    // Based on how many cards there are
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-66%"]);

    // Update the active dot indicator
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        // We have 3 cards, so 0 to 0.33 is card 1, 0.33 to 0.66 is card 2, etc.
        if (latest < 0.33) setActiveIndex(0);
        else if (latest < 0.66) setActiveIndex(1);
        else setActiveIndex(2);
    });

    const indicatorColor = (i: number) =>
        i === activeIndex ? "#B22222" : "rgba(0,0,0,0.1)";

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[#F0EEE6]">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

                {/* Indicators */}
                <div className="absolute top-[10vh] left-12 md:left-24 z-50 flex gap-1.5 pointer-events-none">
                    {problems.map((_, i) => (
                        <div
                            key={i}
                            className="w-[2.5px] h-[10px] blur-[0.2px] transition-colors duration-300"
                            style={{ backgroundColor: indicatorColor(i) }}
                        />
                    ))}
                </div>

                {/* Horizontal slider */}
                <motion.div
                    className="flex gap-12 md:gap-24 px-[7.5vw] md:px-[27.5vw] w-fit will-change-transform transform-gpu antialiased"
                    style={{ x }}
                >
                    {problems.map((problem, index) => (
                        <div key={index} className="w-[85vw] md:w-[45vw] flex-shrink-0 flex flex-col items-center space-y-2">

                            {/* Image */}
                            <div className="relative w-full">
                                <div className="w-full aspect-[4/3] bg-[#183A39]/10 rounded-[20px] overflow-hidden relative shadow-lg">
                                    <Image
                                        src={problem.image}
                                        alt={problem.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h2
                                className="font-serif text-[12px] md:text-[20px] font-bold tracking-wide uppercase w-full"
                                style={{ color: problem.color ?? "#B22222" }}
                            >
                                {problem.title}
                            </h2>

                            {/* Body Text */}
                            {problem.text && (
                                <div
                                    className="space-y-1 font-serif text-[11px] md:text-[16px] leading-[1.4] w-full"
                                    style={{ color: problem.color ?? "#B22222" }}
                                >
                                    <p>{problem.text}</p>
                                    {problem.extraText && <p>{problem.extraText}</p>}
                                    {problem.list && (
                                        <ul className="ml-5 list-disc space-y-0.5">
                                            {problem.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {problem.subtitle && (
                                        <p className="italic opacity-80">{problem.subtitle}</p>
                                    )}
                                </div>
                            )}

                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}