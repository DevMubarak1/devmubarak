"use client";

import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import BackToTop from "@/components/BackToTop";

export default function Toolbox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden transition-colors duration-300">
      {/* Back to Top Button */}
      <BackToTop />
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