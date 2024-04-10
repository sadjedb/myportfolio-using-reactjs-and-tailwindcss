import React from 'react'
import supra from "../assets/supra.jpg"
import r34 from "../assets/r34.jpg"
import gt3rs from "../assets/gt3rs.jpg"
import m5 from "../assets/m5.jpg"
import gclass from "../assets/gclass.jpg"
import c63 from "../assets/c63.jpg"
import ichigo from "../assets/ichigo.jpg"
const Work = () => {
  return (
    
        <div name="Work" className='w-full md:h-screen text-gray-700' >
        {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 justify-center flex flex-col h-full w-full'> 
 
                 <div className='pb-8 '>
                <p className='text-4xl font-bold border-b-4 inline border-red-800'>Cars</p>
                 <p className='py-4'>There it is my dream cars</p>
                 </div>
                 {/* grid container */}
                 <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-8'>
                    <div    style={{backgroundImage : `url(${supra})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
 Supra mk4
                                </span>
                           
                        </div>
                    </div>

                    
                    <div    style={{backgroundImage : `url(${r34})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
 Skyline r34
                                </span>
                           
                        </div>
                    </div>


                    <div    style={{backgroundImage : `url(${gt3rs})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
 Porsche gt3rs
                                </span>
                           
                        </div>
                    </div>


                    <div    style={{backgroundImage : `url(${m5})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
BMW m5
                                </span>
                           
                        </div>
                    </div>


                    <div    style={{backgroundImage : `url(${gclass})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
Mercedes G class
                                </span>
                           
                        </div>
                    </div>


                    <div    style={{backgroundImage : `url(${ichigo})`}}
                    className='shadow-md shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-black tracking-wider'>
                                ichigo
                                </span>
                           
                        </div>
                    </div>

                 </div>

        
            </div>
        </div>
    
  )
}

export default Work
