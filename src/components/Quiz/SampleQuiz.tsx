"use client";
import { useState } from "react";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const quizItems = [
  {
    question:
      "In which yoga pose do you sit cross-legged with your hands resting on your knees and focus on your breath to achieve relaxation and mental clarity?",
    answer: 1,
    options: ["Virasana", "Padmasana", "Bhujangasana", "Siddhasana"],
    correctOption: "Padmasana",
  },
  {
    question: "The masseter is one of the strongest muscles in the human body, and can exert a force of up to 90 kg. In which part of the body will you find it?",
    answer: 0,
    options: ["Mouth", "Thighs", "Arms", "Back"],
    correctOption: "Mouth",
  },
  {
    question: "Vitamin B1, also known as thiamine, helps the body convert carbohydrates into energy. What common deficiency disease is associated with a lack of this vitamin?",
    answer: 3,
    options: ["Rickets", "Anemia", "Diabetes", "Beriberi"],
    correctOption: "Beriberi",
  },
  // {
  //   question: "What part of the human brain controls balance and coordination?",
  //   answer: 2,
  //   options: ["Cerebrum", "Medulla", "Cerebellum", "Hypothalamus"],
  //   correctOption: "Cerebellum",
  // },
];

export default function SampleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showNext, setShowNext] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [questionAnimating, setQuestionAnimating] = useState<boolean>(false);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent multiple selections

    setSelectedOption(optionIndex);
    setShowNext(true);

    // Check if answer is correct
    if (optionIndex === quizItems[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizItems.length - 1) {
      setIsAnimating(true);
      setQuestionAnimating(true);

      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowNext(false);
        setIsAnimating(false);
        setQuestionAnimating(false);
      }, 500);
    } else {
      // Show score after last question
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowNext(false);
    setScore(0);
    setShowScore(false);
    setIsAnimating(false);
    setQuestionAnimating(false);
  };

  if (showScore) {
    return (
      <section className="w-full">
        <div className="w-full pt-6 bg-soft-green flex justify-center px-4" style={{ minHeight: '450px' }}>
          <div className="max-w-4xl mx-auto py-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2
                  className={`text-4xl font-bold text-primary mb-4 ${caveat.className}`}
                >
                  🎉 Yay! Quiz Complete!
                </h2>
                <p className="text-2xl text-primary mb-6">
                  Your Score:{" "}
                  <span className="font-bold text-yellow-600">
                    {score}/{quizItems.length}
                  </span>
                </p>
                <p className="text-lg text-primary mb-8">
                  {score === quizItems.length
                    ? "Perfect! You got all questions right! 🌟"
                    : score >= quizItems.length * 0.7
                    ? "Great job! You did really well! 👏"
                    : "Good effort! Keep learning! 💪"}
                </p>
                <button
                  onClick={resetQuiz}
                  className="bg-yellow text-white px-8 py-3 rounded-lg font-bold text-lg cursor-pointer hover:bg-yellow/90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-8 -mb-1 mt-0">
          <Image
            src="/waves-light.png"
            alt="Waves-alt"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden">
      <div className="w-full pt-6 bg-soft-green flex justify-center px-4" style={{ minHeight: '450px' }}>
        <div className="max-w-4xl mx-auto py-8">
          <div className="text-center">
            <h2 className="text-primary text-2xl sm:text-3xl font-bold mb-4 inline-block">
              Think Your Students Are Ready?
              <div
                className="mt-3 w-3/4 mx-auto"
                style={{
                  height: "3px",
                  background:
                    "repeating-linear-gradient(to right, #6EBCC2 0px, #6EBCC2 8px, transparent 8px, transparent 16px)",
                }}
              />
            </h2>
          </div>
          <p className="text-center text-primary mb-6 text-lg sm:text-xl font-bold">
            Sample Quiz Question
          </p>

          {/* Fixed height container for quiz content */}
          <div className="min-h-[200px]">
            <div
              className={`transition-all duration-500 ${
                questionAnimating
                  ? "opacity-0 transform translate-x-4"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              <p className="text-primary text-center text-sm sm:text-base md:text-lg mb-6 min-h-[50px] flex items-center justify-center">
                {quizItems[currentQuestion].question}
              </p>

              <div className="text-primary grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-2 sm:gap-x-2 justify-center mb-6 min-h-[80px] items-center">
                {quizItems[currentQuestion].options.map((option, i) => {
                  const isSelected = selectedOption === i;
                  const isCorrect = i === quizItems[currentQuestion].answer;

                  return (
                    <div
                      key={i}
                      className={`transition-all duration-300 transform w-full sm:w-auto ${
                        isAnimating
                          ? "opacity-0 -translate-x-4"
                          : "opacity-100 translate-x-0"
                      } ${
                        selectedOption === null
                          ? "cursor-pointer hover:scale-105"
                          : isSelected
                          ? "cursor-default"
                          : "cursor-not-allowed opacity-50"
                      }`}
                      onClick={() => handleOptionSelect(i)}
                    >
                      <div
                        className={`px-3 py-2 sm:px-6 sm:py-2 rounded-xl text-xs sm:text-base transition-all duration-300 text-center ${
                          selectedOption === null
                            ? "bg-white hover:bg-gray-50"
                            : isSelected
                            ? isCorrect
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                            : isCorrect
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {option}
                        {isSelected && (
                          <span className="ml-2">{isCorrect ? "✅" : "❌"}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fixed height container for progress and controls */}
          <div className="min-h-[60px] flex flex-col justify-center">
            <div className="text-primary text-bold flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm">
                  Question {currentQuestion + 1} of {quizItems.length}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / quizItems.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="min-h-[40px] flex items-center justify-center">
                {showNext && (
                  <button
                    onClick={handleNext}
                    className="bg-yellow text-white px-6 py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-yellow/90 transition-all duration-300 hover:scale-105"
                  >
                    {currentQuestion < quizItems.length - 1
                      ? "Next Question"
                      : "See Results"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full h-8 -mb-1 mt-0"> */}
        <Image
          src="/waves-light.svg"
          alt="Waves-alt"
          width={1000}
          height={30}
          priority
          className="w-full"
        />
      {/* </div> */}
    </section>
  );
}
