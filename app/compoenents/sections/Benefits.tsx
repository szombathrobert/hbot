'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Benefits = () => {
    return (
        <section
            aria-label="Főújdonságok és időpontfoglalás"
            className="relative w-full h-screen bg-[url('/whyoxygen.webp')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl w-full flex flex-col items-start"
                >

                    <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.08] mb-8 text-white text-left md:pl-24 lg:pl-40">
                        Miért az
                        <span className="text-white font-bold block md:inline"> oxigénterápia.hu?</span>
                    </h1>

                    <div className="w-full md:pl-24 lg:pl-40">
                        <p className="text-white text-justify text-lg md:text-lg leading-relaxed mb-6">
                            Nem minden oxigénterápia egyforma. Az Endolife Longevity Egészségklinika hangsúlyt fektetett arra, hogy megismerje a világ különböző tájékain elterjedt orvosi protokollokat és az ezekről készült dokumentációkat, kutatásokat. Ezen óriási tudásbázis alapján hoztuk létre a saját szolgáltatásunkat, melyben legfontosabb szempont volt, hogy a leghatékonyabb egészségügyi eredményeket a legnagyobb biztonsággal ötvözzük.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}