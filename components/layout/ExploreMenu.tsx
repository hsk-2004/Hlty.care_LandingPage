"use client";
 
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 
interface ExploreMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
 
const menuVariants: Variants = {
  initial: {
    clipPath: "circle(0% at 85% 5%)",
    opacity: 0,
  },
  animate: {
    clipPath: "circle(150% at 85% 5%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  exit: {
    clipPath: "circle(0% at 85% 5%)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
 
const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
 
export default function ExploreMenu({ isOpen, onClose }: ExploreMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-[#183A39] z-[120] overflow-y-auto"
        >
          {/* Header Mirroring Navbar */}
          <div className="flex justify-between items-center p-4 lg:py-6 lg:px-24">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <img 
                src="/explore-dropdown/edrop-logo.svg" 
                alt="Logo" 
                className="hidden lg:block w-[180px] h-[28px]" 
              />
              <img 
                src="/logo_.svg" 
                alt="Logo" 
                className="lg:hidden" 
                style={{ width: '46px', height: '35.86px' }} 
              />
            </Link>
 
            <motion.button 
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-[#F0EEE6] p-1 transition-colors"
            >
              <X size={32} strokeWidth={2.5} />
            </motion.button>
          </div>
 
          <section className="pt-10 lg:pt-20 pb-20 lg:pb-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
              
              {/* Left Column: Newsletter & Links */}
              <div className="space-y-8 lg:space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Newsletter Section */}
                <motion.div variants={itemVariants} className="space-y-2 lg:space-y-6 flex flex-col items-center lg:items-start">
                  <span className="font-haptik text-[8px] lg:text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                    Newsletter
                  </span>
                  
                  <h1 className="font-bitcountink text-[32px] lg:text-[80px] text-[#51D2A2] leading-none">
                    Hlty Bites
                  </h1>
                  
                  <p className="font-jubilat text-[14px] lg:text-[18px] text-[#F0EEE6] leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                    Writings about food, play, routines, and how habits form in real life 
                    for parents, educators, and anyone shaping childhood environments.
                  </p>
 
                  <div className="pt-1.5 lg:pt-4 w-full max-w-[280px] lg:max-w-md">
                    <div className="bg-[#F0EEE6] rounded-full p-0.5 pl-3 lg:pl-6 flex items-center justify-between border border-[#F0EEE6]/20">
                      <input 
                        type="email" 
                        placeholder="placeholder@email.com" 
                        className="bg-transparent border-none outline-none font-haptik text-[10px] lg:text-[14px] text-[#183A39] w-full placeholder:text-[#183A39]/40 rounded-full autofill:shadow-[inset_0_0_0_1000px_#F0EEE6] autofill:[-webkit-text-fill-color:#183A39]"
                      />
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#51D2A2] text-[#183A39] font-haptik font-medium px-3 lg:px-8 py-1.5 lg:py-3 rounded-full text-[10px] lg:text-[14px] hover:bg-[#5ee2a0] transition-colors shrink-0"
                      >
                        Subscribe
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
 
                {/* Links Section */}
                <div className="space-y-3 lg:space-y-1 text-[#F0EEE6] w-full max-w-md">
                  {[
                    { name: "BUILDING HLTY BEINGS", href: "/about" },
                    { name: "EVENTS", href: "#" },
                    { name: "CHARACTERS", href: "#" }
                  ].map((link, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      {/* Mobile Version: Pill Buttons */}
                      <Link 
                        href={link.href} 
                        onClick={onClose}
                        className="lg:hidden block w-full border border-[#F0EEE6]/20 rounded-full py-3 text-center group active:bg-[#F0EEE6]/10 transition-all"
                      >
                        <span className="font-haptik text-[12px] tracking-[0.12em] font-medium uppercase">
                          {link.name}
                        </span>
                      </Link>
 
                      {/* Desktop Version: List with Dividers */}
                      <div className="hidden lg:block">
                        <div className="h-[1px] w-full bg-[#F0EEE6]/10" />
                        <Link href={link.href} onClick={onClose} className="block group">
                          <div className="w-full py-6 flex items-center justify-between">
                            <span className="font-haptik text-[16px] tracking-[0.1em] font-medium group-hover:translate-x-3 group-hover:text-[#51D2A2] transition-all uppercase">
                              {link.name}
                            </span>
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-[#51D2A2]"
                            >
                              →
                            </motion.span>
                          </div>
                        </Link>
                        {i === 2 && <div className="h-[1px] w-full bg-[#F0EEE6]/10" />}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
 
              {/* Right Column: Featured Resources */}
              <motion.div 
                variants={itemVariants} 
                className="space-y-6 lg:space-y-8 mt-10 lg:mt-0"
              >
                <div className="flex flex-col space-y-2">
                  <span className="font-haptik text-[10px] lg:text-[12px] text-[#F0EEE6]/60 tracking-[0.2em] uppercase font-medium">
                    Featured Resources
                  </span>
                  <div className="h-[2px] w-12 bg-[#51D2A2]" />
                </div>
 
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center lg:justify-start rounded-2xl overflow-hidden"
                >
                  <Image 
                    src="/explore-dropdown/drop1.svg"
                    alt="Featured Resource"
                    width={597}
                    height={417}
                    className="w-full max-w-[597px] h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
 
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
