'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, CalendarCheck } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Figyeljük a görgetést, hogy árnyékot adjunk a menünek
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Mi az az oxigénterápia?', href: '#hbot' },
    { name: 'Előnyök', href: '#elonyok' },
    { name: 'Folyamat', href: '#folyamat' },
    { name: 'Árak & GYIK', href: '#gyik' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            
            {/* logo left side */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <span className="text-4xl font-bold tracking-tighter text-brand-dark hover:text-[#8FBCE6] transition-colors duration-300 ease-in-out">
                oxigenterapia<span className="text-brand-primary">.hu</span>
              </span>
            </Link>

            {/* centered links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-medium text-brand-muted hover:text-brand-primary transition-colors duration-300 ease-in-out hover:text-[#8FBCE6]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* links right side */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="tel:+36301234567" className="flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-primary transition-colors text-xl hover:text-[#8FBCE6]">
                <Phone className="w-4 h-4" />
                +36 1 234 5678
              </Link>
              
              <Link href={"www.google.com"} className="flex items-center gap-2 bg-brand-primary text-gray-900 px-5 py-2.5 rounded-full text-xl font-semibold hover:bg-brand-dark shadow-lg shadow-brand-primary/20 hover:bg-[#8FBCE6] transition-colors duration-300 ease-in-out bg-gray-100">
                <CalendarCheck className="w-4 h-4" />
                Időpontfoglalás
              </Link>
            </div>

            {/* hamburger */}
            <button 
              className="lg:hidden text-brand-dark z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile view */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-brand-dark hover:text-[#8FBCE6] transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
              
              <hr className="border-gray-100" />
              
              <Link href="tel:+3612345678" className="flex items-center justify-center gap-2 text-xl font-medium text-brand-primary hover:rounded-xl hover:text-[#8FBCE6]">
                <Phone className="w-5 h-5" />
                +36 1 234 5678
              </Link>

              <Link href={"www.google.com"} className="w-full bg-brand-primary text-gray-900 border-gray-900 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#8FBCE6] transition-colors duration-300 ease-in-out">
                Időpontfoglalás
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}