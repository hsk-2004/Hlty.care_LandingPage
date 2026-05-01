import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/about/HeroSection";
import MissionSection from "@/components/sections/about/MissionSection";
import BehindTheScenesSection from "@/components/sections/about/BehindTheScenesSection";
import AdvisorsSection from "@/components/sections/about/AdvisorsSection";
import PartnersSection from "@/components/sections/about/PartnersSection";
import TeamSection from "@/components/sections/about/TeamSection";
import LatestSection from "@/components/sections/character/LatestSection";

export const metadata = {
  title: "About Us | Hlty.care",
  description: "Learn more about Hlty.care and our mission to redefine well-being through a holistic lens.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <BehindTheScenesSection />
      <AdvisorsSection />
      <PartnersSection />
      <LatestSection />
      <Footer />
    </main>
  );
}

