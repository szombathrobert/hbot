'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarCheck, Phone } from 'lucide-react'
import { Facebook, Instagram, Music2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Mire jó?', href: '#indikaciok' },
    { name: 'Terápia menete', href: '#folyamat' },
    { name: 'Bérletek', href: '#arak' },
    { name: 'Vélemények', href: '#rolunk' },
    { name: 'Kapcsolat', href: '#kapcsolat' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#020617]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">

            <Link href="/" aria-label="Főoldal" className="flex items-center gap-3 z-50 relative group">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="Oxigénterápia Székesfehérvár logó"
                  width={50}
                  height={50}
                  priority
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold tracking-tight text-white uppercase leading-none">
                  Oxigén<span className="text-cyan-400">terápia</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Székesfehérvár</span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+3622999640"
                aria-label="Központi telefonszám hívása"
                className="flex items-center gap-2 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>+36 22 999 640</span>
              </a>

              <Link
                href="#kapcsolat"
                className="flex items-center gap-2 bg-cyan-500 text-[#020617] px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:bg-cyan-400 transition-all duration-300"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Időpontfoglalás</span>
              </Link>
            </div>

            <button
              aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={isOpen}
              className="lg:hidden z-50 relative text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#020617]/98 backdrop-blur-xl pt-32 px-6 lg:hidden flex flex-col items-center"
          >
            <div className="flex flex-col gap-6 text-center w-full max-w-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-white/10 my-4" />

              <div className="flex justify-center gap-8 mb-6">
                <a href="https://facebook.com/..." aria-label="Látogasson el Facebook oldalunkra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all scale-125">
                  <Facebook size={24} aria-hidden="true" />
                </a>
                <a href="https://instagram.com/..." aria-label="Látogasson el Instagram oldalunkra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-all scale-125">
                  <Instagram size={24} aria-hidden="true" />
                </a>
                <a href="https://tiktok.com/..." aria-label="Látogasson el TikTok oldalunkra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all scale-125">
                  <Music2 size={24} aria-hidden="true" />
                </a>
              </div>

              <a
                href="tel:+3622999640"
                aria-label="Központi telefonszám hívása mobilról"
                className="flex items-center justify-center gap-3 w-full border border-cyan-500/50 text-white py-4 rounded-full text-lg font-bold bg-cyan-500/5"
              >
                <Phone className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                +36 22 999 640
              </a>

              <Link
                href="#kapcsolat"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full text-[#020617] py-4 rounded-full text-lg font-bold bg-cyan-500"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Időpontfoglalás
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}