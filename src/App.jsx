import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import ContactSection from './Components/Contact/ContactSection.jsx'
import { CardHoverEffectDemo } from './Components/Projects/CardHoverEffectDemo.jsx'
import { BackgroundBeamsDemo } from './Components/Projects/BackgroundBeamDemo.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      {/* <CardHoverEffectDemo/> */}
      {/* <BackgroundBeamsDemo/> */}
      <Projects/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
