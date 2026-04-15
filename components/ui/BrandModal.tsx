"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  centered?: boolean;
}

export const BrandModal = ({ children, isOpen, onClose, centered = false }: ModalWrapperProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-end justify-center bg-black/40 p-2 backdrop-blur-sm sm:items-center sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex max-h-[94vh] w-full max-w-[800px] min-h-[500px] md:min-h-[600px] items-center justify-center overflow-hidden rounded-[24px] bg-[#E4DCCD] p-3 shadow-2xl sm:rounded-[32px] sm:p-6 lg:p-8"
          >
            {/* The decorative inner border */}
            <div className="pointer-events-none absolute inset-2 rounded-[18px] border border-[#BEB4A5]/60 sm:inset-4 sm:rounded-[28px]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-[110] text-[#183A39]/60 transition-colors hover:text-[#183A39] sm:right-6 sm:top-6"
            >
              <X size={20} className="sm:h-6 sm:w-6" />
            </button>

            {/* Inner Content Card */}
            <div
              className={`relative z-10 flex max-h-[calc(94vh-24px)] w-full max-w-[480px] flex-col overflow-y-auto rounded-[20px] bg-[#F4F1EA] p-8 shadow-sm sm:max-h-[calc(94vh-40px)] sm:rounded-[24px] md:p-10 ${
                centered ? "items-center justify-center text-center space-y-8" : "space-y-8"
              }`}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
