"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import BackgroundElements from "@/components/BackgroundElements";
import BackToTop from "@/components/BackToTop";

export default function Toolbox() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("Toolbox page theme changed to:", theme);
    if (typeof window !== "undefined") {
      document.body.className = document.body.className.replace(/theme-\w+/, '') + ` theme-${theme}`;
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Back to Top Button */}
      <BackToTop />

      {/* Global Floating Background Elements */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* Toolbox Content */}
      <div className="pt-16 pb-16">
        {/* Services Section */}
        <ServicesSection />
      </div>
    </div>
  );
} 