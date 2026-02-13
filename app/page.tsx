import { Hero } from "./compoenents/sections/Hero"
import { OxygenTherapy } from "./compoenents/sections/OxygenTherapy"
import { FunctionalPage } from "./compoenents/sections/FunctionalPage"
import { AboutHBOT } from "./compoenents/sections/AboutHBOT"
import { Benefits } from "./compoenents/sections/Benefits"
import { Trust } from "./compoenents/sections/Trust"
import { FAQ } from "./compoenents/sections/FAQ"
import { Process } from "./compoenents/sections/Process"



export default function Page() {
  return (
    <>
      <Hero />
      <OxygenTherapy />
      <FunctionalPage />
      <AboutHBOT />
      <Benefits />
      <Process />
      <Trust />
      <FAQ />
    </>
  )
}
