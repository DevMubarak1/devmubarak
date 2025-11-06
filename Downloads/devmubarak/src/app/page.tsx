"use client";

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
      {/* Hero Section */}
      <Hero />
    </div>
  );
}
