import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./compoenents/layout/Navbar";
import { Footer } from "./compoenents/layout/Footer";
import { JsonLd } from "./compoenents/JsonLd";
import { SmoothScroll } from "./compoenents/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Hiperbár Oxigénterápia Székesfehérvár | Endolife Longevity Központ',
  description: 'Prémium hiperbár oxigénterápia (HBOT) Székesfehérváron. Orvosi felügyelet, poszt-COVID, agyi regeneráció és sejtszintű anti-aging kezelések. Foglaljon időpontot!',
  keywords: [
    'hiperbár oxigénterápia',
    'HBOT Székesfehérvár',
    'oxigénterápia',
    'long covid kezelés',
    'sport regeneráció',
    'longevity klinika',
    'agyi regeneráció',
    'anti-aging'
  ],
  alternates: {
    canonical: 'https://oxigenkamra.hu/',
  },
  verification: {
    google: 'rEn4GH1vUvfZLhSGkr3U5yU68yquYIuELPF8itOpSSk'
  },
  openGraph: {
    title: 'Endolife Longevity Központ | Hiperbár Oxigénterápia',
    description: 'Komplex sejtszintű regeneráció, poszt-COVID kezelés és anti-aging programok Székesfehérváron.',
    url: 'https://oxigenkamra.hu',
    siteName: 'Endolife Longevity',
    images: [
      {
        url: 'https://oxigenkamra.hu/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Endolife Longevity Oxigénterápia Központ Székesfehérvár',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <link rel="preload" aria-label="background-image" href="/background.webp" as="image" />
      </head>
      <body style={{ backgroundColor: '#020617' }} className={`${inter.variable} font-sans bg-brand-bg text-brand-dark antialiased w-full min-h-screen`}>
        <JsonLd />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <GoogleAnalytics gaId="G-NQF86F2YCR" />
      </body>
    </html>
  );
}