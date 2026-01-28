import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./compoenents/layout/Navbar";
import { Footer } from "./compoenents/layout/Footer";

// Az Inter betűtípus betöltése (latin karakterkészlettel)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Oxigénterápia.hu - Orvosi Hiperbárikus Központ",
  description: "Magyarország vezető hiperbárikus oxigénterápiás központja. Orvosi tisztaságú oxigén a gyógyulásért és regenerációért.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-brand-bg text-brand-dark antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}