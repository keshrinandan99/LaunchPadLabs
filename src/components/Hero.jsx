import React from 'react'

function Hero() {
  return (
    <main className='relative w-full bg-[#F3F7F8]'>
      {/* Hero Section Image - Full width, responsive */}
      <img 
        src="/HeroSection.png" 
        alt='heroSectionImg' 
        className='w-full h-auto'
      />
      
      {/* Book a Call - Positioned absolutely, responsive */}
      <img 
        src="/Bookacall.png" 
        alt='bookaCallImage' 
        className='absolute 
                   w-[45%] sm:w-[42%] md:w-[40%] lg:w-[38%] xl:w-[578px]
                   left-[50%] -translate-x-1/2
                   top-[48%] sm:top-[50%] md:top-[52%] lg:top-[54%]'
      />
      
      {/* Trusted By - Positioned absolutely, responsive */}
      <img 
        src='Trusted by.png' 
        alt='trustedByImg' 
        className='absolute 
                   w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[1114px]
                   left-[50%] -translate-x-1/2
                   top-[82%] sm:top-[85%] md:top-[87%] lg:top-[89%]'
      />
    </main>
  )
}

export default Hero