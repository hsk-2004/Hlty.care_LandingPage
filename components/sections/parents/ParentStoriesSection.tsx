"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ParentStoriesSection() {
  return (
    <section className="w-full pb-20 pt-0 px-4 md:px-8 bg-[#F0EEE6]">
      <div className="max-w-[1290px] mx-auto">
        {/* Decoration Image at Start with Title Overlay */}
        <div className="w-full max-w-[1208px] xl:w-[1208px] mx-auto mb-12 md:mb-16 relative flex justify-center items-center">
          <Image
            src="/parents/parent6.svg"
            alt="Decoration"
            width={1208}
            height={207}
            className="hidden md:block w-full h-auto"
          />
          <h2 className="md:absolute font-jubilat text-[32px] md:text-[48px] lg:text-[56px] xl:text-[42px] text-[#183A39] text-center">
            Parent stories
          </h2>
        </div>

        {/* Featured Content Boxes (Green, Red, Yellow) */}
        <div className="flex flex-col items-center lg:items-stretch lg:justify-center gap-16 md:gap-20 lg:gap-12 mt-16 max-w-[1240px] mx-auto pb-24 overflow-visible px-6">
          {/* Green Box: Left Aligned for Desktop */}
          <div className="relative w-full lg:w-[740px] lg:h-[371px] flex justify-center lg:self-start rotate-[4.49deg] lg:-rotate-[3.09deg]">
            {/* Desktop Box */}
            <Image
              src="/parents/green-box.svg"
              alt="Green Adventure Box"
              width={740}
              height={371}
              className="hidden md:block w-full h-auto object-contain"
            />
            {/* Mobile Box */}
            <Image
              src="/parents/green-mbox.svg"
              alt="Green Adventure Box Mobile"
              width={388}
              height={346}
              className="md:hidden w-full h-auto object-contain"
            />
            {/* Story Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 lg:px-16 text-[#183A39] text-left pointer-events-none overflow-hidden">
              <h3 className="font-haptik font-bold text-[12px] md:text-[15px] lg:text-[16px] tracking-wider mb-0.5 md:mb-2">
                AROUND SLEEP
              </h3>
              <p className="font-haptik italic text-[11px] md:text-[16px] lg:text-[19px] leading-tight mb-1 md:mb-4">
                "Bedtime wasn't the problem, stimulation was."
              </p>
              <div className="font-haptik text-[9.5px] md:text-[13px] lg:text-[14px] leading-[1.3] space-y-1.5 md:space-y-3">
                <p>
                  We used to think our kids just “weren’t sleepy.” Nights felt like a battle of reminders, delays, and sudden bursts of energy right when lights were supposed to go off. What changed wasn’t the bedtime, it was the environment before it.
                </p>
                <p>
                  We started dimming the lights across the house, lowering the volume of music and TV, and slowing everything down about an hour before sleep. Fewer bright lights, fewer loud sounds, fewer exciting activities. The whole home shifted into a quieter rhythm.
                </p>
                <p>
                  Nothing dramatic, just softer light, softer voices, calmer energy. The kids began falling asleep faster. Even the adults felt sleepier sooner. Bedtime stopped feeling forced and started feeling natural. Turns out, sleep wasn’t something to “make happen.” It arrived on its own once the stimulation faded.
                </p>
              </div>
            </div>

            {/* Lamp Decoration (Desktop Only) */}
            <div className="absolute hidden lg:block -right-48 top-1/2 -translate-y-1/2 rotate-[3.09deg]">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/parents/lamp.svg"
                  alt="Lamp Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lamp Decoration (Mobile Only) */}
            <div className="absolute lg:hidden -right-4 top-[-60px] z-20">
              <div className="relative w-[130px] h-[130px]">
                <Image
                  src="/parents/lamp.svg"
                  alt="Lamp Illustration Mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Red Box: Right Aligned for Desktop */}
          <div className="relative w-full lg:w-[740px] lg:h-[411px] flex justify-center lg:self-end -rotate-[3.5deg] lg:rotate-[1.45deg]">
            {/* Desktop Box */}
            <Image
              src="/parents/red-box.svg"
              alt="Red Adventure Box"
              width={740}
              height={411}
              className="hidden md:block w-full h-auto object-contain"
            />
            {/* Mobile Box */}
            <Image
              src="/parents/red-mbox.svg"
              alt="Red Adventure Box Mobile"
              width={388}
              height={406}
              className="md:hidden w-full h-auto object-contain"
            />
            {/* Story Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 lg:px-16 text-[#183A39] text-left pointer-events-none overflow-hidden">
              <h3 className="font-haptik font-bold text-[12px] md:text-[15px] lg:text-[16px] tracking-wider mb-0.5 md:mb-2">
                AROUND JUNK FOOD
              </h3>
              <p className="font-haptik italic text-[11px] md:text-[16px] lg:text-[19px] leading-tight mb-1 md:mb-4">
                "Cravings weren't the problem, availability was."
              </p>
              <div className="font-haptik text-[9.5px] md:text-[13px] lg:text-[14px] leading-[1.3] space-y-1.5 md:space-y-3">
                <p>
                  We used to worry constantly about how much junk food the kids were eating. Whenever they were hungry, chips, sweets, or packaged snacks were the first things they asked for even when homemade food was right there.
                </p>
                <p>
                  What we realized was simple but uncomfortable: the kids weren’t the problem. The pantry was. Junk food is engineered to taste great, fill you up fast, and make you want more. As long as it was within reach, it always won the negotiation.
                </p>
                <p>
                  So we stopped bringing it home. No dramatic speeches, no strict policing just a quiet change in what was available. Instead, we kept fruits, nuts, and homemade snacks ready and visible.
                </p>
                <p>
                  At first, there was resistance. Then hunger did what hunger does. With no junk to fall back on, they started eating what was there. Over time, those foods stopped feeling like “second choice” and became normal.
                </p>
              </div>
            </div>

            {/* Chips Decoration (Desktop Only) */}
            <div className="absolute hidden lg:block -left-48 top-1/2 -translate-y-1/2 rotate-[-1.45deg]">
              <div className="relative w-[280px] h-[280px]">
                <Image
                  src="/parents/chips.svg"
                  alt="Chips Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Chips Decoration (Mobile Only) */}
            <div className="absolute lg:hidden -right-2 top-[-45px] -rotate-[10.34deg] z-20">
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src="/parents/chips.svg"
                  alt="Chips Illustration Mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Yellow Box: Left Aligned for Desktop */}
          <div className="relative w-full lg:w-[740px] lg:h-[451px] flex justify-center lg:self-start rotate-[2.58deg] lg:-rotate-[3.72deg]">
            {/* Desktop Box */}
            <Image
              src="/parents/yellow-box.svg"
              alt="Yellow Adventure Box"
              width={740}
              height={451}
              className="hidden md:block w-full h-auto object-contain"
            />
            {/* Mobile Box */}
            <Image
              src="/parents/yellow-mbox.svg"
              alt="Yellow Adventure Box Mobile"
              width={388}
              height={451}
              className="md:hidden w-full h-auto object-contain"
            />
            {/* Story Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 lg:px-16 text-[#183A39] text-left pointer-events-none overflow-hidden">
              <h3 className="font-haptik font-bold text-[12px] md:text-[15px] lg:text-[16px] tracking-wider mb-0.5 md:mb-2">
                AROUND SPORTS
              </h3>
              <p className="font-haptik italic text-[11px] md:text-[16px] lg:text-[19px] leading-tight mb-1 md:mb-4">
                "Participation wasn't the problem enjoyment was."
              </p>
              <div className="font-haptik text-[9.5px] md:text-[13px] lg:text-[14px] leading-[1.3] space-y-1.5 md:space-y-3">
                <p>
                  We worried that the kids were becoming inactive, full of energy, yet reluctant to play or stick with sports. So we did what most parents do: researched the "best" options and enrolled them in classes we believed would be good for them. But attendance was irregular, enthusiasm was low, and it often felt like we were pushing more than they were choosing.
                </p>
                <p>
                  What changed wasn't the sport, it was the sense of fun and ownership. When we finally asked them what they wanted, the answer was simple: they wanted to play where their friends were. Familiar faces, shared laughter, and a sense of belonging mattered more than the type of sport itself.
                </p>
                <p>
                  We switched to classes their friends attended. Suddenly, reminders weren't needed. They showed up willingly, stayed engaged, and looked forward to going. The same kids, the same energy just a different context.
                </p>
                <p>
                  It turned out they didn't need better coaching or stricter discipline. They needed fun, friendship, and a choice in the decision. Once those were in place, participation took care of itself.
                </p>
              </div>
            </div>

            {/* Boy Decoration (Desktop Only) */}
            <div className="absolute hidden lg:block -right-48 top-1/2 -translate-y-1/2 rotate-[3.72deg]">
              <div className="relative w-[280px] h-[280px]">
                <Image
                  src="/parents/boy.svg"
                  alt="Boy Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Boy Decoration (Mobile Only) */}
            <div className="absolute lg:hidden -right-4 top-[-50px] z-20">
              <div className="relative w-[115px] h-[115px]">
                <Image
                  src="/parents/boy.svg"
                  alt="Boy Illustration Mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
