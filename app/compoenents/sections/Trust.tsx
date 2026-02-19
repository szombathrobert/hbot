'use client'

import { motion } from 'framer-motion'
import { Quote, Star, ShieldAlert } from 'lucide-react'

const reviews = [
    {
        name: "Kovács Péter",
        role: "Maratonfutó",
        text: "Sérülés után kerestem gyors megoldást. 5 alkalom után érezhető volt a javulás, a gyulladás teljesen megszűnt a térdemben.",
        stars: 5
    },
    {
        name: "Nagy Anna",
        role: "Post-COVID páciens",
        text: "Hónapokig küzdöttem a fáradtsággal. A hbot.hu-nál végre visszakaptam az energiaszintemet. Profi környezet, kedves személyzet.",
        stars: 5
    },
    {
        name: "B. Tamás",
        role: "Vállalkozó",
        text: "Mentális frissesség miatt járok. Ebédszünetben 60 perc, és délután úgy vág az agyam, mintha reggel lenne.",
        stars: 5
    }
]

export const Trust = () => {
    return (
        <section className="py-24">
            {/* VÉLEMÉNYEK */}
            <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
                <Quote className="self-start w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180" />

                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wider uppercase font-light">
                    Akik már <span className='font-bold uppercase'>fellélegeztek</span>
                </h2>

                <span className="block w-full md:w-auto text-center md:text-left text-sm md:text-base font-medium text-slate-900 uppercase tracking-widest mt-8 md:transform md:translate-x-12">
                    endolife longevity egészségklinika pácienseinek tapasztalata
                </span>
            </div>
            <div className="container mx-auto px-4 md:px-6 bg-white">

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-brand-bg p-8 rounded-3xl relative"
                        >
                            <Quote className="w-10 h-10 text-brand-primary/20 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-brand-dark italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <p className="font-bold text-brand-primary">{review.name}</p>
                                <p className="text-xs text-brand-muted uppercase tracking-wide">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ORVOSI DISCLAIMER (Ads miatt kötelező elem!) */}
                <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4 items-start">
                    <ShieldAlert className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                    <div className="text-sm text-brand-muted leading-relaxed">
                        <p className="font-bold text-brand-dark mb-1">Orvosi jogi nyilatkozat:</p>
                        <p>
                            A weboldalon található információk tájékoztató jellegűek. A hiperbárikus oxigénterápia (HBOT) egy kiegészítő terápia, amely nem helyettesíti a szakszerű orvosi diagnózist, tanácsadást és kezelést. Súlyos egészségügyi panaszok esetén kérjük, minden esetben konzultáljon kezelőorvosával a terápia megkezdése előtt. A hbot.hu nem ígér 100%-os gyógyulást, az eredmények egyénenként eltérőek lehetnek.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}