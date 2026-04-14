'use client'

import { LazyMotion, domAnimation, m, Variants } from 'framer-motion'
import { Brain, BatteryWarning, Hourglass } from 'lucide-react'

const symptoms = [
    {
        icon: BatteryWarning,
        title: "Poszt-COVID és Krónikus Kimerültség",
        description: "A vírusfertőzések után a szervezet sokszor hónapokig képtelen visszaállni az eredeti energiaszintre. Ezt a sejtek 'erőműveinek' (mitokondriumok) károsodása és a tartós mikroszintű gyulladások okozzák. Nem puszta fáradtságról van szó, hanem egy olyan állapotról, amit alvással nem lehet kipihenni.",
        color: "text-rose-400",
        bgColor: "bg-rose-400/10",
        borderColor: "border-rose-400/20"
    },
    {
        icon: Brain,
        title: "Brain Fog (Agyköd)",
        description: "Érzi úgy, hogy lassabban forog az agya? Nehezebben találja a szavakat, romlik a memóriája, vagy képtelen órákig koncentrálni? Az agyköd (brain fog) egy valós neurológiai tünet, amit az agyi hajszálerek csökkent vérellátása és a krónikus stressz idéz elő. A sejtek szó szerint 'oxigén-éheznek'.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20"
    },
    {
        icon: Hourglass,
        title: "Felgyorsult Sejtszintű Öregedés",
        description: "A modern, stresszes életmód, a környezeti ártalmak és a gyulladások felgyorsítják a sejtjeink öregedését. A DNS-ünket védő 'telomerek' rövidülnek, a regeneráció lelassul. A Longevity (hosszú élet) orvoslás célja nem pusztán az életévek meghosszabbítása, hanem a minőségi, életerős évek visszanyerése.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10",
        borderColor: "border-emerald-400/20"
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export const SymptomsExplained = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative w-full py-24 overflow-hidden flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4"
                        >
                            Ismerős tünetek?
                        </m.h2>
                        <m.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-light text-white leading-tight mb-6"
                        >
                            Láthatatlan terhek, <br />
                            <span className="font-bold">amiket nem kell elfogadnia</span>
                        </m.h3>
                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 leading-relaxed"
                        >
                            Sok páciensünk érkezik hozzánk megfogalmazhatatlan kimerültséggel és fókuszvesztéssel. Ezek nem "természetes velejárói" a kornak vagy a stressznek, hanem kezelhető, fiziológiai állapotok.
                        </m.p>
                    </div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {symptoms.map((symptom, index) => {
                            const Icon = symptom.icon
                            return (
                                <m.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`
                                    relative p-8 rounded-3xl backdrop-blur-sm
                                    bg-slate-900/40 border border-slate-700/50
                                    hover:bg-slate-800/60 hover:${symptom.borderColor}
                                    transition-all duration-300 group
                                `}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${symptom.bgColor}`}>
                                        <Icon className={`w-7 h-7 ${symptom.color}`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4">
                                        {symptom.title}
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {symptom.description}
                                    </p>
                                </m.div>
                            )
                        })}
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    )
}