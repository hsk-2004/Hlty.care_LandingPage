import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HLTY Quotient Quiz 2025 - Bengaluru Edition | Register Your School",
  description: "Join HLTY Quotient Quiz 2025 Bengaluru Edition - a unique competition for grades 5-8 blending knowledge, nutrition, and critical thinking. Free registration for schools across the city.",
  keywords: "HLTY quiz, school competition, Bengaluru quiz, grades 5-8, health nutrition quiz, school registration, educational competition, children's quiz",
  openGraph: {
    title: "HLTY Quotient Quiz 2025 - Bengaluru Edition",
    description: "Join the unique competition for grades 5-8 blending knowledge, nutrition, and critical thinking. Free registration for schools.",
    url: "https://hlty.in/quiz",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY Quotient Quiz 2025",
      },
    ],
  },
  twitter: {
    title: "HLTY Quotient Quiz 2025 - Bengaluru Edition",
    description: "Join the unique competition for grades 5-8 blending knowledge, nutrition, and critical thinking.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.in/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
