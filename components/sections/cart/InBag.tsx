"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function InBag() {
  const cartItems = [
    {
      id: 1,
      name: "Captain Experimentosaurus & the Body Galaxy Mystery",
      price: 1199,
      quantity: 1,
      image: "/parents/parent5.png"
    },
    {
      id: 2,
      name: "Captain Experimentosaurus & the Body Galaxy Mystery",
      price: 1199,
      quantity: 1,
      image: "/parents/parent5.png"
    },
    {
      id: 3,
      name: "Captain Experimentosaurus & the Body Galaxy Mystery",
      price: 1199,
      quantity: 1,
      image: "/parents/parent5.png"
    }
  ];

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="bg-white/50 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 flex items-center justify-between mb-4 font-haptik font-bold text-[#183A39] text-[10px] md:text-base w-[382.03px] md:w-full xl:w-[840px]">
        <div className="flex-1 md:pl-4">Product</div>
        <div className="flex-[0.5] text-center">Quantity</div>
        <div className="flex-[0.4] text-center">Total</div>
        <div className="flex-[0.3] text-center">Delete</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-2">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg md:rounded-[24px] p-2 md:p-6 flex flex-row items-center justify-between gap-1 md:gap-6 shadow-sm border border-[#183A39]/5 w-[382.03px] h-[60.85px] md:w-full md:h-auto xl:w-[840px] xl:h-[153px]">
            {/* Product Info */}
            <div className="flex-1 flex items-center gap-2 md:gap-6">
              <div className="relative w-12 h-12 md:w-[129px] md:h-[129px] flex-shrink-0 bg-[#5CE1AC] rounded-md md:rounded-[16px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <h3 className="font-haptik font-medium text-[8px] md:text-[18px] xl:text-[20px] text-[#183A39] leading-tight max-w-[80px] md:max-w-[250px]">
                {item.name}
              </h3>
            </div>

            {/* Quantity Controls */}
            <div className="flex-[0.5] flex items-center justify-center gap-1 md:gap-4 xl:translate-x-5">
              <button className="w-4 h-4 md:w-8 md:h-8 rounded-full border border-[#183A39]/20 flex items-center justify-center hover:bg-[#183A39]/5 transition-colors">
                <Minus className="w-2 h-2 md:w-4 md:h-4 text-[#183A39]" />
              </button>
              <span className="font-haptik font-bold text-[10px] md:text-lg text-[#183A39] min-w-[10px] md:min-w-[20px] text-center">
                {item.quantity}
              </span>
              <button className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#FFA120] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Plus className="w-2 h-2 md:w-4 md:h-4 text-white" />
              </button>
            </div>

            {/* Total Price */}
            <div className="flex-[0.4] text-center font-haptik font-bold text-[10px] md:text-xl text-[#183A39] xl:translate-x-[10px]">
              ₹ {item.price.toLocaleString()}
            </div>

            {/* Delete Button */}
            <div className="flex-[0.3] flex justify-center">
              <button className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#FFA120] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Trash2 className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
