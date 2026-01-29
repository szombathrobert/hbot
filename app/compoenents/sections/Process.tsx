'use client'

import { motion, type Variants } from 'framer-motion'
import { FileCheck, Armchair, ArrowDownCircle, Sparkles, Smartphone, ArrowRight } from 'lucide-react'

const steps = [
    { id: "01", icon: FileCheck, title: "Érkezés & Konzultáció", desc: "Rövid állapotfelmérés és a kontraindikációk kizárása.", tip: "Kényelmes ruhában jöjjön!" },
    { id: "02", icon: Armchair, title: "Elhelyezkedés", desc: "Beszállás a tágas kabinba. Beviheti könyvét, magazinját.", tip: "Nem klausztrofób élmény." },
    { id: "03", icon: ArrowDownCircle, title: "A 'Merülés'", desc: "A nyomás fokozatos emelése. Ilyenkor pattoghat a füle.", tip: "Nyeléssel könnyen kiegyenlíthető." },
    { id: "04", icon: Sparkles, title: "Oxigénfürdő", desc: "A célnyomás elérése után indul a 30-60 perces tiszta oxigén belégzés.", tip: "Teljesen fájdalommentes." }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
}

export const Process = () => {
    return (
        <section id="folyamat" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2 block">Lépésről lépésre</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                        Így zajlik egy <span className="text-brand-primary">kezelés</span>
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-8 md:gap-8 pt-12 md:pt-0"
                >
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-light/20 via-brand-primary/20 to-brand-light/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative group">
                            <span className="absolute -top-12 right-4 text-6xl font-black text-brand-bg select-none z-0 group-hover:text-brand-light/10 transition-colors duration-500">{step.id}</span>
                            <div className="relative z-10 bg-white p-6 rounded-3xl border border-brand-light/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    <step.icon className="w-8 h-8 text-brand-primary group-hover:text-[#8FBCE6] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                                <p className="text-brand-muted text-sm leading-relaxed mb-6">{step.desc}</p>
                                <div className="mt-auto bg-brand-light/10 text-brand-primary px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                                    <Smartphone className="w-3 h-3" /> {step.tip}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}