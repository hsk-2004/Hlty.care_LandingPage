"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1 },
    }),
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-normal font-jubilat text-[#1a3636] mb-10 border-b border-[#1a3636]/10 pb-4">
        {children}
    </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-bold font-haptik text-[#1a3636] mb-6 uppercase tracking-widest">
        {children}
    </h3>
);

const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-[#2D4341] leading-relaxed text-xl opacity-90 ${className}`}>{children}</p>
);

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
    <ul className="space-y-4 text-[#2D4341] leading-relaxed text-xl list-none">
        {items.map((item, idx) => (
            <li key={idx} className="flex gap-3">
                <span className="text-[#6EBCC2] shrink-0">•</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const InfoTable = ({
    headers,
    rows,
}: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
}) => (
    <div className="overflow-x-auto rounded-2xl border border-[#1a3636]/10 mb-6">
        <table className="w-full text-sm text-[#2D4341]">
            <thead>
                <tr className="bg-[#1a3636]/5">
                    {headers.map((h, i) => (
                        <th key={i} className="text-left p-4 font-haptik font-bold uppercase tracking-widest text-[#1a3636] text-xs">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white/40" : "bg-transparent"}>
                        {row.map((cell, ci) => (
                            <td key={ci} className="p-4 align-top leading-relaxed">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const ContactCard = ({
    title,
    name,
    email,
    address,
    sla,
}: {
    title: string;
    name: string;
    email: string;
    address: string;
    sla: string;
}) => (
    <div className="bg-white/50 p-6 rounded-2xl border border-[#1a3636]/5 space-y-2">
        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#6EBCC2]">{title}</p>
        <p className="font-jubilat text-lg text-[#1a3636]">{name}</p>
        <a href={`mailto:${email}`} className="block text-[#6EBCC2] hover:underline text-sm">{email}</a>
        <p className="text-[#2D4341] text-sm leading-relaxed">{address}</p>
        <p className="text-[#2D4341]/60 text-xs">{sla}</p>
    </div>
);

const REGISTERED_ADDRESS = "A-301 Purva Panorama, Kalena Agrahara, Bannerghatta Road, Bangalore South, Karnataka 560076, India";

const PrivacyPolicy = () => {
    const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "refund">("privacy");

    const tabs: { id: "privacy" | "terms" | "refund"; label: string }[] = [
        { id: "privacy", label: "Privacy Policy" },
        { id: "terms", label: "Terms of Use" },
        { id: "refund", label: "Refund & Cancellation" },
    ];

    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar
                variant="dark"
                logoClassName="lg:-ml-2"
                bgTransparent
                logo="/footer-logo.svg"
                mobileLogo="/logo_.svg"
                textColor="#E4DBCD"
                cartIcon="/get-started/cart.svg"
                showGetStarted
                cartBgColor="#51D2A2"
                buttonColor="#51D2A2"
            />

            <div className="text-[#1a3636] font-jubilat">
                {/* Hero */}
                <section className="bg-[#183A39] py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-normal font-jubilat text-[#E4DBCD] mb-6 leading-tight">
                                Privacy Policy,<br />Terms & Refund
                            </h1>
                            <p className="text-sm font-haptik font-bold uppercase tracking-[0.2em] text-[#E4DBCD]/60 mb-2">
                                VOS Health and Life Solutions Private Limited (Hlty Beings)
                            </p>
                            <p className="text-sm font-haptik font-bold uppercase tracking-[0.2em] text-[#E4DBCD]/80 mb-2">
                                Last Updated: 13 April 2026 &nbsp;·&nbsp; Effective Date: 13 April 2026
                            </p>
                            <p className="text-sm font-haptik uppercase tracking-[0.15em] text-[#E4DBCD]/50 mb-8">
                                Jurisdiction: Bangalore, Karnataka, India &nbsp;·&nbsp; CIN: U86909KA2023PTC181856
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

                {/* Tab Nav */}
                <div className="relative z-40 bg-[#F0EEE6] border-b border-[#1a3636]/10">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex gap-0 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 text-sm font-haptik font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id
                                            ? "border-[#51D2A2] text-[#1a3636]"
                                            : "border-transparent text-[#1a3636]/50 hover:text-[#1a3636]"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            key={activeTab}
                            className="space-y-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            {/* ── PRIVACY POLICY ── */}
                            {activeTab === "privacy" && (
                                <>
                                    <div>
                                        <SectionTitle>Part I: Privacy Policy</SectionTitle>
                                        <p className="text-xs font-haptik uppercase tracking-widest text-[#6EBCC2] mb-4">Compliant with Digital Personal Data Protection Act, 2023 (DPDP Act)</p>
                                        <Body>
                                            Welcome to <strong>www.hlty.care</strong>. VOS Health and Life Solutions Private Limited ("Hlty Beings," "we," "our," or "us") operates this website, providing educational health experiences, books, and workshops for children and families. Your privacy and trust are of utmost importance to us.
                                        </Body>
                                    </div>

                                    {/* 1. Legal Basis */}
                                    <div>
                                        <SubTitle>1. Introduction & Legal Basis</SubTitle>
                                        <BulletList items={[
                                            <><strong>Legal Basis:</strong> We process personal data based on consent (Section 4, DPDP Act) or legitimate uses (Section 7, DPDP Act). By using our Website and explicitly consenting via the checkbox at signup/checkout, you consent to this Privacy Policy.</>,
                                            <><strong>Digital Data Fiduciary:</strong> We qualify as a Significant Data Fiduciary under Section 10, DPDP Act, as we process children's personal data (grades 4–7) and health-related data.</>,
                                        ]} />
                                    </div>

                                    {/* 2. Data We Collect */}
                                    <div>
                                        <SubTitle>2. Information We Collect & Purpose</SubTitle>
                                        <InfoTable
                                            headers={["Data Category", "Specific Purpose", "Legal Basis", "Retention Period"]}
                                            rows={[
                                                ["Identity: Name, email, phone", "Order fulfillment, workshop registration", "Consent / Contract", "5 years from last transaction"],
                                                ["Child's Data: Name, age, school, health info (allergies)", "Workshop safety, age-appropriate content", "Verifiable Parental Consent (Section 9)", "Until child turns 18, then 3 years"],
                                                ["Payment Data: UPI/Card details (tokenized)", "Transaction processing", "Legitimate Use", "7 years per RBI requirements"],
                                                ["Technical: IP address, browser, cookies", "Website security, analytics", "Consent (cookies); Legitimate Use (security)", "1 year for logs"],
                                                ["Communication: Emails, WhatsApp", "Customer support", "Consent", "3 years from resolution"],
                                            ]}
                                        />
                                    </div>

                                    {/* 3. Children's Data */}
                                    <div>
                                        <SubTitle>3. Children's Data Protection (Section 9, DPDP Act)</SubTitle>
                                        <Body className="mb-6">We serve children (grades 4–7) with verifiable parental consent:</Body>
                                        <BulletList items={[
                                            <><strong>Age Verification:</strong> Parents/guardians provide contact details and verify identity via OTP to registered mobile/email before any child's data is collected.</>,
                                            <><strong>Parental Consent:</strong> No data collected from children without affirmative consent from a verified parent/guardian.</>,
                                            <><strong>Processing Restrictions:</strong> We do not track children's behaviour for advertising or profiling.</>,
                                            <><strong>Breach Notification:</strong> Parents notified within 24 hours of any breach affecting children's data.</>,
                                        ]} />
                                        <Body className="mt-6">Guardian's Rights: Parents may review, correct, or delete their child's data by contacting our DPO at <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>.</Body>
                                    </div>

                                    {/* 4. Cross-Border */}
                                    <div>
                                        <SubTitle>4. Cross-Border Data Transfers</SubTitle>
                                        <Body className="mb-4">All transfers comply with Section 16, DPDP Act. Data principals may request copies of SCCs by emailing <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>.</Body>
                                        <InfoTable
                                            headers={["Service", "Location", "Data Transferred", "Safeguard"]}
                                            rows={[
                                                ["Framer Inc.", "United States", "Website hosting, form data", "Standard Contractual Clauses (SCCs)"],
                                                ["Formspark", "EU / United States", "Form submissions", "SCCs with adequacy assessment"],
                                            ]}
                                        />
                                        <div className="mt-4">
                                            <Body className="mb-2">Review their privacy policies:</Body>
                                            <ul className="space-y-2 text-[#6EBCC2] text-xl">
                                                <li><a href="https://framer.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2"><span className="text-sm">↗</span> framer.com/privacy</a></li>
                                                <li><a href="https://formspark.io/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2"><span className="text-sm">↗</span> formspark.io/privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 5. Rights */}
                                    <div>
                                        <SubTitle>5. Your Rights as a Data Principal (Sections 11–14, DPDP Act)</SubTitle>
                                        <InfoTable
                                            headers={["Right", "How to Exercise", "Timeline"]}
                                            rows={[
                                                ["Access", <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>, "30 days"],
                                                ["Correction", <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>, "15 days"],
                                                ["Deletion", <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>, "30 days"],
                                                ["Nomination", "Email dpo@hlty.care with nominee details", "Immediate"],
                                                ["Grievance Redressal", <a href="mailto:grievance@hlty.care" className="text-[#6EBCC2] hover:underline">grievance@hlty.care</a>, "48 hrs acknowledgment; 30 days resolution"],
                                                ["Consent Withdrawal", <a href="mailto:dpo@hlty.care" className="text-[#6EBCC2] hover:underline">dpo@hlty.care</a>, "Immediate for future processing"],
                                            ]}
                                        />
                                    </div>

                                    {/* 6. Officers */}
                                    <div>
                                        <SubTitle>6. Officers & Contact</SubTitle>
                                        <p className="text-xs font-haptik text-[#2D4341]/60 mb-6 italic">In accordance with startup operational efficiency, the same individual currently holds multiple statutory officer roles as permitted under DPDP Act and CPA 2019.</p>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <ContactCard title="Data Protection Officer (DPO)" name="Suraj Prasad" email="dpo@hlty.care" address={REGISTERED_ADDRESS} sla="48 hours response" />
                                            <ContactCard title="Grievance Officer" name="Suraj Prasad" email="grievance@hlty.care" address={REGISTERED_ADDRESS} sla="48 hrs acknowledgment; 30 days resolution" />
                                            <ContactCard title="Nodal Officer (E-Commerce)" name="Suraj Prasad" email="nodal@hlty.care" address={REGISTERED_ADDRESS} sla="48 hrs acknowledgment; 30 days resolution" />
                                        </div>
                                    </div>

                                    {/* 7. Security */}
                                    <div>
                                        <SubTitle>7. Data Security & Breach Notification</SubTitle>
                                        <Body className="mb-4"><strong>Security:</strong> Encryption (AES-256), access controls, regular audits.</Body>
                                        <Body className="mb-2"><strong>Breach Protocol:</strong> In case of a personal data breach, we notify:</Body>
                                        <BulletList items={[
                                            "Data Protection Board of India within 72 hours",
                                            "Affected Data Principals within 72 hours",
                                            "Parents/Guardians within 24 hours (if children affected)",
                                        ]} />
                                    </div>

                                    {/* 8. Cookies */}
                                    <div>
                                        <SubTitle>8. Cookies and Tracking Technologies</SubTitle>
                                        <Body>
                                            We use cookies to improve website functionality and analytics. A cookie consent banner is displayed on your first visit — non-essential cookies (analytics) are only activated after your explicit acceptance. You can manage cookie preferences at any time via your browser settings.
                                        </Body>
                                    </div>

                                    {/* 9. Changes */}
                                    <div>
                                        <SubTitle>9. Changes to this Privacy Policy</SubTitle>
                                        <Body>Updates are posted here with the "Last Updated" date revised. Significant changes will be communicated via email 7 days in advance.</Body>
                                    </div>
                                </>
                            )}

                            {/* ── TERMS OF USE ── */}
                            {activeTab === "terms" && (
                                <>
                                    <div>
                                        <SectionTitle>Part II: Terms of Use</SectionTitle>
                                        <p className="text-xs font-haptik uppercase tracking-widest text-[#6EBCC2] mb-4">Compliant with Consumer Protection Act 2019 & E-Commerce Rules 2020</p>
                                    </div>

                                    {/* Business Info */}
                                    <div>
                                        <SubTitle>1. Business Information</SubTitle>
                                        <div className="bg-white/50 rounded-2xl border border-[#1a3636]/5 p-6 space-y-2 text-[#2D4341] text-lg">
                                            <p><strong className="text-[#1a3636]">Legal Name:</strong> VOS Health and Life Solutions Private Limited</p>
                                            <p><strong className="text-[#1a3636]">CIN:</strong> U86909KA2023PTC181856</p>
                                            <p><strong className="text-[#1a3636]">Trade Name:</strong> Hlty Beings</p>
                                            <p><strong className="text-[#1a3636]">Registered Address:</strong> {REGISTERED_ADDRESS}</p>
                                            <p><strong className="text-[#1a3636]">Contact:</strong>{" "}
                                                <a href="mailto:hello@hlty.care" className="text-[#6EBCC2] hover:underline">hello@hlty.care</a> &nbsp;|&nbsp;
                                                <a href="mailto:grievance@hlty.care" className="text-[#6EBCC2] hover:underline">grievance@hlty.care</a> &nbsp;|&nbsp;
                                                <a href="mailto:nodal@hlty.care" className="text-[#6EBCC2] hover:underline">nodal@hlty.care</a>
                                            </p>
                                            <p><strong className="text-[#1a3636]">Website:</strong> <a href="https://www.hlty.care" className="text-[#6EBCC2] hover:underline">www.hlty.care</a></p>
                                        </div>
                                    </div>

                                    {/* General */}
                                    <div>
                                        <SubTitle>2. General Terms</SubTitle>
                                        <Body className="mb-4">By using our website and services, you agree to:</Body>
                                        <BulletList items={[
                                            "Provide accurate information during registration or interactions.",
                                            "Accept that information on the website may contain inaccuracies; your use is at your own risk.",
                                            "Acknowledge that website content and services are proprietary and cannot be claimed as your own.",
                                            "Not use the website or services for unlawful activities.",
                                        ]} />
                                    </div>

                                    {/* Checkout */}
                                    <div>
                                        <SubTitle>3. Checkout Consent</SubTitle>
                                        <Body>At checkout, you will be asked to confirm: <em>"I agree to the Privacy Policy and Terms of Use and confirm I am the legal guardian of the registered child."</em> This explicit checkbox consent is required to complete any purchase or registration involving a child's data.</Body>
                                    </div>

                                    {/* Payment */}
                                    <div>
                                        <SubTitle>4. Payment Terms</SubTitle>
                                        <BulletList items={[
                                            "Methods: UPI, Cards, Net Banking, Wallets (RBI-compliant gateways only)",
                                            "Currency: INR only",
                                            "Taxes: GST 18% included where applicable; invoices provided within 24 hours to registered email",
                                            "Failed Payments: 3 retry attempts; order auto-cancelled after 24 hours of pending payment",
                                        ]} />
                                    </div>

                                    {/* Force Majeure */}
                                    <div>
                                        <SubTitle>5. Force Majeure</SubTitle>
                                        <Body className="mb-4">Neither party is liable for failure to perform obligations due to: acts of God, government lockdowns, pandemic restrictions, internet failures, or strikes.</Body>
                                        <BulletList items={[
                                            "Products: Refund or reshipment at our cost when feasible",
                                            "Services: Rescheduling or full refund (your choice)",
                                        ]} />
                                    </div>

                                    {/* External Links */}
                                    <div>
                                        <SubTitle>6. External Links</SubTitle>
                                        <Body>Our website may contain links to third-party websites. Once accessed, you are subject to their terms and policies. We are not responsible for third-party content.</Body>
                                    </div>

                                    {/* Dispute */}
                                    <div>
                                        <SubTitle>7. Dispute Resolution & Governing Law</SubTitle>
                                        <Body className="mb-4"><strong>Governing Law:</strong> Laws of India — Consumer Protection Act 2019, DPDP Act 2023, Contract Act 1872.</Body>
                                        <BulletList items={[
                                            <><strong>Step 1 — Amicable Resolution:</strong> Contact Grievance Officer Suraj Prasad at <a href="mailto:grievance@hlty.care" className="text-[#6EBCC2] hover:underline">grievance@hlty.care</a> (48-hour response).</>,
                                            <><strong>Step 2 — Consumer Court:</strong> File complaint at Consumer Helpline 1915 or District Consumer Disputes Redressal Commission, Bangalore.</>,
                                            <><strong>Step 3 — Arbitration:</strong> For commercial disputes above ₹5 lakhs, arbitration in Bangalore under the Indian Arbitration Act.</>,
                                        ]} />
                                        <Body className="mt-4"><strong>Jurisdiction:</strong> Courts at Bangalore, Karnataka.</Body>
                                    </div>

                                    {/* Nodal */}
                                    <div>
                                        <SubTitle>8. Nodal Officer (E-Commerce Rules 2020)</SubTitle>
                                        <ContactCard title="Nodal Officer" name="Suraj Prasad" email="nodal@hlty.care" address={REGISTERED_ADDRESS} sla="48 hrs acknowledgment; 30 days resolution" />
                                    </div>

                                    {/* Changes */}
                                    <div>
                                        <SubTitle>9. Changes to Terms</SubTitle>
                                        <Body>Updates posted with 7-day advance notice for material changes. Continued use after changes constitutes acceptance.</Body>
                                    </div>
                                </>
                            )}

                            {/* ── REFUND & CANCELLATION ── */}
                            {activeTab === "refund" && (
                                <>
                                    <div>
                                        <SectionTitle>Refund & Cancellation Policy</SectionTitle>
                                    </div>

                                    {/* Books */}
                                    <div>
                                        <SubTitle>1. Products — Books & Physical Goods</SubTitle>

                                        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-3">Cancellation Rights</p>
                                        <InfoTable
                                            headers={["Stage", "Your Right", "Action"]}
                                            rows={[
                                                ["Before Dispatch", "Full cancellation without charges", "Email hello@hlty.care within 2 hours of order confirmation (9 AM–6 PM IST)"],
                                                ["After Dispatch", "No cancellation", "Delivery attempted; return governed by Refund Policy below"],
                                            ]}
                                        />

                                        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-3 mt-8">Refund Scenarios</p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                {
                                                    label: "A — Defective / Damaged / Wrong Product",
                                                    items: ["Report within 48 hours of delivery with photos.", "Full refund or replacement within 7–10 business days.", "Return pickup arranged by us at no cost to you."],
                                                },
                                                {
                                                    label: "B — Non-Delivery",
                                                    items: ["If not delivered within 7 days of promised date: automatic full refund without needing a request."],
                                                },
                                                {
                                                    label: "C — Change of Mind (No Defect)",
                                                    items: ["Digital Products: No refund once downloaded/accessed.", "Physical Books: No refund if delivered as described, unless returned unopened within 7 days (reverse logistics at your cost)."],
                                                },
                                                {
                                                    label: "D — Cancellation by Us",
                                                    items: ["Stock issues: Full refund + 10% inconvenience credit within 3–5 business days.", "Post-dispatch cancellation: We bear all return shipping costs."],
                                                },
                                            ].map((s) => (
                                                <div key={s.label} className="bg-white/50 p-6 rounded-2xl border border-[#1a3636]/5">
                                                    <p className="font-haptik font-bold text-sm text-[#1a3636] mb-3 uppercase tracking-wide">{s.label}</p>
                                                    <ul className="space-y-2 text-[#2D4341] text-base leading-relaxed">
                                                        {s.items.map((i, idx) => (
                                                            <li key={idx} className="flex gap-2"><span className="text-[#6EBCC2] shrink-0">•</span><span>{i}</span></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Services / Workshops */}
                                    <div>
                                        <SubTitle>2. Services — Workshops & Digital Experiences</SubTitle>

                                        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-3">Cancellation by You</p>
                                        <InfoTable
                                            headers={["Notice Period", "Refund Amount", "Credit Option"]}
                                            rows={[
                                                ["More than 7 days before workshop", "100% refund or 110% credit", "Valid 6 months"],
                                                ["3–7 days before workshop", "50% refund or 75% credit", "Valid 6 months"],
                                                ["Less than 48 hours", "No refund", "50% credit (transferable to sibling/friend)"],
                                                ["No-show", "No refund", "No credit"],
                                            ]}
                                        />

                                        <Body className="mb-4">
                                            <strong>Transfer Rights:</strong> You may transfer your seat to another child (same age group) at any time before the workshop starts at no charge. Email <a href="mailto:hello@hlty.care" className="text-[#6EBCC2] hover:underline">hello@hlty.care</a> with new attendee details.
                                        </Body>

                                        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-3 mt-6">Cancellation by Us</p>
                                        <BulletList items={[
                                            "Full refund within 5–7 business days if we cancel due to unforeseen circumstances, instructor illness, or minimum participant threshold (8 children) not met.",
                                            "Rescheduling option offered first; if declined, refund processed.",
                                        ]} />

                                        <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-3 mt-6">Service Deficiency</p>
                                        <Body className="mb-4">If workshop quality is deficient (materials missing, instructor no-show, time shortened):</Body>
                                        <BulletList items={[
                                            "Pro-rata refund for undelivered portion, or",
                                            "Free re-attendance at the next available slot.",
                                        ]} />
                                    </div>

                                    {/* Subscriptions */}
                                    <div>
                                        <SubTitle>3. Digital Subscriptions (₹99/Year)</SubTitle>
                                        <BulletList items={[
                                            "Cancel anytime before renewal date; access continues until period end.",
                                            "Mid-term cancellation: No pro-rata refund for partial year.",
                                            "Technical Failure: If service is inaccessible for more than 48 hours due to our fault, a pro-rata extension is granted.",
                                        ]} />
                                    </div>

                                    {/* Acknowledgment */}
                                    <div className="bg-[#6EBCC2]/10 border border-[#6EBCC2]/20 rounded-3xl p-8">
                                        <p className="text-[#1a3636] font-normal text-xl text-center">
                                            By completing a transaction on our website, you acknowledge and agree to this Refund & Cancellation Policy and our full <span className="font-bold">Terms of Use</span>.
                                        </p>
                                    </div>
                                </>
                            )}

                            {/* Contact */}
                            <div className="pt-8">
                                <div className="bg-[#1a3636] text-[#E4DBCD] rounded-3xl p-12">
                                    <h2 className="text-3xl sm:text-4xl font-normal font-jubilat mb-6 uppercase tracking-widest text-center">Contact Us</h2>
                                    <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm text-[#E4DBCD]/80">
                                        {[
                                            { purpose: "General Queries", email: "hello@hlty.care", sla: "24 hours" },
                                            { purpose: "Data Privacy (DPDP)", email: "dpo@hlty.care", sla: "48 hours" },
                                            { purpose: "Grievances (Products/Services)", email: "grievance@hlty.care", sla: "48 hrs ack; 30 days resolution" },
                                            { purpose: "E-Commerce / Nodal Officer", email: "nodal@hlty.care", sla: "48 hrs ack; 30 days resolution" },
                                        ].map((c) => (
                                            <div key={c.email} className="bg-white/5 rounded-xl p-4">
                                                <p className="font-haptik uppercase tracking-widest text-xs text-[#6EBCC2] mb-1">{c.purpose}</p>
                                                <a href={`mailto:${c.email}`} className="text-[#51D2A2] hover:underline font-bold">{c.email}</a>
                                                <p className="text-[#E4DBCD]/50 text-xs mt-1">{c.sla}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[#E4DBCD]/60 text-sm mb-2">National Consumer Helpline</p>
                                        <p className="text-3xl font-jubilat text-[#51D2A2]">1915</p>
                                    </div>
                                    <p className="text-[#E4DBCD]/40 text-xs text-center mt-6">{REGISTERED_ADDRESS}</p>
                                </div>
                            </div>

                            {/* Acknowledgment */}
                            <div className="bg-[#1a3636]/5 rounded-2xl p-8">
                                <p className="font-haptik font-bold text-xs uppercase tracking-widest text-[#1a3636] mb-4">Acknowledgment</p>
                                <BulletList items={[
                                    "You have read this Privacy Policy and Terms of Use.",
                                    "You consent to data processing as described herein.",
                                    "If registering a child, you are the legal parent/guardian with authority to provide consent.",
                                    "You understand your statutory rights under Indian consumer and data protection laws.",
                                ]} />
                            </div>

                            <div className="pt-12 border-t border-[#1a3636]/5">
                                <p className="text-[#2D4341]/60 text-sm text-center font-haptik">
                                    © 2026 VOS Health and Life Solutions Private Limited (Hlty Beings). All Rights Reserved.
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