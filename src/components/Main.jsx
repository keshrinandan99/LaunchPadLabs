import React from 'react'
import Hero from './Hero'

function Main() {
  return (
    <main className='w-full'>
      <Hero/>
      <img src='Our Impact.png' alt='ourImpactImg' className='w-full h-auto'/>
      <img src='Our Work.png' alt='ourWorkImg' className='w-full h-auto'/>
      <img src='Why Launchpad.png' alt='WhyLaunchPadImg' className='w-full h-auto'/>
      <img src='Our Approach.png' alt='OurApproachImg' className='w-full h-auto'/>
      <img src='Our Process.png' alt='OurProcessImg' className='w-full h-auto'  id='our-process' />
      <img src='Testimonials.png' alt='testimonialsImg' className='w-full h-auto'/>
      <img src='Banner.png' alt='bannerImg' className='w-full h-auto'/>
    </main>
  )
}

export default Main