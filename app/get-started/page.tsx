import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AudienceCards from "@/components/sections/get-started/audiencecards";
import ConversationSection from "@/components/sections/get-started/ConversationSection";

export default function GetStartedPage() {
    return (
        <main className="min-h-screen bg-[#183A39]">
            <Navbar variant="dark" />
            <div className="pt-24 lg:pt-32">
                <AudienceCards />
                <ConversationSection />
            </div>
            <Footer hideTopDecoration />
        </main>
    );
}
