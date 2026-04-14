"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HealthyHubbaContent from "./HealthyHubbaContent";
import KukdookuContent from "./KukdookuContent";
import FarawayChristmasContent from "./FarawayChristmasContent";
import Peakst8Content from "./Peakst8Content";
import PANContent from "./PANContent";

const TABS = [
  {
    id: "A",
    name: "Healthy Hubba",
    title: "Healthy Hubba",
    subtitle: "Where Prevention Meets Play.",
    description: "India's first children's health festival & childhood obesity conference, 2025 — hosted at IISc, Bengaluru. Healthy Hubba is our flagship on-ground format — a living prototype of what preventive health can look like when children, families, educators, and experts share the same space.",
    image: "/events/hubba.png" // Placeholder
  },
  {
    id: "B",
    name: "Kukdooku",
    title: "Kukdooku",
    subtitle: "A children's festival built around play, discovery, and imagination.",
    description: "At Kukdokuu, a vibrant children's festival bringing together brands, experiences, and performances for young audiences, we created a space where health could live naturally within play. Surrounded by storytelling, workshops, and family experiences, our interventions invited children to engage with food, movement, and wellbeing along with fun, intuitive, hands-on activities.\n\nDesigned for both children and their families, our presence focused on making health feel like a seamless part of exploration—something to experience, not instruct.",
    image: "/events/kukdooku.png" // Placeholder
  },
  {
    id: "C",
    name: "Faraway Christmas",
    title: "Faraway Christmas",
    subtitle: "Bringing health into festive play.",
    description: "At Faraway Christmas, we embedded health into the spirit of celebration. Through festive, game-based interactions, children and families engaged with ideas of balance, joy, and mindful choices without disrupting the magic of the event. Our space blended seamlessly into the celebration, making wellbeing feel like a natural part of life.",
    image: "/events/christmas.png" // Placeholder
  },
  {
    id: "D",
    name: "Peakst8",
    title: "Peakst8",
    subtitle: "Where movement meets meaning.",
    description: "At Peakst8, a health and sports festival for everyday athletes and high-performing individuals, we stepped into a space without children but deeply invested in health. Engaging with parents who actively prioritise fitness and wellbeing gave us a critical lens into how health is understood, practiced, and valued at home.\n\nWhat emerged was strong validation: the need to build healthy behaviours early, and intentionally, for children. Our presence at Peakst8 reinforced that while adults optimise for health, the foundation for it must begin much earlier, making what we’re building not just relevant, but necessary.",
    image: "/events/peakst8.png" // Placeholder
  },
  {
    id: "E",
    name: "PAN",
    title: "PAN",
    subtitle: "Health conversations, reimagined",
    description: "At Physicians Association Network, a conference hosted by the Physicians Association Network for doctors and healthcare professionals, we entered a space grounded in clinical expertise and medical practice. Engaging with physicians allowed us to position our work within the larger healthcare ecosystem shifting the conversation from treatment to prevention.\n\nOur presence translated playful, behaviour-led approaches into a language that resonated with medical professionals, highlighting how early interventions in childhood can shape long-term health outcomes. It became a space to bridge two worlds: clinical knowledge and everyday behaviour.",
    image: "/events/pan.png" // Placeholder
  }
];

export default function EventTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="bg-[#F0EEE6] py-10 md:py-16 px-6 md:px-12 lg:px-20 border-t border-[#183A39]/10">
      <div className="max-w-6xl mx-auto">

        {/* Horizontal Line with Dots */}
        <div className="relative w-full h-[2px] bg-[#51D2A2] mb-10">
          <div className="absolute left-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#51D2A2]" />
          <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#51D2A2]" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-14">

          {/* Sidebar - Navigation */}
          <div className="w-full md:w-[25%] flex flex-col gap-4 md:gap-5 relative">

            {/* Vertical Line Design (Desktop Only) */}
            <div className="hidden md:flex absolute -right-6 -top-[41px] bottom-0 flex-col items-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#51D2A2]" />
              <div className="flex-1 w-[2px] bg-[#51D2A2]" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#51D2A2]" />
            </div>

            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`text-left font-jubilat transition-all duration-300 py-1 ${
                  activeTab.id === tab.id
                    ? "text-[#51D2A2] text-[20px] md:text-[22px] font-bold"
                    : "text-[#183A39]/60 hover:text-[#183A39] text-[18px] md:text-[20px]"
                }`}
              >
                <span className="mr-3">{tab.id}.</span>
                {tab.name}
              </button>
            ))}

            {/* Bottom Horizontal Line for Mobile Only */}
            <div className="md:hidden relative w-full h-[2px] bg-[#51D2A2] mt-6">
              <div className="absolute left-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#51D2A2]" />
              <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#51D2A2]" />
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Title */}
                <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[44px] text-[#183A39] leading-tight">
                  {activeTab.title}
                </h2>

                {/* Subtitle & Description */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 pt-2 ${["D", "E"].includes(activeTab.id) ? "items-start" : ""}`}>
                  <div className={`${["D", "E"].includes(activeTab.id) ? "lg:w-[50%]" : "w-full"} space-y-4`}>
                    <p className="font-serif italic text-[16px] md:text-[18px] lg:text-[20px] text-[#183A39]/80">
                      {activeTab.subtitle}
                    </p>

                    <p className="font-jubilat text-[13px] md:text-[15px] lg:text-[17px] text-[#183A39] leading-relaxed max-w-3xl whitespace-pre-line">
                      {activeTab.description}
                    </p>
                  </div>

                  {activeTab.id === "D" && (
                    <div className="flex-1 w-full lg:w-auto -mt-8 md:-mt-12 lg:mt-0">
                       <Peakst8Content />
                    </div>
                  )}

                  {activeTab.id === "E" && (
                    <div className="flex-1 w-full lg:w-auto -mt-8 md:-mt-12 lg:mt-0">
                       <PANContent />
                    </div>
                  )}
                </div>

                {/* Detailed Sections */}
                {activeTab.id === "A" && <HealthyHubbaContent />}
                {activeTab.id === "B" && <KukdookuContent />}
                {activeTab.id === "C" && <FarawayChristmasContent />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
