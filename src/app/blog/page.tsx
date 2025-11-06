"use client";

<<<<<<< HEAD
import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import BackToTop from "@/components/BackToTop";

export default function Blog() {
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
import BlogSection from "@/components/BlogSection";
import BackgroundElements from "@/components/BackgroundElements";
import BackToTop from "@/components/BackToTop";

export default function Blog() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("Blog page theme changed to:", theme);
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
      {/* Blog Content */}
      <div className="pt-16 pb-16">
        {/* Blog Section */}
        <BlogSection />
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
} 
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
