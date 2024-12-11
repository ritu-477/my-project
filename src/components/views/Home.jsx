import React from 'react'
import Hero from '../home/Hero'
import CompaniesLogo from '../home/CompaniesLogo'
import SwitchingEnergy from '../home/SwitchingEnergy'
import SimpleSteps from '../home/SimpleSteps'
import ComprehensiveUtility from '../home/ComprehensiveUtility'
import WhyChoose from '../home/WhyChoose'
import OurTestimonials from '../home/OurTestimonials'

const Home = () => {
  return (
      <>
          <Hero />
          <CompaniesLogo />
          <SwitchingEnergy />
          <SimpleSteps />
          <ComprehensiveUtility />
          <WhyChoose />
          <OurTestimonials/>
      </>
  )
}

export default Home