import type { Metadata } from "next";
import "./globals.css";

import { Aleo } from "next/font/google";
import ClientLayout from "../components/ClientLayout";

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HLTY - India's Leading Childhood Wellness Platform | Healthy Kids, Happy Parents",
  description: "HLTY is India's leading childhood wellness platform helping parents raise healthier, happier children. Join our parent collective and clinical collective with playful tools, joyful routines, and science-backed habits that heal. Combat childhood obesity with NutriRoo books and interactive quizzes.",
  keywords: "childhood wellness, children's health, parenting, nutrition, healthy habits, India, wellness platform, childhood obesity, NutriRoo, parent collective, clinical collective, kids health, healthy eating, lifestyle diseases, preventive healthcare, children's books, interactive learning",
  authors: [{ name: "HLTY Team", url: "https://hlty.care" }],
  creator: "HLTY - VOS Health and Life Solutions Private Limited",
  publisher: "HLTY - VOS Health and Life Solutions Private Limited",
  applicationName: "HLTY",
  category: "Health & Wellness",
  classification: "Childhood Wellness Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hlty.care"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HLTY - India's Leading Childhood Wellness Platform | Healthy Kids, Happy Parents",
    description: "Join India's leading childhood wellness platform. Help your children grow healthier, happier, and stronger with science-backed tools, NutriRoo books, and interactive learning experiences.",
    url: "https://hlty.care",
    siteName: "HLTY",
    images: [
      {
        url: "https://hlty.care/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY - India's Leading Childhood Wellness Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hltycare",
    creator: "@hltycare",
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "Help your children grow healthier, happier, and stronger with science-backed tools and interactive learning experiences.",
    images: ["https://hlty.care/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "HLTY",
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
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
