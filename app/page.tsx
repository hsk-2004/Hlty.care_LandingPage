import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Playshops from "@/components/sections/Playshops";
import Testimonials from "@/components/sections/Podcast";
import Footer from "@/components/layout/Footer";
import Workshops from "@/components/sections/Workshops";

export default function Home() {
  return (
    <main>
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
