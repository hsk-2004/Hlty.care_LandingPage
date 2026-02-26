import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      {/* Other sections will go here */}
    </main>
  );
}
