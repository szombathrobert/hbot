'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Quote, MessageCircleQuestion, Plus, Minus } from 'lucide-react'

const faqItems = [
    {
        question: "Mire jó a hiperbárikus oxigénterápia (HBOT)?",
        answer: "A hiperbárikus oxigénterápia (HBOT) egy olyan orvosi eljárás, amely során a páciens 100%-os tisztaságú oxigént lélegzik be megnövelt légköri nyomáson. Ez akár 8-szorosára növeli a vérplazmában oldott oxigén szintjét, ami beindítja az új erek képződését (angiogenezis), serkenti az őssejt-termelést, és csökkenti a gyulladásokat. Klinikánkon poszt-COVID agyköd, sport-regeneráció és anti-aging (longevity) folyamatok támogatására alkalmazzuk."
    },
    {
        question: "Hogyan támogatja a HBOT az agyi regenerációt?",
        answer: "A hiperbárikus oxigénterápia (HBOT) során a plazmában oldott oxigén szintje 10-20-szorosára nő. Ez beindítja az angiogenezist (új erek képződését) és fokozza a neuroplaszticitást. A folyamat kulcsa a hyperoxic-hypoxic paradoxon, amely aktiválja a regeneratív jelátviteli útvonalakat, például a HIF-1α-t, segítve az agyi mikrokeringés helyreállítását."
    },
    {
        question: "Hány alkalom szükséges a valódi változáshoz?",
        answer: "A regenerációs hatás kumulatív. A modern longevity protokollok szerint a sejtszintű változásokhoz (mint a telomerhossz növekedése vagy a szeneszcens sejtek csökkenése) heti 3-5 alkalom javasolt egy 6-12 hetes cikluson belül. Poszt-COVID szindróma vagy 'brain fog' esetén az egyéni állapotfelmérés alapján orvosaink személyre szabott kúrát állítanak össze."
    },
    {
        question: "Segíthet a kezelés a poszt-COVID tüneteken?",
        answer: "Igen, a kutatások szerint a HBOT hatékonyan csökkenti a neuroinflammációt (agyi gyulladást) és javítja az endothel diszfunkciót, amelyek a 'brain fog' fő kiváltói. A kezelés támogatja a mitokondriális működést, így segít visszanyerni a mentális fókuszt és csökkenteni a krónikus fáradtságot."
    },
    {
        question: "Milyen előnyei vannak a komplex programnak (PEMF + NIR)?",
        answer: "A komplex Longevity programunkban a HBOT-ot pulzált elektromágneses (PEMF) és közeli infravörös (NIR-PBM) terápiával ötvözzük. Míg a HBOT az oxigénkínálatot növeli, a PEMF a kapilláris perfúziót javítja, a NIR pedig közvetlenül a mitokondriális energiatermelést (ATP) fokozza, így a módszerek szinergiában támogatják a regenerációt."
    },
    {
        question: "Vannak ellenjavallatok?",
        answer: "A biztonság elsődleges. Kezeletlen légmell, bizonyos tüdőbetegségek vagy akut lázas fertőzés esetén a kezelés nem javasolt. Ezért klinikánkon minden kúrát részletes orvosi konzultáció és állapotfelmérés előz meg, ahol szakembereink megállapítják a terápiás alkalmasságot."
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
        <section id="gyik" aria-label="Gyakori Kérdések a hiperbárikus oxigénterápiáról és agyi regenerációról" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start lg:sticky lg:top-32"
                    >
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180 self-start" aria-hidden="true" />

                        <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wider font-light leading-tight">
                            Gyakori <br />
                            <span className='font-bold'>Kérdések</span>
                        </h2>

                        <div className="relative mt-8 ml-4">
                            <MessageCircleQuestion className="w-32 h-32 text-white stroke-1" aria-hidden="true" />
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
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    onClick={() => toggleQuestion(index)}
                                    className={`
                                        w-full text-left relative z-10
                                        bg-linear-to-r from-[#0f172a]/90 to-[#0f172a]/60 backdrop-blur-md
                                        border-8 border-[#8FBCE6] rounded-full
                                        px-8 py-5 md:py-6
                                        hover:border-cyan-400/60 transition-all duration-300
                                        flex items-center justify-between
                                        shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                                        ${openIndex === index ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)]' : ''}
                                    `}
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-white pr-4 m-0">
                                        {item.question}
                                    </h3>

                                    <div className="shrink-0 text-cyan-400">
                                        {openIndex === index ? <Minus size={24} strokeWidth={3} aria-hidden="true" /> : <Plus size={24} strokeWidth={3} aria-hidden="true" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
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