'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Image from 'next/image'

export const MedicalExpert = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="szakmai-hatter" className="relative w-full py-24 overflow-hidden flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-linear-to-r from-[#0f172a]/90 to-[#0f172a]/60 backdrop-blur-md border border-[#8FBCE6]/30 rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                <Image
                                    src="/madacsy-laszlo_.webp"
                                    alt="Dr. Prof. Madácsy László - Klinika vezető"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-center md:text-left">
                                <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">Szakmai Garancia</h2>
                                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">Dr. Prof. <span className="font-bold">Madácsy László</span></h3>
                                <p className="text-lg text-[#8FBCE6] mb-6 font-medium">Belgyógyász, Gasztroenterológus és Longevity szakértő</p>
                                <p className="text-white/80 leading-relaxed text-lg mb-6 max-w-2xl">
                                    "Célunk, hogy a legmodernebb orvostudományi kutatásokat a gyakorlatba ültessük. A hiperbárikus oxigénterápia nem varázslat, hanem tiszta biológia és fizika. Szigorú orvosi protokollok alapján dolgozunk, hogy pácienseink a legnagyobb biztonságban tapasztalhassák meg a sejtszintű regeneráció erejét."
                                </p>
                                <div className="inline-block border border-white/20 rounded-full px-6 py-2 bg-white/5">
                                    <span className="text-sm text-white/60">Magyar Orvosi Kamara: 45326</span>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    )
}