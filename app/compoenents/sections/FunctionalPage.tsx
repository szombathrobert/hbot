'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export const FunctionalPage = () => {
    return (
        <section
            aria-label="Főújdonságok és időpontfoglalás"
            className="relative w-full h-screen bg-[url('/functionalpage.webp')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl w-full flex flex-col items-start"
                >
                    <Quote
                        className="w-12 h-12 md:w-16 md:h-16 text-white/30 mb-4 rotate-180 ml-6 lg:ml-24"
                        fill="currentColor"
                        stroke="none"
                    />

                    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8 text-white text-left md:pl-14 lg:pl-28">
                        Működési
                        <span className="text-white font-bold block md:inline"> alapelvek</span>
                    </h1>

                    <div className="w-full md:pl-14 lg:pl-30">
                        <p className="text-white text-justify text-lg md:text-lg leading-relaxed mb-6">
                            A hiperbár oxigénterápia egy korszerű orvosi eljárás, amely során a páciens tiszta oxigént lélegzik be egy speciális, megnövelt nyomású kamrában. Normál körülmények között az oxigént főleg a vörösvérsejtek szállítják. A hiperbár környezetben viszont a megnövelt nyomás miatt sokkal több oxigén oldódik fel a vérplazmában, így az oxigén mélyebben és hatékonyabban jut el a szövetekhez ez segíti a gyógyulást és a regenerációt, csökkenti a gyulladást, és támogatja a sérült vagy oxigénhiányos területek helyreállítását.
                        </p>

                        <p className="text-white text-justify text-lg md:text-lg leading-relaxed">
                            A kezelést többek között szén-monoxid mérgezés, nehezen gyógyuló sebek, égési sérülések és bizonyos fertőzések esetén alkalmazták kezdetben, de ma már világszerte elterjedt a prevenció és a longevity (hosszú, egészséges élet) támogatásában is.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}