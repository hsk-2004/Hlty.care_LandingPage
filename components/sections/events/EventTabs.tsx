"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HealthyHubbaContent from "./HealthyHubbaContent";
import KukdukooContent from "./KukdukooContent";
import FarawayChristmasContent from "./FarawayChristmasContent";
import Peakst8Content from "./Peakst8Content";
import PANContent from "./PANContent";

const TABS = [
  {
    id: "A",
    name: "Healthy Hubba",
    title: "Healthy Hubba",
    subtitle: "Where Prevention Meets Play.",
    description: "India’s first children’s health festival & childhood obesity conference, 2025 — hosted at IISc,\nBengaluru. Healthy Hubba is our flagship on-ground format — a living prototype of what preventive\nhealth can look like when children, families, educators, and experts share the same space.",
    image: "/events/hh1.png",
    imageHeight: 286
  },
  {
    id: "B",
    name: "Kukdukoo",
    title: "Kukdukoo",
    subtitle: "A children's festival built around play, discovery, and imagination.",
    description: "At Kukdukoo, a vibrant children’s festival bringing together brands, experiences, and performances\nfor young audiences, we created a space where health could live naturally within play. Surrounded\nby storytelling, workshops, and family experiences, our interventions invited children to engage\nwith food, movement, and wellbeing along with fun, intuitive, hands-on activities.\n\nDesigned for both children and their families, our presence focused on making health feel like a\nseamless part of exploration—something to experience, not instruct.",
    image: "/events/kk1.png",
    imageHeight: 421
  },
  {
    id: "C",
    name: "Faraway Christmas",
    title: "Faraway Christmas",
    subtitle: "Bringing health into festive play.",
    description: "At Faraway Christmas, we embedded health into the spirit of celebration. Through festive, game-\nbased interactions, children and families engaged with ideas of balance, joy, and mindful choices\nwithout disrupting the magic of the event. Our space blended seamlessly into the celebration,\nmaking wellbeing feel like a natural part of life.",
    image: "" // Removed as requested
  },
  {
    id: "D",
    name: "Peakst8",
    title: "Peakst8",
    subtitle: "Where movement meets meaning.",
    description: "At Peakst8, a health and sports festival for\neveryday athletes and high-performing\nindividuals, we stepped into a space without\nchildren but deeply invested in health.\nEngaging with parents who actively prioritise\nfitness and wellbeing gave us a critical lens into\nhow health is understood, practiced, and\nvalued at home.\n\nWhat emerged was strong validation: the need\nto build healthy behaviours early and\nintentionally, for children. Our presence at\nPeakst8 reinforced that while adults optimise\nfor health, the foundation for it must begin\nmuch earlier, making what we’re building not\njust relevant, but necessary.",
    image: "/events/pk1.png"
  },
  {
    id: "E",
    name: "PAN",
    title: "PAN",
    subtitle: "Health conversations, reimagined",
    description: "At Physicians Association Network, a\nconference hosted by the Physicians\nAssociation Network for doctors and\nhealthcare professionals, we entered a\nspace grounded in clinical expertise and\nmedical practice. Engaging with physicians\nallowed us to position our work within the\nlarger healthcare ecosystem shifting the\nconversation from treatment to prevention.\nOur presence translated playful,\nbehaviour-led approaches into a language\nthat resonated with medical professionals,\nhighlighting how early interventions in\nchildhood can shape long-term health\noutcomes. It became a space to bridge two\nworlds: clinical knowledge and everyday\nbehaviour.",
    image: "/events/pan.png" // Placeholder
  }
];

export default function EventTabs() {
  const [activeTabId, setActiveTabId] = useState(TABS[0].id);

  const activeTab = TABS.find((tab) => tab.id === activeTabId) || TABS[0];

  return (
    <section className="bg-[#F0EEE6] py-10 md:py-16 px-6 md:px-12 lg:px-20 border-t border-[#183A39]/10">
      <div className="max-w-7xl mx-auto">

        {/* Horizontal Line with Dots */}
        <div className="relative w-full h-[2px] bg-[#51D2A2] mb-10">
          <div className="absolute left-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#51D2A2]" />
          <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#51D2A2]" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-20">

          {/* Sidebar - Navigation */}
          <div className="w-full md:w-[20%] flex flex-col gap-4 md:gap-5 relative">

            {/* Vertical Line Design (Desktop Only) */}
            <div className="hidden md:flex absolute -right-6 -top-[41px] bottom-0 flex-col items-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#51D2A2]" />
              <div className="flex-1 w-[2px] bg-[#51D2A2]" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#51D2A2]" />
            </div>

            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`text-left font-jubilat transition-all duration-300 py-1 text-[18px] md:text-[20px] whitespace-nowrap ${
                  activeTabId === tab.id
                    ? "text-[#399F87] font-bold"
                    : "text-[#183A39] hover:text-[#399F87]"
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

                {/* Main Hero Image for the Event (Hidden for D and E as they use side-layouts) */}
                {activeTab.image && !["D", "E"].includes(activeTab.id) && (
                  <div className="mt-6 md:mt-8 w-full max-w-[965px]">
                    <Image
                      src={activeTab.image}
                      alt={activeTab.title}
                      width={965}
                      height={activeTab.imageHeight || 286}
                      className="rounded-[20px] md:rounded-[24px] w-full"
                      style={{ height: activeTab.imageHeight ? `${activeTab.imageHeight}px` : 'auto', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                )}

                {/* Subtitle & Description */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 pt-2 ${["D", "E"].includes(activeTab.id) ? "items-start" : ""}`}>
                  <div className={`${["D", "E"].includes(activeTab.id) ? "lg:w-[50%]" : "w-full"} space-y-4`}>
                    <p className="font-jubilat italic text-[16px] md:text-[18px] lg:text-[20px] text-[#183A39]">
                      {activeTab.subtitle}
                    </p>

                    <p className="font-jubilat text-[16px] md:text-[18px] lg:text-[20px] text-[#183A39] leading-[1.2] max-w-[1000px] whitespace-pre-line lg:whitespace-pre">
                      {activeTab.description}
                    </p>
                  </div>

                  {activeTab.id === "D" && (
                    <div className="flex-1 w-full lg:w-auto -mt-8 md:-mt-12 lg:-mt-8">
                       <Peakst8Content />
                    </div>
                  )}

                  {activeTab.id === "E" && (
                    <div className="flex-1 w-full lg:w-auto -mt-8 md:-mt-12 lg:-mt-8">
                       <PANContent />
                    </div>
                  )}
                </div>

                {/* Detailed Sections */}
                {activeTab.id === "A" && <HealthyHubbaContent />}
                {activeTab.id === "B" && <KukdukooContent />}
                {activeTab.id === "C" && <FarawayChristmasContent />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
