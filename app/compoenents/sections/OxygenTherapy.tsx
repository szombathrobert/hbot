'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { CalendarCheck, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const OxygenTherapy = ({ city = 'Székesfehérvár' }: { city?: string }) => {
    return (
        <LazyMotion features={domAnimation}>
            <section aria-label="Oxigénterápia bemutatása" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

                <div className="flex flex-col lg:flex-row w-full lg:min-h-137.5">

                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[75%] p-8 md:p-14 lg:px-20 lg:py-18 flex flex-col justify-center"
                    >
                        <div className="max-w-3xl">

                            <m.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className="text-white font-bold tracking-widest uppercase text-xs mb-4 block">
                                    Orvosi Hiperbárikus Centrum — {city}
                                </span>

                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
                                    Oxigénterápia <br />
                                    Prémium, orvosi <br />
                                    felügyelettel.
                                </h2>

                                <p className="text-lg md:text-xl text-white mb-6 leading-relaxed font-medium">
                                    <strong>Longevity</strong> (oxigenterapia.hu) várja a pácienseket {city}on.<br className="hidden lg:block" />
                                    Gyorsabb regeneráció, poszt-COVID támogatás és teljesítményfokozás <br className="hidden lg:block" />
                                    orvosi protokoll szerint.
                                </p>
                            </m.div>

                            <m.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="space-y-3 mb-8"
                            >
                                {[
                                    'Azonnal elérhető időpontok — nincs várólista',
                                    '100% orvosi oxigén, orvosi felügyelet',
                                    'Tág, kényelmes egyhelyiséges kabin'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white font-medium text-lg">
                                        <Check className="w-5 h-5 text-cyan-400 shrink-0" strokeWidth={2.5} aria-hidden />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </m.ul>

                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="block lg:hidden relative w-full h-70 sm:h-87.5 rounded-2xl overflow-hidden mb-8 shadow-2xl"
                            >
                                <Image
                                    src="/oxygentherapy.webp"
                                    alt="Hiperbárikus oxigénkabin"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 0vw"
                                    className="object-cover"
                                />
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link aria-label='medicall' href="https://www.medicall.cc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-lg font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-cyan-500 text-[#020617] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 ease-in-out hover:scale-105">
                                    <CalendarCheck className="w-5 h-5" />
                                    Időpontfoglalás
                                </Link>
                                <Link href="#arak" aria-label='arak' className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white rounded-full text-lg font-bold shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out">
                                    Kezelés áraink
                                </Link>
                            </m.div>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hidden lg:block w-full lg:w-[25%] relative min-h-full"
                    >
                        <Image
                            src="/oxygentherapy.webp"
                            alt="Hiperbárikus oxigénkabin"
                            fill
                            sizes="(max-width: 1024px) 0vw, 25vw"
                            className="object-cover rounded-l-3xl shadow-[-20px_0_30px_rgba(0,0,0,0.5)]"
                        />
                    </m.div>

                </div>
            </section>
        </LazyMotion>
    )
}