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
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-2xl mx-auto flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-jubilat text-[32px] md:text-[42px] text-[#183A39] mb-16 text-center font-medium"
      >
        Topics of Intervention
      </motion.h2>

      <div className="w-full -space-y-[2px]">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="w-full border-2 border-dashed border-[#51D2A2] rounded-none p-8 space-y-6 relative z-10"
          >
            <h3 className="font-jubilat text-[28px] md:text-[32px] text-[#183A39] font-bold leading-tight">
              {topic.title}
            </h3>
            
            <ul className="space-y-3">
              {topic.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-[#183A39] rounded-full mt-[10px] shrink-0" />
                  <span className="font-jubilat text-[18px] md:text-[20px] text-[#183A39] opacity-90 leading-relaxed font-normal">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <p className="font-jubilat text-[18px] md:text-[20px] text-[#183A39] leading-relaxed">
                <span className="font-bold">Used for:</span> <span className="opacity-80 font-normal">{topic.usedFor}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
