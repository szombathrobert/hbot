'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export const FunctionalPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section
                id='indikaciok'
                aria-label="A hiperbárikus oxigénterápia (HBOT) működési alapelvei és a hyperoxic-hypoxic paradoxon"
                className="relative w-full py-24 overflow-hidden flex items-center justify-center"
            >
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <m.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-100 sm:h-96 lg:h-185 overflow-hidden order-1 lg:order-1"
                        >
                            <Image
                                src="/mukodesi_alapelv.webp"
                                alt="A hiperbárikus oxigénterápia (HBOT) sejtszintű hatásmechanizmusa"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </m.div>

                        <div className="flex flex-col items-start order-2 lg:order-2">
                            <m.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full"
                            >
                                <Quote
                                    className="w-12 h-12 md:w-16 md:h-16 text-white/30 mb-4 rotate-180"
                                    fill="currentColor"
                                    stroke="none"
                                    aria-hidden="true"
                                />

                                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-8 text-white text-left font-light">
                                    Sejtszintű
                                    <span className="text-white font-bold block md:inline"> megújulás</span>
                                </h2>
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="space-y-6"
                            >
                                <p className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed">
                                    A <strong>hiperbárikus oxigénterápia (HBOT)</strong> során a páciens megnövelt légköri nyomás alatt (1.3–2.5 ATA) tiszta oxigént lélegez be. Ennek hatására a vérplazmában oldott oxigén mennyisége akár 10–20-szorosára is nőhet, így az oxigén hemoglobin nélkül is képes eljutni a mikrokárosodott, rosszul perfundált szövetekbe.
                                </p>

                                <p className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed">
                                    A modern kutatások legfontosabb felismerése a <strong>hyperoxic-hypoxic paradoxon</strong>. A sejtek nem csupán az abszolút oxigénszintre, hanem annak változására reagálnak. A terápia után a normál oxigénszintre való visszatérést a szervezet relatív hipoxiaként (oxigénhiányként) érzékeli, ennek határása szejtszinten aktiválódik a HIF-1α jelátviteli útvonal, mely klinikai vizsgálatokban már 10-20 kezelés után bizonyítottan aktiválódik/növekszik, mely másodlagosan saját őssejt mobilizáló és neoangio genezist (ér újraképződést segítő) serkentő hatása (vegf)
                                </p>

                                <p className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed">
                                    Ez az érzékelt változás erőteljes biológiai folyamatokat indít be: aktiválja a kapillárisok újraképződését (angiogenezis), őssejteket mobilizál a csontvelőből, és támogatja a neuroplaszticitást. A HBOT ma már nem pusztán oxigénpótlás, hanem a <strong>longevity</strong> és az <strong>agyi regeneráció</strong> egyik leghatékonyabb sejtszintű jelátviteli stimulusa.
                                </p>
                            </m.div>
                        </div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}