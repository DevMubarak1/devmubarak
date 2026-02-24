import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMubarak - Full-Stack Developer",
  description: "Full-stack developer building impactful software with TypeScript, JavaScript, React, and Node.js.",
  keywords: ["Full-stack developer", "Next.js", "React", "TypeScript", "Node.js"],
  authors: [{ name: "DevMubarak" }],
  creator: "DevMubarak",
  metadataBase: new URL("https://devmubarak.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function applyTheme() {
                    const savedTheme = localStorage.getItem('theme');
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
                    if (isDark) {
                      document.documentElement.classList.add('dark');
                      document.body.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                      document.body.classList.remove('dark');
                    }
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                  }
                  applyTheme();
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', applyTheme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 50 }}>
          <a
            href="https://github.com/sponsors/DevMubarak1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg transition-colors duration-200 border border-pink-700"
            style={{ boxShadow: '0 2px 8px rgba(236, 72, 153, 0.15)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a5.25 5.25 0 00-4.5 2.482A5.25 5.25 0 007.5 3.75 5.25 5.25 0 003 9c0 7.25 9 11.25 9 11.25s9-4 9-11.25a5.25 5.25 0 00-5.25-5.25z" />
            </svg>
            <span>Sponsor</span>
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
