'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const OxygenTherapy = ({ city = 'Székesfehérvár' }: { city?: string }) => {
    return (
        <section aria-label="Főújdonságok és időpontfoglalás" className="relative w-full bg-white overflow-hidden">

            <div className="flex flex-col lg:flex-row w-full lg:min-h-[550px]">

                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[75%] bg-[#8FBCE6] p-8 md:p-14 lg:px-20 lg:py-18 flex flex-col justify-center"
                >
                    <div className="max-w-3xl">
                        <span className="text-gray-800 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Orvosi Hiperbárikus Centrum — {city}
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.05] mb-5 tracking-tight">
                            Oxigénterápia <br />
                            Prémium, orvosi <br />
                            felügyelettel.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed font-medium">
                            <strong>Longevity</strong> (oxigenterapia.hu) várja a pácienseket {city}on.<br className="hidden lg:block" />
                            Gyorsabb regeneráció, poszt-COVID támogatás és teljesítményfokozás <br className="hidden lg:block" />
                            orvosi protokoll szerint.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                'Azonnal elérhető időpontok — nincs várólista',
                                '100% orvosi oxigén, orvosi felügyelet',
                                'Tág, kényelmes egyhelyiséges kabin'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-900 font-medium text-lg">
                                    <Check className="w-5 h-5 text-gray-900 shrink-0" strokeWidth={2.5} aria-hidden />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="block lg:hidden relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden mb-8">
                            <Image
                                src="/oxygentherapy.webp"
                                alt="Hiperbárikus oxigénkabin"
                                fill
                                sizes="(max-width: 1024px) 100vw, 0vw"
                                priority
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={"www.medicall.cc"} className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-lg font-bold shadow-lg shadow-black/10 bg-[#2C5D8A] text-white hover:bg-[#1a3d5e] transition-colors duration-300 ease-in-out">
                                <CalendarCheck className="w-5 h-5" />
                                Időpontfoglalás
                            </Link>
                            <Link href={"www.medicall.cc"} className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2B2F33] text-white rounded-full text-lg font-bold shadow-lg shadow-black/10 hover:bg-[#1a1c1f] transition-colors duration-300 ease-in-out">
                                Kezelés áraink
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <div className="hidden lg:block w-4 xl:w-6 bg-white shrink-0 z-10"></div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="hidden lg:block w-full lg:w-[25%] relative min-h-full"
                >
                    <Image
                        src="/oxygentherapy.webp"
                        alt="Hiperbárikus oxigénkabin"
                        fill
                        sizes="(max-width: 1024px) 0vw, 25vw"
                        priority
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    )
}