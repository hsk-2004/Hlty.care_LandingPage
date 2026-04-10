import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Catalogue from "@/components/sections/description/catalogue";
import AlsoLike from "@/components/sections/description/alsolike";

export const metadata = {
  title: "Description | Hlty Beings",
  description: "Detailed description of our products and collections.",
};

export default function DescriptionPage() {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      
      {/* Spacer for Fixed Navbar if applicable, or just top padding */}
      <div className="h-20 md:h-24"></div>

      <Catalogue />
      <AlsoLike />
      
      <Footer />
    </main>
  );
}
