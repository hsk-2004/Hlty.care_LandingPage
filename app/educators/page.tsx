import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/educators/HeroSection";
import WellnessSection from "@/components/sections/educators/WellnessSection";
import InterventionSection from "@/components/sections/educators/InterventionSection";
import CTASection from "@/components/sections/educators/CTASection";

export const metadata = {
  title: "For Educators | Hlty.care",
  description: "Empowering educators to redefine well-being in childhood environments with holistic tools and resources.",
};

export default function EducatorsPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <HeroSection />
      <WellnessSection />
      <InterventionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
