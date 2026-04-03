import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/parents/HeroSection";
import IntroSection from "@/components/sections/parents/IntroSection";
import FeaturesSection from "@/components/sections/parents/FeaturesSection";
import ParentStoriesSection from "@/components/sections/parents/ParentStoriesSection";

export default function ParentsPage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <div className="pt-0 md:pt-24 lg:pt-32">
                <HeroSection />
                <IntroSection />
                <FeaturesSection />
                <ParentStoriesSection />
            </div>
            <Footer />
        </main>
    );
}
