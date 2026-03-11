import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/explore/BlogHero";
import LatestBlogs from "@/components/sections/explore/LatestBlogs";
import DeeperInsights from "@/components/sections/explore/DeeperInsights";
import Episode from "@/components/sections/explore/episode";
import MediaSection from "@/components/sections/explore/MediaSection";

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <div className="pt-24 lg:pt-32">
                <BlogHero />
                <LatestBlogs />
                <DeeperInsights />
                <Episode />
                <MediaSection />
            </div>
            <Footer />
        </main>
    );
}
