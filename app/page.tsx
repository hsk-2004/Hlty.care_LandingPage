import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Workshops from "@/components/sections/Playshops";
import Testimonials from "@/components/sections/Podcast";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Workshops />
      <Testimonials />
      <Footer />
    </main>
  );
}
