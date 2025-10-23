import React from 'react'

function Hero() {
  return (
    <main className='relative w-full bg-[#F3F7F8]'>
     
     <img 
  src="/HeroSection.png" 
  alt='heroSectionImg' 
  className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto object-cover'
/>
      
      {/* Book a Call button - larger on mobile */}
      <img 
        src="/Bookacall.png" 
        alt='bookaCallImage' 
        className='absolute 
                   w-[50%] sm:w-[50%] md:w-[40%] lg:w-[38%] xl:w-[578px]
                   left-[50%] -translate-x-1/2
                   top-[48%] sm:top-[50%] md:top-[52%] lg:top-[54%] mt-4'
      />
      
      {/* Trusted by section - larger on mobile */}
      <img 
        src='Trusted by.png' 
        alt='trustedByImg' 
        className='absolute 
                   w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[1114px]
                   left-[50%] -translate-x-1/2
                   top-[82%] sm:top-[85%] md:top-[87%] lg:top-[89%]'
      />
    </main>
  )
}

export default Hero