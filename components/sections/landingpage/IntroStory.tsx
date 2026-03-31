"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    category: "Story Books",
    title: "The Hlty Adventures",
    description: "Illustrated storybooks where children become the hero, making healthy choices feel natural and cool.",
    buttonText: "Explore",
    image: "/landingpage/story-card.png" // Placeholder - User will import
  },
  {
    category: "Workshops",
    title: "Playshops + Camps",
    description: "Live 2-hour sessions disguised as escape rooms and creative labs attended by 100+ children so far.",
    buttonText: "Book Session",
    image: "/landingpage/workshop-card.png" // Placeholder - User will import
  },
  {
    category: "Games",
    title: "Uh-oh & Boing",
    description: "A snakes and ladder game with added fun elements that builds healthy habits, facilitates conversations in families.",
    buttonText: "Explore",
    image: "/landingpage/game-card.png" // Placeholder - User will import
  },
  {
    category: "Activity Bundles",
    title: "Free Digital Downloads",
    description: "Activities and guides to keep your kids active and engaged, all in one place.",
    buttonText: "Explore",
    image: "/landingpage/activity-card.png" // Placeholder - User will import
  }
];

export default function IntroStory() {
  return (
    <section className="bg-[#F0EEE6] py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-jubilat text-[22px] md:text-[36px] lg:text-[44px] text-[#183A39] leading-tight">
            Everything your family needs to<br />
            <span className="font-bold">stay healthy in one world</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 gap-4 md:gap-6 no-scrollbar snap-x snap-mandatory">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-[#E5E0D5] rounded-[32px] p-6 md:p-8 flex flex-col justify-between snap-start"
            >
              <div className="space-y-6">
                {/* Image Placeholder */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  {/* Empty space for user to import images as requested */}
                  <div className="w-full h-full flex items-center justify-center text-[#183A39]/30 italic text-sm">
                    Image Placeholder
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-block bg-white border border-[#183A39]/10 rounded-full px-4 py-1">
                  <span className="font-jubilat text-[12px] md:text-[14px] text-[#183A39]">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-jubilat text-[20px] md:text-[24px] font-bold text-[#183A39] leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-jubilat text-[14px] md:text-[16px] text-[#183A39]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <button className="bg-[#183A39] text-white rounded-full px-8 py-2.5 font-jubilat text-[14px] md:text-[16px] font-medium hover:bg-[#183A39]/90 transition-colors shadow-sm">
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Scrollable Illustration Container */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="font-jubilat text-[20px] md:text-[32px] text-[#183A39] mb-8">
            Families are noticing the difference
          </h3>
        </div>
        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="min-w-[1048px] md:min-w-0 md:max-w-7xl mx-auto px-4">
            <div className="relative w-[1048px] h-[265px] md:w-full md:h-auto md:aspect-[1048/265]">
              <Image
                src="/landingpage/intro-cards.svg"
                alt="Feature Illustration Row"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
