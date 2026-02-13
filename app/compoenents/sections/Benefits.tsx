'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, XCircle, Trophy, Maximize, UserCheck } from 'lucide-react'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

export const Benefits = () => {
    return (
        <section id="elonyok" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2 block">Technológiai összehasonlítás</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                        Miért válassza a <span className="text-brand-primary">oxigenterapia.hu</span> technológiáját?
                    </h2>
                    <p className="text-lg text-brand-muted">
                        Nem minden oxigénterápia egyforma. Magyarország egyik legmodernebb <b>keményfalú</b> kamrájával rendelkezünk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-light/20"
                    >
                        <div className="grid grid-cols-2 border-b border-gray-100">
                            <div className="p-6 text-center">
                                <p className="text-sm font-bold text-slate-900 uppercase">Hagyományos Sátor</p>
                            </div>
                            <div className="p-6 bg-brand-primary text-center text-slate-900">
                                <p className="text-lg font-bold">oxigenterapia.hu Kamra</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            <div className="grid grid-cols-2 py-4 px-6">
                                <div className="text-center"><span className="font-bold text-slate-900">max. 1.3 ATA</span></div>
                                <div className="text-center"><span className="font-bold text-brand-primary text-lg text-slate-900">1.5 ATA-ig</span></div>
                            </div>
                            <div className="grid grid-cols-2 py-4 px-6">
                                <div className="text-center"><span className="font-bold text-slate-900">Maszk nélküli</span></div>
                                <div className="text-center"><span className="font-bold text-brand-primary text-slate-900">100% Oxigén</span></div>
                            </div>
                            <div className="grid grid-cols-2 py-4 px-6">
                                <div className="text-center flex flex-col items-center">
                                    <XCircle className="w-6 h-6 text-red-400" />
                                    <span className="text-xs text-gray-500">Szűkös</span>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <span className="text-xs text-brand-muted">Klimatizált, tágas</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <Trophy className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Orvosi szintű hatékonyság</h3>
                                <p className="text-brand-muted">A keményfalú kamra képes elérni azt a nyomást, ahol a valódi sejtregeneráció beindul.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <UserCheck className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Szakértő felügyelet</h3>
                                <p className="text-brand-muted">Minden kezelést képzett személyzet felügyel.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <Maximize className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Klausztrofóbia-barát</h3>
                                <p className="text-brand-muted">Az egyik legtágasabb kabin a piacon nagy ablakokkal.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}