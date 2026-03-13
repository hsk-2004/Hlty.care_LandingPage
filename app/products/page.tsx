import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/products/HeroSection";
import FilterBar from "@/components/sections/products/FilterBar";
import ProductsSection from "@/components/sections/products/ProductsSection";
import PaginationSection from "@/components/sections/products/PaginationSection";

export const metadata = {
    title: "Products | Hlty Beings",
    description: "Curated tools and resources for a health-filled everyday life.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <HeroSection />
            <FilterBar />
            <ProductsSection />
            <PaginationSection />
            <Footer />
        </main>
    );
}
