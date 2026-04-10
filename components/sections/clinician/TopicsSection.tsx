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
    <section className="w-full bg-[#F0EEE6] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="font-jubilat text-[24px] md:text-[44px] lg:text-[56px] text-center text-[#183A39] mb-16 md:mb-24 lg:mb-32">
          Topics of Intervention
        </h2>

        {/* Grid Container with dashed borders wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-[#51D2A2]/60 border-dashed">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`
                py-3 px-5 md:p-10 lg:p-12 border-b-2 border-x-2 md:border-x-0 border-[#51D2A2]/60 border-dashed
                ${(index % 3 !== 2) ? 'lg:border-r-2' : ''}
                ${(index % 2 !== 1) ? 'md:border-r-2' : ''}
                ${(index % 2 === 1) ? 'md:border-r-0 lg:border-r-2' : ''}
                ${(index % 3 === 2) ? 'lg:border-r-0' : ''}
              `}
            >
              <div className="flex flex-col h-full">
                <h3 className="font-jubilat text-[24px] md:text-[24px] lg:text-[28px] text-[#183A39] font-bold mb-3 lg:mb-8">
                  {topic.title}
                </h3>

                <ul className="space-y-1 mb-4 lg:mb-10">
                  {topic.items.map((item, i) => (
                    <li key={i} className="font-jubilat text-[14px] md:text-[16px] lg:text-[18px] text-[#183A39]/80 flex items-start gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 bg-[#183A39]/40 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="font-jubilat text-[14px] md:text-[15px] lg:text-[17px] text-[#183A39]/90">
                    <span className="font-bold">Used for:</span> {topic.usedFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
