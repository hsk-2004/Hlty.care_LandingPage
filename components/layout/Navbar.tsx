"use client";

import { ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const navLinks = [
        { name: "EXPLORE", href: "#" },
        { name: "WORKSHOPS", href: "/workshop" },
        { name: "PRODUCTS", href: "#" },
        { name: "FOR PARENTS", href: "#" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 p-8 md:py-6 md:px-12 flex justify-between items-center transition-all"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
                    <span className="hidden md:inline font-serif text-[20px] text-[#183A39] tracking-tight">
                        Hlty Beings
                    </span>
                </Link>

                {/* Desktop Navigation Links (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-10">
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
                    <button className="hidden md:block bg-[#183A39] text-[#F0EEE6] px-8 py-2.5 rounded-full font-sans text-[12px] font-medium tracking-[0.05em] hover:bg-[#1a3636]/90 transition-all shadow-md">
                        GET STARTED
                    </button>

                    <button className="hidden md:flex w-10 h-10 items-center justify-center bg-[#183A39] text-[#F0EEE6] rounded-full hover:bg-[#1a3636]/90 transition-all shadow-md">
                        <ShoppingBag size={18} />
                    </button>

                    {/* Original Mobile Menu Icon */}
                    <button className="md:hidden text-foreground p-1 hover:opacity-70 transition-opacity">
                        <Menu size={40} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
