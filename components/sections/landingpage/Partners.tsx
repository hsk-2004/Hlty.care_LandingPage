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
                    className="font-haptik text-[20px] md:text-[20px] text-[#183A39] text-center font-medium tracking-[0.1em] uppercase"
                >
                    BACKED BY
                </motion.h2>

                {/* Partners Grid - 2 columns on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-6 items-center justify-items-center max-w-4xl mx-auto">

                    {/* Top Left: Microsoft for Startups */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6 cursor-pointer"
                    >
                        <Image
                            src="/landingpage/microsoft.svg"
                            fill
                            className="object-contain p-4 md:p-6"
                            alt="Microsoft for Startups"
                        />
                    </motion.div>
 
                    {/* Top Right: IIM Kozhikode LIVE */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6 cursor-pointer"
                    >
                        <Image
                            src="/landingpage/live.svg"
                            fill
                            className="object-contain p-4 md:p-6"
                            alt="IIM Kozhikode LIVE"
                        />
                    </motion.div>
 
                    {/* Bottom Left: #startupindia */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6 cursor-pointer"
                    >
                        <Image
                            src="/landingpage/startup.svg"
                            fill
                            className="object-contain p-2 md:p-4"
                            alt="Startup India"
                        />
                    </motion.div>
 
                    {/* Bottom Right: Atal Incubation Centre */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full max-w-[280px] aspect-[2.2/1] flex items-center justify-center relative overflow-hidden p-6 cursor-pointer"
                    >
                        <Image
                            src="/landingpage/atal.svg"
                            fill
                            className="object-contain p-2 md:p-4"
                            alt="Atal Incubation Centre"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
