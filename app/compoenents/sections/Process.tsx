'use client'

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const steps = [
    {
        title: "Érkezés és konzultáció",
        desc: "Érkezés után egészségklinikánk orvosai felmérik az ön egészségügyi állapotát és kizárják a kontraindikációkat.",
        imageSrc: "/consultation.webp"
    },
    {
        title: "Elhelyezkedés",
        desc: "Az alkalmasság megállapítását követően páciensünk elfoglalhatja helyét a hiperbárikus oxigénterápia kabinba.",
        imageSrc: "/placement.webp"
    },
    {
        title: "Merülés az oxigénfürdőbe",
        desc: "A kabin elfoglalása után fokozatosan emelkedik a nyomás. A célnyomás elérése után pácienseink tiszta oxigént lélegeznek be.",
        imageSrc: "/oxygen.webp"
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
}

export const Process = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="folyamat" aria-label="A kezelés menete" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center"
                    >
                        <Quote className="self-start w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180" aria-hidden="true" />

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wider uppercase font-light">
                            Így zajlik egy <span className='font-bold'>KEZELÉS</span>
                        </h2>

                        <span className="block w-full md:w-auto text-center md:text-left text-sm md:text-base font-medium text-[#8FBCE6] uppercase tracking-widest mt-8 md:transform md:translate-x-12">
                            Lépésről lépésre az endolife longevity egészségklinikán
                        </span>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start"
                    >
                        {steps.map((step, index) => (
                            <m.div key={index} variants={itemVariants} className="relative group h-full">

                                <div className={`
                                    relative 
                                    bg-linear-to-br from-[#0f172a]/60 to-[#0f172a]/20 backdrop-blur-xl
                                    rounded-[2.5rem] px-8 py-12 lg:px-10 lg:py-14
                                    flex flex-col shadow-2xl z-10 
                                    min-h-112.5 lg:min-h-125
                                    border-l-[6px] border-l-white/90 
                                    border-t-[6px] border-t-white/80 
                                    border-b-[6px] border-b-cyan-200/70 
                                    border-r border-r-cyan-200/60
                                    hover:border-cyan-200/50 transition-colors duration-500
                                `}>
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-6 leading-tight pr-8 mt-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-white text-base leading-relaxed font-light drop-shadow-md">
                                            {step.desc}
                                        </p>
                                    </div>

                                    <div className="block md:hidden w-full h-64 relative rounded-xl overflow-hidden mt-auto border border-white/10">
                                        <Image
                                            src={step.imageSrc}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="hidden md:block absolute -bottom-12 -right-8 w-72 h-48 lg:w-80 lg:h-52 z-20 rounded-4xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={step.imageSrc}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </m.div>
                        ))}
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    )
}