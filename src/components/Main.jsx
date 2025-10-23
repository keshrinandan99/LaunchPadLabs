import React from 'react'
import Hero from './Hero'
import {OurWorkSection} from './OurWorkSection'
import { ProcessSection } from './ProcessSection'
import { WhyLaunchpad } from './WhyLaunchpad'
import  OurApproach  from './ourApproach'

function Main() {
  return (
    <main className='w-full'>
      <Hero/>
      <img src='Our Impact.png' alt='ourImpactImg' className='w-full h-auto'/>
      <OurWorkSection/>
      <WhyLaunchpad/>
      <OurApproach/>
      <ProcessSection/>
      <img src='Testimonials.png' alt='testimonialsImg' className='w-full h-auto'/>
      <img src='Banner.png' alt='bannerImg' className='w-full h-auto'/>
    </main>
  )
}

export default Main