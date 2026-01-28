'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark pt-12 pb-6 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* FELSŐ RÉSZ: Logo és Kapcsolat egy sorban (Mobilon egymás alatt) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          
          {/* 1. Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter hover:text-[#8FBCE6] transition-colors duration-300">
              oxigenterapia<span className="text-brand-primary">.hu</span>
            </span>
          </Link>

          {/* 2. Kapcsolat (Kompakt ikonok) */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-gray-900">
            <a href="tel:+3612345678" className="flex items-center gap-2 hover:text-[#8FBCE6] transition-colors duration-300">
              <Phone className="w-4 h-4 text-gray-900" />
              +36 1 234 5678
            </a>
            <a href="mailto:info@oxigenterapia.hu" className="flex items-center gap-2 hover:text-[#8FBCE6] transition-colors duration-300">
              <Mail className="w-4 h-4 text-gray-900" />
              info@oxigenterapia.hu
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-900" />
              8000. Székesfehérvár, Budai út 318.
            </div>
          </div>
        </div>

        {/* ELVÁLASZTÓ */}
        <hr className="border-white/10 mb-8" />

        {/* ALSÓ RÉSZ: Jogi dolgok (Apró betűvel, hogy ne zavarjon) */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          
          {/* Copyright & Jogi linkek */}
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <span>© {currentYear} oxigenterapia.hu</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <Link href="/adatkezeles" className="hover:text-[#8FBCE6] transition-colors">Adatkezelés</Link>
            <Link href="/aszf" className="hover:text-[#8FBCE6] transition-colors">ÁSZF</Link>
            <Link href="/impresszum" className="hover:text-[#8FBCE6] transition-colors">Impresszum</Link>
          </div>

          {/* Orvosi Disclaimer (Ads miatt kötelező, de halvány) */}
          <p className="text-[10px] text-gray-600 max-w-md text-right leading-tight">
            Nem minősül orvosi diagnózisnak. A kezelés kiegészítő terápiaként szolgál.
          </p>
        </div>

      </div>
    </footer>
  )
}