"use client";

import Image from "next/image";

export default function FounderLetter() {
    return (
        <section className="bg-[#F0EEE6]">
            {/* Full-width container with no horizontal padding */}
            <div className="w-full relative aspect-[428/827]">
                <Image
                    src="/explore/f1.svg"
                    alt="A letter from the Founder"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    );
}
