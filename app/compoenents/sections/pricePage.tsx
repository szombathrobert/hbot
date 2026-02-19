'use client'

import { motion, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

const occasions = [
    {
        title: "5 alkalom",
        price: "45.000 Ft",
    },
    {
        title: "10 alkalom",
        price: "85.000 Ft",
    },
    {
        title: "15 alkalom",
        price: "120.000 Ft",
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
}

export const PricePage = () => {
    return (
        <section id="arak" className="py-24 relative w-full min-h-screen bg-[url('/background.webp')] bg-cover bg-[48%_center] md:bg-center bg-no-repeat overflow-hidden flex items-center justify-center">

            <div className="absolute inset-0 bg-[#020617]/70"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
                    <Quote className="self-start w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wider uppercase font-light">
                        Egy kezelés <span className='font-bold uppercase'>nem kezelés</span>
                    </h2>

                    <span className="block w-full md:w-auto text-center md:text-left text-sm md:text-base font-medium text-[#8FBCE6] uppercase tracking-widest mt-8 md:transform md:translate-x-12">
                        Ezért az endolife longevity egészségklinika bérleteket hozott létre
                    </span>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start"
                >
                    {occasions.map((occasion, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative group h-full pt-4 pr-4">

                            <div className={`
                                relative h-full
                                bg-gradient-to-br from-[#0f172a]/60 to-[#0f172a]/20 backdrop-blur-xl
                                rounded-[2.5rem] px-8 py-10 lg:px-10 lg:py-12
                                flex flex-col shadow-2xl z-10 
                                min-h-[200px]
                                border-l-[6px] border-l-white/90 
                                border-t-[6px] border-t-white/80 
                                border-b-[6px] border-b-cyan-200/70 
                                border-r-[1px] border-r-cyan-200/60
                                hover:border-cyan-200/50 transition-colors duration-500
                            `}>
                                <div className="mb-8 border-b border-white/10 pb-6">
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                        {occasion.title}
                                    </h3>
                                </div>

                                <div className="md:hidden mt-auto self-end">
                                    <div className="bg-[#8FBCE6] border border-cyan-400/30 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                        <span className="text-xl font-bold text-white">{occasion.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 
                                            bg-[#8FBCE6] border-2 border-cyan-400 
                                            rounded-full px-8 py-4 
                                            shadow-[0_0_25px_rgba(34,211,238,0.3)] 
                                            items-center justify-center
                                            group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] 
                                            transition-all duration-300">

                                <span className="text-2xl font-bold text-white tracking-wide">
                                    {occasion.price}
                                </span>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}