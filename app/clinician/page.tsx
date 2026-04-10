import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/clinician/HeroSection";
import StatsSection from "@/components/sections/clinician/StatsSection";
import ShowcaseSection from "@/components/sections/clinician/ShowcaseSection";
import LearningHighlight from "@/components/sections/clinician/LearningHighlight";
import TopicsSection from "@/components/sections/clinician/TopicsSection";
import SampleCTA from "@/components/sections/clinician/SampleCTA";

export default function ClinicianPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <div className="pt-0">
        <HeroSection />
        <StatsSection />
        <ShowcaseSection />
        <LearningHighlight />
        <TopicsSection />
        <SampleCTA />
      </div>
      <Footer />
    </main>
  );
}
