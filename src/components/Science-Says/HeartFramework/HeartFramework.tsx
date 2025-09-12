"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeartFramework() {
  const [heartTab, setHeartTab] = useState("Habits");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // HEART content
  const heartContent: Record<
    string,
    { title: string; desc: string; fact: string; img: string }
  > = useMemo(() => ({
    Habits: {
      title: "Build your child's habit loop",
      desc: "Tiny routines, big brain rewires.",
      fact: "From brushing teeth to packing a healthy lunch, small\nconsistent cues turn into lifelong wellness habits.",
      img: "/habits.png",
    },
    Emotions: {
      title: "Nurture healthy emotional anchors",
      desc: "Feelings drive food, play, and choices.",
      fact: "By modeling positive coping skills, parents can reduce\nstress-eating, boost joy in movement, and foster resilience.",
      img: "/emotions.png",
    },
    Actions: {
      title: "Shape family actions together",
      desc: "What families do daily builds identity.",
      fact: "Tech-free dinners, cooking together, or evening walks\ncreate shared rituals that strengthen health and bonding.",
      img: "/actions.png",
    },
    Rest: {
      title: "Prioritize rest for growing minds",
      desc: "Sleep is the hidden superpower.",
      fact: "9+ hours for kids fuels better focus, immunity, and\nemotional balance—yet today's routines often cut it short.",
      img: "/rest.png",
    },
    Technology: {
      title: "Turn tech into a friend, not foe",
      desc: "Screen time or green time—it shapes health.",
      fact: "Balance digital play with outdoor activity. Use apps, planners,\nand positive nudges to make devices support healthy goals.",
      img: "/technology.png",
    },
  }), []);


  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance slides on mobile
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Object.keys(heartContent).length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isMobile, heartContent]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const heartTabs = Object.keys(heartContent);

  return (
    <section className="w-full bg-white py-12 px-4 text-center overflow-hidden">
      <motion.h2 
        className="text-3xl md:text-4xl font-extrabold text-primary mb-3 inline-block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        H.E.A.R.T Framework
        <motion.div
          className="mt-2 w-3/4 mx-auto"
          style={{
            height: "3px",
            background:
              "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        />
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-8 mb-12">
        {isMobile ? (
          // Mobile Slider
          <div className="relative">
            {/* Slider Container */}
            <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const threshold = 50;
                if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > 500) {
                  if (offset.x > 0 && currentSlide > 0) {
                    goToSlide(currentSlide - 1);
                  } else if (offset.x < 0 && currentSlide < heartTabs.length - 1) {
                    goToSlide(currentSlide + 1);
                  }
                }
              }}
            >
                {heartTabs.map((tab) => (
                  <div key={tab} className="w-full flex-shrink-0 px-4">
                    <div className="bg-bright-teal text-white w-full h-[600px] flex flex-col">
                      {/* Main Content Area */}
                      <div className="flex-1 p-6 flex flex-col">
                        {/* Tab Name Heading */}
                        <motion.h2 
                          className="text-2xl font-bold text-center mb-4" 
                          style={{ color: '#11595F' }}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {tab}
                        </motion.h2>
                        
                        {/* Content Area */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <Image
                              src={heartContent[tab].img}
                              alt={`${tab} Illustration`}
                              width={160}
                              height={160}
                              className="flex-shrink-0 mb-4"
                            />
                          </motion.div>
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            <h3 className="text-2xl font-bold mb-2 text-white">
                              {heartContent[tab].title}
                            </h3>
                            <p className="mb-3 text-lg text-primary font-semibold">
                              {heartContent[tab].desc}
                            </p>
                            <p className="text-sm font-normal text-white">
                              {heartContent[tab].fact}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* White Paper Coming Soon - Attached to bottom */}
                      <div className="bg-soft-green py-2 px-6">
                        <p className="text-gray-400 text-center italic text-sm">
                          White paper coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>


            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {heartTabs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 transition-colors ${
                    currentSlide === index ? "bg-bright-teal" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Tabs
          <>
            {/* Tabs */}
            <motion.div 
              className="grid grid-cols-5 w-full text-center text-xl font-medium gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              {heartTabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setHeartTab(tab)}
                  className={`py-3 transition-colors font-bold duration-200 cursor-pointer ${
                    heartTab === tab
                      ? "bg-bright-teal text-white"
                      : "bg-soft-green text-primary"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>

            {/* Content - Fixed Height */}
            <motion.div 
              className="bg-bright-teal text-white w-full p-8 min-h-[300px] flex items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                <motion.div
                  key={`${heartTab}-image`}
                  initial={{ opacity: 0, x: -50, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={heartContent[heartTab].img}
                    alt={`${heartTab} Illustration`}
                    width={160}
                    height={160}
                    className="flex-shrink-0"
                  />
                </motion.div>
                <motion.div 
                  className="text-left flex-1"
                  key={`${heartTab}-content`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <h3 className="text-4xl font-bold mb-2">
                    {heartContent[heartTab].title}
                  </h3>
                  <p className="mb-4 text-2xl text-primary font-semibold">
                    {heartContent[heartTab].desc}
                  </p>
                  <p className="text-lg font-normal">
                    {heartContent[heartTab].fact}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
        
        {/* White paper coming soon - Desktop only */}
        {!isMobile && (
          <p className="text-gray-400 max-w-4xl mx-auto bg-soft-green py-2 italic">
            White paper coming soon
          </p>
        )}
      </div>
    </section>
  );
}
