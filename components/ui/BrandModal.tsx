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
        <div className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#E4DCCD] rounded-[32px] md:rounded-[40px] p-4 md:p-6 lg:p-8 flex items-center justify-center w-full max-w-[800px] min-h-[300px] md:min-h-[400px] shadow-2xl relative"
          >
            {/* The decorative inner border */}
            <div className="absolute inset-3 md:inset-5 border border-[#BEB4A5]/60 rounded-[20px] md:rounded-[32px] pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-8 right-8 text-[#183A39]/60 hover:text-[#183A39] transition-colors z-[110]"
            >
              <X size={24} />
            </button>

            {/* Inner Content Card */}
            <div className={`bg-[#F4F1EA] rounded-[24px] w-full max-w-[600px] p-6 md:p-10 flex flex-col shadow-sm relative z-10 ${centered ? 'items-center justify-center text-center' : ''}`}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
