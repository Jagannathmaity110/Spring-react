import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import HowWorks from './components/HowWorks'
import Pricing from './components/Pricing'
import CTAFooter from './components/CTAFooter'

const App = () => {
  return (
    <>
      <Header/>
      <Services/>
      <AboutUs/>
      <HowWorks/>
      <Pricing/>
      <CTAFooter/>
    </>

  )
}

export default App