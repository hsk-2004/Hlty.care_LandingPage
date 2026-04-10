import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AudienceCards from "@/components/sections/get-started/audiencecards";
import ConversationSection from "@/components/sections/get-started/ConversationSection";

export default function GetStartedPage() {
    return (
        <main className="min-h-screen bg-[#183A39]">
            <Navbar variant="dark" logoClassName="lg:-ml-2" bgTransparent logo="/footer-logo.svg" mobileLogo="/logo_.svg" textColor="#E4DBCD" cartIcon="/get-started/cart.svg" cartBgColor="#51D2A2" />
            <div className="pt-24 lg:pt-32">
                <AudienceCards />
                <ConversationSection />
            </div>
            <Footer hideTopDecoration />
        </main>
    );
}
