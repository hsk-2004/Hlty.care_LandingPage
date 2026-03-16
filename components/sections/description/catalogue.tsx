"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Catalogue() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("/products/p1.png");

  const thumbnails = [
    "/products/p1.png",
    "/products/p2.png",
    "/products/p3.png",
    "/products/p4.png",
  ];

  return (
    <section className="bg-[#F0EEE6] min-h-screen py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#183A39] font-jubilat text-lg md:text-xl mb-8 hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
          Catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Image Section */}
          <div className="lg:col-span-12 xl:col-span-5 flex gap-4 bg-white rounded-[16px] p-6 shadow-sm h-fit w-full max-w-[378px] h-[326.6px] mx-auto md:mx-0 md:w-auto md:h-fit xl:w-[478px] xl:h-[413px]">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`w-16 h-16 md:w-20 md:h-20 xl:w-[66px] xl:h-[66px] rounded-2xl overflow-hidden border-2 transition-all ${activeImage === thumb ? "border-[#183A39]" : "border-transparent bg-[#E5E2D9]"
                    } ${idx % 2 === 1 ? "bg-[#52D1A2]" : "bg-[#E5E2D9]"}`}
                >
                  {/* For thumbnails in the mockup, they are solid colors or placeholders, 
                      but user asked to import images from products section */}
                  <div className="w-full h-full relative opacity-40">
                    <Image src={thumb} alt="thumb" fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#E5E2D9] rounded-[24px] overflow-hidden relative aspect-square lg:aspect-auto xl:w-[352px] xl:h-[365px]">
              <Image
                src={activeImage}
                alt="Product"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-[16px] p-4 md:p-10 shadow-sm w-full max-w-[382.13px] h-[227.41px] mx-auto md:mx-0 md:w-auto md:h-auto xl:w-[788px] xl:h-[413px] flex flex-col justify-end md:justify-center">
              <h1 className="font-jubilat text-[20px] md:text-[52px] xl:text-[52px] font-normal leading-[1.1] text-[#183A39] mb-2 w-[292px] h-[50px] md:w-auto md:h-auto">
                Captain Experimentosaurus <br />& the Body Galaxy Mystery
              </h1>

              <p className="font-haptik text-[12px] md:text-[15px] leading-tight md:leading-relaxed text-[#183A39] font-medium mb-4 max-w-[550px]">
                21 Fun Health & Nutrition Experiments for Kids (Ages 6+) | An Exciting Science Adventure That Teaches Kids How the Human Body Works
              </p>

              <div className="text-[20px] md:text-[40px] font-haptik text-[#183A39] mb-4 md:mb-10">
                ₹ 1,199
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between border-2 border-[#183A39] rounded-full px-2 md:px-4 py-1 md:py-2 w-[57.09px] h-[26.52px] md:w-32 md:h-auto">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#183A39] hover:opacity-50 transition-opacity"
                  >
                    <Minus className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </button>
                  <span className="font-haptik text-[10px] md:text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#183A39] hover:opacity-50 transition-opacity"
                  >
                    <Plus className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-[#F6921E] hover:bg-[#e0851a] text-white font-haptik font-bold text-[10px] md:text-lg w-[85.55px] h-[26.52px] md:w-auto md:h-auto md:px-10 md:py-3.5 rounded-full transition-colors shadow-sm flex items-center justify-center">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-[16px] p-6 shadow-sm xl:w-[788px] xl:h-[426px] overflow-y-auto no-scrollbar flex flex-col">
              <div className="mt-auto">
                <h2 className="font-haptik text-[14px] md:text-[18px] xl:text-[24px] font-medium tracking-widest text-[#183A39] mb-2 uppercase">
                  Description
                </h2>

                <div className="font-jubilat text-[10px] xl:text-[16px] leading-[1.3] text-[#183A39] space-y-1">
                  <p className="font-bold">The Greatest Science Lab Is Already Inside You!</p>
                  <p>
                    Why do we feel sleepy after junk food? Why do kids yawn after chips?
                    Why does your heart beat faster when you run?
                  </p>

                  <p>
                    Big discoveries always begin with small, curious questions and the best tool every young scientist has is curiosity.
                    Captain Experimentosaurus takes children on a journey into the most spectacular universe: the human body.
                  </p>

                  <div className="space-y-0.5">
                    <p className="font-medium">Packed with fun, safe, at-home experiments, this book shows children:</p>
                    <ul className="list-disc pl-5">
                      <li>Food becomes fuel</li>
                      <li>Water recharges every cell</li>
                      <li>Sleep repairs the brain and body</li>
                      <li>Movement builds strength, stamina, and confidence</li>
                    </ul>
                  </div>

                  <p>
                    With every experiment, kids learn to become healthier, braver, and more aware adventurers. This book transforms everyday moments into thrilling science adventures that build lifelong healthy habits.
                  </p>
                  <p>
                    Because tomorrow&apos;s health starts in today&apos;s hands (and in today&apos;s play).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
