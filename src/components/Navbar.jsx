import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants/navLinks'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { BookCallButton } from './BookCallButton'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  
  useEffect(() => {
    const hash = location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location])

  
  const handleNavClick = (e, path) => {
    e.preventDefault()
    closeMenu()
    
    if (path.includes('#')) {
      const [route, hash] = path.split('#')
      
      if (location.pathname === route || route === '/') {
        
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        
        navigate(path)
      }
    } else {
      navigate(path)
    }
  }

  
  const getRoutePath = (label) => {
    const routes = {
      'Home': '/',
      'How it works': '/faq',
      'Our Work': '/project',
      'Founder': '/founder',
      'Pricing': '/pricing',
      'Our Process': '/#our-process'
    }
    return routes[label] || `/${label.toLowerCase()}`
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='w-full bg-[#F3F7F8] px-4 sm:px-8 lg:px-20 py-4'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 sm:gap-5">
  <Link to="/" onClick={closeMenu}>
    <div className="bg-gray-100 rounded-md shadow-md p-2 rounded-full">
      <img
        src="/logo.png"
        alt="logo"
        className="
          w-7 sm:w-8 md:w-8 lg:w-8
          h-auto cursor-pointer rounded-md 
          hover:-translate-y-0.5 transition-all duration-300 ease-in-out
        "
      />
    </div>
  </Link>

  <Link to="/" onClick={closeMenu}>
    <img
      src="/LaunchPad.png"
      alt="title"
      className="
        h-6 sm:h-7 md:h-7 lg:h-5 
        w-auto cursor-pointer 
        hover:-translate-y-0.5 transition-all duration-300 ease-in-out
      "
    />
  </Link>
</div>

        
        
        <div className='hidden md:flex items-center gap-3 sm:gap-4 lg:gap-6'>
          <ul className='flex items-center gap-4 lg:gap-6 xl:gap-8'>
            {navLinks.map(({label}) => {
              const path = getRoutePath(label)
              return(
                <li key={label}>
                  <a
                    href={path}
                    onClick={(e) => handleNavClick(e, path)}
                    className='text-black font-semibold opacity-80 text-sm cursor-pointer whitespace-nowrap hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 ease-in-out'
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className='flex justify-center items-center px-2 sm:px-6 md:px-8'>
            <BookCallButton />
          </div>
        </div>

      
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            <X className='w-6 h-6 text-black' />
          ) : (
            <Menu className='w-6 h-6 text-black' />
          )}
        </button>
      </div>

     
      {isMenuOpen && (
        <div 
          className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-[72px]'
          onClick={closeMenu}
        />
      )}

      
      <div 
        className={`md:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 bg-[#F3F7F8] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col p-6 gap-6'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map(({label}) => {
              const path = getRoutePath(label)
              return(
                <li key={label}>
                  <a
                    href={path}
                    onClick={(e) => handleNavClick(e, path)}
                    className='text-black font-semibold opacity-80 text-base cursor-pointer hover:opacity-100 transition-opacity duration-200 block py-2'
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className='pt-4 border-t border-gray-300'>
            <BookCallButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar