"use client";

import Image from "next/image";

export default function FounderLetter() {
    return (
        <section className="bg-[#F0EEE6]">
            {/* Full-width container with no horizontal padding */}
            <div className="w-full relative aspect-[1/2.1] md:aspect-[1/1.5] lg:aspect-[1/1.2]">
                <Image
                    src="/explore/f1.svg"
                    alt="A letter from the Founder"
                    fill
                    className="object-contain md:object-cover"
                    priority
                />
            </div>
        </section>
    );
}
