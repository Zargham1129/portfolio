import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='        w-full h-screen max-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md-py6'> Grow with data.</h1>
            <div className='flex justify-center items-center py-7   '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible fiencing,For</p>
            <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'  
            strings={['BTB','BTC','SASS',]}
            Typepeed={120} 
            Backspeed={140} 
            loop
            />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam ipsam amet. Voluptatum, pariatur molestias.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>                  

    </div>
  )
}

export default Hero
