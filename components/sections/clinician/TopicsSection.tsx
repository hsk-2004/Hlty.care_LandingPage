"use client";

import { motion } from "framer-motion";

const topics = [
  {
    title: "Build Healthy Habits",
    items: ["Habit loops & visual cues", "Daily routine builders", "Consistency trackers"],
    usedFor: "hygiene, bedtime, movement, self-care"
  },
  {
    title: "Encourage Movement & Play",
    items: ["Movement prompts", "Active waiting ideas", "Body-in-motion visuals"],
    usedFor: "reducing sedentary time"
  },
  {
    title: "Make Sense of Common Illness",
    items: ["What's happening inside the body", "When to rest vs seek care", "Recovery timelines"],
    usedFor: "fever, cough, allergies, gut issues"
  },
  {
    title: "Understand Food & Energy",
    items: ["Plate balance visuals", "Digestion journeys", "Sugar-energy comparisons"],
    usedFor: "food literacy, mindful eating"
  },
  {
    title: "Navigate Emotions",
    items: ["Emotion naming tools", "Body-emotion maps", "Calm-down sequences"],
    usedFor: "emotional wellbeing, pediatrics"
  },
  {
    title: "Balance Screen Time",
    items: ["Screen-time rhythms", "Focus & fatigue cues", "Digital rest reminders"],
    usedFor: "adolescents, families"
  },
  {
    title: "Support Better Sleep",
    items: ["Sleep cycle explainers", "Wind-down routines", "Sleep hygiene prompts"],
    usedFor: "children, teens, caregivers"
  },
  {
    title: "Grow Up Healthy",
    items: ["Growth ranges", "Development timelines", "Body awareness guides"],
    usedFor: "reassurance, parent education"
  },
  {
    title: "Extend Care Beyond the Clinic",
    items: ["Follow-up guides", "Recovery checklists", "Caregiver prompts"],
    usedFor: "continuity of care"
  }
];

export default function TopicsSection() {
  return (
    <section className="w-full bg-[#f2efe4] py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="font-jubilat text-3xl md:text-5xl text-center text-[#183A39] mb-16 md:mb-20">
          Topics of Intervention
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#f2efe4] p-8 md:p-10 border-2 border-dashed border-[#5EE2A0]/30 rounded-none relative flex flex-col justify-between group hover:border-[#5EE2A0]/60 transition-colors"
            >
              <div>
                <h3 className="font-jubilat text-2xl md:text-3xl text-[#183A39] font-bold mb-6">
                  {topic.title}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {topic.items.map((item, i) => (
                    <li key={i} className="font-jubilat text-[15px] md:text-[17px] text-[#183A39]/80 flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-0.5 bg-[#183A39]/30 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-jubilat text-sm md:text-base text-[#183A39]/90">
                  <span className="font-bold">Used for:</span> {topic.usedFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
