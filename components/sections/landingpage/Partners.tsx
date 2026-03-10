"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
    return (
        <section className="py-24 px-6 bg-[#F0EEE6]">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-[20px] md:text-[20px] text-[#183A39] text-center font-bold tracking-tight"
                >
                    BACKED BY
                </motion.h2>

                {/* Partners Grid - 2 columns on all screens with tighter spacing */}
                <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-6 items-center justify-items-center max-w-2xl mx-auto">

                    {/* Top Left: Microsoft for Startups */}
                    <div className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6">
                        <Image
                            src="/landingpage/microsoft.svg"
                            fill
                            className="object-contain p-4 md:p-6"
                            alt="Microsoft for Startups"
                        />
                    </div>

                    {/* Top Right: IIM Kozhikode LIVE */}
                    <div className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6">
                        <Image
                            src="/landingpage/live.svg"
                            fill
                            className="object-contain p-4 md:p-6"
                            alt="IIM Kozhikode LIVE"
                        />
                    </div>

                    {/* Bottom Left: #startupindia */}
                    <div className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6">
                        <Image
                            src="/landingpage/startup.svg"
                            fill
                            className="object-contain p-2 md:p-4"
                            alt="Startup India"
                        />
                    </div>

                    {/* Bottom Right: Atal Incubation Centre */}
                    <div className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6">
                        <Image
                            src="/landingpage/atal.svg"
                            fill
                            className="object-contain p-2 md:p-4"
                            alt="Atal Incubation Centre"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
