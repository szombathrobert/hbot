'use client'

import { useState } from 'react'
import { LazyMotion, AnimatePresence, domAnimation, m, type Variants } from 'framer-motion'
import { Quote, MessageCircleQuestion, Plus, Minus, BookOpen } from 'lucide-react'

type FaqItem = {
    question: string;
    answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
    {
        question: "Mi az a hiperbárikus oxigénterápia és milyen problémákon segít?",
        answer: "A hiperbárikus oxigénterápia során 100%-os tisztaságú oxigént lélegez be megnövelt (1.3 ATA) nyomáson. Ez drasztikusan megnöveli a vérplazmában oldott oxigén szintjét. Kiválóan alkalmazható agyi regenerációra, poszt-COVID 'brain fog' (agyköd) kezelésére, sport-rehabilitációra, valamint a sejtek öregedésének (anti-aging) lassítására."
    },
    {
        question: "Miért egyedi a komplex Longevity program (HBOT + PEMF + NIR)?",
        answer: "Klinikánkon a terápiát pulzált elektromágneses (PEMF) és közeli infravörös (NIR-PBM) technológiával ötvözzük. Míg az oxigénkamra az 'üzemanyagot' (oxigént) biztosítja, a PEMF megnyitja a hajszálereket, a NIR pedig beindítja a sejtek energiaközpontjait (mitokondriumok), így a regeneráció szinergiában, többszörös hatékonysággal megy végbe."
    },
    {
        question: "Hány kezelés szükséges a tartós eredményhez?",
        answer: "A regenerációs hatás kumulatív, azaz összeadódik. Általános egészségmegőrzésre napi 1-2 alkalom is frissítő, de a sejtszintű változásokhoz (mint a telomerhossz növekedése) heti 3-5 alkalom javasolt egy 6-12 hetes cikluson belül. Orvosaink minden esetben egyéni, személyre szabott protokollt javasolnak."
    },
    {
        question: "Hogyan készüljek fel a kezelésre? (Biztonsági szabályok)",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Tiltott tárgyak:</strong> Szigorúan tilos tüzet, gyúlékony anyagokat (benzin, alkohol, olajok, öngyújtó), valamint hegyes tárgyakat a kamrába vinni!</li>
                <li><strong>Étkezés:</strong> Étkezés után 1-2 órával javasolt a használat, ne lépjen be puffasztó ételek fogyasztása után.</li>
                <li><strong>Fülpattogás:</strong> A nyomás növekedésekor füldugulást érezhet (mint a repülőn). Nyeljen nagyokat, mozgassa az állkapcsát, vagy befogott orral fújjon enyhén levegőt a fülébe.</li>
                <li><strong>Légzés:</strong> Lélegezzen normálisan, a nyomáscsökkentéskor tilos visszatartani a lélegzetet!</li>
            </ul>
        )
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
        <LazyMotion features={domAnimation}>
            <section id="gyik" aria-label="Gyakori Kérdések a hiperbárikus oxigénterápiáról és agyi regenerációról" className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center">

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        <m.div
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
                        </m.div>

                        <m.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {faqItems.map((item, index) => (
                                <m.div
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
                                            <m.div
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
                                            </m.div>
                                        )}
                                    </AnimatePresence>

                                </m.div>
                            ))}
                        </m.div>
                    </div>

                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="max-w-5xl mx-auto mt-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="bg-cyan-500/10 p-5 rounded-2xl border border-cyan-500/20">
                                <BookOpen className="w-10 h-10 text-cyan-400" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="font-bold text-white text-2xl uppercase tracking-wider mb-2">Minden részletre kíváncsi?</h4>
                                <p className="font-light text-gray-300 text-lg">
                                    Töltse le a hiperbár kamra hivatalos, magyar nyelvű felhasználói kézikönyvét.
                                </p>
                            </div>
                        </div>
                        <a
                            href="/docs/hiperbar_oxigenkamra_magyar_kezikonyv.pdf"
                            download
                            className="whitespace-nowrap px-8 py-4 rounded-full bg-cyan-500 text-[#020617] font-bold text-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
                        >
                            Kézikönyv letöltése
                        </a>
                    </m.div>

                </div>
            </section>
        </LazyMotion>
    )
}