"use client";

import { motion } from "framer-motion";

export default function InterventionSection() {
  const topics = [
    {
      title: "Build Healthy Habits",
      points: ["Habit loops & visual cues", "Daily routine builders", "Consistency trackers"],
      usedFor: "hygiene, bedtime, movement, self-care"
    },
    {
      title: "Encourage Movement & Play",
      points: ["Movement prompts", "Active waiting ideas", "Body-in-motion visuals"],
      usedFor: "reducing sedentary time"
    },
    {
      title: "Make Sense of Common Illness",
      points: ["What's happening inside the body", "When to rest vs seek care", "Recovery timelines"],
      usedFor: "fever, cough, allergies, gut issues"
    },
    {
      title: "Understand Food & Energy",
      points: ["Plate balance visuals", "Digestion journeys", "Sugar-energy comparisons"],
      usedFor: "food literacy, mindful eating"
    },
    {
      title: "Navigate Emotions",
      points: ["Emotion naming tools", "Body-emotion maps", "Calm-down sequences"],
      usedFor: "emotional wellbeing, pediatrics"
    },
    {
      title: "Balance Screen Time",
      points: ["Screen-time rhythms", "Focus & fatigue cues", "Digital rest reminders"],
      usedFor: "adolescents, families"
    },
    {
      title: "Support Better Sleep",
      points: ["Sleep cycle explainers", "Wind-down routines", "Sleep hygiene prompts"],
      usedFor: "children, teens, caregivers"
    },
    {
      title: "Grow Up Healthy",
      points: ["Growth ranges", "Development timelines", "Body awareness guides"],
      usedFor: "reassurance, parent education"
    },
    {
      title: "Extend Care Beyond the Clinic",
      points: ["Follow-up guides", "Recovery checklists", "Caregiver prompts"],
      usedFor: "continuity of care"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto overflow-hidden lg:h-[1283px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-jubilat text-[42px] md:text-[56px] text-[#183A39] mb-20 text-center font-medium"
      >
        Topics of Intervention
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Top pseudo-border */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundImage: 'repeating-linear-gradient(to right, #51D2A2 0px, #51D2A2 6.61px, transparent 6.61px, transparent 13.22px)' }} />

        {topics.map((topic, index) => {
          const isRightBorderOnMd = index % 2 !== 1;
          const isRightBorderOnLg = index % 3 !== 2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="px-6 py-8 md:px-10 md:py-8 lg:px-14 lg:py-8 flex flex-col relative"
            >
              <h3 className="font-jubilat text-[24px] md:text-[28px] lg:text-[26px] text-[#183A39] font-bold leading-tight mb-2">
                {topic.title}
              </h3>

              <ul className="space-y-0 mb-1">
                {topic.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#183A39] rounded-full mt-2 shrink-0" />
                    <span className="font-jubilat text-[16px] md:text-[17px] lg:text-[19px] text-[#183A39] opacity-80 leading-tight font-normal">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="font-jubilat text-[14px] md:text-[15px] lg:text-[19px] text-[#183A39] leading-tight">
                  <span className="font-bold">Used for:</span>{" "}
                  <span className="opacity-80 font-normal">{topic.usedFor}</span>
                </p>
              </div>

              {/* Bottom pseudo-border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundImage: 'repeating-linear-gradient(to right, #51D2A2 0px, #51D2A2 6.61px, transparent 6.61px, transparent 13.22px)' }} />

              {/* Right pseudo-border */}
              <div
                className={`absolute right-0 top-0 bottom-0 w-[2px] hidden
                ${isRightBorderOnMd ? 'md:block' : 'md:hidden'}
                ${isRightBorderOnLg ? 'lg:block' : 'lg:hidden'}
              `}
                style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #51D2A2 0px, #51D2A2 6.61px, transparent 6.61px, transparent 13.22px)' }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

