import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventsHero from "@/components/sections/events/Hero";
import EventTabs from "@/components/sections/events/EventTabs";

export const metadata = {
  title: "Events & Experiences | Hlty.care",
  description: "Join curated workshops, community circles, and virtual events designed to nurture well-being in children and families.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <EventsHero />
      <EventTabs />
      <Footer />
    </main>
  );
}
