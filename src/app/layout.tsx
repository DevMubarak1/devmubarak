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
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = prefersDark ? 'black' : 'light';
                  document.documentElement.className = theme;
                  localStorage.setItem('theme', theme);
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
