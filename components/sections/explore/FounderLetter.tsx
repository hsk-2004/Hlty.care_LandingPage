"use client";

import Image from "next/image";

export default function FounderLetter() {
    return (
        <section className="bg-[#F0EEE6] flex justify-center">
            <Image
                src="/explore/f1.svg"
                alt="A letter from the Founder"
                width={856}
                height={1654}
                priority
                unoptimized
                className="w-full max-w-[428px] h-auto"
            />
        </section>
    );
}