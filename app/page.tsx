import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Workshops from "@/components/sections/Workshops";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Workshops />
      {/* Other sections will go here */}
    </main>
  );
}
