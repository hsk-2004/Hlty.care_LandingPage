"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PrivacyPolicy = () => {
  return (
    <div className={`min-h-screen bg-white text-primary ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="bg-soft-green py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Privacy Policy & Terms of Use
            </h1>
            <p className="text-lg sm:text-xl text-primary/80 mb-2">
              Last Updated: 28-05-2025
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                <div className="w-2 h-1 bg-[#6EBCC2] rounded-full"></div>
                <div className="w-1 h-1 bg-transparent"></div>
                <div className="w-2 h-1 bg-[#6EBCC2] rounded-full"></div>
                <div className="w-1 h-1 bg-transparent"></div>
                <div className="w-2 h-1 bg-[#6EBCC2] rounded-full"></div>
                <div className="w-1 h-1 bg-transparent"></div>
                <div className="w-2 h-1 bg-[#6EBCC2] rounded-full"></div>
                <div className="w-1 h-1 bg-transparent"></div>
                <div className="w-2 h-1 bg-[#6EBCC2] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to www.hlty.care. Your privacy and trust are of utmost importance to us. This Privacy Policy and Terms of Use outline the information we collect, how we use and protect it, and the terms governing your use of our website and services. By accessing or using our website and services, you consent to these terms and agree to be bound by them.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Privacy Policy</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information when you interact with our website, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
                  <li className="mb-2">
                    <strong>Personal Data:</strong> Name, email address, and contact information submitted through forms powered by third-party services like Framer Inc. and Formspark.
                  </li>
                  <li className="mb-2">
                    <strong>Technical Data:</strong> IP address, browser type, referring URLs, and activity on our website collected via cookies and tracking technologies.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This data is used to enhance your experience and improve our services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">2. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information collected is used to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">Operate and improve our website.</li>
                  <li className="mb-2">Personalize your experience.</li>
                  <li className="mb-2">Respond to inquiries and provide updates.</li>
                  <li className="mb-2">Communicate for customer service, promotional purposes, or newsletters (only if you opt-in).</li>
                  <li className="mb-2">Comply with legal obligations.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Sharing of Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell or trade your personal information. However, we may share it with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">
                    <strong>Service Providers:</strong> Such as Framer Inc. and Formspark, who help operate our business while adhering to strict confidentiality standards.
                  </li>
                  <li className="mb-2">
                    <strong>Law Enforcement:</strong> If required by applicable law.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Third-Party Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website integrates with third-party tools. Each has its own privacy policy. We recommend reviewing these policies:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">
                    <a href="https://framer.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6EBCC2] hover:underline">
                      https://framer.com/privacy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://formspark.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6EBCC2] hover:underline">
                      https://formspark.io/privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">5. User Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">Access and correct your personal data.</li>
                  <li className="mb-2">Withdraw your consent.</li>
                  <li className="mb-2">Request deletion of your data.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Contact us at <a href="mailto:hello@hlty.care" className="text-[#6EBCC2] hover:underline">hello@hlty.care</a> to exercise these rights.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">6. Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies to improve website functionality and user experience. You can manage cookie preferences via browser settings. By using our website, you consent to the use of cookies.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">7. Data Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We employ reasonable security measures to protect your personal data. However, no online transmission method is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">8. Changes to the Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy may be updated periodically. Updates will be posted on this page, with the &quot;Last Updated&quot; date revised. Significant changes will be communicated via email or website notifications.
                </p>
              </div>
            </div>

            {/* Refund and Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Refund and Cancellation Policy</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">For Products (Books):</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">
                    <strong>Refunds:</strong> Refunds are not allowed for books once purchased. Please review the product details carefully before completing your purchase.
                  </li>
                  <li className="mb-2">
                    <strong>Cancellations:</strong> Orders cannot be canceled once placed, as we begin processing immediately to ensure timely delivery.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">For Services:</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">
                    <strong>Refunds:</strong> No refunds are allowed for payments made for services.
                  </li>
                  <li className="mb-2">
                    <strong>Cancellations:</strong> Cancellation of services is not permitted under any circumstances.
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-gray-700 font-medium">
                  By completing a transaction on our website, you acknowledge and agree to this No Refund and No Cancellation Policy.
                </p>
              </div>
            </div>

            {/* Terms of Use */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Terms of Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">1. General Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using our website and services, you agree to the following:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">Provide accurate information during registration or interactions.</li>
                  <li className="mb-2">Accept that information on the website may contain inaccuracies; your use is at your own risk.</li>
                  <li className="mb-2">Acknowledge that website content and services are proprietary and cannot be claimed as your own.</li>
                  <li className="mb-2">Not use the website or services for unlawful activities.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Payment and Refund Policy</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">Payments must be made for availing services.</li>
                  <li className="mb-2">Refund claims are accepted only if services are not provided, within specified timelines. Refunds are not allowed outside stipulated periods.</li>
                  <li className="mb-2">Cancellation is not allowed.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Force Majeure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Neither party is liable for failure to perform obligations due to unforeseen events beyond their control.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">4. External Links</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. Once accessed, you are subject to their terms and policies.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">5. Dispute Resolution and Governing Law</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  <li className="mb-2">These Terms are governed by the laws of India.</li>
                  <li className="mb-2">Any disputes will fall under the exclusive jurisdiction of courts in Bangalore, Karnataka.</li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or concerns about this Privacy Policy or Terms of Use, contact us at:
              </p>
              <div className="bg-[#6EBCC2]/10 border border-[#6EBCC2]/20 rounded-lg p-6">
                <p className="text-primary font-semibold text-lg">
                  Email: <a href="mailto:hello@hlty.care" className="text-[#6EBCC2] hover:underline">hello@hlty.care</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <p className="text-gray-600 text-sm text-center">
                This revised structure ensures clarity and logical flow, making it easier for users to understand their rights and obligations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
