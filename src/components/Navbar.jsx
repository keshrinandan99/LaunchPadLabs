import React from 'react'
import { navLinks } from '../constants/navLinks'
import { Link } from 'react-router-dom'
function Navbar() {
  return (

    <nav className='container mx-auto justify-center  px-5 2xl:px-0 bg-[#F3F7F8] w-[1440px] h-[95px] relative w-full'>
        <div className='bg-[#F3F7F8]'>
       
        <img src='/logo.png' alt="logo" className="absolute left-[80px] top-[18px] cursor-pointer rounded-md hover:-translate-y-0.5 transition-all duration-300 ease-in-out "/>
      
       
        <img src="/LaunchPad.png" alt="title" className='w-172px h-28px absolute left-[139px] top-[27px] cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out'/>
        </div>
        <div className='flex justify-end'>
         <ul className='flex items-center gap-8 '>
            {navLinks.map(({label})=>{
                return(
                    <li key={label}>
                        <Link to={` / ${label}`} className='hidden md:block text-[#1F1F1F] font-semibold opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out hover:-translate-y-0.5 transition-all duration-300 ease-in-out '>{label}</Link>
                    </li>
                )
            })}
        </ul>
         <img src='/button.png' alt='button' className='w-[137px] h-[70px] bg-transparent border-none outline-none cursor-pointer mt-4 ml-4 hover:-translate-y-0.5 transition-all duration-300 ease-in-out'/>
         </div>
      
    
        
       

     
      
      </nav>
        
  )
}

export default Navbar