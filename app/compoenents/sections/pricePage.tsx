'use client'

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

const pricingPackages = [
    {
        title: "1 alkalom",
        prices: [
            { duration: "60 perc", price: "25.000 Ft" },
            { duration: "90 perc", price: "30.000 Ft" },
            { duration: "120 perc", price: "35.000 Ft" }
        ]
    },
    {
        title: "5 alkalom",
        prices: [
            { duration: "60 perc", price: "119.000 Ft" },
            { duration: "90 perc", price: "125.000 Ft" },
            { duration: "120 perc", price: "149.000 Ft" }
        ]
    },
    {
        title: "10 alkalom",
        prices: [
            { duration: "60 perc", price: "199.000 Ft" },
            { duration: "90 perc", price: "249.000 Ft" },
            { duration: "120 perc", price: "299.000 Ft" }
        ]
    },
    {
        title: "25 alkalom",
        prices: [
            { duration: "60 perc", price: "499.000 Ft" },
            { duration: "90 perc", price: "599.000 Ft" },
            { duration: "120 perc", price: "699.000 Ft" }
        ]
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

export const PricePage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="arak" aria-label="Hiperbárikus oxigénterápia (HBOT) és Longevity bérlet árak" className="relative w-full py-24 overflow-hidden flex items-center justify-center">

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
                            Egy kezelés <span className='font-bold uppercase'>nem kezelés</span>
                        </h2>

                        <span className="block w-full md:w-auto text-center md:text-left text-sm md:text-base font-medium text-[#8FBCE6] uppercase tracking-widest mt-8 md:transform md:translate-x-12">
                            Ezért az Endolife Longevity Egészségklinika bérleteket hozott létre
                        </span>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
                    >
                        {pricingPackages.map((pkg, index) => (
                            <m.div key={index} variants={itemVariants} className="relative group h-full">

                                <div className={`
                                    relative h-full
                                    bg-linear-to-br from-[#0f172a]/60 to-[#0f172a]/20 backdrop-blur-xl
                                    rounded-[2.5rem] px-6 py-8
                                    flex flex-col shadow-2xl z-10 
                                    border-l-[6px] border-l-white/90 
                                    border-t-[6px] border-t-white/80 
                                    border-b-[6px] border-b-cyan-200/70 
                                    border-r border-r-cyan-200/60
                                    hover:border-cyan-200/50 hover:bg-[#0f172a]/40 transition-all duration-500
                                `}>
                                    <div className="mb-6 border-b border-white/10 pb-4 text-center">
                                        <h3 className="text-3xl font-bold text-white mb-1 leading-tight">
                                            {pkg.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-3 grow justify-center">
                                        {pkg.prices.map((priceItem, priceIndex) => (
                                            <div
                                                key={priceIndex}
                                                className="flex items-center justify-between bg-white/5 rounded-2xl px-4 py-3 hover:bg-white/10 transition-colors border border-white/5"
                                            >
                                                <span className="text-sm font-medium text-[#8FBCE6] uppercase tracking-wider">
                                                    {priceItem.duration}
                                                </span>
                                                <span className="text-lg font-bold text-white">
                                                    {priceItem.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    )
}