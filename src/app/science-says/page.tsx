import type { Metadata } from "next";
import EnrollForQuizWrapper from "@/components/EnrollForQuiz/EnrollForQuizWrapper";
import ScienceSaysHero from "@/components/Science-Says/ScienceSaysHero/ScienceSaysHero";
import HeartFramework from "@/components/Science-Says/HeartFramework/HeartFramework";
import ObesogenicWorld from "@/components/Science-Says/ObesogenicWorld/ObesogenicWorld";
import PictureThis from "@/components/Science-Says/PictureThis/PictureThis";
import WatchMovement from "@/components/Science-Says/WatchMovement/WatchMovement";

export const metadata: Metadata = {
  title: "Science Says | Evidence-Based Childhood Health Research | HLTY",
  description: "Discover the science behind childhood health and wellness. Explore evidence-based research on childhood obesity, nutrition, and healthy lifestyle habits. Learn about the H.E.A.R.T framework and understand the obesogenic world affecting our children's health.",
  keywords: "childhood health research, science-based nutrition, childhood obesity research, evidence-based health, H.E.A.R.T framework, obesogenic environment, children's health science, preventive healthcare research, lifestyle diseases, health education, WHO research, UNICEF data, JAMA pediatrics",
  openGraph: {
    title: "Science Says | Evidence-Based Childhood Health Research | HLTY",
    description: "Explore evidence-based research on childhood health, nutrition, and wellness. Understand the science behind healthy living for children.",
    url: "https://hlty.care/science-says",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY Science Says - Evidence-Based Childhood Health Research",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hltycare",
    creator: "@hltycare",
    title: "Science Says | Evidence-Based Childhood Health Research",
    description: "Explore evidence-based research on childhood health, nutrition, and wellness. Understand the science behind healthy living.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.care/science-says",
  },
};

export default function ScienceSays() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <ScienceSaysHero />

      {/* H.E.A.R.T Framework */}
      <HeartFramework />

      {/* Obesogenic World */}
      <ObesogenicWorld />

      {/* Picture This */}
      <PictureThis />

      {/* Watch Movement */}
      <WatchMovement />

      {/* Enroll for Quiz */}
      <EnrollForQuizWrapper />
    </div>
  );
}