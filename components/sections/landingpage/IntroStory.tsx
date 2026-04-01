"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    category: "Story Books",
    title: "The Hlty Adventures",
    description: "Illustrated storybooks where children become the hero, making healthy choices feel natural and cool.",
    buttonText: "Explore",
    image: "/landingpage/intro1.png" // Placeholder - User will import
  },
  {
    category: "Workshops",
    title: "Playshops + Camps",
    description: "Live 2-hour sessions disguised as escape rooms and creative labs attended by 100+ children so far.",
    buttonText: "Book Session",
    image: "/landingpage/intro2.png" // Placeholder - User will import
  },
  {
    category: "Games",
    title: "Uh-oh & Boing",
    description: "A snakes and ladder game with added fun elements that builds healthy habits, facilitates conversations in families.",
    buttonText: "Explore",
    image: "/landingpage/intro3.png" // Placeholder - User will import
  },
  {
    category: "Activity Bundles",
    title: "Free Digital Downloads",
    description: "Activities and guides to keep your kids active and engaged, all in one place.",
    buttonText: "Explore",
    image: "/landingpage/intro4.png" // Placeholder - User will import
  }
];

export default function IntroStory() {
  return (
    <section className="bg-[#F0EEE6] py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-jubilat text-[20px] md:text-[36px] lg:text-[44px] text-[#183A39] leading-tight">
            Everything your family needs to<br />
            <span className="font-bold">stay healthy in one world</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 gap-4 md:gap-6 no-scrollbar snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] h-[380px] md:w-[450px] md:h-auto bg-[#E4DBCD] border border-[#BEB4A5] rounded-[24px] md:rounded-[32px] pt-1 px-4 pb-4 md:p-8 lg:p-10 flex flex-col justify-between snap-start overflow-hidden"
            >
              <div className="space-y-1 md:space-y-6">
                {/* Feature Image */}
                <div className="relative w-[235px] h-[151px] md:w-full md:h-auto md:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-0 md:mb-4 mx-auto">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Badge */}
                <div className={`flex items-center justify-center bg-[#FAF9F6] border border-[#183A39]/10 rounded-full h-[19px] md:w-fit md:h-auto md:px-4 md:py-1 md:bg-white translate-y-0 md:translate-y-0 ${card.category === 'Activity Bundles' ? 'w-[106px]' : 'w-[82px]'}`}>
                  <span className="font-jubilat text-[12px] md:text-[14px] text-[#183A39] whitespace-nowrap">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5 md:space-y-3 translate-y-0 md:translate-y-0">
                  <h3 className="font-jubilat text-[16px] md:text-[24px] font-bold text-[#183A39] leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-jubilat text-[14px] md:text-[16px] text-[#183A39]/80 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-4 md:mt-8">
                <button className="bg-[#183A39] text-white rounded-full flex items-center justify-center w-[74px] h-[32px] md:w-fit md:px-8 md:py-2.5 font-jubilat text-[12px] md:text-[16px] font-medium hover:bg-[#183A39]/90 transition-colors shadow-sm whitespace-nowrap">
                  {card.buttonText}
                </button>
              </div>
            </div>
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
