"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <div className="text-[#1a3636] font-jubilat">
                {/* Hero Section */}
                <section className="bg-[#51D2A2] py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-normal text-[#1a3636] mb-6 leading-tight">
                                Privacy Policy &<br />Terms of Use
                            </h1>
                            <p className="text-lg font-haptik font-bold uppercase tracking-[0.2em] text-[#1a3636]/80 mb-8">
                                Last Updated: 28-05-2025
                            </p>
                            <div className="flex justify-center mt-4">
                                <div className="flex space-x-2">
                                    <div className="w-8 h-1 bg-[#6EBCC2] rounded-full opacity-60"></div>
                                    <div className="w-8 h-1 bg-[#6EBCC2] rounded-full opacity-40"></div>
                                    <div className="w-8 h-1 bg-[#6EBCC2] rounded-full opacity-20"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            className="space-y-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Introduction */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3636] mb-8">Introduction</h2>
                                <p className="text-[#2D4341] leading-relaxed mb-6 text-xl">
                                    Welcome to <span className="font-haptik font-bold">www.hlty.care</span>. Your privacy and trust are of utmost importance to us. This Privacy Policy and Terms of Use outline the information we collect, how we use and protect it, and the terms governing your use of our website and services. By accessing or using our website and services, you consent to these terms and agree to be bound by them.
                                </p>
                            </div>

                            {/* Privacy Policy */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3636] mb-10 border-b border-[#1a3636]/10 pb-4">Privacy Policy</h2>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">1. Information We Collect</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        We collect personal information when you interact with our website, including but not limited to:
                                    </p>
                                    <ul className="space-y-4 text-[#2D4341] leading-relaxed mb-6 text-xl list-none">
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span><strong className="text-[#1a3636] font-medium">Personal Data:</strong> Name, email address, and contact information submitted through forms powered by third-party services like Framer Inc. and Formspark.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span><strong className="text-[#1a3636] font-medium">Technical Data:</strong> IP address, browser type, referring URLs, and activity on our website collected via cookies and tracking technologies.</span>
                                        </li>
                                    </ul>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        This data is used to enhance your experience and improve our services.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">2. How We Use Your Information</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        The information collected is used to:
                                    </p>
                                    <ul className="space-y-3 text-[#2D4341] leading-relaxed text-xl list-none">
                                        {[
                                            "Operate and improve our website.",
                                            "Personalize your experience.",
                                            "Respond to inquiries and provide updates.",
                                            "Communicate for customer service, promotional purposes, or newsletters (only if you opt-in).",
                                            "Comply with legal obligations."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-[#6EBCC2]">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">3. Sharing of Information</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        We do not sell or trade your personal information. However, we may share it with:
                                    </p>
                                    <ul className="space-y-4 text-[#2D4341] leading-relaxed text-xl list-none">
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span><strong className="text-[#1a3636] font-medium">Service Providers:</strong> Such as Framer Inc. and Formspark, who help operate our business while adhering to strict confidentiality standards.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span><strong className="text-[#1a3636] font-medium">Law Enforcement:</strong> If required by applicable law.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">4. Third-Party Services</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        Our website integrates with third-party tools. Each has its own privacy policy. We recommend reviewing these policies:
                                    </p>
                                    <ul className="space-y-3 text-[#2D4341] leading-relaxed text-xl list-none">
                                        <li>
                                            <a href="https://framer.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6EBCC2] hover:underline flex items-center gap-2">
                                                <span className="text-sm">↗</span> framer.com/privacy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://formspark.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6EBCC2] hover:underline flex items-center gap-2">
                                                <span className="text-sm">↗</span> formspark.io/privacy
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">5. User Rights</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        You have the right to:
                                    </p>
                                    <ul className="space-y-3 text-[#2D4341] leading-relaxed text-xl list-none">
                                        {["Access and correct your personal data.", "Withdraw your consent.", "Request deletion of your data."].map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-[#6EBCC2]">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-[#2D4341] leading-relaxed mt-8 text-xl">
                                        Contact us at <a href="mailto:hello@hlty.care" className="text-[#6EBCC2] hover:underline font-bold">hello@hlty.care</a> to exercise these rights.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">6. Cookies and Tracking Technologies</h3>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        We use cookies to improve website functionality and user experience. You can manage cookie preferences via browser settings. By using our website, you consent to the use of cookies.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">7. Data Security</h3>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        We employ reasonable security measures to protect your personal data. However, no online transmission method is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">8. Changes to the Privacy Policy</h3>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        This Privacy Policy may be updated periodically. Updates will be posted on this page, with the &quot;Last Updated&quot; date revised. Significant changes will be communicated via email or website notifications.
                                    </p>
                                </div>
                            </div>

                            {/* Refund and Cancellation Policy */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3636] mb-10 border-b border-[#1a3636]/10 pb-4">Refund and Cancellation Policy</h2>

                                <div className="grid md:grid-cols-2 gap-12 mb-12">
                                    <div className="bg-white/50 p-8 rounded-3xl border border-[#1a3636]/5">
                                        <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">For Products (Books)</h3>
                                        <ul className="space-y-6 text-[#2D4341] leading-relaxed text-lg list-none">
                                            <li>
                                                <strong className="text-[#1a3636] block mb-2 font-medium">Refunds:</strong>
                                                Refunds are not allowed for books once purchased. Please review the product details carefully before completing your purchase.
                                            </li>
                                            <li>
                                                <strong className="text-[#1a3636] block mb-2 font-medium">Cancellations:</strong>
                                                Orders cannot be canceled once placed, as we begin processing immediately to ensure timely delivery.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/50 p-8 rounded-3xl border border-[#1a3636]/5">
                                        <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">For Services</h3>
                                        <ul className="space-y-6 text-[#2D4341] leading-relaxed text-lg list-none">
                                            <li>
                                                <strong className="text-[#1a3636] block mb-2 font-medium">Refunds:</strong>
                                                No refunds are allowed for payments made for services.
                                            </li>
                                            <li>
                                                <strong className="text-[#1a3636] block mb-2 font-medium">Cancellations:</strong>
                                                Cancellation of services is not permitted under any circumstances.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-[#6EBCC2]/10 border border-[#6EBCC2]/20 rounded-3xl p-8">
                                    <p className="text-[#1a3636] font-normal text-xl text-center">
                                        By completing a transaction on our website, you acknowledge and agree to this <span className="font-bold">No Refund and No Cancellation Policy</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Terms of Use */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3636] mb-10 border-b border-[#1a3636]/10 pb-4">Terms of Use</h2>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">1. General Terms</h3>
                                    <p className="text-[#2D4341] leading-relaxed mb-6 text-xl opacity-90">
                                        By using our website and services, you agree to the following:
                                    </p>
                                    <ul className="space-y-4 text-[#2D4341] leading-relaxed text-xl list-none">
                                        {[
                                            "Provide accurate information during registration or interactions.",
                                            "Accept that information on the website may contain inaccuracies; your use is at your own risk.",
                                            "Acknowledge that website content and services are proprietary and cannot be claimed as your own.",
                                            "Not use the website or services for unlawful activities."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-[#6EBCC2]">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">2. Payment and Refund Policy</h3>
                                    <ul className="space-y-4 text-[#2D4341] leading-relaxed text-xl list-none">
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span>Payments must be made for availing services.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span>Refund claims are accepted only if services are not provided, within specified timelines. Refunds are not allowed outside stipulated periods.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span>Cancellation is not allowed.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">3. Force Majeure</h3>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        Neither party is liable for failure to perform obligations due to unforeseen events beyond their control.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">4. External Links</h3>
                                    <p className="text-[#2D4341] leading-relaxed text-xl opacity-90">
                                        Our website may contain links to third-party websites. Once accessed, you are subject to their terms and policies.
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-lg font-bold text-[#1a3636] mb-6 font-haptik uppercase tracking-widest">5. Dispute Resolution and Governing Law</h3>
                                    <ul className="space-y-4 text-[#2D4341] leading-relaxed text-xl list-none">
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span>These Terms are governed by the laws of India.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[#6EBCC2]">•</span>
                                            <span>Any disputes will fall under the exclusive jurisdiction of courts in Bangalore, Karnataka.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="pt-8">
                                <div className="bg-[#1a3636] text-[#F0EEE6] rounded-3xl p-12 text-center">
                                    <h2 className="text-3xl sm:text-4xl font-normal mb-8 uppercase tracking-widest">Contact Us</h2>
                                    <p className="text-xl mb-8 opacity-80">
                                        For questions or concerns about this Privacy Policy or Terms of Use, contact us at:
                                    </p>
                                    <a
                                        href="mailto:hello@hlty.care"
                                        className="text-4xl lg:text-5xl font-normal text-[#51D2A2] hover:opacity-80 transition-opacity"
                                    >
                                        hello@hlty.care
                                    </a>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-[#1a3636]/5">
                                <p className="text-[#2D4341]/60 text-sm text-center font-haptik">
                                    © 2025 Hlty Beings. All rights reserved.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default PrivacyPolicy;