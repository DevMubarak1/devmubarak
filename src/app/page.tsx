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
      className="relative overflow-hidden"
      data-theme-container
      data-theme={currentTheme}
      style={{
        background: currentTheme === 'dark' 
          ? 'linear-gradient(to bottom right, #0a0a0a, #1e1e1e, #0a0a0a)' 
          : 'linear-gradient(to bottom right, #f8fafc, #e0e7ff, #e0e7ff)',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Global Floating Background Elements */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Section Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Section Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Section Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>

      {/* Blog Section */}
      <BlogSection />

      {/* Section Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
