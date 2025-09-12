"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EarlyAccessModal from "./EarlyAccessModal/EarlyAccessModal";
import CalendlyModal from "./CalendlyModal/CalendlyModal";
import { useMobileMenu } from "../contexts/MobileMenuContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const { setIsMobileMenuOpen } = useMobileMenu();

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    setIsMobileMenuOpen(newMenuState);
  };

  const handleEarlyAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCalendlyModalClose = () => {
    setIsCalendlyModalOpen(false);
  };

  const handleWorkshopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCalendlyModalOpen(true);
  };

  const handleFormSubmit = (formData: { fullName: string; email: string; role: string; country: string; }) => {
    console.log("Early access form submitted:", formData);
    // Here you would typically send the data to your API
    // For now, we'll just log it and close the modal
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-center py-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-12">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={80}
              height={30}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block ml-12">
            <ul className="flex gap-12 text-primary text-md font-semibold items-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/science-says">Science Says..</Link></li>
              <li><Link target="_blank" rel="noopener noreferrer" href="https://amzn.in/d/5crg2K8">Get Nutriroo</Link></li>
              <li><button onClick={handleWorkshopClick} className="text-primary text-md cursor-pointer font-semibold">Workshop</button></li>

              {/* Early Access button */}
              <li onClick={handleEarlyAccessClick} className="relative bg-bright-teal ml-12 px-6 py-2 cursor-pointer font-semibold">
                <button className="text-white cursor-pointer">
                  Get Early Access
                </button>
                <Image
                  src="/three.png"
                  alt="Three Icon"
                  width={20}
                  height={20}
                  className="absolute -bottom-4 -right-5"
                />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Full Screen with Animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-bright-teal lg:hidden z-100 flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Close Button */}
            <motion.div 
              className="flex justify-end p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="p-2 text-primary"
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={32} />
              </motion.button>
            </motion.div>
            
            {/* Navigation Links */}
            <nav className="flex items-center justify-center">
              <motion.ul 
                className="flex flex-col gap-8 text-primary text-3xl font-bold text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link 
                    href="/" 
                    className="block py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link 
                    href="/about-us" 
                    className="block py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link 
                    href="/science-says" 
                    className="block py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Science Says..
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <Link 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://amzn.in/d/5crg2K8" 
                    className="block py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Nutriroo
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <button 
                    className="block py-4 text-primary text-3xl font-bold text-left"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCalendlyModalOpen(true);
                    }}
                  >
                    Workshop
                  </button>
                </motion.li>
                <motion.li 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  <button 
                    className="block py-4 text-primary text-3xl cursor-pointer font-bold"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                  >
                    Get Early Access
                  </button>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={handleCalendlyModalClose}
      />
    </header>
  );
}
