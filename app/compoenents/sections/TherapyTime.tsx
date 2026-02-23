'use client'

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'

const treatmentTime = [
    {
        title: "30 perces kezelés",
        desc: "Gyors felfrissülés, mentális fókusz javítása"
    },
    {
        title: "60 perces kezelés",
        desc: "Az ajánlott orvosi protokoll a mélyebb regenerációért."
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
}

export const TherapyTime = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="időtartam" aria-label="Kezelési időtartamok" className="relative w-full py-24 overflow-hidden flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <m.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative mt-20 lg:mt-0 w-full lg:max-w-lg mx-auto order-2 lg:order-1"
                        >
                            <div className="absolute -top-16 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-40 md:h-40 rounded-full border-30 md:border-40 border-white/80 -z-10 animate-pulse duration-8000"></div>

                            <div className={`
                                relative 
                                bg-linear-to-br from-[#0f172a]/80 to-[#0f172a]/40 backdrop-blur-xl
                                rounded-[2.5rem] p-8 md:p-12
                                shadow-2xl z-10 
                                border-l-[6px] border-l-white/90 
                                border-t-[6px] border-t-white/80 
                                border-b-[6px] border-b-cyan-200/40 
                                border-r border-r-cyan-200/30
                            `}>
                                <p className="text-white text-lg md:text-xl leading-relaxed font-light text-justify drop-shadow-md">
                                    A hiperbár oxigénterápia során a kezelési idő hossza szintén meghatározó tényező a kívánt hatás elérésében. Az egyes alkalmak időtartama befolyásolja, hogy mennyi oxigén jut be a szervezetbe, és milyen mértékben tud az hasznosulni a sejtek szintjén. A megfelelően beállított időtartam elősegíti a regenerációs folyamatokat és a szervezet egyensúlyának támogatását. Emellett a kezelések rendszeressége és a teljes kúra hossza is kulcsfontosságú, hiszen a hiperbár terápia hatása gyakran kumulatív, vagyis több alkalom során épül fel a leginkább érezhető eredmény.
                                </p>
                            </div>
                        </m.div>

                        <div className="flex flex-col order-1 lg:order-2">
                            <m.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-16"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-wider uppercase font-light leading-tight text-center lg:text-left">
                                    Kezelési <br />
                                    <span className='font-bold block mt-2'> Időtartamok</span>
                                </h2>
                            </m.div>

                            <m.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
                            >
                                {treatmentTime.map((item, index) => (
                                    <m.div key={index} variants={itemVariants} className="flex items-center gap-6 group">
                                        <div className="w-16 h-16 rounded-full border-15 border-white/60 shrink-0 animate-pulse duration-8000" />

                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-[#8FBCE6] font-medium tracking-widest text-sm uppercase">{item.desc}</p>
                                        </div>
                                    </m.div>
                                ))}
                            </m.div>
                        </div>

                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}