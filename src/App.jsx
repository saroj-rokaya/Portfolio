import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import ContactSection from './Components/Contact/ContactSection.jsx'
import { Project } from './Components/Projects/Project.jsx'
import HoverEffect from './Components/Ui/HoverEffect.jsx'
import { data } from 'autoprefixer'
const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      <ContactSection/>
      {/* <Project/> */}
      {/* <HoverEffect items={data}/> */}
    </>
  )
}

export default App
