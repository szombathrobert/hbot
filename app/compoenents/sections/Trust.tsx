'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Quote, Star, ShieldAlert } from 'lucide-react'

const reviews = [
    {
        name: "Kovács Péter",
        role: "Sportrehabilitáció",
        text: "Sérülés után kerestem gyors megoldást. Az oxigénterápia segítségével a gyulladás és az ödéma drasztikusan csökkent, a regenerációm pedig feleannyi időt vett igénybe.",
        stars: 5
    },
    {
        name: "Nagy Anna",
        role: "Poszt-COVID regeneráció",
        text: "Hónapokig küzdöttem a 'brain fog' és a kimerültség tüneteivel. Az Endolife Longevity Klinikán végzett HBOT kúra után végre visszakaptam a mentális fókuszomat.",
        stars: 5
    },
    {
        name: "B. Tamás",
        role: "Longevity & Mentális teljesítmény",
        text: "Agyi regeneráció és megelőzés céljából járok. A komplex program (HBOT + NIR) után a koncentrációm és a szellemi frissességem érezhetően javult.",
        stars: 5
    }
]

export const Trust = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="rolunk" aria-label="Pácienseink véleménye a hiperbárikus oxigénterápiáról" className="relative w-full py-24 overflow-hidden flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center"
                    >
                        <Quote className="self-start w-16 h-16 md:w-20 md:h-20 text-white/30 mb-6 fill-current transform rotate-180" aria-hidden="true" />

                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wider uppercase font-light text-center">
                            Akik már <span className='font-bold uppercase'>fellélegeztek</span>
                        </h2>

                        <span className="block w-full md:w-auto text-center text-sm md:text-base font-medium text-[#8FBCE6] uppercase tracking-widest mt-8">
                            Endolife Longevity Egészségklinika pácienseinek tapasztalata
                        </span>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {reviews.map((review, i) => (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative group bg-linear-to-br from-[#0f172a]/80 to-[#0f172a]/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border-l border-t border-r border-b border-white/5 shadow-2xl hover:border-cyan-400/30 transition-all duration-500"
                            >
                                <Quote className="w-10 h-10 text-cyan-400/10 absolute top-8 right-8" aria-hidden="true" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.stars)].map((_, s) => (
                                        <Star key={s} className="w-5 h-5 fill-cyan-400 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" aria-hidden="true" />
                                    ))}
                                </div>

                                <p className="text-gray-200 italic mb-8 leading-relaxed text-lg">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <p className="font-bold text-white text-xl">{review.name}</p>
                                    <p className="text-sm text-cyan-400/80 uppercase tracking-widest mt-1 font-medium">{review.role}</p>
                                </div>
                            </m.div>
                        ))}
                    </div>

                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start"
                    >
                        <div className="bg-red-500/10 p-3 rounded-full">
                            <ShieldAlert className="w-8 h-8 text-red-400 shrink-0" aria-hidden="true" />
                        </div>
                        <div className="text-sm text-gray-300 leading-relaxed text-center md:text-left">
                            <p className="font-bold text-white mb-2 text-base uppercase tracking-wider">Orvosi jogi nyilatkozat:</p>
                            <p className="font-light">
                                A weboldalon található információk tájékoztató jellegűek. A hiperbárikus oxigénterápia (HBOT) egy modern kiegészítő regeneratív eljárás, amely nem helyettesíti a szakszerű orvosi diagnózist és kezelést. Az Endolife Longevity Egészségklinika minden kezelést orvosi konzultációhoz köt a biztonság és a hatékonyság érdekében.
                            </p>
                        </div>
                    </m.div>

                </div>
            </section>
        </LazyMotion>
    )
}