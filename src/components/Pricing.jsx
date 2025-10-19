import React from 'react'
import PricingPage from './PricingPage'

function Pricing() {
  return (
    <div className='w-full bg-white overflow-x-hidden'>
      {/* Responsive Pricing Banner */}
      <img
        src='pricing.png'
        alt='Pricing Banner'
        className='w-full h-auto object-contain md:object-cover'
      />

      {/* Pricing Section */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-16'>
        <PricingPage />
      </div>
    </div>
  )
}

export default Pricing
