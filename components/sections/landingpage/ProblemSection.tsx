"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function ProblemSection() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
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

    const numCards = problems.length;

    // Calculate opacity for each card based on scroll progress
    const getCardOpacity = useCallback((index: number, prog: number) => {
        // Each card gets an equal segment of the total progress
        const segmentSize = 1 / numCards;
        const cardStart = index * segmentSize;
        const cardEnd = (index + 1) * segmentSize;

        // Fade zone is 20% of a segment for smooth crossfade
        const fadeZone = segmentSize * 0.25;

        if (prog < cardStart - fadeZone) return 0;
        if (prog > cardEnd + fadeZone) return 0;

        // Fade in
        if (prog < cardStart + fadeZone && index > 0) {
            const fadeProgress = (prog - (cardStart - fadeZone)) / (fadeZone * 2);
            return Math.max(0, Math.min(1, fadeProgress));
        }

        // Fade out
        if (prog > cardEnd - fadeZone && index < numCards - 1) {
            const fadeProgress = (cardEnd + fadeZone - prog) / (fadeZone * 2);
            return Math.max(0, Math.min(1, fadeProgress));
        }

        return 1;
    }, [numCards]);

    const handleScroll = useCallback(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const scrolled = -wrapperRect.top;
        const totalScroll = wrapper.scrollHeight - window.innerHeight;

        if (totalScroll <= 0) return;

        const prog = Math.max(0, Math.min(1, scrolled / totalScroll));
        setProgress(prog);

        // Determine active card index
        const idx = Math.min(numCards - 1, Math.floor(prog * numCards));
        setActiveIndex(Math.max(0, idx));
    }, [numCards]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const indicatorColor = (i: number) =>
        i === activeIndex ? "#B22222" : "rgba(0,0,0,0.1)";

    return (
        <div
            ref={wrapperRef}
            className="relative bg-[#F0EEE6]"
            style={{ height: `${numCards * 100}vh` }}
        >
            {/* Sticky container – stays pinned while user scrolls through the wrapper */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">


                {/* Fixed Layout with Crossfading Inner Content */}
                <div className="relative w-full h-full flex flex-col justify-center md:flex-row-reverse md:items-start items-center md:justify-between px-[7.5vw] md:pt-40 lg:pt-48 pb-0 md:pb-12 md:gap-16">
                    {/* Image Area */}
                    <div className="relative w-full md:w-[663px] flex justify-center">
                        <div className="w-full aspect-[4/3] md:w-[663px] md:h-[401px] md:aspect-auto bg-[#183A39]/10 rounded-[20px] overflow-hidden relative shadow-lg">
                            {problems.map((problem, index) => {
                                const opacity = getCardOpacity(index, progress);
                                const isVisible = opacity > 0;
                                return (
                                    <Image
                                        key={index}
                                        src={problem.image}
                                        alt={problem.title}
                                        fill
                                        className="object-cover"
                                        style={{
                                            opacity,
                                            visibility: isVisible ? "visible" : "hidden",
                                            transition: "opacity 0.15s ease-out",
                                            zIndex: index === activeIndex ? 10 : 1,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="w-full md:flex-1 flex flex-col items-start text-left mt-8 md:mt-0">
                        {/* Indicators – fixed in one position across all cards */}
                        <div className="flex gap-1.5 mb-2 pointer-events-none">
                            {problems.map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[2.5px] h-[10px] blur-[0.2px] transition-colors duration-300"
                                    style={{ backgroundColor: indicatorColor(i) }}
                                />
                            ))}
                        </div>

                        {/* Crossfading Texts Container */}
                        <div className="relative w-full min-h-[220px] sm:min-h-[240px] md:min-h-[350px] lg:min-h-[400px]">
                            {problems.map((problem, index) => {
                                const opacity = getCardOpacity(index, progress);
                                const isVisible = opacity > 0;
                                return (
                                    <div
                                        key={index}
                                        className="absolute inset-x-0 top-0 flex flex-col items-start"
                                        style={{
                                            opacity,
                                            visibility: isVisible ? "visible" : "hidden",
                                            transition: "opacity 0.15s ease-out",
                                            zIndex: index === activeIndex ? 10 : 1,
                                            pointerEvents: isVisible ? "auto" : "none",
                                        }}
                                    >
                                        {/* Title */}
                                        <h2
                                            className="font-jubilat text-[12px] md:text-[20px] lg:text-[24px] font-bold tracking-wide uppercase w-full"
                                            style={{ color: problem.color ?? "#B22222" }}
                                        >
                                            {problem.title}
                                        </h2>

                                        {/* Body Text */}
                                        {problem.text && (
                                            <div
                                                className="space-y-1 font-jubilat text-[11px] md:text-[16px] lg:text-[20px] leading-[1.4] w-full"
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
                                                    <p className="italic">{problem.subtitle}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}