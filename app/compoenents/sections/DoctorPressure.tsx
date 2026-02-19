'use client'

import { motion, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

const pressureTypes = [
    {
        title: "1.2 ATA",
        desc: "SOFT"
    },
    {
        title: "1.3 ATA",
        desc: "MILD",
    },
    {
        title: "1.4 ATA",
        desc: "MEDIUM",
    },
    {
        title: "1.5 ATA",
        desc: "THERAPY",
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
}

const cardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

export const DoctorPressure = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden flex items-center justify-center">

            <div className="absolute inset-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-wider uppercase font-light leading-tight">
                                Orvosi <br />
                                <span className='font-bold block mt-2'>Nyomásfokozatok</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
                        >
                            {pressureTypes.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="flex items-center gap-6 group">

                                    <div className="w-16 h-16 rounded-full border-[15px] border-white/60 flex-shrink-0 animate-pulse duration-[8000ms]" />

                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-[#8FBCE6] font-medium tracking-widest text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative mt-20 lg:mt-0 w-full lg:max-w-lg mx-auto"
                    >
                        <div className="absolute -top-16 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-40 md:h-40 rounded-full border-[30px] md:border-[40px] border-white/80 -z-10 animate-pulse duration-[8000ms]"></div>

                        <div className={`
                            relative 
                            bg-gradient-to-br from-[#0f172a]/80 to-[#0f172a]/40 backdrop-blur-xl
                            rounded-[2.5rem] p-8 md:p-12
                            shadow-2xl z-10 
                            border-l-[6px] border-l-white/90 
                            border-t-[6px] border-t-white/80 
                            border-b-[6px] border-b-cyan-200/40 
                            border-r-[1px] border-r-cyan-200/30
                        `}>
                            <p className="text-white text-lg md:text-xl leading-relaxed font-light text-justify drop-shadow-md">
                                A hiperbár oxigénterápia hatékonyságában kulcsszerepet játszanak a megfelelően beállított nyomási fokozatok. A kezelés során alkalmazott, a normál légköri nyomásnál magasabb érték teszi lehetővé, hogy az oxigén nagyobb mennyiségben oldódjon fel a vérplazmában, és így eljusson a nehezebben ellátható szövetekhez is.
                                <br /><br />
                                A nyomás szintjét mindig az adott célhoz (legyen az gyógyítás, regeneráció vagy prevenció) igazítják orvosaink, mivel különböző nyomástartományok eltérő élettani hatásokat váltanak ki. A fokozatos nyomásnövelés és csökkentés nemcsak a kezelés hatékonyságát segíti, hanem a <strong className="text-white font-bold">biztonságot</strong> is szolgálja.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}