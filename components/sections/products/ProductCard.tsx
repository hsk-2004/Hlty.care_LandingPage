"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    badge?: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col w-[180px] md:w-full md:max-w-[400px] mx-auto"
        >
            {/* Image Container (180x180 on mobile, 400x400 on desktop) */}
            <div className="relative w-full h-[180px] md:h-auto md:aspect-square overflow-hidden bg-[#5EE2A0] rounded-[7.2px] md:rounded-[16px] mb-1 md:mb-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-[7.2px] md:rounded-[16px] p-2 md:p-6 flex flex-col h-[138.2px] md:h-[293px] shadow-sm">
                <h3 className="font-jubilat font-normal text-[12px] md:text-[20px] lg:text-[24px] text-[#183A39] mb-1 md:mb-3 leading-[1.0] md:leading-[1.1]">
                    {product.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-1 md:mb-4">
                    <span className="w-[46.4px] h-[12px] md:w-auto md:h-auto px-1 md:px-3 rounded-full border border-[#183A39]/30 font-haptik-rotalic text-[8px] md:text-[10px] text-[#183A39] flex items-center justify-center">
                        6+ years
                    </span>
                    <span className="w-[46.4px] h-[12px] md:w-auto md:h-auto px-1 md:px-3 rounded-full border border-[#183A39]/30 font-haptik-rotalic text-[8px] md:text-[10px] text-[#183A39] flex items-center justify-center">
                        STEM
                    </span>
                    <span className="w-[46.4px] h-[12px] md:w-auto md:h-auto px-1 md:px-3 rounded-full border border-[#183A39]/30 font-haptik-rotalic text-[8px] md:text-[10px] text-[#183A39] flex items-center justify-center">
                        Health
                    </span>
                </div>

                <div className="mb-1 md:mb-4">
                    <span className="font-jubilat font-normal text-[14px] md:text-2xl text-[#183A39]">
                        ₹ {product.price.replace(/[^0-9.]/g, '')}
                    </span>
                </div>

                <p className="font-jubilat font-normal text-[8px] md:text-[13px] lg:text-[16px] text-[#183A39]/70 leading-[1.0] md:leading-[1.1] mb-2 md:mb-6">
                    A hands-on science experiment book that combines STEM + Health.
                </p>

                <div className="mt-auto">
                    <button className="w-[169.2px] h-[22.2px] md:w-full md:max-w-[376px] md:h-[49px] flex items-center justify-between px-3 md:px-6 rounded-full border border-[#183A39]/30 font-jubilat font-normal text-[8px] md:text-[14px] text-[#183A39] hover:bg-[#183A39] hover:text-white transition-all group/btn mx-auto">
                        <span className="md:inline">Add to Cart</span>
                        <div className="p-0">
                            <ShoppingCart size={10} className="md:scale-150" />
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
