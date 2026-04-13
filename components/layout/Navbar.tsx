"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ExploreMenu from "./ExploreMenu";

interface NavbarProps {
    variant?: "light" | "dark";
    customLinks?: { name: string; href: string }[];
    textColor?: string;
    buttonColor?: string;
    cartIcon?: string;
    logo?: string;
    showClose?: boolean;
    onCloseHref?: string;
    logoClassName?: string;
    bgTransparent?: boolean;
    cartBgColor?: string;
    showGetStarted?: boolean;
    mobileLogo?: string;
}

export default function Navbar({ variant = "light", customLinks, textColor, buttonColor, cartIcon, logo, showClose, onCloseHref, logoClassName, bgTransparent, cartBgColor, showGetStarted, mobileLogo }: NavbarProps) {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const { scrollY } = useScroll();

    // Prevent scrolling when explore menu is open
    useEffect(() => {
        if (isExploreOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isExploreOpen]);

    const isDark = variant === "dark";

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

    const navLinks = customLinks || [
        { name: "+ EXPLORE", href: "/explore-dropdown" },
        { name: "WORKSHOPS", href: "/workshop" },
        { name: "FOR PARENTS", href: "/parents" },
        { name: "WHO LETTER", href: "#" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            initial="visible"
            animate={(isOpen || isExploreOpen) ? "visible" : (hidden ? "hidden" : "visible")}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-[100] flex justify-center items-center p-4 lg:py-4 lg:px-6 ${(isOpen || isExploreOpen) ? "bg-[#183A39]" : "transition-colors duration-300 " + (isDark ? "bg-[#183A39] lg:bg-transparent" : (scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"))
                }`}
        >
            <div className={`flex justify-between items-center w-full max-w-7xl lg:px-2 ${isDark ? `lg:h-[56px] xl:h-[68px] ${bgTransparent ? "" : "lg:bg-[#E4DBCD]"} lg:rounded-[32px] lg:py-1.5` : ""}`}>
                {/* Logo Section */}
                <div className="flex lg:flex-1 justify-start items-center">
                    <Link href="/" className={`flex items-center gap-2 group ${logoClassName || "lg:-ml-2"}`}>
                        {/* Mobile Logo: Always white logo_ for explore or when menu is open */}
                        <img 
                            src={isOpen ? (mobileLogo || logo || "/logo_.svg") : (mobileLogo || logo || "/logo.png")} 
                            alt="Logo" 
                            className={`lg:hidden w-auto ${isOpen || mobileLogo || logo ? "" : "h-14"}`} 
                            style={(isOpen || mobileLogo || logo) ? { width: '46px', height: '35px' } : {}}
                        />
                        {/* Desktop Logo */}
                        <img 
                            src={isOpen ? (logo || "/logo_.svg") : (logo || "/logo.png")} 
                            alt="Logo" 
                            className={`hidden lg:block ${isOpen ? "" : (logo ? "w-auto h-8 lg:w-[180px] lg:h-[28px]" : `w-auto h-14 lg:h-12 xl:h-20 ${isDark ? "lg:ml-2" : ""}`)}`} 
                            style={isOpen ? { width: '46px', height: '35.86px' } : {}}
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
                    {navLinks.map((link) => {
                        const isExplore = link.name === "+ EXPLORE";
                        return (
                            <Link
                                key={link.name}
                                href={isExplore ? "#" : link.href}
                                onClick={(e) => {
                                    if (isExplore) {
                                        e.preventDefault();
                                        setIsExploreOpen(true);
                                    }
                                }}
                                style={{ color: textColor || (isDark ? (bgTransparent ? "#E4DBCD" : "#183A39") : (scrolled ? "#183A39" : (variant === "light" ? "#183A39" : "#F0EEE6"))) }}
                                className="font-haptik lg:text-[13px] xl:text-[15px] font-medium tracking-[0.1em] hover:opacity-60 transition-opacity"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Buttons & Menu */}
                <div className="flex lg:flex-1 items-center justify-end gap-4">
                    {/* Desktop Only Actions */}
                    {(showGetStarted || !isDark) && (
                        <Link 
                            href="/get-started" 
                            style={{ backgroundColor: buttonColor || (isDark ? "#51D2A2" : "#183A39") }}
                            className={`hidden lg:flex lg:w-[130px] lg:h-[44px] xl:w-[164px] xl:h-[58px] items-center justify-center rounded-full font-haptik lg:text-[12px] xl:text-[14px] font-medium tracking-[0.05em] hover:opacity-90 transition-all shadow-md ${(buttonColor === "#51D2A2" || (isDark && !buttonColor)) ? "text-[#183A39]" : "text-[#F0EEE6]"}`}
                        >
                            GET STARTED
                        </Link>
                    )}

                    <Link 
                        href="/cart" 
                        style={{ backgroundColor: cartBgColor || "#183A39" }}
                        className={`hidden lg:flex lg:w-[44px] lg:h-[44px] xl:w-[58px] xl:h-[58px] items-center justify-center rounded-full transition-all hover:scale-105 shadow-md ${cartBgColor === "#51D2A2" ? "text-[#183A39]" : "text-[#F0EEE6]"}`}
                    >
                        {cartIcon ? <img src={cartIcon} alt="Cart" className="lg:w-[22px] lg:h-[22px] xl:w-[30px] xl:h-[30px]" /> : <ShoppingBag size={20} className="w-4 h-4 xl:w-5 xl:h-5" />}
                    </Link>

                    {showClose ? (
                        <Link 
                            href={onCloseHref || "/"}
                            className="lg:hidden p-1 hover:opacity-70 transition-opacity z-50 text-[#F0EEE6]"
                        >
                            <X size={32} strokeWidth={2.5} />
                        </Link>
                    ) : (
                        <button
                            className={`lg:hidden p-1 hover:opacity-70 transition-opacity z-50 ${isDark ? "text-[#F0EEE6]" : "text-[#183A39]"}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#183A39] z-[110] flex flex-col px-6 py-8 lg:hidden"
                >
                    {/* Top Header inside menu */}
                    <div className="flex justify-between items-center mb-20">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <img src={logo || "/logo_.svg"} alt="Logo" style={{ width: '46px', height: '35.86px' }} />
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
                        {navLinks.map((link) => {
                            const isExplore = link.name === "+ EXPLORE";
                            return (
                                <div
                                    key={link.name}
                                    className="flex justify-center w-full"
                                >
                                    <Link
                                        href={isExplore ? "#" : link.href}
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            if (isExplore) {
                                                e.preventDefault();
                                                setIsExploreOpen(true);
                                            }
                                        }}
                                        className="flex items-center justify-center w-[382px] h-[40px] border border-[#5EE2A0]/40 rounded-full font-haptik text-[14px] font-medium tracking-[0.15em] text-[#E4DBCD] hover:bg-[#E4DBCD]/5 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-auto flex flex-col gap-4 items-center pb-12">
                        <div
                            className="flex justify-center w-full"
                        >
                            <Link href="/get-started" onClick={() => setIsOpen(false)} className="w-[382px] h-[40px] bg-[#E4DBCD] text-[#183A39] rounded-full font-haptik text-[18px] tracking-wide shadow-lg flex items-center justify-center">
                                GET STARTED
                            </Link>
                        </div>

                        <div
                            className="flex justify-center w-full"
                        >
                            <Link href="/cart" onClick={() => setIsOpen(false)} className="w-[382px] h-[40px] bg-[#5EE2A0] text-[#183A39] rounded-full font-haptik text-[18px] tracking-wide shadow-lg flex items-center justify-center">
                                CART
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <ExploreMenu 
                isOpen={isExploreOpen} 
                onClose={() => setIsExploreOpen(false)} 
            />
        </motion.nav>
    );
}
