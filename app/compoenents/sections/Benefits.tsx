'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export const Benefits = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section
                aria-label="A Komplex Longevity Program előnyei és szinergikus megközelítése"
                className="relative w-full py-24 overflow-hidden flex items-center justify-center"
            >
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                    <div className="max-w-4xl w-full flex flex-col items-start">

                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.08] mb-8 text-white text-left md:pl-24 lg:pl-32">
                                Több mint
                                <span className="text-white font-bold block md:inline"> oxigénterápia.</span>
                            </h2>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="w-full md:pl-24 lg:pl-32 space-y-6"
                        >
                            <p className="text-gray-200 font-light text-justify text-lg md:text-xl leading-relaxed">
                                Nem minden regenerációs kezelés egyforma. Az Endolife Longevity Egészségklinikán túlléptünk a hagyományos oxigénterápián: a legújabb nemzetközi neuro-regenerációs és öregedésgátló kutatásokra építve egy <strong>komplex, szinergikus rendszert</strong> hoztunk létre, amely a legmagasabb orvosi biztonságot ötvözi a hatékonysággal.
                            </p>

                            <p className="text-gray-200 font-light text-justify text-lg md:text-xl leading-relaxed">
                                A jövő longevity medicinája nem egyetlen módszerre épül. Orvosi protokolljainkban a hiperbárikus oxigénterápiát (HBOT) <strong>pulzált elektromágneses mező (PEMF)</strong> és <strong>közeli infravörös fotobiomodulációs (NIR-PBM)</strong> és kiegészítő gyógyszeres longevity és primer prevenciós terápiákkal ötvözzük.
                                <br /><br />
                                [Image of synergistic effects of HBOT, PEMF, and NIR-PBM on cellular energy and microcirculation]
                                <br /><br />
                                Ez a biológiailag logikus modell egyszerre több fronton támogatja az agy és a test működési tartalékait: a HBOT biztosítja az extra oxigénkínálatot és az új erek képződését, a PEMF javítja a prekapilláris mikrokeringést, a NIR-PBM pedig közvetlenül fokozza a sejtek <strong>mitokondriális energiatermelését</strong>.
                            </p>
                        </m.div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}