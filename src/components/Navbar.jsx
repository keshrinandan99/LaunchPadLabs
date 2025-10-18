import React from 'react'
import { navLinks } from '../constants/navLinks'

function Navbar() {
  return (
    <nav className="w-full bg-[#F3F7F8] px-4 sm:px-8 lg:px-20 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-sm hover:-translate-y-0.5 transition-all duration-300"
          />
          <img
            src="/LaunchPad.png"
            alt="title"
            className="w-32 sm:w-40 h-auto cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href || '#'}
                className="text-[#1F1F1F] font-semibold text-sm opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <img
            src="/button.png"
            alt="button"
            className="w-32 sm:w-36 h-auto cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <img src="/menu-icon.png" alt="menu" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
