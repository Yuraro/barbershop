import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className="hero" aria-label="Barbershop">
      <div className='hero-content'>
        <div><h1 className='hero-content-title'>BEST <span>HAIRCUT</span> AND SHAVE</h1></div>
        <div><button className='hero-content-btn'><span>+</span>Appointment</button></div>
      </div>
    </div>
  )
}