import React from "react";

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
