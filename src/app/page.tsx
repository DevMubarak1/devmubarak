"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />
    </div>
  );
}
