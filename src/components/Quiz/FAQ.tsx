"use client";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const faqItems = [
  {
    question: "What is the theme of the quiz?",
    answer:
      "The quiz is focused on health, fitness, and nutrition, with questions relevant to Grades 5–8. There is no prescribed syllabus.",
  },
  {
    question: "What is the medium of the quiz?",
    answer: "Both prelims and finals will be conducted in English only.",
  },
  {
    question: "Who can participate?",
    answer: `Students from Grades 5–8 of any recognized school in Bangalore can participate. Teams must have 3 students. Members can be from the same or different grades. Each school may nominate up to 2 teams.`,
  },
  {
    question: "How will the prelims work?",
    answer: `The prelims will be a written test on a set date and venue.
Duration: 60 minutes, attempted as a team.
Teams should bring their own pen/pencil/clipboard. No books, devices, or study material allowed.
Students must be in school uniforms, carry valid school IDs, and be accompanied by a teacher.
Format: 30 written questions (not multiple choice).
12 questions will be starred for tie-breaking.
1 point per correct answer, no negative marking.`,
  },
  {
    question: "How will the selection of finals happen?",
    answer: `Highest score in prelims
If tied, higher score in starred questions
If still tied, fewer wrong answers
If still tied, right-answer progression will decide
Note: If more than one team from the same school qualifies, only the highest-scoring team will move to finals.`,
  },
  {
    question: "How will the finals work?",
    answer: `Date: 15 November
Format: 4–6 rounds, approx. 60 minutes
Venue: TBD
Finalist students must be in uniforms, carry school IDs, and be accompanied by a teacher.`,
  },
  {
    question: "What recognition will participants receive?",
    answer: `Trophies for winners
Certificates and goodies for all participants`,
  },
  {
    question: "How can schools register?",
    answer:
      "Schools must complete the registration form, including team details with student names and grades.",
  },
];

// Helper function to format answers with bullet points
const formatAnswer = (answer: string) => {
  const lines = answer.split("\n").filter((line) => line.trim() !== "");

  if (lines.length <= 1) {
    return <span>{answer}</span>;
  }

  return (
    <div>
      {lines.map((line, index) => (
        <div key={index} className="flex items-start mb-1">
          <span className="mr-2 text-primary text-xs mt-1">•</span>
          <span>{line.trim()}</span>
        </div>
      ))}
    </div>
  );
};

export default function FAQ() {
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    Array(faqItems.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="flex flex-col items-center mt-12 sm:mt-16 w-full max-w-4xl mx-auto pb-20 sm:pb-30 px-4 overflow-hidden">
      <motion.h2
        className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FAQ
      </motion.h2>
      <motion.div
        className="flex flex-col lg:flex-row gap-4 w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="flex-1 space-y-4 overflow-hidden">
          {faqItems
            .slice(0, Math.ceil(faqItems.length / 2))
            .map((item, index) => (
              <motion.div
                key={index}
                className="bg-bright-teal cursor-pointer rounded-md hover:bg-bright-teal/90 transition-all duration-300 overflow-hidden"
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span className="text-sm sm:text-base pr-2">
                      {item.question}
                    </span>
                    <Image
                      src="/arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className={`transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openStates[index] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openStates[index]
                      ? "max-h-96 opacity-100 transform translate-y-0"
                      : "max-h-0 opacity-0 transform -translate-y-2"
                  }`}
                >
                  <div className="px-4 pb-4 text-primary font-normal text-sm sm:text-base">
                    {formatAnswer(item.answer)}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4 overflow-hidden">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => {
            const actualIndex = index + Math.ceil(faqItems.length / 2);
            return (
              <motion.div
                key={actualIndex}
                className="bg-bright-teal cursor-pointer rounded-md hover:bg-bright-teal/90 transition-all duration-300 overflow-hidden"
                onClick={() => toggleFAQ(actualIndex)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span className="text-sm sm:text-base pr-2">
                      {item.question}
                    </span>
                    <Image
                      src="/arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className={`transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openStates[actualIndex] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openStates[actualIndex]
                      ? "max-h-96 opacity-100 transform translate-y-0"
                      : "max-h-0 opacity-0 transform -translate-y-2"
                  }`}
                >
                  <div
                    className={`${montserrat.className} px-4 pb-4 text-primary font-normal text-sm sm:text-base`}
                  >
                    {formatAnswer(item.answer)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
