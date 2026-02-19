'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Benefits = () => {
    return (
        <section
            aria-label="Főújdonságok és időpontfoglalás"
            className="relative w-full py-24 overflow-hidden flex items-center justify-center"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                <div className="max-w-3xl w-full flex flex-col items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.08] mb-8 text-white text-left md:pl-24 lg:pl-40">
                            Miért az
                            <span className="text-white font-bold block md:inline"> oxigénterápia.hu?</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:pl-24 lg:pl-40"
                    >
                        <p className="text-gray-200 font-light text-justify text-lg md:text-xl leading-relaxed mb-6">
                            Nem minden oxigénterápia egyforma. Az Endolife Longevity Egészségklinika hangsúlyt fektetett arra, hogy megismerje a világ különböző tájékain elterjedt orvosi protokollokat és az ezekről készült dokumentációkat, kutatásokat. Ezen óriási tudásbázis alapján hoztuk létre a saját szolgáltatásunkat, melyben legfontosabb szempont volt, hogy a leghatékonyabb egészségügyi eredményeket a legnagyobb biztonsággal ötvözzük.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}