"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    // Here you would typically initialize analytics (e.g., GTM, GA4)
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 lg:p-8 pointer-events-none"
        >
          <div className="max-w-[1200px] mx-auto bg-[#183A39] border border-[#5DE2A2]/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto overflow-hidden relative">
            {/* Subtle background decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5DE2A2] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex-1 space-y-2 relative z-10">
              <h3 className="font-jubilat text-xl md:text-2xl text-[#5DE2A2] font-medium tracking-tight">
                Our cookie policy
              </h3>
              <p className="font-jubilat text-[14px] md:text-[15px] text-[#F0EEE6]/80 leading-relaxed max-w-2xl">
                We use cookies to improve your experience and analyze website traffic. By clicking "Accept All", you agree to our website's cookie use as described in our Privacy Policy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
              <button
                onClick={handleDecline}
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#F0EEE6]/30 text-[#F0EEE6] font-haptik font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-[#F0EEE6]/10 transition-all duration-300"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#5DE2A2] text-[#183A39] font-haptik font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-[#4cc58d] transition-all duration-300 shadow-lg shadow-[#5DE2A2]/10 active:scale-[0.98]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
