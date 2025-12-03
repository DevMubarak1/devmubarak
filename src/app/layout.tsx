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
  metadataBase: new URL("https://devmubarak.vercel.app"),
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
                  // Check localStorage first
                  let isDark = localStorage.getItem('theme') === 'dark';
                  
                  // If not set in localStorage, check system preference
                  if (!localStorage.getItem('theme')) {
                    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                  }
                  
                  // Apply the theme
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
