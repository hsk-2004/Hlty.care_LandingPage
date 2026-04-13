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
          <h2 className="font-jubilat text-[clamp(24px,6vw,36px)] md:text-[32px] lg:text-[28px] xl:text-[36px] text-[#183A39] leading-tight">
            Everything your family needs to<br />
            <span className="font-bold">stay healthy in one world</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 gap-4 md:gap-6 lg:justify-center no-scrollbar snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[clamp(280px,40vw,320px)] min-h-[clamp(420px,55vw,480px)] md:w-[clamp(320px,45vw,400px)] lg:w-[230px] lg:min-h-[360px] xl:w-[290px] xl:min-h-[440px] bg-[#E4DBCD] border border-[#BEB4A5] rounded-[24px] md:rounded-[32px] pt-1 px-4 pb-4 md:p-6 lg:p-4 xl:p-6 flex flex-col justify-between snap-start transition-all"
            >
              <div className="space-y-[clamp(4px,2vw,16px)] md:space-y-4 lg:space-y-2 xl:space-y-4">
                {/* Feature Image */}
                <div className="relative w-full h-[clamp(151px,20vw,200px)] lg:h-[160px] xl:h-[200px] rounded-xl md:rounded-2xl overflow-hidden mb-0 md:mb-2 mx-auto">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Badge */}
                <div className={`flex items-center justify-center bg-[#FAF9F6] border border-[#183A39]/10 rounded-full h-[clamp(19px,3vw,28px)] md:w-fit md:h-auto md:px-4 md:py-1 md:bg-white ${card.category === 'Activity Bundles' ? 'w-[106px] lg:w-fit' : 'w-[82px] lg:w-fit'}`}>
                  <span className="font-jubilat text-[clamp(12px,2vw,14px)] md:text-[14px] lg:text-[11px] xl:text-[13px] text-[#183A39] whitespace-nowrap">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-[clamp(4px,1vw,8px)] md:space-y-2 lg:space-y-1">
                  <h3 className="font-jubilat text-[clamp(16px,4vw,22px)] md:text-[22px] lg:text-[18px] xl:text-[22px] font-bold text-[#183A39] leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-jubilat text-[clamp(14px,3vw,16px)] md:text-[16px] lg:text-[13px] xl:text-[14px] text-[#183A39]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-4 md:mt-6 lg:mt-4">
                {index === 1 ? (
                  <button className="bg-[#183A39] text-white rounded-full flex items-center justify-center lg:w-[100px] lg:h-[30px] xl:w-[105px] xl:h-[32px] font-jubilat text-[clamp(12px,2vw,14px)] md:text-[14px] lg:text-[11px] xl:text-[12px] font-medium hover:bg-[#183A39]/90 transition-colors shadow-sm whitespace-nowrap">
                    {card.buttonText}
                  </button>
                ) : (
                  <button className="border-2 border-[#183A39]/40 text-[#183A39] rounded-full flex items-center justify-center w-[clamp(110px,25vw,140px)] lg:w-[120px] lg:h-[36px] xl:w-[130px] xl:h-[38px] font-jubilat text-[clamp(12px,2vw,14px)] md:text-[14px] lg:text-[12px] xl:text-[13px] font-bold cursor-default whitespace-nowrap">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Scrollable Illustration Container */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="font-jubilat text-[20px] md:text-[32px] lg:text-[28px] xl:text-[32px] text-[#183A39] mb-8">
            Families are noticing the difference
          </h3>
        </div>
        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 md:mx-0">
          <div className="min-w-[1048px] md:min-w-0 md:max-w-7xl md:mx-auto lg:mx-auto md:px-4 pl-0">
            <div className="relative w-[1048px] h-[265px] md:w-full md:h-auto md:aspect-[1048/265] lg:w-[850px] lg:h-[280px] xl:w-[1000px] xl:h-[300px] lg:mx-auto">
              <Image
                src="/landingpage/intro-cards1.svg"
                alt="Feature Illustration Row"
                fill
                className="object-contain object-left md:object-center"
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
