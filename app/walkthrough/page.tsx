import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WalkthroughContent from "@/components/sections/walkthrough/WalkthroughContent";

export const metadata = {
    title: "How It Works | Hlty Beings",
    description: "Explore the journey of building healthy habits through stories and play.",
};

export default function WalkthroughPage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar variant="light" />
            <div className="pt-24 lg:pt-32">
                <WalkthroughContent />
            </div>
            <Footer />
        </main>
    );
}
