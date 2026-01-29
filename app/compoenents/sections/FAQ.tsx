'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
    {
        question: "Fájdalmas a kezelés?",
        answer: "Nem. A kezelés teljesen fájdalommentes. A nyomás növekedésekor (az első 5-10 percben) a repüléshez hasonló füldugulást érezhet, amit nyeléssel vagy ásítással könnyen ki lehet egyenlíteni. A kezelés alatt pihenhet, olvashat vagy aludhat."
    },
    {
        question: "Hány alkalom szükséges?",
        answer: "Ez a céltól függ. Általános frissítésre vagy 'brain fog' ellen már 1-3 alkalom is látványos. Sportsérülések vagy poszt-COVID regeneráció esetén általában 5-10 alkalmas kúrát javasolunk a tartós eredményért."
    },
    {
        question: "Mit vihetek be a kabinba?",
        answer: "A hbot.hu kabinja tágas és biztonságos, így bevihet könyvet, magazinokat. Javasoljuk, hogy kényelmes, pamut ruházatban érkezzen."
    },
    {
        question: "Van valamilyen kizáró ok (ellenjavallat)?",
        answer: "Igen, néhány esetben nem javasolt a terápia: kezeletlen légmell (PTX), súlyos asztma, terhesség, lázas állapot vagy akut fülgyulladás esetén. Minden kezelés előtt állapotfelmérést végzünk."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="gyik" className="py-24 bg-brand-bg">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Gyakori kérdések</h2>
                    <p className="text-brand-muted">Mindent, amit tudni érdemes a kezdés előtt.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-brand-light/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-brand-dark text-lg">{faq.question}</span>
                                <span className="text-brand-primary flex-shrink-0 ml-4">
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-brand-muted leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}