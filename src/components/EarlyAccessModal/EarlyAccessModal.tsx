"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import EarlyAccessForm from "../EarlyAccessForm/EarlyAccessForm";

interface FormData {
  fullName: string;
  email: string;
  role: string;
  country: string;
}

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export default function EarlyAccessModal({ isOpen, onClose, onSubmit }: EarlyAccessModalProps) {
  const handleSubmit = async (formData: FormData) => {
    try {
      // Send data to API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
      
      // Call the parent's onSubmit handler
      onSubmit(formData);
      
      // Close the modal after successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-primary">
                  Get Early Access
                </h1>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} className="text-gray-500" />
                </motion.button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <EarlyAccessForm 
                  onSubmit={handleSubmit}
                  onClose={onClose}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
