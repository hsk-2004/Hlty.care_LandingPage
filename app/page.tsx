import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/landingpage/Hero";
import IntroStory from "@/components/sections/landingpage/IntroStory";
import ProblemSection from "@/components/sections/landingpage/ProblemSection";
import SolutionSection from "@/components/sections/landingpage/SolutionSection";
import FounderLetter from "@/components/sections/landingpage/FounderLetter";
import Partners from "@/components/sections/landingpage/Partners";
import Offerings from "@/components/sections/landingpage/Offerings";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <Hero />
      <IntroStory />
      <ProblemSection />
      <SolutionSection />
      <FounderLetter />
      <Partners />
      <Offerings />
      <Footer />
    </main>
  );
}
