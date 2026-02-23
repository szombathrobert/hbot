'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Quote } from 'lucide-react'

export const FunctionalPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section
                id='indikaciok'
                aria-label="A hiperbár oxigénterápia működési alapelvei"
                className="relative w-full py-24 overflow-hidden flex items-center justify-center"
            >
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                    <div className="max-w-3xl w-full flex flex-col items-start">

                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full"
                        >
                            <Quote
                                className="w-12 h-12 md:w-16 md:h-16 text-white/30 mb-4 rotate-180 ml-6 lg:ml-24"
                                fill="currentColor"
                                stroke="none"
                                aria-hidden="true"
                            />

                            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8 text-white text-left md:pl-14 lg:pl-28">
                                Működési
                                <span className="text-white font-bold block md:inline"> alapelvek</span>
                            </h2>
                        </m.div>

                        <div className="w-full md:pl-14 lg:pl-28">
                            <m.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed mb-6"
                            >
                                A hiperbár oxigénterápia egy korszerű orvosi eljárás, amely során a páciens tiszta oxigént lélegzik be egy speciális, megnövelt nyomású kamrában. Normál körülmények között az oxigént főleg a vörösvérsejtek szállítják. A hiperbár környezetben viszont a megnövelt nyomás miatt sokkal több oxigén oldódik fel a vérplazmában, így az oxigén mélyebben és hatékonyabban jut el a szövetekhez ez segíti a gyógyulást és a regenerációt, csökkenti a gyulladást, és támogatja a sérült vagy oxigénhiányos területek helyreállítását.
                            </m.p>

                            <m.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="text-gray-200 text-justify text-lg md:text-xl font-light leading-relaxed"
                            >
                                A kezelést többek között szén-monoxid mérgezés, nehezen gyógyuló sebek, égési sérülések és bizonyos fertőzések esetén alkalmazták kezdetben, de ma már világszerte elterjedt a prevenció és a longevity (hosszú, egészséges élet) támogatásában is.
                            </m.p>
                        </div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}