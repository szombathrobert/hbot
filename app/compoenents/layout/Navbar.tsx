'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarCheck, Phone, Facebook, Instagram, Music2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Mire jó?', href: '#indikaciok' },
    { name: 'Folyamat', href: '#folyamat' },
    { name: 'Bérletek', href: '#arak' },
    { name: 'Vélemények', href: '#rolunk' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative">
              <Image src="/logo.webp" alt="logo" width={45} height={45} className="w-10 h-10 lg:w-11 lg:h-11 object-contain transition-transform group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full"></div>
            </div>
            <span className="hidden sm:block text-lg lg:text-xl font-bold tracking-tighter text-white uppercase">
              Oxigén<span className="text-cyan-400">terápia</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="tel:+3622999640" className="hidden xl:flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
              <Phone size={16} className="text-cyan-400 group-hover:animate-pulse" />
              <span className="text-sm font-semibold tracking-tight">+36 22 999 640</span>
            </a>

            <Link
              href="#kapcsolat"
              className="hidden md:flex items-center gap-2 bg-cyan-500 text-[#020617] px-6 py-2.5 rounded-full text-xs font-black shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 hover:scale-105 transition-all duration-300 uppercase tracking-tighter"
            >
              <CalendarCheck size={16} />
              Időpontfoglalás
            </Link>

            <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617]/98 backdrop-blur-2xl lg:hidden flex flex-col pt-32 pb-12 px-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-light text-white tracking-widest uppercase">
                  {link.name}
                </Link>
              ))}

              <hr className="border-white/10 my-4" />

              <a href="tel:+3622999640" className="flex items-center justify-center gap-3 text-2xl text-cyan-400 font-bold">
                <Phone /> +36 22 999 640
              </a>

              <Link href="#kapcsolat" onClick={() => setIsOpen(false)} className="bg-cyan-500 text-[#020617] py-5 rounded-full text-xl font-black uppercase shadow-2xl shadow-cyan-500/20">
                Időpontfoglalás
              </Link>

              <div className="flex justify-center gap-8 mt-auto pt-12">
                <a href="#"><Facebook className="text-gray-400 hover:text-cyan-400" /></a>
                <a href="#"><Instagram className="text-gray-400 hover:text-cyan-400" /></a>
                <a href="#"><Music2 className="text-gray-400 hover:text-cyan-400" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}