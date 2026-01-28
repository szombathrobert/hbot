'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Phone, MapPin, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative w-full bg-brand-bg pt-28 pb-0 lg:pt-36 overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {/* categories */}
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">
              Orvosi Hiperbárikus Centrum
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.15] mb-6">
              Oxigénterápia <br/>
              <span className="text-brand-primary">prémium környezetben.</span>
            </h1>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              A <b>Longevity</b> (oxigenterapia.hu) Magyarország legmodernebb egyhelyiséges kamrájával várja.
              Gyorsabb regeneráció, poszt-COVID kezelés és teljesítményfokozás orvosi felügyelettel.
            </p>

            {/* List for GEO data */}
            <ul className="space-y-3 mb-10">
              {[
                "Azonnal elérhető időpontok (nincs várólista)",
                "100% tiszta orvosi oxigén belégzése",
                "Kényelmes, nem bezárt érzetet keltő nagy kabin"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-light/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Buttons (Links) */}
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

          {/* Right side - picture */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px] w-full"
          >
            {/* White background behind the image */}
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-light/10 relative">
                {/* Kép helye */}
                <Image 
                  src="/oxigenkamra.webp" 
                  alt="Hiperbárikus Oxigénkabin Kívülről" 
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}