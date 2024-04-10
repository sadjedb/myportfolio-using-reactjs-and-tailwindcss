import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='bg-white w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-red-800 text-2xl'>Hi my name is</p>
         <h1 className='text-4xl sm:text-7xl font-bold'>Playboi Oscar</h1>
         <h2 className='text-4xl sm:text-7xl font-bold text-gray-700'>I'm a full stack developper</h2>
         <p className='text-gray-700 py-4 max-w-[700]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Officia doloremque, at explicabo inventore molestias accusantium ipsum voluptates dolorum ad voluptas
             voluptatum similique nobis? Modi quo odit impedit assumenda reiciendis veritatis.</p>
             <div>
                <button className='flex items-center group text-black border-2 px-6 py-3 my-2 hover:bg-black  hover:text-white hover:border-gray-600 duration-700 '>
                    View Work 
                   <span className='group-hover:rotate-90 duration-700'>
                   <HiArrowNarrowRight className='ml-4'/ >
                   </span>
                </button>
             </div>
      </div>

    </div>
  )
}

export default Home
