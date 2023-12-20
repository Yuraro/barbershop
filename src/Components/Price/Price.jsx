import React from 'react'
import './Price.css'

export const Price = () => {
  return (
    <div className='price' id="price">
          <div className='price-tab'>
          <h1 className='price-title'>Price</h1>
              <div className='price-tab-item'>
                  <p>REGULAR HAIRCUT</p>
                  <p>50$</p>
              </div>
              <div className='price-tab-item'>
                  <p>HAIRCUT + SHAVE</p>
                  <p>70$</p>
              </div>
              <div className='price-tab-item'>
                  <p>HAIRCUT + BEAR  TRIM</p>
                  <p>80$</p>
              </div>
          </div>
    </div>
  )
}