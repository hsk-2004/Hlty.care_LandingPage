"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  // {
  //   name: "Knowledge partner",
  //   image: "/images/company/authors-nest.png",
  // },
  {
    name: "Quiz partner",
    image: "/images/company/quizarre.png",
    link: "https://quizarre.in/",
  },
  // {
  //   name: "Event partner",
  //   image: "/images/company/solutionec.png",
  // },
  // {
  //   name: "Marketing partner",
  //   image: "/images/company/marketing-partner.png",
  // },
];

export default function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Determine if we have multiple partners or just one
  const isMultiplePartners = partners.length > 1;

  return (
    <div className="flex flex-col items-center mt-20 sm:mt-20 w-full px-4 overflow-hidden">
      <motion.h2 
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Partners
      </motion.h2>
      <motion.div 
        className={`mt-8 w-full max-w-4xl mx-auto ${
          isMultiplePartners 
            ? "grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8" 
            : "flex justify-center"
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {partners.map((name, i) => (
          <motion.a 
            key={i} 
            className="flex flex-col items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            href={name?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`rounded-lg ${
              isMultiplePartners 
                ? "w-24 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24" 
                : "w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40"
            }`}>
              <Image 
                src={name?.image} 
                alt={name?.name} 
                width={isMultiplePartners ? 200 : 400} 
                height={isMultiplePartners ? 200 : 400} 
                className="object-contain w-full h-full" 
              />
            </div>
            <p className={`font-semibold text-primary text-center ${
              isMultiplePartners 
                ? "mt-2 sm:mt-3 text-xs sm:text-sm" 
                : "mt-3 sm:mt-4 text-sm sm:text-base"
            }`}>
              {name?.name}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
