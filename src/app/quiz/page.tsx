import React from "react";
import type { Metadata } from "next";

// Components
import FAQ from "@/components/Quiz/FAQ";
import Prizes from "@/components/Quiz/Prizes";
import QuizHero from "@/components/Quiz/QuizHero";
import Partners from "@/components/Quiz/Partners";
import HowItWorks from "@/components/Quiz/HowItWorks";
import SampleQuiz from "@/components/Quiz/SampleQuiz";
import QuizFooter from "@/components/Quiz/QuizFooter";
import QuizNavbar from "@/components/Quiz/QuizNavbar";
import WhyParticipate from "@/components/Quiz/WhyParticipate";
import RegistrationCountdown from "@/components/Quiz/RegistrationCountdown";

export const metadata: Metadata = {
  title: "Health & Wellness Quiz for Kids | HLTY Interactive Learning",
  description: "Join HLTY's interactive health and wellness quiz for children. Test your knowledge about nutrition, healthy habits, and lifestyle choices. Win exciting prizes while learning about healthy living. Registration open now!",
  keywords: "health quiz, wellness quiz, kids quiz, nutrition quiz, healthy habits quiz, interactive learning, children's health, HLTY quiz, health education, lifestyle quiz, preventive healthcare, kids wellness, educational quiz, health awareness",
  openGraph: {
    title: "Health & Wellness Quiz for Kids | HLTY Interactive Learning",
    description: "Join our interactive health and wellness quiz for children. Learn about nutrition and healthy habits while winning exciting prizes!",
    url: "https://hlty.care/quiz",
    images: [
      {
        url: "https://hlty.care/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY Health & Wellness Quiz for Kids",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hltycare",
    creator: "@hltycare",
    title: "Health & Wellness Quiz for Kids | HLTY",
    description: "Join our interactive health and wellness quiz for children. Learn about nutrition and healthy habits while winning prizes!",
    images: ["https://hlty.care/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.care/quiz",
  },
};

export default function QuizPage() {
  return (
    <div>
      {/* Navbar */}
      <QuizNavbar />

      {/* Hero Section */}
      <QuizHero />

      {/* Registration Countdown */}
      <RegistrationCountdown />

      {/* Why Participate */}
      <WhyParticipate />

      {/* How It Works */}
      <HowItWorks />

      {/* Prizes */}
      <Prizes />

      {/* Sample Quiz */}
      <SampleQuiz />

      {/* Partners */}
      <Partners />

      {/* FAQ */}
      <FAQ />

      {/* Fat Footer */}
      <QuizFooter />
    </div>
  );
}
