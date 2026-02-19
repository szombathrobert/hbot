'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Quote, MessageCircleQuestion, Plus, Minus } from 'lucide-react'

const faqItems = [
    {
        question: "Fájdalmas a kezelés?",
        answer: "Nem, a hiperbár oxigénterápia teljesen fájdalommentes. A nyomásváltozás során (a kezelés elején és végén) hasonló érzést tapasztalhat, mint repüléskor a füldugulás, de ez nyeléssel vagy ásítással könnyen kiegyenlíthető."
    },
    {
        question: "Hány alkalom szükséges?",
        answer: "Ez nagyban függ a kezelés céljától és az Ön egészségügyi állapotától. Általános regenerációhoz és wellness célokra már 5-10 alkalom is érezhető változást hoz, míg krónikus problémák esetén hosszabb kúra javasolt. Az első konzultáción orvosunk személyre szabott tervet készít."
    },
    {
        question: "Mit vihetek be a kabinba?",
        answer: "A kabinba kényelmes, pamut ruházatban érdemes beülni. Bevihet könyvet, magazint, de elektronikus eszközöket (telefon, tablet) biztonsági okokból kérjük kint hagyni. A kezelés alatt relaxálhat, olvashat vagy akár aludhat is."
    },
    {
        question: "Mik az ellenjavallatok?",
        answer: "Bizonyos állapotok esetén (pl. kezeletlen légmell, súlyos szívbetegség, akut vírusos fertőzés, láz) a kezelés nem javasolt. Ezért minden esetben orvosi konzultáció és állapotfelmérés előzi meg az első alkalmat a biztonság érdekében."
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="gyik" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start lg:sticky lg:top-32"
                    >
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180 self-start" />

                        <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wider font-light leading-tight">
                            Gyakori <br />
                            <span className='font-bold'>Kérdések</span>
                        </h2>

                        <div className="relative mt-8 ml-4">
                            <MessageCircleQuestion className="w-32 h-32 text-white stroke-1" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className={`
                                        w-full text-left relative z-10
                                        bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/60 backdrop-blur-md
                                        border-8 border-[#8FBCE6] rounded-full
                                        px-8 py-5 md:py-6
                                        hover:border-cyan-400/60 transition-all duration-300
                                        flex items-center justify-between
                                        shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                                        ${openIndex === index ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)]' : ''}
                                    `}
                                >
                                    <span className="text-lg md:text-xl font-bold text-white pr-4">
                                        {item.question}
                                    </span>

                                    <div className="shrink-0 text-cyan-400">
                                        {openIndex === index ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden px-6"
                                        >
                                            <div className="bg-[#0f172a]/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-[#8FBCE6] text-white text-base md:text-lg leading-relaxed shadow-inner">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}