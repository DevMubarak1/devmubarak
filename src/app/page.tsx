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
      className="relative overflow-hidden min-h-screen"
      data-theme-container
      data-theme={currentTheme}
      style={{
        background: currentTheme === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)' 
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 25%, #c7d2fe 50%, #e0e7ff 75%, #f8fafc 100%)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20"></div>

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20"></div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20"></div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20"></div>

      {/* Blog Section */}
      <BlogSection />

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20"></div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
