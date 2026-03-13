"use client";

import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
    className?: string;
}

export default function AddToCartButton({ className = "" }: AddToCartButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center gap-2 bg-[#183A39] text-[#F0EEE6] px-6 py-3 rounded-full font-haptik text-[14px] font-medium tracking-wide hover:bg-[#1a3636] transition-all shadow-md ${className}`}
        >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
        </motion.button>
    );
}
