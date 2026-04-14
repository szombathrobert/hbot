'use client'

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'
import {
    Wind, HeartPulse, Brain, ShieldCheck,
    Moon, BatteryCharging, Sparkles, Activity,
    Dna, Droplets
} from 'lucide-react'

// Itt Lehet szerkeszteni a kis téglalapos felsorolást

const quickBenefits = [
    { text: "Légzőszervi panaszok enyhítése", icon: Wind },
    { text: "Szív-, érrendszeri és agyi érbetegségek megelőzése", icon: HeartPulse },
    { text: "Alzheimer-kór megelőzésének támogatása", icon: Brain },
    { text: "Immunitás erősítése és ellenállóképesség", icon: ShieldCheck },
    { text: "Alvásminőség javítása", icon: Moon },
    { text: "Fáradtság és kimerültség csökkentése", icon: BatteryCharging },
    { text: "Magaslati oxigénhiány és szubjektív rosszullét enyhítése", icon: Activity },
]

// Itt Lehet szerkeszteni a nagy kockás felsorolást

const chamberFunctions = [
    {
        title: "Keringés és Oxigénellátás",
        description: "Javítja a vér oxigéntartalmát és az oxigén diffúzióját. Serkenti a vérkeringést és tágíthatja az ereket a jobb tápanyagellátás érdekében.",
        icon: Droplets,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Sejtszintű Regeneráció",
        description: "Oxigént biztosít a bőrsejtek számára, támogatja a sérült sejtek regenerációját és hatékonyan lassíthatja az öregedési folyamatokat.",
        icon: Dna,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Mentális Frissesség",
        description: "Javíthatja az alvás minőségét, erősítheti a memóriát és stabilizálhatja a mentális állapotot a mindennapi stresszel szemben.",
        icon: Brain,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        title: "Sport és Fizikai Vitalitás",
        description: "Gyorsan enyhítheti az erős testmozgás okozta izomfeszülést. Ellensúlyozza a fáradtságot, gyorsítja a felgyülemlett salakanyagok anyagcseréjét.",
        icon: Zap,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    },
    {
        title: "Méregtelenítés és Védelem",
        description: "Antibakteriális hatást mutathat (különösen az anaerob baktériumok ellen). Segíti a káros anyagok (alkohol, nikotin) kiürülését.",
        icon: ShieldCheck,
        color: "text-rose-400",
        bg: "bg-rose-400/10"
    }
]

import { Zap } from 'lucide-react'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

// Itt Lehet szerkeszteni az alap szöveges részt a szekció tetején

export const HbotExplanation = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative w-full py-24 bg-brand-dark overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-[#1e3a8a]/10 to-transparent blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mx-auto text-center mb-20"
                    >
                        <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">
                            A Terápia Alapjai
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
                            Mi az a <span className="font-bold">hiperbárikus oxigénterápia?</span>
                        </h3>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl text-left md:text-center text-slate-300 leading-relaxed text-lg space-y-6">
                            <p>
                                A hiperbár oxigénnel végzett egészségmegőrzés olyan módszer, amely során a kamrában <strong>1 atmoszféránál nagyobb nyomáson tiszta oxigént lélegzünk be</strong>. A belélegzett gáz oxigénkoncentrációjának növelésével drasztikusan emelkedik a vér oxigénfeszültsége és tartalma.
                            </p>
                            <p>
                                Ennek köszönhetően a szövetek oxigénellátása és oxigénraktára is jelentősen nő, ami segít a szervezet belső vagy külső okból kialakult oxigénhiányának javításában. Rendszeres használata csökkenti a fáradtságot, támogatja a szellemi teljesítményt és a szépségápolást, javítja a férfi nemi funkciókat, előnyös lehet a magzat fejlődésére, és rendkívül hatékony az időskori betegségek megelőzésében.
                            </p>
                        </div>
                    </m.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                        <m.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="lg:col-span-5 flex flex-col justify-center"
                        >
                            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-cyan-400" />
                                Kiemelt élettani hatások
                            </h4>
                            <div className="space-y-4">
                                {quickBenefits.map((benefit, idx) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <m.div
                                            key={idx}
                                            variants={itemVariants}
                                            className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-4 hover:bg-slate-800/60 transition-colors"
                                        >
                                            <div className="bg-cyan-500/10 p-2 rounded-xl shrink-0">
                                                <Icon className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <span className="text-slate-200 font-medium">{benefit.text}</span>
                                        </m.div>
                                    )
                                })}
                            </div>
                        </m.div>

                        <m.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="sm:col-span-2">
                                <h4 className="text-2xl font-bold text-white mb-2">A kamra élettani funkciói</h4>
                                <p className="text-slate-400 mb-6">Hogyan dolgozik a szervezetben a megnövelt nyomású oxigén?</p>
                            </div>

                            {chamberFunctions.map((func, idx) => {
                                const Icon = func.icon;
                                return (
                                    <m.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-6 hover:border-slate-600 transition-all group"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${func.bg} group-hover:scale-110 transition-transform`}>
                                            <Icon className={`w-6 h-6 ${func.color}`} />
                                        </div>
                                        <h5 className="text-lg font-bold text-white mb-3">{func.title}</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {func.description}
                                        </p>
                                    </m.div>
                                )
                            })}
                        </m.div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}