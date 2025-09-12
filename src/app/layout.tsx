import type { Metadata } from "next";
import "./globals.css";

import { Aleo } from "next/font/google";
import ClientLayout from "../components/ClientLayout";

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HLTY - India's Leading Childhood Wellness Platform",
  description: "HLTY is building India's leading childhood wellness platform to help parents raise healthier, happier children through playful tools, joyful routines, and habits that heal.",
  keywords: "childhood wellness, children's health, parenting, nutrition, healthy habits, India, wellness platform",
  authors: [{ name: "HLTY Beings" }],
  creator: "HLTY Beings",
  publisher: "HLTY Beings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hlty.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "HLTY is building India's leading childhood wellness platform to help parents raise healthier, happier children through playful tools, joyful routines, and habits that heal.",
    url: "https://hlty.in",
    siteName: "HLTY",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY - Childhood Wellness Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "HLTY is building India's leading childhood wellness platform to help parents raise healthier, happier children.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${aleo.className} flex flex-col min-h-screen`}>
        <ClientLayout>
          <main className="flex-1">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
