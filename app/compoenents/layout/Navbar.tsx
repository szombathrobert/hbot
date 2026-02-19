'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarCheck, Phone } from 'lucide-react'
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

  // Görgetés tiltása ha nyitva a menü
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navLinks = [
    { name: 'Áraink', href: '#arak' }, // Javítottam az ID-t a szekcióhoz (#arak)
    { name: 'Kezelésről', href: '#kezelesrol' },
    { name: 'Gyakori Kérdések', href: '#gyik' },
    { name: 'Rólunk', href: '#rolunk' },
    { name: 'Kapcsolat', href: '#kapcsolat' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 z-50 relative group">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="oxigenterapia.hu-logo"
                  width={60}
                  height={60}
                  priority
                  className="w-12 h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Kis glow effekt a logó mögé */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-colors duration-500"></div>
              </div>

              <span className="text-xl lg:text-2xl font-bold tracking-tight text-white uppercase">
                Oxigén<span className="text-cyan-400">terápia</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-white hover:text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href={"www.google.com"}
                className="flex items-center gap-2 bg-cyan-500 text-[#020617] px-6 py-2.5 rounded-full text-base font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Időpontfoglalás</span>
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden z-50 relative text-white shrink-0 p-2 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl pt-32 px-6 lg:hidden flex flex-col items-center"
          >
            {/* Háttér dekoráció mobilon */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col gap-8 text-center w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full"
              >
                <hr className="border-white/10 mb-8" />

                <Link
                  href={"www.google.com"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full text-[#020617] py-4 rounded-full text-xl font-bold bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                >
                  <Phone className="w-6 h-6" />
                  Időpontfoglalás
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}