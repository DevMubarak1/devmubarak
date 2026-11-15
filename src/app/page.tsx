"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Send,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  Download,
  Cpu,
  Server,
  Eye,
  Menu,
  X,
  Heart,
  Terminal,
  ChevronDown,
} from "lucide-react";

// Data imports (extracted to separate files)
import { ARTICLES } from "@/data/articles";
import { PROJECTS, ProjectCategory } from "@/data/projects";
import {
  NAV_LINKS,
  SOCIAL_PILLS,
  FOOTER_PILLS,
  ACHIEVEMENTS,
  SKILLS,
  WORK_EXPERIENCE,
} from "@/data/constants";

// Component imports
import { ProjectVideo } from "@/components/ProjectVideo";
import {
  AnimatedSection,
  slideInLeft,
  scaleUp,
  textReveal,
  staggerContainer,
  staggerItem,
  blurIn,
} from "@/components/AnimatedSection";

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");
  const [expandedWork, setExpandedWork] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [aboutPhotoIdx, setAboutPhotoIdx] = useState(0);

  const ABOUT_PHOTOS = ["/techmubarak.jpeg", "/mubarak-portrait.jpg"];

  // Client-only mount flag (fixes model-viewer hydration mismatch)
  useEffect(() => { setIsMounted(true); }, []);

  // Auto-switch About section photo every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAboutPhotoIdx((i) => (i === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance article carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((i) => (i === ARTICLES.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevCard = useCallback(() => {
    setCarouselIdx((i) => (i === 0 ? ARTICLES.length - 1 : i - 1));
  }, []);

  const nextCard = useCallback(() => {
    setCarouselIdx((i) => (i === ARTICLES.length - 1 ? 0 : i + 1));
  }, []);

  const activeArticle = ARTICLES[carouselIdx];
  const prevArticle = ARTICLES[(carouselIdx - 1 + ARTICLES.length) % ARTICLES.length];
  const nextArticle = ARTICLES[(carouselIdx + 1) % ARTICLES.length];

  const filteredProjects =
    projectFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5] relative selection:bg-[#F5F5F5] selection:text-[#121212]">
      {/* ── Background Geometric Arc Ornaments ── */}
      <div className="bg-arc w-[450px] h-[450px] top-[140px] right-[-120px] opacity-20 hidden md:block" />
      <div className="bg-arc w-[300px] h-[300px] top-[720px] left-[-80px] opacity-15 hidden md:block" />
      <div className="bg-arc w-[500px] h-[500px] top-[1800px] right-[-150px] opacity-15 hidden lg:block" />
      <div className="bg-arc w-[400px] h-[400px] top-[3000px] left-[-100px] opacity-20 hidden md:block" />

      {/* ═══════════════════════════════════════
          HEADER / NAVIGATION
          ═══════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/85 backdrop-blur-md border-b border-[#262626]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo / Name matching design */}
          <a href="#" className="font-mono text-sm leading-tight tracking-tight text-[#F5F5F5] hover:opacity-80 transition-opacity">
            <span className="block font-semibold">Mubarak</span>
            <span className="text-[#A6A6A6]">Raji</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[#A6A6A6] hover:text-[#F5F5F5] transition-colors font-sans link-reveal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action: Sponsor, Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/sponsors/DevMubarak1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#3D3D3D] hover:border-[#F5F5F5] text-xs font-mono text-[#F5F5F5] transition-all bg-[#181818] hover:bg-[#222222] group"
              title="Sponsor DevMubarak on GitHub"
            >
              <Heart size={12} className="text-[#F5F5F5] group-hover:scale-110 transition-transform" />
              <span>Sponsor</span>
            </a>

            <a
              href="/Mubarak_Raji_Resume.pdf"
              download="Mubarak_Raji_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#3D3D3D] hover:border-[#F5F5F5] text-xs font-mono text-[#F5F5F5] transition-all bg-[#181818] hover:bg-[#222222]"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F5F5F5] p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121212] pt-24 px-8 flex flex-col gap-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xl text-[#F5F5F5] hover:text-[#A6A6A6] py-2 border-b border-[#262626]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://github.com/sponsors/DevMubarak1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#3D3D3D] bg-[#181818] text-[#F5F5F5] font-mono text-sm"
            >
              <Heart size={16} />
              <span>Sponsor on GitHub</span>
            </a>
            <a
              href="/Mubarak_Raji_Resume.pdf"
              download="Mubarak_Raji_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#F5F5F5] text-[#121212] font-mono text-sm font-semibold"
            >
              <Download size={16} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative semi-circle arcs — hero */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border-2 border-[#2E2E2E]/50 rounded-full pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border border-[#2E2E2E]/40 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-60 w-[500px] h-[500px] border-2 border-[#2E2E2E]/40 rounded-full pointer-events-none" />
        {/* ── DESKTOP HERO (md and up) ── */}
        <div className="hidden md:block">
          {/* Top Row: "Developer" with small "fullstack" label + Action Buttons */}
          <div className="flex items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-sm text-[#A6A6A6] tracking-widest uppercase block mb-1">fullstack</span>
              <h1 className="font-mono text-7xl lg:text-9xl font-bold tracking-tighter text-[#F5F5F5] leading-none">
                Developer
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#F5F5F5] hover:bg-white text-[#121212] pl-6 pr-2 py-2 rounded-full font-sans font-semibold text-sm transition-all group shadow-lg"
              >
                <span>Projects</span>
                <span className="w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center font-mono text-sm group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>

              <a
                href="/Mubarak_Raji_Resume.pdf"
                download="Mubarak_Raji_Resume.pdf"
                className="inline-flex items-center gap-2 border border-[#3D3D3D] hover:border-[#F5F5F5] bg-[#181818] hover:bg-[#222222] text-[#F5F5F5] px-4 py-2.5 rounded-full font-mono text-xs transition-all"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>

              <a
                href="https://github.com/sponsors/DevMubarak1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#3D3D3D] hover:border-[#F5F5F5] bg-[#181818] hover:bg-[#222222] text-[#F5F5F5] px-4 py-2.5 rounded-full font-mono text-xs transition-all group"
                title="Sponsor on GitHub"
              >
                <Heart size={14} className="text-[#F5F5F5] group-hover:scale-110 transition-transform" />
                <span>Sponsor</span>
              </a>
            </motion.div>
          </div>

          {/* Middle Row: Tagline + "Engineer" heading */}
          <div className="grid grid-cols-2 gap-8 items-start mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-[#A6A6A6] text-lg italic font-sans leading-relaxed max-w-md">
                My goal is to{" "}
                <span className="text-[#F5F5F5] font-semibold not-italic">
                  write maintainable, clean and understandable code
                </span>{" "}
                that makes the development process enjoyable and engineering solutions reliable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-right"
            >
              <span className="font-mono text-sm text-[#A6A6A6] tracking-widest uppercase block mb-1">civil</span>
              <h1 className="font-mono text-7xl lg:text-9xl font-bold tracking-tighter text-[#F5F5F5] leading-none">
                Engineer
              </h1>
            </motion.div>
          </div>

          {/* Social pills — centered row below hero matching design */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-5 mt-14"
          >
            {SOCIAL_PILLS.map((pill) => {
              const Icon = pill.icon;
              return (
                <a
                  key={pill.label}
                  href={pill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill justify-center"                >
                  <Icon size={14} strokeWidth={2.5} className="text-[#F5F5F5]" />
                  <span>{pill.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* ── MOBILE HERO (below md) ── */}
        <div className="md:hidden flex flex-col gap-6">
          {/* 1. Stacked Hero Titles: Developer \n Engineer with small labels */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div>
              <span className="font-mono text-[10px] text-[#A6A6A6] tracking-widest uppercase block mb-0.5">fullstack</span>
              <h1 className="font-mono text-6xl sm:text-7xl font-bold tracking-tighter text-[#F5F5F5] leading-none">
                Developer
              </h1>
            </div>
            <div className="pl-6 sm:pl-10">
              <span className="font-mono text-[10px] text-[#A6A6A6] tracking-widest uppercase block mb-0.5">civil</span>
              <h1 className="font-mono text-6xl sm:text-7xl font-bold tracking-tighter text-[#F5F5F5] leading-none">
                Engineer
              </h1>
            </div>
          </motion.div>

          {/* 2. Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#A6A6A6] text-base italic font-sans leading-relaxed"
          >
            My goal is to{" "}
            <span className="text-[#F5F5F5] font-semibold not-italic">
              write maintainable, clean and understandable code
            </span>{" "}
            that makes the development process enjoyable and engineering solutions reliable.
          </motion.p>

          {/* 3. Primary Button: Projects (→) — pill style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-3 pt-2"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-[#F5F5F5] hover:bg-white text-[#121212] pl-6 pr-2 py-2.5 rounded-full font-sans font-semibold text-sm transition-all group shadow-lg"
            >
              <span>Projects</span>
              <span className="w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center font-mono text-sm group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="/Mubarak_Raji_Resume.pdf"
                download="Mubarak_Raji_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[#3D3D3D] bg-[#181818] text-[#F5F5F5] py-2.5 rounded-full font-mono text-xs"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              <a
                href="https://github.com/sponsors/DevMubarak1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-[#3D3D3D] bg-[#181818] text-[#F5F5F5] px-4 py-2.5 rounded-full font-mono text-xs"
              >
                <Heart size={13} className="text-[#F5F5F5]" />
                <span>Sponsor</span>
              </a>
            </div>
          </motion.div>

          {/* 4. Social Pills in 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-2.5 pt-2"
          >
            {SOCIAL_PILLS.map((pill) => {
              const Icon = pill.icon;
              return (
                <a
                  key={pill.label}
                  href={pill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill justify-center text-center"
                >
                  <Icon size={14} strokeWidth={2.5} className="text-[#F5F5F5]" />
                  <span>{pill.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ARTICLES CAROUSEL (Hero Slider)
          ═══════════════════════════════════════ */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
        {/* Carousel Showcase */}
        <div className="relative flex items-center justify-center min-h-[460px]">
          {/* Previous Card (Peeked on left) */}
          <Link
            href={`/articles/${prevArticle.slug}`}
            className="hidden lg:block absolute left-0 w-[300px] h-[380px] dark-card opacity-30 cursor-pointer overflow-hidden scale-90 translate-x-[-40px] pointer-events-auto hover:opacity-50 transition-opacity"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={prevArticle.heroImage}
                alt={prevArticle.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-mono text-sm font-semibold text-[#F5F5F5] line-clamp-2">
                {prevArticle.title}
              </h3>
            </div>
          </Link>

          {/* Left Arrow Button — desktop only (sides) */}
          <button
            onClick={prevCard}
            aria-label="Previous article"
            className="circle-btn absolute left-2 md:left-8 lg:left-12 z-20 top-1/2 -translate-y-1/2 hidden md:flex"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Active Card (Center Focus) */}
          <div className="relative z-10 w-full max-w-[500px] dark-card overflow-hidden shadow-2xl border-[#3D3D3D]">
            {/* Top Artwork */}
            <div className="relative h-56 sm:h-64 w-full bg-[#181818] overflow-hidden">
              <Image
                src={activeArticle.heroImage}
                alt={activeArticle.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#121212]/80 backdrop-blur-sm border border-[#2E2E2E] text-[#A6A6A6] text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                {activeArticle.tags[0]}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              <h3 className="font-mono text-lg sm:text-xl font-bold text-[#F5F5F5] mb-3 leading-snug">
                {activeArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A6A6] font-sans leading-relaxed mb-6">
                {activeArticle.excerpt}
              </p>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href={`/articles/${activeArticle.slug}`}
                  className="pill-action"
                >
                  Read full article
                </Link>
                <Link
                  href={`/articles/${activeArticle.slug}`}
                  aria-label="Read article"
                  className="w-9 h-9 rounded-full border border-[#2E2E2E] hover:border-[#F5F5F5] flex items-center justify-center text-[#F5F5F5] transition-colors"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Arrow Button — desktop only (sides) */}
          <button
            onClick={nextCard}
            aria-label="Next article"
            className="circle-btn absolute right-2 md:right-8 lg:right-12 z-20 top-1/2 -translate-y-1/2 hidden md:flex"
          >
            <ArrowRight size={18} />
          </button>

          {/* Next Card (Peeked on right) */}
          <Link
            href={`/articles/${nextArticle.slug}`}
            className="hidden lg:block absolute right-0 w-[300px] h-[380px] dark-card opacity-30 cursor-pointer overflow-hidden scale-90 translate-x-[40px] pointer-events-auto hover:opacity-50 transition-opacity"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={nextArticle.heroImage}
                alt={nextArticle.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-mono text-sm font-semibold text-[#F5F5F5] line-clamp-2">
                {nextArticle.title}
              </h3>
            </div>
          </Link>
        </div>

        {/* Navigation: Arrows (mobile) + Dot Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Left arrow — mobile only */}
          <button
            onClick={prevCard}
            aria-label="Previous article"
            className="circle-btn md:hidden"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {ARTICLES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === carouselIdx ? "w-6 bg-[#F5F5F5]" : "w-2 bg-[#2E2E2E] hover:bg-[#555555]"
                }`}
              />
            ))}
          </div>

          {/* Right arrow — mobile only */}
          <button
            onClick={nextCard}
            aria-label="Next article"
            className="circle-btn md:hidden"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          ABOUT ME SECTION
          ═══════════════════════════════════════ */}
      <AnimatedSection id="about" className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative semi-circle arcs — about */}
        <div className="absolute top-10 -left-48 w-[450px] h-[450px] border-2 border-[#2E2E2E]/50 rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] border border-[#2E2E2E]/40 rounded-full pointer-events-none" />
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-14">
          <div>
            <span className="section-label">... /About me ...</span>
          </div>
          <div>
            <p className="text-xl sm:text-2xl text-[#A6A6A6] font-sans leading-relaxed">
              Hello! I&apos;m Mubarak, a{" "}
              <span className="text-[#F5F5F5] font-semibold">Civil Engineering undergraduate at LASU</span> and{" "}
              <span className="text-[#F5F5F5] font-semibold">full-stack developer &amp; systems engineer</span>. More
              than <span className="text-[#F5F5F5] font-semibold">5 years</span> of software experience shipping production systems, IoT hardware, and hands-on site engineering.
            </p>
          </div>
        </div>

        {/* Content Grid: Skills on Left, Photo on Right */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column (Skills) */}
          <motion.div
            className="md:col-span-7 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideInLeft}
          >
            {/* Front-end Card */}
            <div className="dark-card p-6">
              <h4 className="font-mono text-sm font-semibold text-[#F5F5F5] mb-2">Front-end</h4>
              <p className="font-sans text-xs text-[#A6A6A6] leading-relaxed">
                {SKILLS[0].items}
              </p>
            </div>

            {/* Styles Card */}
            <div className="dark-card p-6 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-mono text-sm font-semibold text-[#F5F5F5] mb-2">Styles & UI Architecture</h4>
                <p className="font-sans text-xs text-[#A6A6A6] leading-relaxed">
                  {SKILLS[1].items}
                </p>
              </div>
              <div className="circle-btn">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Back-end Card */}
            <div className="dark-card p-6">
              <h4 className="font-mono text-sm font-semibold text-[#F5F5F5] mb-2">Back-end & Databases</h4>
              <p className="font-sans text-xs text-[#A6A6A6] leading-relaxed">
                {SKILLS[2].items}
              </p>
            </div>

            {/* Bottom Row: Note + DevOps Card + Civil Engr Card */}
            <div className="grid sm:grid-cols-3 gap-4 items-center pt-2">
              <p className="text-xs text-[#A6A6A6] italic font-sans leading-relaxed">
                Some of my{" "}
                <span className="text-[#F5F5F5] font-semibold not-italic">
                  favorite technologies, topics, or tools
                </span>{" "}
                across software, hardware, and site engineering
              </p>
              <div className="dark-card p-5">
                <h4 className="font-mono text-xs font-semibold text-[#F5F5F5] mb-1.5">DevOps & Embedded</h4>
                <p className="font-sans text-[11px] text-[#A6A6A6] leading-relaxed">
                  {SKILLS[3].items}
                </p>
              </div>
              <div className="dark-card p-5">
                <h4 className="font-mono text-xs font-semibold text-[#F5F5F5] mb-1.5">Civil Engineering</h4>
                <p className="font-sans text-[11px] text-[#A6A6A6] leading-relaxed">
                  {SKILLS[4].items}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Photo) */}
          <motion.div
            className="md:col-span-5 flex flex-col items-center md:items-end gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={blurIn}
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-xl overflow-hidden border border-[#2E2E2E] shadow-2xl bg-[#181818]">
              {ABOUT_PHOTOS.map((photo, idx) => (
                <Image
                  key={photo}
                  src={photo}
                  alt={idx === 0 ? "Mubarak Raji — Developer" : "Mubarak Raji — Civil Engineer"}
                  fill
                  className={`object-cover filter grayscale contrast-125 transition-opacity duration-1000 ${
                    aboutPhotoIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <a
              href="/Mubarak_Raji_Resume.pdf"
              download="Mubarak_Raji_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A6A6A6] hover:text-[#F5F5F5] py-2 px-4 rounded-full border border-[#2E2E2E] hover:border-[#F5F5F5] transition-colors"
            >
              <Download size={13} />
              <span>Download Full CV (PDF)</span>
            </a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          ACHIEVEMENTS & HONORS
          ═══════════════════════════════════════ */}
      <AnimatedSection id="achievements" className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
          <span className="section-label">... /Achievements & Awards ...</span>
          <span className="font-mono text-xs text-[#A6A6A6]">Verified Recognition</span>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="dark-card p-6 sm:p-8 flex flex-col justify-between hover:border-[#F5F5F5]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#333333] text-[#F5F5F5] font-semibold uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-[#666666]">{item.date}</span>
                  </div>

                  <h3 className="font-mono text-lg sm:text-xl font-bold text-[#F5F5F5] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-[#A6A6A6] mb-4">
                    {item.project} • <span className="text-[#666666]">{item.issuer}</span>
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          WORK EXPERIENCE
          ═══════════════════════════════════════ */}
      <AnimatedSection id="experience" className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          className="text-right mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
        >
          <h2 className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-[#F5F5F5]">
            Work
          </h2>
        </motion.div>

        <motion.div
          className="space-y-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {WORK_EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="overflow-hidden"
            >
              <button
                onClick={() => setExpandedWork(expandedWork === idx ? null : idx)}
                className={`work-row group w-full text-left cursor-pointer ${item.isHighlight ? "!bg-[#F5F5F5] !text-[#121212]" : ""}`}
              >
                <div>
                  <span className={`font-mono text-sm ${item.isHighlight ? "!text-[#555555]" : "work-period text-[#A6A6A6]"}`}>
                    {item.period}
                  </span>
                  <span className={`block text-xs ${item.isHighlight ? "!text-[#777777]" : "work-duration text-[#555555]"} font-sans`}>
                    {item.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-base font-semibold ${item.isHighlight ? "!text-[#121212]" : "work-company text-[#F5F5F5]"}`}>
                    {item.company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-sans ${item.isHighlight ? "!text-[#121212]" : "work-role text-[#A6A6A6]"}`}>
                    {item.role} | {item.tech}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`ml-auto transition-transform duration-300 flex-shrink-0 ${
                      expandedWork === idx ? "rotate-180" : ""
                    } ${item.isHighlight ? "text-[#555]" : "text-[#555] group-hover:text-[#121212]"}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {expandedWork === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="overflow-hidden"
                  >
                    <div className={`px-4 pb-5 pt-2 rounded-b-xl ${item.isHighlight ? "bg-[#F5F5F5]" : "bg-[#181818] border-x border-b border-[#262626]"}`}>
                      <p className={`font-sans text-sm leading-relaxed ${item.isHighlight ? "text-[#333]" : "text-[#A6A6A6]"}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Total Summary */}
        <div className="text-right mt-10">
          <span className="font-sans text-xs text-[#A6A6A6] tracking-wide">
            Work experience <span className="text-[#F5F5F5] font-semibold">5 years</span>
          </span>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          PROJECTS SECTION
          ═══════════════════════════════════════ */}
      <AnimatedSection id="projects" className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative semi-circle arcs — projects */}
        <div className="absolute top-20 -right-52 w-[500px] h-[500px] border-2 border-[#2E2E2E]/40 rounded-full pointer-events-none" />
        <div className="absolute bottom-40 -left-40 w-[400px] h-[400px] border border-[#2E2E2E]/30 rounded-full pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <span className="section-label">... /Projects & Works ...</span>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "hardware", label: "Hardware & AI" },
              { id: "enterprise", label: "Enterprise ERP" },
              { id: "tools", label: "Tools & Open Source" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id as ProjectCategory)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all ${
                  projectFilter === tab.id
                    ? "bg-[#F5F5F5] text-[#121212] font-semibold"
                    : "bg-[#181818] border border-[#2E2E2E] text-[#A6A6A6] hover:text-[#F5F5F5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-28">
          {filteredProjects.map((proj, i) => {
            const isFlipped = i % 2 === 1;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid md:grid-cols-12 gap-8 md:gap-14 items-center project-card-hover"
              >
                {/* Details Column */}
                <div
                  className={`md:col-span-6 space-y-5 ${
                    isFlipped ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#333333] text-[#F5F5F5] font-semibold uppercase tracking-wider">
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="font-mono text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                    {proj.title}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#181818] border border-[#2E2E2E] text-[#A6A6A6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-sm text-[#A6A6A6] leading-relaxed">
                    {proj.description}
                  </p>

                  <p className="font-sans text-xs text-[#888888] italic border-l border-[#333333] pl-3">
                    {proj.highlight}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-3">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="circle-btn"
                        aria-label={`Preview ${proj.title}`}
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    {proj.repo && (
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="circle-btn"
                        aria-label={`Source for ${proj.title}`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {(proj.link || proj.repo) && (
                      <a
                        href={proj.link || proj.repo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="circle-btn"
                        aria-label={`Open ${proj.title}`}
                      >
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Column */}
                <motion.div
                  className={`md:col-span-6 ${
                    isFlipped ? "md:order-1" : "md:order-2"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={scaleUp}
                >
                  <div className="relative rounded-xl overflow-hidden group">
                    {/* Floating Circular Arrow Button */}
                    {(proj.link || proj.repo) && (
                      <a
                        href={proj.link || proj.repo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-[#F5F5F5] hover:bg-white text-[#121212] flex items-center justify-center shadow-xl transition-all group-hover:scale-110 float-btn"
                        aria-label={`Open ${proj.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}

                    {/* Media Content */}
                    {proj.video ? (
                      <ProjectVideo src={proj.video} title={proj.title} />
                    ) : proj.model3d ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                        {isMounted ? (
                          <iframe
                            src={proj.link || "#"}
                            title={proj.title}
                            className="w-full h-full border-0"
                            allow="autoplay"
                          />
                        ) : (
                          <div className="text-center">
                            <Cpu size={48} className="text-[#333] mx-auto mb-3" />
                            <p className="font-mono text-xs text-[#555]">Loading 3D Model...</p>
                          </div>
                        )}
                      </div>
                    ) : proj.image ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0F0F0F]">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : proj.id === "vital-vida" ? (
                      /* Custom ERP dashboard mockup for Vital Vida */
                      <div className="relative aspect-[16/10] w-full rounded-xl bg-[#161616] border border-[#2A2A2A] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center">
                              <Server size={14} className="text-[#A6A6A6]" />
                            </div>
                            <span className="font-mono text-xs text-[#F5F5F5] font-semibold">ERPNext Dashboard</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1a2e1a] border border-[#2a4a2a] text-[#6a9a6a]">● Live</span>
                        </div>
                        <div className="space-y-3 my-auto py-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#1a1a1a] rounded-xl p-3 border border-[#252525]">
                              <span className="block text-[10px] font-mono text-[#666]">Orders Today</span>
                              <span className="block text-lg font-mono text-[#F5F5F5] font-bold">247</span>
                            </div>
                            <div className="bg-[#1a1a1a] rounded-xl p-3 border border-[#252525]">
                              <span className="block text-[10px] font-mono text-[#666]">Inventory</span>
                              <span className="block text-lg font-mono text-[#F5F5F5] font-bold">1,842</span>
                            </div>
                            <div className="bg-[#1a1a1a] rounded-xl p-3 border border-[#252525]">
                              <span className="block text-[10px] font-mono text-[#666]">Warehouses</span>
                              <span className="block text-lg font-mono text-[#F5F5F5] font-bold">5</span>
                            </div>
                          </div>
                          <div className="bg-[#1a1a1a] rounded-xl p-3 border border-[#252525]">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-mono text-[#666]">Checkout Pipeline</span>
                              <span className="text-[10px] font-mono text-[#F5F5F5]">0 duplicates</span>
                            </div>
                            <div className="h-8 bg-[#252525] rounded-md overflow-hidden flex items-end gap-px p-px">
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "85%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "92%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "78%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/20 rounded-sm" style={{height: "95%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "88%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "91%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/20 rounded-sm" style={{height: "97%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "84%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/15 rounded-sm" style={{height: "90%"}} />
                              <div className="flex-1 bg-[#F5F5F5]/20 rounded-sm" style={{height: "93%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-6 text-[10px] font-mono">
                          <div><span className="block text-[#555]">Latency</span><span className="text-[#A6A6A6]">14ms avg</span></div>
                          <div><span className="block text-[#555]">Idempotency</span><span className="text-[#A6A6A6]">100% Strict</span></div>
                          <div><span className="block text-[#555]">Framework</span><span className="text-[#A6A6A6]">Frappe + MariaDB</span></div>
                        </div>
                      </div>
                    ) : proj.id === "devtriage" ? (
                      /* Custom CLI terminal mockup for DevTriage */
                      <div className="relative aspect-[16/10] w-full rounded-xl bg-[#0d1117] border border-[#2A2A2A] p-6 sm:p-8 flex flex-col justify-between overflow-hidden font-mono">
                        <div className="flex items-center gap-2">
                          <Terminal size={14} className="text-[#A6A6A6]" />
                          <span className="text-xs text-[#888]">devtriage — bash</span>
                        </div>
                        <div className="text-[11px] text-[#A6A6A6] space-y-1.5 my-auto py-4 leading-relaxed">
                          <p><span className="text-[#6a9a6a]">$</span> npm run build</p>
                          <p className="text-[#f47067]">✗ Error: Cannot find module &apos;@utils/config&apos;</p>
                          <p className="text-[#666]">   at Module._resolveFilename (node:internal/modules)</p>
                          <p className="text-[#666]">   at Object.&lt;anonymous&gt; (src/index.ts:14:22)</p>
                          <p className="mt-3"><span className="text-[#6a9a6a]">$</span> devtriage capture --format github</p>
                          <p className="text-[#d2a8ff]">⚡ Captured stderr trace (4 lines)</p>
                          <p className="text-[#d2a8ff]">⚡ Environment: node v20.11, npm 10.2, darwin-arm64</p>
                          <p className="text-[#79c0ff]">✓ Issue formatted → #42 Missing module path alias</p>
                          <p className="text-[#F5F5F5]">✓ Ready to push to GitHub Issues</p>
                        </div>
                        <div className="flex gap-6 text-[10px]">
                          <div><span className="block text-[#555]">Capture</span><span className="text-[#A6A6A6]">Stderr Hook</span></div>
                          <div><span className="block text-[#555]">Format</span><span className="text-[#A6A6A6]">GitHub Markdown</span></div>
                          <div><span className="block text-[#555]">CLI</span><span className="text-[#A6A6A6]">Python 3</span></div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] w-full rounded-xl bg-[#161616] border border-[#2A2A2A] p-8 flex flex-col justify-between overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                          <span className="font-mono text-xs text-[#888888] ml-2">{proj.mockup.title}</span>
                        </div>
                        <div className="font-mono text-xs text-[#888888] space-y-2 my-auto py-4">
                          <p>&gt; {proj.mockup.subtitle}</p>
                          <p className="text-[#F5F5F5]">&gt; System Ready</p>
                          <p>&gt; All services operational</p>
                        </div>
                        <div className="flex gap-6 text-[10px] font-mono">
                          {proj.mockup.metrics.map((m, idx) => (
                            <div key={idx}>
                              <span className="block text-[#555555]">{m.label}</span>
                              <span className="text-[#A6A6A6]">{m.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          ARTICLES SECTION (Grid)
          ═══════════════════════════════════════ */}
      <AnimatedSection id="articles" className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
        >
          <h2 className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-[#F5F5F5]">
            Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Vertical Pagination */}
          <div className="hidden md:flex md:col-span-1 flex-col items-center gap-3 pt-2">
            <span className="w-8 h-8 rounded-full bg-[#F5F5F5] text-[#121212] font-mono text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span className="w-8 h-8 rounded-full border border-[#2E2E2E] text-[#A6A6A6] font-mono text-xs flex items-center justify-center hover:border-[#F5F5F5] cursor-pointer transition-colors">
              2
            </span>
            <span className="w-8 h-8 rounded-full border border-[#2E2E2E] text-[#A6A6A6] flex items-center justify-center hover:border-[#F5F5F5] cursor-pointer transition-colors">
              <ArrowDown size={14} />
            </span>
          </div>

          {/* 2x2 Article Cards Grid */}
          <motion.div
            className="md:col-span-11 grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {ARTICLES.slice(0, 4).map((article) => (
              <motion.div
                key={article.id}
                variants={staggerItem}
                className="dark-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#F5F5F5]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#666666] mb-3">
                    <span>#{article.tags[0]}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="pill-action"
                  >
                    Read article
                  </Link>
                  <Link
                    href={`/articles/${article.slug}`}
                    aria-label="Read article"
                    className="w-9 h-9 rounded-full border border-[#2E2E2E] hover:border-[#F5F5F5] flex items-center justify-center text-[#F5F5F5] transition-colors"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          CONTACTS / FOOTER
          ═══════════════════════════════════════ */}
      <footer id="contacts" className="relative pt-24 pb-16 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative semi-circle arcs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 border-2 border-[#2E2E2E]/50 rounded-full pointer-events-none" />
        <div className="absolute top-20 left-0 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/4 border border-[#2E2E2E]/40 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/3 translate-y-1/3 border-2 border-[#2E2E2E]/40 rounded-full pointer-events-none" />

        <span className="section-label block mb-12 relative z-10">... /Contacts ...</span>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start relative z-10">
          {/* Right Column (on desktop) — Contacts nav + Site card */}
          <div className="space-y-6 md:order-2">
            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center gap-5 text-sm font-sans">
              <a href="#" className="text-[#A6A6A6] hover:text-[#F5F5F5] transition-colors link-reveal">
                Main
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#A6A6A6] hover:text-[#F5F5F5] transition-colors link-reveal"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Site Info Card */}
            <div className="dark-card p-6 max-w-sm">
              <h4 className="font-mono text-sm font-semibold text-[#F5F5F5] mb-3">Site</h4>
              <p className="font-mono text-xs text-[#A6A6A6] leading-relaxed">
                Handcrafted by <span className="text-[#F5F5F5]">Mubarak Raji</span> /
                <br />
                Developer &amp; Civil Engineer Portfolio /
                <br />
                Powered by <span className="text-[#F5F5F5]">Next.js</span> &amp; <span className="text-[#F5F5F5]">TypeScript</span>
              </p>
            </div>

            {/* Telegram QR Card */}
            <div className="dark-card p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-[#2E2E2E] bg-white p-1 flex-shrink-0">
                <Image
                  src="/telegram-qr.jpg"
                  alt="Telegram QR @DevMubarak"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center sm:text-left flex-1 space-y-1.5">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#222222] border border-[#333333] text-[#F5F5F5] uppercase tracking-wider">
                  Direct Channel
                </span>
                <h4 className="font-mono text-sm font-bold text-[#F5F5F5]">Chat on Telegram</h4>
                <p className="text-xs text-[#A6A6A6] font-sans">
                  Scan or message <span className="font-mono text-[#F5F5F5]">@DevMubarak</span>
                </p>
                <a
                  href="https://t.me/DevMubarak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#121212] bg-[#F5F5F5] hover:bg-white font-semibold py-1.5 px-3.5 rounded-full transition-all mt-1"
                >
                  <Send size={12} />
                  <span>Open Telegram</span>
                </a>
              </div>
            </div>

            {/* Download CV */}
            <a
              href="/Mubarak_Raji_Resume.pdf"
              download="Mubarak_Raji_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#F5F5F5] hover:underline"
            >
              <ArrowDown size={14} />
              Download CV (PDF)
            </a>
          </div>

          {/* Left Column — Big Name Typography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="md:order-1"
          >
            <h2 className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#F5F5F5] leading-[0.85]">
              Mubarak
              <br />
              <span className="ml-4 md:ml-8">Raji</span>
            </h2>
            <p className="font-sans text-sm text-[#A6A6A6] mt-5">
              Civil Engineer &amp; Full-Stack Developer
            </p>
          </motion.div>
        </div>

        {/* Bottom Social Pills */}
        <motion.div
          className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 md:gap-4 mt-16 pt-8 border-t border-[#262626] relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FOOTER_PILLS.map((pill) => {
            const Icon = pill.icon;
            return (
              <motion.a
                key={pill.label}
                variants={staggerItem}
                href={pill.href}
                target={pill.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-pill justify-center"              >
                <Icon size={14} strokeWidth={2.5} className="text-[#F5F5F5]" />
                <span>{pill.label}</span>
              </motion.a>
            );
          })}
          <motion.a
            variants={staggerItem}
            href="https://github.com/sponsors/DevMubarak1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill hover:border-[#F5F5F5] col-span-2 sm:col-span-1 justify-center"
          >
            <Heart size={13} className="text-[#F5F5F5]" />
            <span>Sponsor on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Bottom Signoff */}
        <div className="mt-12 text-center text-xs text-[#555555] font-sans flex flex-col sm:flex-row items-center justify-center gap-2 relative z-10">
          <span>Mubarak Raji</span>
          <span className="hidden sm:inline">•</span>
          <span>Civil Engineer & Full-Stack Developer</span>
          <span className="hidden sm:inline">•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
