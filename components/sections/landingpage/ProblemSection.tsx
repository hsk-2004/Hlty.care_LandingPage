"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProblemSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);

    // Card index indicator tracking
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

    useEffect(() => {
        const section = sectionRef.current;
        const container = scrollRef.current;
        if (!section || !container) return;

        const handleWheel = (e: WheelEvent) => {
            // Only intercept scroll on mobile/tablet (less than md breakpoint)
            if (window.innerWidth >= 768) return;

            const maxScroll = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;

            // If there's still horizontal scroll room, intercept vertical scroll
            if (
                Math.abs(e.deltaY) > Math.abs(e.deltaX) &&
                ((e.deltaY > 0 && currentScroll < maxScroll) ||
                    (e.deltaY < 0 && currentScroll > 0))
            ) {
                e.preventDefault();
                const newScroll = Math.max(0, Math.min(maxScroll, currentScroll + e.deltaY * 2));
                container.scrollLeft = newScroll;
                setScrollX(newScroll);
            }
        };

        let touchStartY = 0;
        let touchStartX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            // Only intercept touch on mobile/tablet (less than md breakpoint)
            if (window.innerWidth >= 768) return;

            const currentY = e.touches[0].clientY;
            const currentX = e.touches[0].clientX;
            const deltaY = touchStartY - currentY;
            const deltaX = touchStartX - currentX;

            const maxScroll = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;

            // Intercept if it's primarily a vertical scroll AND we have room to scroll horizontally
            if (
                Math.abs(deltaY) > Math.abs(deltaX) &&
                ((deltaY > 0 && currentScroll < maxScroll) ||
                    (deltaY < 0 && currentScroll > 0))
            ) {
                e.preventDefault(); // Stop native vertical scroll

                // Keep movement feeling natural
                const newScroll = Math.max(0, Math.min(maxScroll, currentScroll + deltaY * 2));
                container.scrollLeft = newScroll;
                setScrollX(newScroll);

                // Re-center touch start to make constant swiping feel right
                touchStartY = currentY;
                touchStartX = currentX;
            }
        };

        section.addEventListener("wheel", handleWheel, { passive: false });
        section.addEventListener("touchstart", handleTouchStart, { passive: false });
        section.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            section.removeEventListener("wheel", handleWheel);
            section.removeEventListener("touchstart", handleTouchStart);
            section.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    const indicatorColor = (i: number) =>
        i === activeIndex ? "#B22222" : "rgba(0,0,0,0.1)";

    return (
        <section ref={sectionRef} className="relative bg-[#F0EEE6] py-0">

            {/* Indicators */}
            <div className="absolute top-4 left-12 md:left-24 z-50 flex gap-1.5 pointer-events-none">
                {problems.map((_, i) => (
                    <div
                        key={i}
                        className="w-[2.5px] h-[10px] blur-[0.2px] transition-colors duration-300"
                        style={{ backgroundColor: indicatorColor(i) }}
                    />
                ))}
            </div>

            {/* Horizontal scroll container */}
            <div
                ref={scrollRef}
                onScroll={(e) => {
                    const container = e.currentTarget;
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    if (maxScroll > 0) {
                        const progress = container.scrollLeft / maxScroll;
                        setActiveIndex(Math.round(progress * (problems.length - 1)));
                    }
                }}
                className="flex gap-12 md:gap-40 px-[7.5vw] pt-10 md:pt-12 pb-6 overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                {problems.map((problem, index) => (
                    <div
                        key={index}
                        className={`w-[85vw] md:w-[85vw] flex-shrink-0 flex flex-col md:flex-row-reverse items-center md:justify-between space-y-2 md:space-y-0 md:gap-16 snap-center transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "md:opacity-0"}`}
                    >
                        {/* Image */}
                        <div className="relative w-full md:w-[663px] flex justify-center">
                            <div className="w-full aspect-[4/3] md:w-[663px] md:h-[401px] md:aspect-auto bg-[#183A39]/10 rounded-[20px] overflow-hidden relative shadow-lg">
                                <Image
                                    src={problem.image}
                                    alt={problem.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Content wrapper */}
                        <div className="w-full md:flex-1 flex flex-col items-start md:text-left">
                            {/* Title */}
                            <h2
                                className="font-serif text-[12px] md:text-[20px] lg:text-[24px] font-bold tracking-wide uppercase w-full"
                                style={{ color: problem.color ?? "#B22222" }}
                            >
                                {problem.title}
                            </h2>

                            {/* Body Text */}
                            {problem.text && (
                                <div
                                    className="space-y-1 font-serif text-[11px] md:text-[16px] lg:text-[20px] leading-[1.4] w-full"
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
                    </div>
                ))}
            </div>

        </section>
    );
}