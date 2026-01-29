'use client'


import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export const Hero = ({ city = 'Székesfehérvár' }: { city?: string }) => {
  return (
    <section aria-label="Főújdonságok és időpontfoglalás" className="relative w-full bg-brand-bg pt-28 pb-0 lg:pt-36 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">


          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">
              Orvosi Hiperbárikus Centrum — {city}
            </span>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.08] mb-6">
              Oxigénterápia <br />
              <span className="text-brand-primary">Prémium, orvosi felügyelettel.</span>
            </h1>


            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              <strong>Longevity</strong> (oxigenterapia.hu) várja a pácienseket {city}on. Gyorsabb regeneráció, poszt-COVID támogatás és teljesítményfokozás orvosi protokoll szerint.
            </p>


            <ul className="space-y-3 mb-10">
              {[
                'Azonnal elérhető időpontok — nincs várólista',
                '100% orvosi oxigén, orvosi felügyelet',
                'Tág, kényelmes egyhelyiséges kabin'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-dark font-medium">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-light/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-primary" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>


            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"www.medicall.cc"} className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary rounded-3xl font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/20 bg-[#2C5D8A] text-white hover:bg-[#8FBCE6] duration-300 ease-in-out">
                <CalendarCheck className="w-5 h-5" />
                Időpontfoglalás
              </Link>
              <Link href={"www.medicall.cc"} className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2B2F33] text-white border border-gray-200 text-brand-dark rounded-3xl font-semibold transition-colors hover:bg-[#8FBCE6] duration-300 ease-in-out">
                Kezelés áraink
              </Link>
            </div>
          </motion.div>


          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative h-full min-h-[360px] lg:min-h-[420px] w-full">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-light/10 relative">
                <Image src="/oxigenkamra.webp" alt="Hiperbárikus oxigénkabin — Longevity" width={1200} height={900} priority className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}