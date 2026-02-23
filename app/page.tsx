import dynamic from 'next/dynamic'
import { Hero } from "./compoenents/sections/Hero"
import Image from 'next/image'

const OxygenTherapy = dynamic(() => import("./compoenents/sections/OxygenTherapy").then(m => m.OxygenTherapy))
const FunctionalPage = dynamic(() => import("./compoenents/sections/FunctionalPage").then(m => m.FunctionalPage))
const AboutHBOT = dynamic(() => import("./compoenents/sections/AboutHBOT").then(m => m.AboutHBOT))
const Benefits = dynamic(() => import("./compoenents/sections/Benefits").then(m => m.Benefits))
const Trust = dynamic(() => import("./compoenents/sections/Trust").then(m => m.Trust))
const FAQ = dynamic(() => import("./compoenents/sections/FAQ").then(m => m.FAQ))
const Process = dynamic(() => import("./compoenents/sections/Process").then(m => m.Process))
const DoctorPressure = dynamic(() => import("./compoenents/sections/DoctorPressure").then(m => m.DoctorPressure))
const TherapyTime = dynamic(() => import("./compoenents/sections/TherapyTime").then(m => m.TherapyTime))
const PricePage = dynamic(() => import("./compoenents/sections/pricePage").then(m => m.PricePage))
const Contact = dynamic(() => import("./compoenents/sections/Contact").then(m => m.Contact))

const SectionDivider = () => {
  return (
    <div className="w-full h-12 md:h-24 bg-transparent" />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.webp"
          alt="Klinika háttér"
          fill
          priority
          quality={75}
          className="object-cover object-[48%_center] md:object-center"
        />
      </div>
      <div className="fixed inset-0 z-0 bg-[#020617]/80"></div>

      <div className="relative z-10 flex flex-col">
        <Hero />

        <SectionDivider />
        <OxygenTherapy />

        <SectionDivider />
        <FunctionalPage />

        <SectionDivider />
        <AboutHBOT />

        <SectionDivider />
        <Process />

        <SectionDivider />
        <DoctorPressure />

        <SectionDivider />
        <TherapyTime />

        <SectionDivider />
        <Benefits />

        <SectionDivider />
        <PricePage />

        <SectionDivider />
        <FAQ />

        <SectionDivider />
        <Trust />

        <SectionDivider />
        <Contact />
      </div>
    </main>
  )
}