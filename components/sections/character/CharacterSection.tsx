import React from 'react';
import Image from 'next/image';
const characters = [
  {
    name: "Theo",
    tagline: "The Curious Storyteller",
    bio: "Curious and intelligent with a passion for discovery. Theo's inquisitive nature drives him to explore the world, seeking knowledge and adventure and bringing people together along the way.",
    image: "/character/theo.png",
    width: 659,
    height: 485
  },
  {
    name: "Luca",
    tagline: "The Sunny One",
    bio: "Bright, cheerful and always radiating positivity. Luca sees the silver lining in every situation and spreads warmth, light and a carefree spirit wherever he goes.",
    image: "/character/luca.png",
    width: 686,
    height: 715
  },
  {
    name: "Lila",
    tagline: "The Gentle Guide",
    bio: "Serene and introspective, Lila embodies the calm and mystique of the moon. She finds beauty in silence and solace in the stars, always illuminating the darkness with her soft glow.",
    image: "/character/lila.png",
    width: 483,
    height: 652
  },
  {
    name: "Kai",
    tagline: "The Athlete",
    bio: "Energetic and adventurous, Kai is always on the move and ready for the next challenge. His laid-back attitude draws people in, while his deep empathy makes him a trusted friend and confidant.",
    image: "/character/kai.png",
    width: 562,
    height: 631
  },
  {
    name: "Aria",
    tagline: "The Soulful Artist",
    bio: "Soulful and deeply connected to music, Aria expresses her emotions through song and dance. Her gentle nature and vibrant creativity encourage everyone to celebrate their individuality.",
    image: "/character/aria.png",
    width: 395,
    height: 795
  },
  {
    name: "Faye",
    tagline: "The Enchanting One",
    bio: "Whimsical and enchanting, Faye sees the world through a lens of wonder. Playful yet wise, her presence is comforting and ethereal like a gentle breeze bringing calm and a touch of magic.",
    image: "/character/faye.png",
    width: 545,
    height: 697
  },
  {
    name: "Nami",
    tagline: "The Free Spirit",
    bio: "Free-spirited and adventurous like the ocean she's named after. Calm under pressure, deeply intuitive, and always bringing balance to any situation with a touch of mystery.",
    image: "/character/nami.png",
    width: 431,
    height: 710
  },
  {
    name: "Rhythm",
    tagline: "The Dancer",
    bio: "Lively and passionate, Rhythm embodies the heartbeat of music. With every move he brings joy and energy, always experimenting with new styles and inspiring others to find their own groove.",
    image: "/character/rhythm.png",
    width: 481,
    height: 734
  },
  {
    name: "Zac",
    tagline: "The New Kid on the Block",
    bio: "Zac is the newest HAHA Squad member. He's warm, funny, and real. When we meet Zac, he's a regular kid who loves snacks and hates moving. But when he joins the HAHA Squad, everything changes. Zac's journey is about taking small steps, finding friends, and discovering that being healthy can be fun.",
    image: "/character/zac.png",
    width: 254,
    height: 492
  },
  {
    name: "Dr. Dhanish",
    tagline: "The Compassionate Healer",
    bio: "A compassionate healer who blends ancient wisdom with modern practices. His deep knowledge of nutrition and holistic health empowers others to embrace wellbeing and his playful spirit brings joy to every healing journey.",
    image: "/character/Dr. Dhanish.png",
    width: 348,
    height: 737
  },
  {
    name: "Dr. Ayla",
    tagline: "The Vibrant Nutritionist",
    bio: "Vibrant and empathetic, Dr. Ayla promotes holistic health through creative meal plans and wellness workshops. Her infectious enthusiasm inspires everyone to embrace healthy living and thrive together.",
    image: "/character/Dr. Ayla.png",
    width: 401,
    height: 758
  },
  {
    name: "Patti",
    tagline: "The Warm-Hearted Grandma",
    bio: "A warm-hearted grandmother with a treasure trove of stories and wisdom. Her kitchen is a haven of delicious aromas and comforting meals and her love nurtures both family and blossoming plants.",
    image: "/character/Patti.png",
    width: 519,
    height: 715
  },
  {
    name: "Thatha",
    tagline: "The Wise Elder",
    bio: "Gentle, patient and full of quiet wisdom. Grandpa has lived a thousand stories and loves sharing every one. His steady presence reminds the little ones that growing old is just growing more wonderful.",
    image: "/character/Thatha.png",
    width: 399,
    height: 858
  }
];

const CharacterSection = () => {
  return (
    <section className="h-[4167px] bg-[#E4DBCD] w-[95%] lg:w-[1435px] mx-auto rounded-[40px] mt-12 mb-12 flex flex-col items-center p-4 md:p-8 overflow-hidden" id="character-section">
        {/* Character Cards Container */}
        <div className="relative w-full max-w-[1345px] mx-auto min-h-[4069px]">
          {/* Main Background Image (Dashed Box) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/character/cc2.svg"
              alt="Character Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Content Layer */}
          <div className="relative z-10 hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-24 px-10 pt-20">
            {characters.map((char, index) => (
              <div 
                key={index}
                style={{ width: `${char.width}px`, height: `${char.height}px` }}
                className="relative flex flex-col items-center justify-end group transition-all duration-300"
              >
                {/* Character Image - Positioned Behind */}
                <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Text Content - Positioned in Front */}
                <div 
                  style={{ width: '411px', height: '244px' }}
                  className="relative z-10 bg-[#F0EEE6] rounded-[40px] p-8 flex flex-col justify-center shadow-2xl border border-[#183A39]/10 mb-[-60px]"
                >
                  <h2 className="font-bitcountink text-[48px] text-[#183A39] leading-none mb-1">{char.name}</h2>
                  <h3 className="font-haptik text-[18px] text-[#183A39] font-bold italic mb-3">{char.tagline}</h3>
                  <p className="font-jubilat text-[15px] text-[#1a3636] leading-[1.4]">
                    {char.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Content Layer */}
          <div className="lg:hidden relative z-10 flex flex-col gap-12 mb-8 w-full pt-10 px-4">
            {characters.map((char, index) => (
              <div key={index} className="relative flex flex-col items-center justify-end h-[350px]">
                {/* Character Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                <div className="relative z-10 p-6 bg-[#F0EEE6] rounded-[32px] border border-[#183A39]/5 shadow-lg w-full mb-[-40px]">
                  <h2 className="font-bitcountink text-[40px] text-[#183A39] leading-tight mb-0">{char.name}</h2>
                  <h3 className="font-haptik text-[18px] text-[#183A39] font-bold italic mb-4">{char.tagline}</h3>
                  <p className="font-jubilat text-[14px] text-[#1a3636] leading-[1.5]">
                    {char.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default CharacterSection;
