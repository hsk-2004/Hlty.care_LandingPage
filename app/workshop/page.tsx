import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/workshop/Hero";
import Features from "@/components/sections/workshop/Features";
import Playshops from "@/components/sections/workshop/Playshops";
import Testimonials from "@/components/sections/workshop/Podcast";
import Workshops from "@/components/sections/workshop/Workshops";
import Footer from "@/components/layout/Footer";

export default function WorkshopPage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <Hero />
            <Features />
            <Playshops />
            <Testimonials />
            <Workshops />
            <Footer />
        </main>
    );
}

