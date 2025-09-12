"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only show popup on desktop after 10 seconds
    // This effect only runs when the component mounts (page load/reload/redirect)
    const isMobileDevice = window.innerWidth < 1024;
    
    if (!isMobileDevice) {
      // Check if popup was shown in the last 5 minutes
      const lastShown = localStorage.getItem('homePopupLastShown');
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
      
      if (!lastShown || (now - parseInt(lastShown)) > fiveMinutes) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          // Store the time when popup was shown
          localStorage.setItem('homePopupLastShown', now.toString());
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
      }
    }
  }, []); // Empty dependency array - only runs once on mount

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Don't render on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            style={{ opacity: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          />
          
          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute -top-2 -right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} className="text-gray-600" />
              </motion.button>

              {/* Popup Image */}
              <Link href="/quiz" onClick={handleClose}>
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src="/images/home/popup.png"
                    alt="Quiz Popup"
                    width={600}
                    height={400}
                    className="rounded-2xl"
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
