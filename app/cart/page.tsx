import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InBag from '@/components/sections/cart/InBag';
import Like from '@/components/sections/cart/Like';
import { ArrowRight } from 'lucide-react';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="font-jubilat text-3xl md:text-[42px] xl:text-[36px] text-[#183A39] mb-12">In your Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Cart Area */}
          <div className="lg:col-span-8">
            <InBag />
          </div>
          
          {/* Summary Sidebar */}
          <div className="lg:col-span-4 h-fit flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="bg-white rounded-[32px] md:rounded-[24px] p-6 lg:p-8 shadow-sm border border-[#183A39]/5 w-[380.49px] h-[393.56px] xl:w-[426px] xl:h-[544px] flex flex-col xl:translate-x-10 mx-auto lg:mx-0">
              <h2 className="font-haptik font-bold text-[18px] md:text-2xl text-[#183A39] mb-4 xl:mb-8 text-center tracking-tight">ORDER SUMMARY</h2>
              
              {/* Promo Code */}
              <div className="mb-4 xl:mb-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter Promo Code"
                    className="w-full bg-white border border-[#183A39]/10 rounded-full py-3 md:py-4 px-6 font-haptik text-[#183A39] text-xs md:text-base focus:outline-none focus:border-[#FFA120] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 xl:space-y-4 font-haptik mb-4 xl:mb-6 text-xs md:text-base">
                <div className="flex justify-between items-center text-[#183A39]">
                  <span className="font-medium text-[14px] md:text-[16px]">Sub Total</span>
                  <span className="font-bold text-[14px] md:text-[16px]">₹ 1,199</span>
                </div>
                <div className="flex justify-between items-center text-[#183A39]">
                  <span className="font-medium text-[14px] md:text-[16px]">Discount (15%)</span>
                  <span className="font-bold text-[14px] md:text-[16px]">₹ 1,199</span>
                </div>
                <div className="flex justify-between items-center text-[#183A39]">
                  <span className="font-medium text-[14px] md:text-[16px]">Delivery Fee</span>
                  <span className="font-bold text-[14px] md:text-[16px]">₹ 1,199</span>
                </div>
              </div>
              
              <div className="border-t border-[#FFA120] pt-4 xl:pt-6 mb-4 xl:mb-8 flex justify-between items-center font-haptik text-[#183A39]">
                <span className="font-medium text-[16px] md:text-[18px]">Total</span>
                <span className="font-bold text-lg md:text-2xl">₹ 1,199</span>
              </div>
              
              <button className="w-full bg-[#FFA120] text-white py-3 md:py-4 rounded-full font-haptik font-bold text-sm md:text-lg flex items-center justify-between px-6 md:px-8 group hover:opacity-90 transition-all shadow-xl">
                <span>Checkout</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* You Might Also Like Area */}
        <div className="mt-16 md:mt-24">
          <Like />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
