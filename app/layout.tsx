import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./compoenents/layout/Navbar";
import { Footer } from "./compoenents/layout/Footer";
import { JsonLd } from "./compoenents/JsonLd";

// Az Inter betűtípus betöltése (latin karakterkészlettel)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Hiperbár Oxigénterápia Székesfehérvár | Endo-Kapszula Klinika',
  description: 'Prémium hiperbár oxigénterápia (HBOT) Székesfehérváron. Orvosi felügyelet, modern kapszulák, poszt-COVID és regenerációs kezelések. Foglaljon időpontot!',
  keywords: ['hiperbár oxigénterápia', 'HBOT Székesfehérvár', 'oxigénterápia', 'long covid kezelés', 'sport regeneráció'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-brand-bg text-brand-dark antialiased w-full min-h-screen bg-[url('/background.webp')] bg-cover bg-[48%_center] md:bg-center bg-no-repeat overflow-hidden`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}