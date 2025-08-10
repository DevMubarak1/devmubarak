"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/BackgroundElements";

export default function Home() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");

  // Debug theme changes
  useEffect(() => {
    console.log("Main page theme changed to:", theme);
    setCurrentTheme(theme || "light");
    
    // Force re-render by updating a class on the body
    if (typeof window !== "undefined") {
      document.body.className = document.body.className.replace(/theme-\w+/, '') + ` theme-${theme}`;
      
      // Also force the main container to update
      const mainContainer = document.querySelector('[data-theme-container]');
      if (mainContainer) {
        mainContainer.setAttribute('data-theme', theme || 'light');
      }
    }
  }, [theme]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300"
      data-theme-container
      data-theme={currentTheme}
      style={{
        backgroundColor: currentTheme === 'dark' ? '#000000' : 'transparent',
        color: currentTheme === 'dark' ? '#f8fafc' : 'inherit'
      }}
    >
      {/* Theme Debug Indicator - Remove this after testing */}
      <div 
        className="fixed top-4 left-4 z-[9999] bg-red-500 text-white px-2 py-1 rounded text-xs"
        style={{ display: process.env.NODE_ENV === 'development' ? 'block' : 'none' }}
      >
        Theme: {currentTheme}
      </div>

      {/* Global Floating Background Elements */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
