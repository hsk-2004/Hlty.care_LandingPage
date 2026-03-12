import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/explore/BlogHero";
import LatestBlogs from "@/components/sections/explore/LatestBlogs";
import DeeperInsights from "@/components/sections/explore/DeeperInsights";
import Episode from "@/components/sections/explore/episode";
import MediaSection from "@/components/sections/explore/MediaSection";
import Image from "next/image";

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-[#F0EEE6]">
            <Navbar />
            <div className="pt-24 lg:pt-32">
                <BlogHero />
                <LatestBlogs />
                <div className="hidden md:flex w-full justify-center md:-mt-4 lg:-mt-6">
                    <Image
                        src="/explore/l1.svg"
                        alt=""
                        width={1164}
                        height={55}
                        className="w-[1164px] h-[55px] max-w-full"
                    />
                </div>
                <DeeperInsights />
                <Episode />
                <MediaSection />
            </div>
            <Footer />
        </main>
    );
}
