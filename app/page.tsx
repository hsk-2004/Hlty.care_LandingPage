import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/workshop/Hero";
import Features from "@/components/sections/workshop/Features";
import Playshops from "@/components/sections/workshop/Playshops";
import Testimonials from "@/components/sections/workshop/Podcast";
import Footer from "@/components/layout/Footer";
import Workshops from "@/components/sections/workshop/Workshops";

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
