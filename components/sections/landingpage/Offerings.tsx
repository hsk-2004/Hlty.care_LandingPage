"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Offerings() {
    return (
        <section className="bg-[#F0EEE6] py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-jubilat text-[24px] md:text-[64px] text-[#183A39] mb-12 md:mb-16 leading-tight"
                >
                    Explore our offerings
                </motion.h2>

                {/* Buttons Container - Grid on mobile, Flex on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-3 md:gap-5 w-full max-w-[400px] md:max-w-none mx-auto"
                >
                    <Link 
                        href="https://hlty-beings.myshopify.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#183A39] text-[#F0EEE6] px-4 md:px-10 h-[40px] md:h-auto py-0 md:py-4 rounded-full font-haptik text-[12px] md:text-[16px] font-medium tracking-[0.1em] hover:bg-[#183A39]/95 transition-all shadow-lg w-[134px] md:w-auto flex items-center justify-center translate-x-[40px] md:translate-x-0"
                        >
                            PRODUCTS
                        </motion.button>
                    </Link>

                    <Link href="/workshop" className="w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#183A39] text-[#F0EEE6] px-4 md:px-10 h-[40px] md:h-auto py-0 md:py-4 rounded-full font-haptik text-[12px] md:text-[16px] font-medium tracking-[0.1em] hover:bg-[#183A39]/95 transition-all shadow-lg w-[134px] md:w-auto flex items-center justify-center"
                        >
                            PLAYSHOPS
                        </motion.button>
                    </Link>

                    <Link href="/get-started" className="col-span-2 w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="border border-[#183A39] text-[#183A39] px-6 md:px-10 h-[40px] md:h-auto py-0 md:py-4 rounded-full font-haptik text-[12px] md:text-[16px] font-medium tracking-[0.1em] hover:bg-[#183A39]/5 transition-all w-[281px] md:w-auto md:min-w-[200px] flex items-center justify-center mx-auto"
                        >
                            TAKE A 2 MIN QUIZ
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
