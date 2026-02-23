'use client'

import React from 'react'
import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion'
import { Activity, Brain, ShieldCheck, HeartPulse, Gauge, Check } from 'lucide-react'

const benefits = [
  {
    icon: Activity,
    title: "Sportrehabilitáció & Teljesítmény",
    desc: "A szövetek extra oxigénellátása drasztikusan felgyorsítja a regenerációt.",
    details: ["Izomsérülések gyorsabb gyógyulása", "Edzés utáni tejsavszint csökkentése", "Csonttörések támogatása"]
  },
  {
    icon: Brain,
    title: "Neurológia & Mentális Fókusz",
    desc: "Az agy a test legnagyobb oxigénfogyasztója. Támogassa működését.",
    details: ["'Brain fog' és krónikus fáradtság ellen", "Koncentráció javítása", "Migrén enyhítése"]
  },
  {
    icon: ShieldCheck,
    title: "Immunrendszer & Poszt-COVID",
    desc: "A túlnyomásos oxigén segít csökkenteni a szervezetben lévő gyulladásokat.",
    details: ["Elhúzódó COVID tünetek kezelése", "Általános gyulladáscsökkentés", "Védekezőképesség erősítése"]
  },
  {
    icon: HeartPulse,
    title: "Anti-Aging & Bőrgyógyászat",
    desc: "A sejtszintű megújulás kulcsa. Szépségápolás belülről kifelé.",
    details: ["Kollagéntermelés serkentése", "Nehezen gyógyuló sebek", "Bőr rugalmasságának javítása"]
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.5 }
  }
}

export const AboutHBOT = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section id="hbot" aria-label="A hiperbár oxigénterápia hatásai" className="relative w-full py-24 overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-wider mb-2 block text-white/90">Tudomány a háttérben</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Mire jó az oxigénterápia?
            </h2>
            <p className="text-lg leading-relaxed text-white">
              Orvosi tisztaságú oxigént juttatunk el oda, ahová a szervezet önerőből már nem képes.
            </p>
          </m.div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            <m.div variants={itemVariants} className="lg:col-span-12 bg-[#D2E9E9] rounded-3xl p-8 border border-[#a4c9c9] shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-700/10 flex items-center justify-center shrink-0">
                  <Gauge className="w-8 h-8 text-cyan-800" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-dark">A működési elv: Henry törvénye</h3>
                  <p className="leading-relaxed text-brand-dark/90">
                    Normál légköri nyomáson az oxigént a vörösvértestek szállítják. A HBOT kabinban uralkodó túlnyomás alatt azonban – a fizikai Henry-törvény értelmében – az oxigén <span className="font-semibold text-brand-dark">közvetlenül a vérplazmában oldódik fel</span>. Így a keringési zavarral küzdő területekre is eljut az energia.
                  </p>
                </div>
              </div>
            </m.div>

            {benefits.map((item, index) => (
              <m.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="lg:col-span-6 xl:col-span-3 bg-[#D2E9E9] rounded-3xl p-6 border border-[#a4c9c9] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <item.icon className="w-6 h-6 text-cyan-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-sm mb-5 min-h-10 text-brand-dark/80">{item.desc}</p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-cyan-800/10">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-brand-dark/90">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-cyan-600" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}