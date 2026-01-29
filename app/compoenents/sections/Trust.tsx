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
            <div className="container mx-auto px-4 md:px-6">

                {/* VÉLEMÉNYEK */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        Akik már <span className="text-brand-primary">fellélegeztek</span>
                    </h2>
                    <p className="text-brand-muted">Valós pácienseink tapasztalatai</p>
                </div>

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