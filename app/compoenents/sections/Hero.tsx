import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = ({ city = 'Székesfehérvár' }: { city?: string }) => {
  return (
    <section
      aria-label="Agyi regeneráció és Longevity terápiák"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-dark"
    >
      <Image
        src="/hero.webp"
        alt={`Hiperbárikus Oxigénterápia és Longevity Program ${city}`}
        fill
        priority
        quality={85}
        decoding="sync"
        className="object-cover object-[48%_center] md:object-center z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <h1 className="text-4xl lg:text-6xl leading-[1.1] mb-6 text-white drop-shadow-lg">
            Agyi Regeneráció és <br />
            <span className="font-extrabold text-white">Longevity Program</span>
            <span className="block text-2xl lg:text-4xl mt-4 font-normal text-white/90">
              Hiperbárikus Oxigénterápia {city}
            </span>
          </h1>

          <p className="text-base lg:text-xl mb-8 leading-relaxed font-medium text-white/95 max-w-3xl drop-shadow-md">
            Érzi a poszt‑COVID „brain fog” hatását? A krónikus stressz és az előre adott életkor is csökkentheti az agy teljesítményét. Modern regenerációs terápiáink – az <strong>hiperbárikus oxigénterápia</strong> és a <strong>fotobiomoduláció (NIR-PBM)</strong> – az agyi mikrokeringés és a sejtszintű energia támogatásával segítik a mentális frissesség helyreállítását.
          </p>

          <Link
            aria-label='idopontfoglalas'
            href="https://endo-kapszula.mymedio.hu/doctors?specializationId=10118235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 text-white py-3 px-8 w-full md:w-auto rounded-full text-lg md:text-xl font-semibold shadow-lg shadow-brand-primary/20 hover:bg-[#3f73a4] transition-colors duration-300 ease-in-out bg-[#2C5D8A]"
          >
            Foglaljon időpontot!
          </Link>

          <p className="mt-4 text-sm text-white/70 uppercase tracking-widest font-semibold">
            Endolife Longevity Egészségklinika
          </p>
        </div>
      </div>
    </section>
  )
}