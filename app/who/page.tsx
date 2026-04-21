import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/who/HeroSection';
import StatsSection from '@/components/sections/who/StatsSection';
import ProblemSection from '@/components/sections/who/ProblemSection';
import DemandsSection from '@/components/sections/who/DemandsSection';
import LetterSection from '@/components/sections/who/LetterSection';
import ShareSection from '@/components/sections/who/ShareSection';

export const metadata = {
  title: "Childhood Obesity Crisis & Policy Gap | Open Letter to WHO",
  description: "Join our open letter campaign to the WHO. We are demanding a dedicated SDG target for childhood obesity and expanded age coverage to protect 160 million children worldwide.",
};

export default function WhoPage() {
  return (
    <main className="min-h-screen bg-[#183a39]">
      <Navbar 
        variant="dark" 
        logoClassName="lg:-ml-2" 
        desktopBgColor="#183A39"
        logo="/footer-logo.svg" 
        mobileLogo="/logo_.svg" 
        textColor="#E4DBCD" 
        cartIcon="/get-started/cart.svg" 
        cartBgColor="#51D2A2"
        showGetStarted={true}
      />
      
      <div className="flex flex-col items-center relative w-full overflow-hidden">
        {/* Mobile layout */}
        <div className="lg:hidden w-full flex flex-col items-center pt-[120px] gap-[80px]">
          <HeroSection />
          <StatsSection />
          <ProblemSection />
          <DemandsSection />
          <LetterSection />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:relative lg:w-full">
          <HeroSection />
          <StatsSection />
          <ProblemSection />
          <DemandsSection />
          <LetterSection />
          <ShareSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
