import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mubarak Raji — Developer & Civil Engineer",
  description:
    "Portfolio of Mubarak Raji (DevMubarak) — Full-Stack Developer, Civil Engineering Undergraduate at LASU, IoT/Edge AI Builder, and National Hackathon Finalist. Building enterprise ERP systems, biometrics, site engineering, and high-performance web applications.",
  keywords: [
    "Mubarak Raji",
    "DevMubarak",
    "Full-Stack Developer",
    "Civil Engineer",
    "Civil Engineering",
    "Systems Architect",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "ERPNext",
    "IoT",
    "Edge AI",
    "Lagos State University",
    "LASU",
    "Portfolio",
  ],
  authors: [{ name: "Mubarak Raji", url: "https://mubarakraji.me" }],
  creator: "Mubarak Raji",
  metadataBase: new URL("https://mubarakraji.me"),
  openGraph: {
    title: "Mubarak Raji — Developer & Civil Engineer",
    description:
      "Full-Stack Developer & Civil Engineering undergraduate. Building enterprise ERP systems, IoT devices, and high-performance web applications.",
    url: "https://mubarakraji.me",
    siteName: "Mubarak Raji Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubarak Raji — Developer & Civil Engineer",
    description:
      "Full-Stack Developer & Civil Engineering undergraduate. Building enterprise ERP systems, IoT devices, and high-performance web applications.",
  },
  alternates: {
    canonical: "https://mubarakraji.me",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag (gtag.js) - GTM-59WSGGB2 */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-59WSGGB2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google Fonts loaded at runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#121212] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
