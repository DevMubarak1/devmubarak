"use client";

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
      {/* Blog Content */}
      <div className="pt-16 pb-16">
        {/* Blog Section */}
        <BlogSection />
      </div>
    </div>
  );
}