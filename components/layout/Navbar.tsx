"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const navLinks = [
        { name: "EXPLORE", href: "/explore" },
        { name: "WORKSHOPS", href: "/workshop" },
        { name: "PRODUCTS", href: "#" },
        { name: "FOR PARENTS", href: "#" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={isOpen ? "visible" : (hidden ? "hidden" : "visible")}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-50 p-6 lg:py-4 lg:px-12 flex justify-between items-center transition-all duration-300 ${isOpen ? "bg-[#183A39]" : (scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent")
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="Logo" className="h-14 lg:h-20 w-auto" />
                </Link>

                {/* Desktop Navigation Links (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-sans text-[13px] font-medium tracking-[0.1em] text-[#183A39] hover:opacity-60 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons & Menu */}
                <div className="flex items-center gap-4">
                    {/* Desktop Only Actions */}
                    <button className="hidden lg:block bg-[#183A39] text-[#F0EEE6] px-8 py-2.5 rounded-full font-sans text-[12px] font-medium tracking-[0.05em] hover:bg-[#1a3636]/90 transition-all shadow-md">
                        GET STARTED
                    </button>

                    <button className="hidden lg:flex w-10 h-10 items-center justify-center bg-[#183A39] text-[#F0EEE6] rounded-full hover:bg-[#1a3636]/90 transition-all shadow-md">
                        <ShoppingBag size={18} />
                    </button>

                    {/* Original Mobile Menu Icon */}
                    <button
                        className="lg:hidden text-[#183A39] p-1 hover:opacity-70 transition-opacity z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#183A39] z-[60] flex flex-col px-6 py-8 lg:hidden"
                    >
                        {/* Top Header inside menu */}
                        <div className="flex justify-between items-center mb-20">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                            </Link>
                            <button
                                className="text-[#F0EEE6] p-1"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div className="flex flex-col gap-4 w-full items-center">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="flex justify-center w-full"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center w-[382px] h-[40px] border border-[#5EE2A0]/40 rounded-full font-sans text-[14px] font-medium tracking-[0.15em] text-[#F0EEE6] hover:bg-[#F0EEE6]/5 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-auto flex flex-col gap-4 items-center pb-12">
                            <div
                                className="flex justify-center w-full"
                            >
                                <button className="w-[382px] h-[40px] bg-[#F0EEE6] text-[#183A39] rounded-full font-serif italic text-[18px] tracking-wide shadow-lg flex items-center justify-center">
                                    GET STARTED
                                </button>
                            </div>

                            <div
                                className="flex justify-center w-full"
                            >
                                <button className="w-[382px] h-[40px] bg-[#5EE2A0] text-[#183A39] rounded-full font-serif italic text-[18px] tracking-wide shadow-lg flex items-center justify-center">
                                    CART
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
