"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Follow from "../components/follow";
import FollowAlt from "../components/follow-alt";
import { MobileMenuProvider } from "../contexts/MobileMenuContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNavbar = pathname !== "/quiz";
  const isQuizPage = pathname === "/quiz";

  return (
    <MobileMenuProvider>
      {showNavbar && <Navbar />}
      
      {children}

      {/* ✅ Conditional Follow section */}
      {isQuizPage ? <FollowAlt /> : <Follow />}

      {/* ✅ Conditional Footer */}
      <Footer />
    </MobileMenuProvider>
  );
}
