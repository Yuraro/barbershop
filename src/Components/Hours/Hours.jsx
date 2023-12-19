import React from 'react'
import './Hours.css'

export const Hours = () => {
  return (
    <div className='hours'>
          <ul className='hours-tab'>
          <h1 className='hours-title'>HOURS</h1>
              <li className='hours-tab-item'>
                  <p>MON - THU</p>
                  <p>08:00 AM - 19:30 PM</p>
              </li>
              <li className='hours-tab-item'>
                  <p>FRI - SAT</p>
                  <p>08:00 AM - 21:00 PM</p>
              </li>
              <li className='hours-tab-item'>
                  <p>SUN</p>
                  <p>CLOSE</p>
              </li>
          </ul>
    </div>
  )
}
