import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { ARTICLES, Article } from "@/data/articles";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Mubarak Raji`,
    description: article.excerpt,
    authors: [{ name: "Mubarak Raji" }],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = ARTICLES.findIndex((a) => a.slug === slug);
  const nextArticle = ARTICLES[(currentIndex + 1) % ARTICLES.length];

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#121212]">
      {/* ── Top Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/85 backdrop-blur-md border-b border-[#262626]/50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A6A6A6] hover:text-[#F5F5F5] transition-colors py-2 px-3 rounded-full border border-[#2E2E2E] hover:border-[#F5F5F5]"
          >
            <ArrowLeft size={14} />
            <span>Back to portfolio</span>
          </Link>

          <Link href="/" className="font-mono text-sm leading-tight text-[#F5F5F5]">
            <span className="block font-semibold">Mubarak</span>
            <span className="text-[#A6A6A6]">Raji</span>
          </Link>
        </div>
      </header>

      {/* ── Main Article Content ── */}
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        {/* Breadcrumb & Metadata */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A6A6A6]">
          <span className="text-[#F5F5F5] font-semibold">● ENGINEERING NOTEBOOK</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight mb-6">
          {article.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="font-sans text-lg sm:text-xl text-[#A6A6A6] leading-relaxed mb-8 border-l-2 border-[#3D3D3D] pl-4 italic">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-[#181818] border border-[#2E2E2E] text-[#A6A6A6]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Hero Artwork */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-[#2E2E2E] bg-[#181818] shadow-2xl">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Body Paragraphs */}
        <article className="space-y-6 font-sans text-base sm:text-lg text-[#D1D5DB] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="first-letter:text-2xl first-letter:font-mono first-letter:font-bold">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Key Takeaways Box */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#181818] border border-[#2E2E2E]">
          <h3 className="font-mono text-sm uppercase tracking-wider text-[#F5F5F5] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5F5F5]" />
            Key Technical Insights
          </h3>
          <ul className="space-y-2 text-sm text-[#A6A6A6] font-sans list-disc list-inside">
            <li>Strict boundary isolation between distributed service layers.</li>
            <li>Idempotent transactional guards at both memory cache and persistence stores.</li>
            <li>Zero client-side blocking through non-blocking asynchronous event loops.</li>
            <li>Reproducible containerized orchestration with automated failure verification.</li>
          </ul>
        </div>

        {/* Author Bio Card */}
        <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2A] flex flex-col sm:flex-row items-center gap-6 mt-16">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#3D3D3D] flex-shrink-0">
            <Image
              src="/mubarak-portrait.jpg"
              alt="Mubarak Raji"
              fill
              className="object-cover filter grayscale contrast-125"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h4 className="font-mono text-base font-bold text-[#F5F5F5]">Mubarak Raji</h4>
            <p className="font-sans text-xs text-[#A6A6A6] mt-1 leading-relaxed">
              Full-Stack & Systems Engineer. Winner of MLH Hacktoberfest Hack Day (MechMind AI), Wema Bank Hackaholics 7.0 Top 5 Finalist (PayByPalm), and 1st Place Grand Champion at Vibranium Valley × PowerTech Challenge.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-3">
              <a href="https://github.com/DevMubarak1" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#F5F5F5]" title="GitHub">
                <Github size={15} />
              </a>
              <a href="https://linkedin.com/in/rajimubarak123" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#F5F5F5]" title="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="https://t.me/DevMubarak" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#F5F5F5]" title="Telegram">
                <Send size={15} />
              </a>
              <a href="https://x.com/theDevMubarak" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-[#F5F5F5]" title="Twitter">
                <Twitter size={15} />
              </a>
              <a href="mailto:rmbabatunde123@gmail.com" className="text-[#A6A6A6] hover:text-[#F5F5F5]" title="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Next Article Recommendation */}
        <div className="mt-16 pt-8 border-t border-[#262626] flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-mono text-[#A6A6A6] hover:text-[#F5F5F5] transition-colors"
          >
            ← All Articles
          </Link>
          <Link
            href={`/articles/${nextArticle.slug}`}
            className="text-xs font-mono text-[#F5F5F5] hover:underline flex items-center gap-1"
          >
            <span>Next: {nextArticle.title.slice(0, 30)}...</span>
            <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[#262626] text-center text-xs font-mono text-[#555555]">
        © 2026 Mubarak Raji • All rights reserved.
      </footer>
    </div>
  );
}


