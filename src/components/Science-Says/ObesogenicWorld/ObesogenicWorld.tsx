"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ObesogenicWorld() {
  const [obesoTab, setObesoTab] = useState("Overconsumption");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Obesogenic World content
  const obesogenicContent: Record<
    string,
    { title: string; desc: string; img: string }
  > = useMemo(
    () => ({
      Overconsumption: {
        title:
          "Ultra-processed foods at every \ncorner → kids eat more, move less.",
        desc: "Unhealthy choices are easy, cheap & everywhere.",
        img: "/overconsumption.png",
      },
      "Marketing & Media": {
        title:
          "Cartoons sell candy, influencers push\n junk → kids crave what they see.",
        desc: "Billions are spent every year on ads aimed at children, shaping tastes\n before healthy habits can form.",
        img: "/marketing.png",
      },
      "Environmental Shifts": {
        title:
          "Less play space, more screen\n space → kids sit more, run less.",
        desc: "Urbanization, unsafe streets, and shrinking play areas mean\n less movement, while screens dominate leisure time.",
        img: "/environment.png",
      },
    }),
    []
  );

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance slides on mobile
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % Object.keys(obesogenicContent).length
        );
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isMobile, obesogenicContent]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const obesogenicTabs = Object.keys(obesogenicContent);

  return (
    <section className="w-full bg-white py-12 px-4 text-center overflow-hidden">
      <motion.h2 
        className="text-3xl md:text-4xl font-extrabold text-primary mb-3 inline-block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-50px" }}
      >
        Obesogenic World
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
          viewport={{ once: false, margin: "-50px" }}
        />
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-8 mb-20">
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
                    } else if (offset.x < 0 && currentSlide < obesogenicTabs.length - 1) {
                      goToSlide(currentSlide + 1);
                    }
                  }
                }}
              >
                {obesogenicTabs.map((tab) => (
                  <div key={tab} className="w-full flex-shrink-0 px-4">
                    <div className="bg-soft-yellow w-full text-primary h-[550px] flex flex-col">
                      {/* Main Content Area */}
                      <div className="flex-1 p-6 flex flex-col">
                        {/* Tab Name Heading */}
                        <motion.h2
                          className="text-2xl font-bold text-center mb-4"
                          style={{ color: "#11595F" }}
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
                              src={obesogenicContent[tab].img}
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
                            <h3 className="text-xl font-bold mb-2 text-primary">
                              {renderWithLineBreaks(
                                obesogenicContent[tab].title
                              )}
                            </h3>
                            <p className="text-lg text-primary font-light">
                              {renderWithLineBreaks(
                                obesogenicContent[tab].desc
                              )}
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      {/* White Paper Coming Soon - Attached to bottom */}
                      <div className="bg-medium-yellow py-2 px-6">
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
              {obesogenicTabs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-soft-yellow" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Tabs
          <>
            <motion.div 
              className="grid grid-cols-3 w-full text-center text-xl font-medium gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              {obesogenicTabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setObesoTab(tab)}
                  className={`py-3 transition-colors duration-200 font-bold cursor-pointer ${
                    obesoTab === tab
                      ? "bg-soft-yellow text-primary"
                      : "bg-medium-yellow text-primary hover:bg-yellow-150"
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
              className="bg-soft-yellow w-full p-8 text-primary min-h-[250px] flex items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                <motion.div
                  key={`${obesoTab}-image`}
                  initial={{ opacity: 0, x: -50, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={obesogenicContent[obesoTab].img}
                    alt={`${obesoTab} Illustration`}
                    width={160}
                    height={160}
                    className="flex-shrink-0"
                  />
                </motion.div>
                <motion.div 
                  className="text-left flex-1"
                  key={`${obesoTab}-content`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <h3 className="text-3xl font-bold mb-2">
                    {renderWithLineBreaks(obesogenicContent[obesoTab].title)}
                  </h3>
                  <p className="text-xl text-primary font-light">
                    {renderWithLineBreaks(obesogenicContent[obesoTab].desc)}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}

        {/* White paper coming soon - Desktop only */}
        {!isMobile && (
          <p className="text-gray-400 max-w-4xl mx-auto bg-medium-yellow py-2 italic">
            White paper coming soon
          </p>
        )}
      </div>
    </section>
  );
}
