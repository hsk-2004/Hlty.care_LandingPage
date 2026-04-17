"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExploreDropdownPage() {
    const exploreLinks = [
        { name: "+ Explore", href: "/explore-dropdown" },
        { name: "Workshops", href: "/workshop" },
        { name: "Events", href: "/events" },
        { name: "For Parents", href: "/parents" },
        { name: "WHO LETTER", href: "#" }, // Adding as requested
    ];

    return (
        <main className="min-h-screen bg-[#183A39]">
            <Navbar 
                customLinks={exploreLinks} 
                textColor="#E4DBCD" 
                buttonColor="#51D2A2" 
                cartIcon="/explore-dropdown/cart-drop.svg"
                logo="/explore-dropdown/edrop-logo.svg"
                showClose={true}
            />
            
            <section className="pt-24 lg:pt-40 pb-20 lg:pb-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    
                    {/* Left Column: Newsletter & Links */}
                    <div className="space-y-8 lg:space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Newsletter Section */}
                        <div className="space-y-2 lg:space-y-6 flex flex-col items-center lg:items-start">
                            <span className="font-haptik text-[8px] lg:text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                                Newsletter
                            </span>
                            
                            <h1 className="font-bitcountink text-[32px] lg:text-[80px] text-[#51D2A2] leading-none">
                                Hlty Bites
                            </h1>
                            
                            <p className="font-jubilat text-[10px] lg:text-[18px] text-[#F0EEE6] leading-relaxed max-w-[260px] mx-auto lg:mx-0">
                                Writings about food, play, routines, and how habits form in real life 
                                for parents, educators, and anyone shaping childhood environments.
                            </p>

                            <div className="pt-1.5 lg:pt-4 w-full max-w-[280px] lg:max-w-md">
                                <div className="bg-[#F0EEE6] rounded-full p-0.5 pl-3 lg:pl-6 flex items-center justify-between border border-[#F0EEE6]/20">
                                    <input 
                                        type="email" 
                                        placeholder="name@email.com" 
                                        className="bg-transparent border-none outline-none font-haptik text-[10px] lg:text-[14px] text-[#183A39] w-full placeholder:text-[#183A39]/40"
                                    />
                                    <button className="bg-[#51D2A2] text-[#183A39] font-haptik font-medium px-3 lg:px-8 py-1.5 lg:py-3 rounded-full text-[10px] lg:text-[14px] hover:opacity-90 transition-colors shrink-0">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: Links as pills, Desktop: Links as list with dividers */}
                        <div className="space-y-3 lg:space-y-0 text-[#F0EEE6] w-full max-w-md">
                            {[
                                { name: "BUILDING HLTY BEINGS", href: "/about" },
                                { name: "EVENTS", href: "/events" },
                                { name: "CHARACTERS", href: "/character" }
                            ].map((link, i) => (
                                <div key={i}>
                                    {/* Mobile Version: Pill Buttons */}
                                    <Link 
                                        href={link.href} 
                                        className="lg:hidden block w-full border border-[#F0EEE6]/20 rounded-full py-3 text-center group active:bg-[#F0EEE6]/10 transition-all"
                                    >
                                        <span className="font-haptik text-[12px] tracking-[0.12em] font-medium uppercase">
                                            {link.name}
                                        </span>
                                    </Link>

                                    {/* Desktop Version: List with Dividers */}
                                    <div className="hidden lg:block">
                                        <div className="h-[1px] w-full bg-[#F0EEE6]/10" />
                                        <Link href={link.href} className="block group">
                                            <div className="w-full py-8 flex items-center justify-between">
                                                <span className="font-haptik text-[16px] tracking-[0.1em] font-medium group-hover:translate-x-2 transition-transform uppercase">
                                                    {link.name}
                                                </span>
                                            </div>
                                        </Link>
                                        {i === 2 && <div className="h-[1px] w-full bg-[#F0EEE6]/10" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Featured Resources */}
                    <div className="space-y-6 lg:space-y-8 mt-10 lg:mt-0">
                        <span className="font-haptik text-[10px] lg:text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                            Featured Resources
                        </span>

                        <div className="flex justify-center lg:justify-start">
                            <Image 
                                src="/explore-dropdown/drop1.svg"
                                alt="Featured Resource"
                                width={597}
                                height={417}
                                className="w-full max-w-[597px] h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <div className="hidden lg:block">
                <Footer />
            </div>
        </main>
    );
}
