"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
interface Character {
  name: string;
  tagline: string;
  bio: string;
  image: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  textX?: number;
  textY?: number;
  textWidth?: number;
  textHeight?: number;
  imageX?: number;
  imageY?: number;
  imageScale?: number;
  rotate?: number;
}

const characters: Character[] = [
  {
    name: "Theo",
    tagline: "The Curious Storyteller",
    bio: "Curious and intelligent with a passion for discovery. Theo's inquisitive nature drives him to explore the world, seeking knowledge and adventure and bringing people together along the way.",
    image: "/character/theo.png",
    width: 659,
    height: 485,
    x: -350,
    y: -300,
    textX: 0,
    textY: 60,
    textWidth: 411,
    textHeight: 244,
    imageScale: 1.5,
    rotate: 3.08
  },
  {
    name: "Luca",
    tagline: "The Sunny One",
    bio: "Bright, cheerful and always radiating positivity. Luca sees the silver lining in every situation and spreads warmth, light and a carefree spirit wherever he goes.",
    image: "/character/luca.png",
    width: 686,
    height: 715,
    x: 700,
    y: -800,
    textX: 0,
    textY: 0,
    textWidth: 324,
    textHeight: 264,
    rotate: -5.55
  },
  {
    name: "Lila",
    tagline: "The Gentle Guide",
    bio: "Serene and introspective, Lila embodies the calm and mystique of the moon. She finds beauty in silence and solace in the stars, always illuminating the darkness with her soft glow.",
    image: "/character/lila.png",
    width: 483,
    height: 652,
    x: -300,
    y: -300,
    textX: 0,
    textY: 0,
    textWidth: 379,
    textHeight: 244,
    rotate: -5.55
  },
  {
    name: "Kai",
    tagline: "The Athlete",
    bio: "Energetic and adventurous, Kai is always on the move and ready for the next challenge. His laid-back attitude draws people in, while his deep empathy makes him a trusted friend and confidant.",
    image: "/character/kai.png",
    width: 562,
    height: 631,
    x: -200,
    y: -900,
    textX: 0,
    textY: 0,
    textWidth: 315,
    textHeight: 284,
    rotate: 7.78
  },
  {
    name: "Aria",
    tagline: "The Soulful Artist",
    bio: "Soulful and deeply connected to music, Aria expresses her emotions through song and dance. Her gentle nature and vibrant creativity encourage everyone to celebrate their individuality.",
    image: "/character/aria.png",
    width: 395,
    height: 795,
    x: 160,
    y: -1000,
    textX: 0,
    textY: 0,
    textWidth: 343,
    textHeight: 264,
    rotate: 4.5
  },
  {
    name: "Faye",
    tagline: "The Enchanting One",
    bio: "Whimsical and enchanting, Faye sees the world through a lens of wonder. Playful yet wise, her presence is comforting and ethereal like a gentle breeze bringing calm and a touch of magic.",
    image: "/character/faye.png",
    width: 545,
    height: 697,
    x: 280,
    y: -1300,
    textX: 0,
    textY: 0,
    textWidth: 389,
    textHeight: 260,
    rotate: -5.55
  },
  {
    name: "Nami",
    tagline: "The Free Spirit",
    bio: "Free-spirited and adventurous like the ocean she's named after. Calm under pressure, deeply intuitive, and always bringing balance to any situation with a touch of mystery.",
    image: "/character/nami.png",
    width: 431,
    height: 710,
    x: -700,
    y: -900,
    textX: 0,
    textY: 0,
    textWidth: 379,
    textHeight: 244,
    rotate: -5.55
  },
  {
    name: "Rhythm",
    tagline: "The Dancer",
    bio: "Lively and passionate, Rhythm embodies the heartbeat of music. With every move he brings joy and energy, always experimenting with new styles and inspiring others to find their own groove.",
    image: "/character/rhythm.png",
    width: 481,
    height: 734,
    x: 800,
    y: -1800,
    textX: 0,
    textY: 0,
    textWidth: 402,
    textHeight: 262,
    rotate: 2.19
  },
  {
    name: "Zac",
    tagline: "The New Kid on the Block",
    bio: "Zac is the newest HAHA Squad member. He's warm, funny, and real. When we meet Zac, he's a regular kid who loves snacks and hates moving. But when he joins the HAHA Squad, everything changes. Zac's journey is about taking small steps, finding friends, and discovering that being healthy can be fun.",
    image: "/character/zac.png",
    width: 254,
    height: 492,
    x: 0,
    y: -1200,
    textX: 0,
    textY: 0,
    textWidth: 410,
    textHeight: 314,
    imageX: 0,
    imageY: -200,
    rotate: 2.19
  },
  {
    name: "Dr. Dhanish",
    tagline: "The Compassionate Healer",
    bio: "A compassionate healer who blends ancient wisdom with modern practices. His deep knowledge of nutrition and holistic health empowers others to embrace wellbeing and his playful spirit brings joy to every healing journey.",
    image: "/character/Dr. Dhanish.png",
    width: 348,
    height: 737,
    x: -800,
    y: -1100,
    textX: 0,
    textY: 0,
    textWidth: 510,
    textHeight: 244,
    rotate: 2.19
  },
  {
    name: "Dr. Ayla",
    tagline: "The Vibrant Nutritionist",
    bio: "Vibrant and empathetic, Dr. Ayla promotes holistic health through creative meal plans and wellness workshops. Her infectious enthusiasm inspires everyone to embrace healthy living and thrive together.",
    image: "/character/Dr. Ayla.png",
    width: 401,
    height: 758,
    x: 700,
    y: -1800,
    textX: 0,
    textY: 0,
    textWidth: 446,
    textHeight: 244,
    rotate: -9.26
  },
  {
    name: "Patti",
    tagline: "The Warm-Hearted Grandma",
    bio: "A warm-hearted grandmother with a treasure trove of stories and wisdom. Her kitchen is a haven of delicious aromas and comforting meals and her love nurtures both family and blossoming plants.",
    image: "/character/Patti.png",
    width: 519,
    height: 715,
    x: -500,
    y: -1000,
    textX: 0,
    textY: 0,
    textWidth: 403,
    textHeight: 244,
    rotate: -9.26
  },
  {
    name: "Thatha",
    tagline: "The Wise Elder",
    bio: "Gentle, patient and full of quiet wisdom. Grandpa has lived a thousand stories and loves sharing every one. His steady presence reminds the little ones that growing old is just growing more wonderful.",
    image: "/character/Thatha.png",
    width: 399,
    height: 858,
    x: 300,
    y: -2000,
    textX: 0,
    textY: 0,
    textWidth: 413,
    textHeight: 244,
    rotate: -9.26,
    imageScale: 1.5
  }
];

const CharacterSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      // Only scale down on desktop when viewport is smaller than design width
      if (w >= 1024 && w < 1435) {
        setScale(w / 1435);
      } else {
        setScale(1);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section
      style={{ height: scale < 1 ? `${Math.round(4167 * scale)}px` : '4167px' }}
      className="bg-[#E4DBCD] w-[95%] max-w-[1435px] mx-auto rounded-[40px] mt-12 mb-12 flex flex-col items-center p-4 md:p-8 overflow-hidden"
      id="character-section"
    >
      {/* Scale wrapper — at 100% scale=1 (no change), at 150% zoom it shrinks */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: scale < 1 ? '1435px' : '100%',
        }}
      >
        {/* Character Cards Container — UNTOUCHED from original */}
        <div className="relative w-full max-w-[1345px] mx-auto min-h-[4069px]">
          <h1 className="font-bitcount text-[60px] lg:text-[100px] text-[#183A39] leading-none mb-8 lg:mb-12 pt-10 relative z-20 text-center uppercase">
            Cast of Characters
          </h1>
          {/* Main Background Image (Dashed Box) */}
          <div className="absolute inset-0 z-0" style={{ height: '4069px' }}>
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
                style={{
                  width: `${char.width}px`,
                  height: `${char.height}px`,
                  transform: `translate(${char.x || 0}px, ${char.y || 0}px)`
                }}
                className="relative flex flex-col items-center justify-end group transition-all duration-300"
              >
                {/* Character Image - Positioned Behind */}
                <div
                  style={{
                    transform: `translate(${char.imageX || 0}px, ${char.imageY || 0}px) scale(${char.imageScale || 1})`
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                >
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Text Content - Positioned in Front */}
                <div
                  style={{
                    width: `${char.textWidth || 411}px`,
                    height: `${char.textHeight || 244}px`,
                    transform: `translate(${char.textX || 0}px, ${char.textY || 0}px) rotate(${char.rotate || 0}deg)`
                  }}
                  className="relative z-10 bg-[#E4DBCD] rounded-[20px] p-8 flex flex-col justify-center shadow-2xl border-[4px] border-[#BEB4A5] mb-[-60px]"
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

                <div className="relative z-10 p-6 bg-[#E4DBCD] rounded-[20px] border-[4px] border-[#BEB4A5] shadow-lg w-full mb-[-40px]">
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
      </div>
    </section>
  );
};

export default CharacterSection;
