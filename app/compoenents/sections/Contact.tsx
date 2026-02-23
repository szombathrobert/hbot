'use client'

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'
import { Quote, MapPin, Phone, Mail } from 'lucide-react'

const ContactItems = [
    {
        name: "Cím:",
        description: "8000 Székesfehérvár, Budai út 318.",
        icon: MapPin,
        href: "https://maps.google.com"
    },
    {
        name: "Telefon:",
        description: "06/22-999-640",
        icon: Phone,
        href: "tel:+3622999640"
    },
    {
        name: "E-mail:",
        description: "recepcio@endo-kapszula.hu",
        icon: Mail,
        href: "mailto:recepcio@endo-kapszula.hu"
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const Contact = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="kapcsolat" aria-label="A klinika elérhetőségei és térkép" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        <div className="flex flex-col h-full">
                            <m.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-start mb-12"
                            >
                                <Quote className="w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180 self-start" aria-hidden="true" />

                                <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wider font-light leading-tight">
                                    Klinikánk <br />
                                    <span className='font-bold'>Elérhetőségei</span>
                                </h2>

                                <p className="text-[#8FBCE6] text-lg md:text-xl font-light leading-relaxed max-w-md">
                                    Keressen minket bizalommal kérdés, vagy időpontfoglalás esetén az alábbi elérhetőségeken.
                                </p>
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="w-full h-64 md:h-80 lg:h-full min-h-75 relative rounded-4xl overflow-hidden border border-cyan-500/30 shadow-2xl group"
                            >
                                <iframe
                                    src="https://maps.google.com/maps?q=Endo-Kapszula+Magánorvosi+Centrum+Székesfehérvár&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    title='Térkép a klinika helyzetével'
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                ></iframe>

                                <div className="absolute inset-0 rounded-4xl pointer-events-none border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500"></div>
                            </m.div>
                        </div>

                        <m.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {ContactItems.map((item, index) => (
                                <m.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group"
                                >
                                    <a
                                        href={item.href}
                                        target={item.name === "Cím:" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={`${item.name} ${item.description}`}
                                        className={`
                                            relative block w-full
                                            bg-linear-to-r from-[#0f172a]/80 to-[#0f172a]/40 backdrop-blur-md
                                            border border-cyan-500/20 rounded-3xl
                                            p-6 md:p-8
                                            hover:border-cyan-400/50 hover:bg-[#0f172a]/60 
                                            transition-all duration-300
                                            shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                                            group
                                        `}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:text-white transition-all duration-300 text-cyan-400 shrink-0">
                                                <item.icon size={28} aria-hidden="true" />
                                            </div>

                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-[#8FBCE6] uppercase tracking-wider mb-1">
                                                    {item.name}
                                                </span>
                                                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-50 text-wrap wrap-break-words">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </m.div>
                            ))}
                        </m.div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}