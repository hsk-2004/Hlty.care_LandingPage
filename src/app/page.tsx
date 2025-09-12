import React from "react";

// Metadata
import type { Metadata } from "next";

// Components
import Hero from "@/components/Home/Hero/Hero";
import Slide from "@/components/Home/Slide/Slide";
import Nutriroo from "@/components/Home/Nutriroo/Nutriroo";
import BackedBy from "@/components/Home/BackedBy/BackedBy";
import Tomorrow from "@/components/Home/Tomorrow/Tomorrow";
import PeopleSay from "@/components/Home/PeopleSay/PeopleSay";
import EnrollForQuizWrapper from "@/components/EnrollForQuiz/EnrollForQuizWrapper";
import HomePopup from "@/components/HomePopup/HomePopup";

// Set the metadata for the page here
export const metadata: Metadata = {
  title: "HLTY - India's Leading Childhood Wellness Platform | Home",
  description: "Discover HLTY, India's leading childhood wellness platform. Join our parent collective and clinical collective to help children grow healthier, happier, and stronger through playful tools and joyful routines.",
  keywords: "childhood wellness, children's health, parenting, nutrition, healthy habits, India, wellness platform, parent collective, clinical collective",
  openGraph: {
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "Join our parent collective and clinical collective to help children grow healthier, happier, and stronger.",
    url: "https://hlty.in",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY - Childhood Wellness Platform",
      },
    ],
  },
  twitter: {
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "Join our parent collective and clinical collective to help children grow healthier, happier, and stronger.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.in",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Backed By */}
      <BackedBy />

      {/* Heathier Tomorrow */}
      <Tomorrow />

      {/* What People Say Component */}
      <PeopleSay />

      {/* Nutriroo */}
      <Nutriroo />

      {/* Press & Media */}
      <Slide />
      
      {/* Enroll For Quiz */}
      <EnrollForQuizWrapper />
      
      {/* Home Popup */}
      <HomePopup />
    </div>
  );
}
