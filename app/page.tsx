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

const SectionDivider = () => {
  return (
    <div className="w-full h-8 md:h-14 bg-[#000027]" />
  )
}


export default function Page() {
  return (
    <>
      <Hero />


      <OxygenTherapy />


      <FunctionalPage />


      <AboutHBOT />


      <Process />

      <SectionDivider />

      <DoctorPressure />

      <SectionDivider />

      <TherapyTime />

      <Benefits />


      <Trust />


      <FAQ />
    </>
  )
}
