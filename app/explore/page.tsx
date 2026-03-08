import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/explore/Hero";
import IntroStory from "@/components/sections/explore/IntroStory";
import ProblemSection from "@/components/sections/explore/ProblemSection";
import SolutionSection from "@/components/sections/explore/SolutionSection";
import FounderLetter from "@/components/sections/explore/FounderLetter";
import Partners from "@/components/sections/explore/Partners";

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <Hero />
            <IntroStory />
            <ProblemSection />
            <SolutionSection />
            <FounderLetter />
            <Partners />
            <Footer />
        </main>
    );
}
