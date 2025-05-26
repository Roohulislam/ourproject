import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products/Products'
import Services from '../components/Services/Service'
import Location from '../components/Location'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Whatsapp from '../components/Whatsapp'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Services/>
      <Location/>
      <FAQ/>
      <Team/>
    </div>
  )
}

export default Home
