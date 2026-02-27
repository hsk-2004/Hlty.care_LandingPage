"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
    const socialIcons = [
        {
            name: "WhatsApp",
            href: "#",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "#",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
                </svg>
            ),
        },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full bg-[#183A39] text-[#F0EEE6] overflow-hidden"
        >
            {/* Mobile Top Decoration */}
            <div className="lg:hidden -mx-8 bg-[#F0EEE6]">
                <img
                    src="/f1 copy.svg"
                    alt="Footer top decoration"
                    className="w-full h-auto block"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-20">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
                >

                    {/* Left Block: Logo, Disclaimer, Copyright, Socials */}
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <img src="/logo.svg" alt="Hlty Beings" className="h-10 lg:h-12 w-auto" />
                            <div className="font-serif text-[28px] lg:text-[36px] leading-none flex items-baseline gap-2">
                                <span>Hlty</span>
                                <span className="italic font-normal opacity-90">Beings</span>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="font-serif text-[12px] lg:text-[14px] leading-relaxed opacity-80 max-w-sm lg:max-w-md">
                            Hlty Beings&apos; products and services are not intended to
                            substitute for professional medical guidance.
                            Our content, products and experiential offerings do not
                            aim to diagnose, cure, or address any medical issues.
                        </p>

                        {/* Copyright */}
                        <p className="font-serif text-[12px] lg:text-[14px] opacity-90">
                            © 2026 Hlty Beings
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6 lg:gap-8 pt-4">
                            {socialIcons.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ y: -3, opacity: 1 }}
                                    className="text-[#F0EEE6] opacity-80 transition-all font-sans"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Blocks: Navigation Sections */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:gap-24 w-full">
                        {/* Company Section */}
                        <div className="flex flex-col space-y-6 lg:space-y-8">
                            <h3 className="font-sans text-[14px] lg:text-[16px] font-medium uppercase tracking-[0.2em] text-[#F0EEE6]">
                                Company
                            </h3>
                            <nav className="flex flex-col space-y-4 lg:space-y-5">
                                {["Explore", "Body Galaxy", "Workshops", "Products", "For Parents", "Building Hlty Beings"].map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="font-serif text-[15px] lg:text-[18px] text-[#F0EEE6] opacity-80 hover:opacity-100 transition-all"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Legal Section */}
                        <div className="flex flex-col space-y-6 lg:space-y-8">
                            <h3 className="font-sans text-[14px] lg:text-[16px] font-medium uppercase tracking-[0.2em] text-[#F0EEE6]">
                                Legal
                            </h3>
                            <nav className="flex flex-col space-y-4 lg:space-y-5">
                                <a href="#" className="font-serif text-[15px] lg:text-[18px] text-[#F0EEE6] opacity-80 hover:opacity-100 transition-all">Privacy</a>
                                <a href="#" className="font-serif text-[15px] lg:text-[18px] text-[#F0EEE6] opacity-80 hover:opacity-100 transition-all">Terms</a>
                                <a href="#" className="flex items-center gap-3 font-serif text-[15px] lg:text-[18px] text-[#F0EEE6] opacity-80 hover:opacity-100 transition-all">
                                    <Mail size={18} />
                                    Contact Us
                                </a>
                            </nav>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Bottom Decoration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:hidden flex justify-center pb-12"
            >
                <img
                    src="/bottom.svg"
                    alt="Footer decoration"
                    className="w-[80%] h-auto"
                />
            </motion.div>
        </motion.footer>
    );
}
