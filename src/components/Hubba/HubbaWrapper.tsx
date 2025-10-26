"use client";

import { useMobileMenu } from "@/contexts/MobileMenuContext";
import Hubba from "./Hubba";

const HubbaWrapper = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  
  return <Hubba isMobileMenuOpen={isMobileMenuOpen} />;
};

export default HubbaWrapper;
