'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Hero = ({ city = 'Székesfehérvár' }: { city?: string }) => {
  return (
    <section
      aria-label="Főújdonságok és időpontfoglalás"
      className="relative w-full h-screen bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-6xl lg:text-6xl text-brand-dark leading-[1.08] mb-6 text-white">
            Hiperbárikus <br />
            <span className="text-white font-extrabold">Oxigénterápia</span>
          </h1>

          <p className="text-3xl text-brand-muted mb-8 leading-relaxed font-medium text-white">
            ENDOLIFE LONGEVITY EGÉSZSÉGKLINIKÁNK
          </p>

          <Link
            href={"www.google.com"}
            className="inline-flex justify-center items-center gap-2 text-white px-10 py-5 sm:px-8 sm:py-3 w-full sm:w-auto rounded-full text-5xl sm:text-2xl font-semibold shadow-lg shadow-brand-primary/20 hover:bg-[#3f73a4] transition-colors duration-300 ease-in-out bg-[#2C5D8A]"
          >
            Foglaljon időpontot!
          </Link>

        </motion.div>
      </div>
    </section>
  )
}