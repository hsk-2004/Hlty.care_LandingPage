import Navbar from "@/components/layout/Navbar";
import Workshops from "@/components/sections/Workshops";
import Footer from "@/components/layout/Footer";

export default function WorkshopPage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <Workshops />
            <Footer />
        </main>
    );
}
