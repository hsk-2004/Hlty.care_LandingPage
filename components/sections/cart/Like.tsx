"use client";

import React from 'react';
import ProductCard from '../products/ProductCard';

export default function Like() {
  const recommendations = [
    {
      id: 1,
      name: "Captain Experimentosaurus & the Body Galaxy",
      price: "₹ 1,199",
      category: "Education",
      image: "/parents/parent5.png"
    },
    {
      id: 2,
      name: "Captain Experimentosaurus & the Body Galaxy",
      price: "₹ 1,199",
      category: "Education",
      image: "/parents/parent3.png"
    },
    {
      id: 3,
      name: "Captain Experimentosaurus & the Body Galaxy",
      price: "₹ 1,199",
      category: "Education",
      image: "/parents/parent5.png"
    }
  ];

  return (
    <div className="w-full">
      <h2 className="font-jubilat text-[16px] md:text-[36px] xl:text-[36px] text-[#183A39] mb-12">You might also like</h2>

      <div className="relative">
        <div className="flex flex-nowrap overflow-x-auto pb-8 gap-2 md:gap-8 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[180px] md:w-[400px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-12">
        <button className="w-[83.75px] h-[24px] md:w-auto md:h-auto md:px-8 md:py-3 flex items-center justify-center text-[10px] md:text-base rounded-full border border-[#183A39] text-[#183A39] font-haptik font-medium hover:bg-[#183A39] hover:text-[#F0EEE6] transition-all">
          Show more
        </button>
      </div>
    </div>
  );
}
