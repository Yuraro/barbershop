import React from 'react'
import './Home.css'
import { Hero } from '../../Components/Hero/Hero'
import { Hours } from '../../Components/Hours/Hours'
import { Barbers } from '../../Components/Barbers/Barbers'
import { Price } from '../../Components/Price/Price'

export const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <Hours />
      <Barbers />
      <Price/>
    </div>
  )
}
