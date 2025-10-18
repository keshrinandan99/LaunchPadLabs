import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-8 md:px-16'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-sm sm:text-base opacity-80'>
          © {new Date().getFullYear()} LaunchPad Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer