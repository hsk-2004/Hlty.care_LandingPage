"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ParentStoriesSection() {
  const stories = [
    {
      title: "AROUND FOOD",
      content: [
        "“We stopped trying to ‘fix’ meals.”",
        "Dinner used to feel like a negotiation every night. We'd plan, explain, bargain — and still end up frustrated.",
        "What changed wasn't the food. It was when we stopped centering the conversation on eating and let routine do the work. Same setup, same timing, less commentary.",
        "Some days nothing gets touched. Some days it does. Either way, dinner feels calmer now — and that alone feels like progress."
      ]
    },
    {
      title: "AROUND SCREENS",
      content: [
        "“Screens weren't the problem. Transitions were.”",
        "We thought we had a screen-time issue. What we actually had was a stopping issue.",
        "Once we started paying attention to how screens ended — not how long they lasted — things shifted. A warning, a repeatable cue, the same next step every time.",
        "It didn't make screens disappear. It just made evenings smoother. That was enough."
      ]
    },
    {
      title: "AROUND MOVEMENT",
      content: [
        "“Exercise was never going to happen.”",
        "Between school, homework, and exhaustion, structured activity just wasn't realistic.",
        "We stopped aiming for “exercise” and started noticing movement where it already showed up — on the way to the lift, during play, while waiting for dinner.",
        "Nothing dramatic changed. But movement stopped feeling like a task. And that felt sustainable."
      ]
    },
    {
      title: "AROUND ROUTINES",
      content: [
        "“Bedtime stopped being a daily reset.”",
        "Every night felt like starting from scratch. Different rules, different reactions, different outcomes.",
        "What helped was deciding fewer things. Same order. Same tone. Same end.",
        "It's still not perfect. But it's predictable — and that's made a bigger difference than any bedtime tip we tried before."
      ]
    }
  ];

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
            className="w-full h-auto"
          />
          <h2 className="absolute font-jubilat text-[32px] md:text-[48px] lg:text-[56px] xl:text-[42px] text-[#183A39] text-center">
            Parent stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white pt-4 md:pt-5 lg:pt-6 px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 rounded-sm flex flex-col gap-3 xl:w-[531px] xl:h-[251px] mx-auto overflow-hidden"
            >
              <h3 className="font-haptik font-bold text-[14px] md:text-[18px] xl:text-[20px] tracking-wider text-[#183A39]">
                {story.title}
              </h3>
              <div className="space-y-4">
                {story.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="font-haptik text-[16px] leading-[1.4] text-[#183A39]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Decoration Image at Bottom */}
        <div className="w-full max-w-[1164px] xl:w-[1164px] mx-auto mt-12 md:mt-16 flex justify-center">
          <Image
            src="/parents/parent 7.svg"
            alt="Decoration"
            width={1164}
            height={55}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
