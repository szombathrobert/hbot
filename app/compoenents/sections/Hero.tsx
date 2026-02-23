import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = ({ city = 'Székesfehérvár' }: { city?: string }) => {
  return (
    <section
      aria-label="Főújdonságok és időpontfoglalás"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-dark"
    >
      <Image
        src="/hero.webp"
        alt={`Hiperbárikus Oxigénterápia ${city}`}
        fill
        priority
        quality={85}
        decoding="sync"
        className="object-cover object-[48%_center] md:object-center z-0"
      />

      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl lg:text-8xl leading-[1.08] mb-6 text-white drop-shadow-md">
            Hiperbárikus <br />
            <span className="font-extrabold">Oxigénterápia</span>
            <span className="block text-2xl lg:text-4xl mt-4 font-normal">
              {city}
            </span>
          </h1>

          <p className="text-sm lg:text-xl mb-8 leading-relaxed font-medium text-white/90 uppercase tracking-wide">
            Endolife Longevity Egészségklinikánk
          </p>

          <Link
            aria-label='idopontfoglalas'
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 text-white py-2 px-6 md:px-8 md:py-3 w-full md:w-auto rounded-full text-lg md:text-2xl font-semibold shadow-lg shadow-brand-primary/20 hover:bg-[#3f73a4] transition-colors duration-300 ease-in-out bg-[#2C5D8A]"
          >
            Foglaljon időpontot!
          </Link>
        </div>
      </div>
    </section>
  )
}