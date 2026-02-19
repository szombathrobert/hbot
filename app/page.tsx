import { Hero } from "./compoenents/sections/Hero"
import { OxygenTherapy } from "./compoenents/sections/OxygenTherapy"
import { FunctionalPage } from "./compoenents/sections/FunctionalPage"
import { AboutHBOT } from "./compoenents/sections/AboutHBOT"
import { Benefits } from "./compoenents/sections/Benefits"
import { Trust } from "./compoenents/sections/Trust"
import { FAQ } from "./compoenents/sections/FAQ"
import { Process } from "./compoenents/sections/Process"
import { DoctorPressure } from "./compoenents/sections/DoctorPressure"
import { TherapyTime } from "./compoenents/sections/TherapyTime"
import { PricePage } from "./compoenents/sections/pricePage"
import { Contact } from "./compoenents/sections/Contact"

const SectionDivider = () => {
  return (
    <div className="w-full h-12 md:h-24 bg-transparent" />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-[url('/background.webp')] bg-cover bg-[48%_center] md:bg-center bg-no-repeat"></div>

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