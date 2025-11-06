"use client";

<<<<<<< HEAD
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden transition-colors duration-300">
      {/* Back to Top Button */}
      <BackToTop />
      {/* Navigation */}
      <Navigation />
=======
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BackgroundElements from "@/components/BackgroundElements";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const { theme } = useTheme();

  // Debug theme changes
  useEffect(() => {
    console.log("Main page theme changed to:", theme);
    // Force re-render by updating a class on the body
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

>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
      {/* Hero Section */}
      <Hero />
    </div>
  );
}
