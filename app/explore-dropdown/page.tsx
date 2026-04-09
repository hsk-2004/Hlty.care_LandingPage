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
            />
            
            <section className="pt-40 pb-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Left Column: Newsletter & Links */}
                    <div className="space-y-12">
                        {/* Newsletter Section */}
                        <div className="space-y-6">
                            <span className="font-haptik text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                                Newsletter
                            </span>
                            
                            <h1 className="font-bitcountink text-[64px] md:text-[80px] text-[#51D2A2] leading-none">
                                Hlty Bites
                            </h1>
                            
                            <p className="font-jubilat text-[18px] text-[#F0EEE6] leading-relaxed max-w-md">
                                Writings about food, play, routines, and how habits form in real life 
                                for parents, educators, and anyone shaping childhood environments.
                            </p>

                            <div className="pt-4">
                                <div className="bg-[#F0EEE6] rounded-full p-1 pl-6 flex items-center justify-between max-w-md border border-[#F0EEE6]/20">
                                    <input 
                                        type="email" 
                                        placeholder="name@email.com" 
                                        className="bg-transparent border-none outline-none font-haptik text-[14px] text-[#183A39] w-full placeholder:text-[#183A39]/40"
                                    />
                                    <button className="bg-[#51D2A2] text-[#183A39] font-haptik font-medium px-8 py-3 rounded-full hover:opacity-90 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-0 text-[#F0EEE6]">
                            {[
                                { name: "BUILDING HLTY BEINGS", href: "/about" },
                                { name: "EVENTS", href: "#" },
                                { name: "HLTY UNIVERSE", href: "#" }
                            ].map((link, i) => (
                                <div key={i}>
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
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Featured Resources */}
                    <div className="space-y-8">
                        <span className="font-haptik text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                            Featured Resources
                        </span>

                        <Image 
                            src="/explore-dropdown/drop1.svg"
                            alt="Featured Resource"
                            width={597}
                            height={417}
                            className="w-full lg:w-[597px] h-auto lg:h-[417px] object-contain"
                        />
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
