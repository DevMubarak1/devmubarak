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
  title: "DevMubarak - Full-Stack Developer & Creative Technologist",
  description: "Full-stack developer and creative technologist specializing in Next.js, React Native, AI integration, and modern web applications. Building scalable solutions for startups and enterprises.",
  keywords: [
    "Full-stack developer",
    "Next.js developer",
    "React Native developer",
    "AI integration",
    "Web development",
    "Mobile development",
    "Chrome extensions",
    "Portfolio",
    "Mubarak",
    "DevMubarak"
  ],
  authors: [{ name: "Mubarak" }],
  creator: "Mubarak",
  publisher: "DevMubarak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devmubarak.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevMubarak - Full-Stack Developer & Creative Technologist",
    description: "Full-stack developer and creative technologist specializing in Next.js, React Native, AI integration, and modern web applications.",
    url: "https://devmubarak.vercel.app",
    siteName: "DevMubarak Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevMubarak - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMubarak - Full-Stack Developer & Creative Technologist",
    description: "Full-stack developer and creative technologist specializing in Next.js, React Native, AI integration, and modern web applications.",
    images: ["/og-image.jpg"],
    creator: "@devmubarak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#3B82F6" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DevMubarak" />
        <meta name="application-name" content="DevMubarak Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
