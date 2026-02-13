'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, CalendarCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Figyeljük a görgetést a háttérszínhez
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navLinks = [
    { name: 'Áraink', href: '#araink' },
    { name: 'Kezelésről', href: '#kezelesrol' },
    { name: 'Gyakori Kérdések', href: '#gyik' },
    { name: 'Rólunk', href: '#rolunk' },
    { name: 'Kapcsolat', href: '#kapcsolat' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#8FBCE6] backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">

            <Link href="/" className="flex items-center gap-1 sm:gap-2 z-50 relative">
              <Image
                src="/logo.webp"
                alt="oxigenterapia.hu-logo"
                width={90}
                height={90}
                priority
                className="w-14 h-14 lg:w-[70px] lg:h-[70px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <span className="text-2xl lg:text-4xl font-bold tracking-tighter hover:text-gray-200 transition-colors duration-300 ease-in-out text-white">
                oxigenterapia<span className="text-brand-primary">.hu</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium transition-colors duration-300 ease-in-out hover:text-gray-200 text-white"
                >
                  {link.name}
                </Link>
              ))}

              <div className="hidden lg:flex items-center gap-6">
                <Link href={"www.google.com"} className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-xl font-semibold shadow-lg shadow-brand-primary/20 hover:bg-[#3f73a4] transition-colors duration-300 ease-in-out bg-[#2C5D8A]">
                  <CalendarCheck className="w-4 h-4" />
                  Időpontfoglalás
                </Link>
              </div>
            </nav>

            <button
              className="lg:hidden z-50 relative text-white shrink-0 ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
            >
              {isOpen ? <X className="w-8 h-8 text-brand-dark" /> : <Menu className="w-8 h-8" />}
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
            className="fixed inset-0 z-40 bg-[#8FBCE6] pt-24 px-6 lg:hidden overflow-y-auto pb-6"
          >
            <div className="flex flex-col gap-12 text-center mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-semibold hover:text-gray-200 transition-colors duration-300 ease-in-out text-white"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-white/30" />

              <Link
                href={"www.google.com"}
                onClick={() => setIsOpen(false)}
                className="w-full text-white py-4 rounded-full text-2xl font-bold shadow-xl hover:bg-[#3f73a4] transition-colors duration-300 ease-in-out bg-[#2C5D8A]"
              >
                Időpontfoglalás
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}