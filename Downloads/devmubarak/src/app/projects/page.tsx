"use client";

import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import BackToTop from "@/components/BackToTop";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden transition-colors duration-300">
      {/* Back to Top Button */}
      <BackToTop />
      {/* Navigation */}
      <Navigation />
      {/* Projects Content */}
      <div className="pt-16 pb-16">
        {/* Projects Section */}
        <ProjectsSection />
      </div>
    </div>
  );
}