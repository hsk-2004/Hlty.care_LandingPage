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
import HubbaWrapper from "@/components/Hubba/HubbaWrapper";

// Set the metadata for the page here
export const metadata: Metadata = {
  title: "HLTY - India's Leading Childhood Wellness Platform | Healthy Kids, Happy Parents",
  description: "Join HLTY, India's leading childhood wellness platform combating childhood obesity. Our children are growing heavier, slower, and sadder - but behind every healthy child is a parent who chose differently. Discover NutriRoo books, interactive quizzes, and science-backed tools to help your children grow healthier, happier, and stronger.",
  keywords: "childhood wellness, children's health, parenting, nutrition, healthy habits, India, wellness platform, childhood obesity, NutriRoo books, parent collective, clinical collective, kids health, healthy eating, lifestyle diseases, preventive healthcare, interactive learning, children's books, Suraj Prasad, healthy lifestyle, family wellness",
  openGraph: {
    title: "HLTY - India's Leading Childhood Wellness Platform | Healthy Kids, Happy Parents",
    description: "Behind every healthy child is a heroic parent. Join our movement to combat childhood obesity with science-backed tools, NutriRoo books, and interactive learning experiences.",
    url: "https://hlty.care",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HLTY - India's Leading Childhood Wellness Platform",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hltycare",
    creator: "@hltycare",
    title: "HLTY - India's Leading Childhood Wellness Platform",
    description: "Behind every healthy child is a heroic parent. Join our movement to combat childhood obesity with science-backed tools and interactive learning.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hlty.care",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HLTY",
    "alternateName": "VOS Health and Life Solutions Private Limited",
    "url": "https://hlty.care",
    "logo": "/logo.png",
    "description": "India's leading childhood wellness platform helping parents raise healthier, happier children through playful tools, joyful routines, and science-backed habits that heal.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Suraj Prasad"
      },
      {
        "@type": "Person", 
        "name": "Ankita Dey"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-301 Purva Panorama, Kalena Agrahara, Bannerghatta Road",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560076",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9980545813",
      "contactType": "customer service",
      "email": "hello@hlty.care"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hlty",
      "https://twitter.com/hltycare",
      "https://www.instagram.com/hltycare",
      "https://www.youtube.com/@hltycare"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Childhood Wellness",
      "Children's Health",
      "Nutrition Education",
      "Preventive Healthcare",
      "Childhood Obesity Prevention",
      "Health Education",
      "Interactive Learning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Childhood Wellness Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Health & Wellness Quiz for Kids",
            "description": "Interactive quiz to test children's knowledge about health and wellness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "NutriRoo Books",
            "description": "Educational children's books about nutrition and healthy eating"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

        <HubbaWrapper />
        
        {/* Enroll For Quiz */}
        <EnrollForQuizWrapper />
        
        {/* Home Popup */}
        <HomePopup />
      </div>
    </>
  );
}
