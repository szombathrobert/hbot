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
                aria-label="A hiperbár oxigénterápia működési alapelvei"
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
                                alt="Hiperbárikus oxigénkabin működése"
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
                                    Működési
                                    <span className="text-white font-bold block md:inline"> alapelvek</span>
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
                                    A hiperbár oxigénterápia egy korszerű orvosi eljárás, amely során a páciens tiszta oxigént lélegzik be egy speciális, megnövelt nyomású kamrában. Normál körülmények között az oxigént főleg a vörösvérsejtek szállítják. A hiperbár környezetben viszont a megnövelt nyomás miatt sokkal több oxigén oldódik fel a vérplazmában, így az oxigén mélyebben és hatékonyabban jut el a szövetekhez.
                                </p>

                                <p className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed">
                                    Ez segíti a gyógyulást és a regenerációt, csökkenti a gyulladást, és támogatja a sérült vagy oxigénhiányos területek helyreállítását. A prevenció és a longevity (hosszú, egészséges élet) támogatásában is világszerte elterjedt módszer.
                                </p>
                            </m.div>
                        </div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}