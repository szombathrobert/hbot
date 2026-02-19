'use client'

import { motion, type Variants } from 'framer-motion'
import { Activity, Brain, ShieldCheck, HeartPulse, Clock, Gauge, Check } from 'lucide-react'

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
    <section id="hbot" className="py-24 relative overflow-hidden bg-[#8FBCE6]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2 block">Tudomány a háttérben</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Mire jó az <span className="text-brand-primary">oxigénterápia?</span>
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Orvosi tisztaságú oxigént juttatunk el oda, ahová a szervezet önerőből már nem képes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <motion.div variants={itemVariants} className="lg:col-span-12 bg-white rounded-3xl p-8 border border-brand-light/20 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Gauge className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">A működési elv: Henry törvénye</h3>
                <p className="text-brand-muted leading-relaxed">
                  Normál légköri nyomáson az oxigént a vörösvértestek szállítják. A HBOT kabinban uralkodó túlnyomás alatt azonban – a fizikai Henry-törvény értelmében – az oxigén <span className="text-brand-dark font-semibold">közvetlenül a vérplazmában oldódik fel</span>. Így a keringési zavarral küzdő területekre is eljut az energia.
                </p>
              </div>
            </div>
          </motion.div>

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="lg:col-span-6 xl:col-span-3 bg-white rounded-3xl p-6 border border-brand-light/20 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center mb-5 text-brand-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-brand-muted text-sm mb-5 min-h-[40px]">{item.desc}</p>
              <ul className="space-y-2 mt-auto pt-4 border-t border-gray-50">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark font-medium">
                    <Check className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}