"use client";

import { useMobileMenu } from "@/contexts/MobileMenuContext";
import EnrollForQuiz from "./EnrollForQuiz";

const EnrollForQuizWrapper = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  
  return <EnrollForQuiz isMobileMenuOpen={isMobileMenuOpen} />;
};

export default EnrollForQuizWrapper;
