import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/employers/HeroSection";
import StatsSection from "@/components/sections/employers/StatsSection";
import ProblemSection from "@/components/sections/employers/ProblemSection";
import CollaborationBanner from "@/components/sections/employers/CollaborationBanner";
import SolutionsSection from "@/components/sections/employers/SolutionsSection";
import SupportCTA from "@/components/sections/employers/SupportCTA";

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <div className="pt-0">
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <CollaborationBanner />
        <SolutionsSection />
        <SupportCTA />
      </div>
      <Footer />
    </main>
  );
}
