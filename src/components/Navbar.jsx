import React from 'react'
import { navLinks } from '../constants/navLinks'
import { Link } from 'react-router-dom'
import { BookCallButton } from './BookCallButton'
function Navbar() {
  // Function to convert label to route path
  const getRoutePath = (label) => {
    const routes = {
      'Home': '/',
      'How it works': '/faq',
      'Our Work': '/project',
      'Founder': '/founder',
      'Pricing': '/pricing'
    }
    return routes[label] || `/${label.toLowerCase()}`
  }

  return (
    <nav className='w-full bg-[#F3F7F8] px-4 sm:px-8 lg:px-20 py-4'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        
        {/* Logo Section */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <Link to="/">
            <img 
              src='/logo.png' 
              alt="logo" 
              className="w-8 sm:w-10 lg:w-12 h-auto cursor-pointer rounded-md hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            />
          </Link>
          
          <Link to="/">
            <img 
              src="/LaunchPad.png" 
              alt="title" 
              className='h-5 sm:h-6 lg:h-7 w-auto cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out'
            />
          </Link>
        </div>
        
        {/* Navigation Links and Button */}
        <div className='flex items-center gap-3 sm:gap-4 lg:gap-6'>
          <ul className='hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8'>
            {navLinks.map(({label}) => {
              return(
                <li key={label}>
                  <Link 
                    to={getRoutePath(label)} 
                    className='text-black font-semibold opacity-80 text-sm cursor-pointer hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 ease-in-out whitespace-nowrap'
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          
          <BookCallButton title="Book a Call" />
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar