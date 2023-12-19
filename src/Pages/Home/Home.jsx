import React from 'react'
import './Home.css'
import { Hero } from '../../Components/Hero/Hero'
import { Hours } from '../../Components/Hours/Hours'
import { Barbers } from '../../Components/Barbers/Barbers'

export const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <Hours />
      <Barbers/>
    </div>
  )
}
