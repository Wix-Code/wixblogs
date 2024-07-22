import React from 'react'
import './home.css'
import Hero from './Hero/Hero'
import Trend from './Trend/Trend'
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Trend />
      <Feature />
    </div>
  )
}

export default Home