'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Music2, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-[#020617] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" aria-label="Vissza a főoldalra" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/logo.webp"
                alt="Oxigénterápia Logo"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xl font-bold text-white uppercase tracking-tighter">
                Oxigén<span className="text-cyan-400">terápia</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Prémium hiperbárikus oxigénterápia Székesfehérvár szívében. Longevity és regeneráció felsőfokon, orvosi szakértelemmel.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-500", name: "Facebook oldal" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500", name: "Instagram oldal" },
                { icon: Music2, href: "#", color: "hover:text-white", name: "TikTok oldal" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigáció</h3>
            <ul className="space-y-4">
              {['Mire jó?', 'Folyamat', 'Bérletek', 'Vélemények', 'Kapcsolat'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/ /g, '')}`}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight size={14} aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Elérhetőség</h3>
            <ul className="space-y-6">
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin size={16} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-tighter">Címünk</span>
                </div>
                <span className="text-gray-300 text-sm">8000 Székesfehérvár, Budai út 318.</span>
              </li>
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone size={16} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-tighter">Telefonszám</span>
                </div>
                <a href="tel:+3622999640" className="text-gray-300 text-sm hover:text-white transition-colors">+36 22 999 640</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Nyitvatartás</h3>
            <div className="space-y-3 bg-white/5 p-6 rounded-2xl border border-white/5 w-full">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Hétfő - Péntek:</span>
                <span className="text-white font-medium">08:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Szombat:</span>
                <span className="text-white font-medium">Zárva</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Vasárnap:</span>
                <span className="text-white font-medium">Zárva</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Oxigénterápia Székesfehérvár. Minden jog fenntartva.
          </p>
          <div className="flex gap-6">
            <Link href="/adatvedelem" className="text-gray-400 hover:text-gray-200 text-xs transition-colors">Adatkezelési tájékoztató</Link>
            <Link href="/aszf" className="text-gray-400 hover:text-gray-200 text-xs transition-colors">ÁSZF</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}