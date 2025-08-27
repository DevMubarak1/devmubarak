"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";
import BackgroundElements from "@/components/BackgroundElements";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function About() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("About page theme changed to:", theme);
    if (typeof window !== "undefined") {
      document.body.className = document.body.className.replace(/theme-\w+/, '') + ` theme-${theme}`;
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Back to Top Button */}
      <BackToTop />

      {/* Global Floating Background Elements */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* About Content */}
      <div className="pt-16 pb-16">
        {/* Work Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  );
} 