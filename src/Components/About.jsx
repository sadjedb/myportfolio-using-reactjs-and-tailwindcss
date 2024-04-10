import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen text-gray-700'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-700'>About </p>
                    
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi , I'm oscar , nice to meet u have a look of my portfolio </p>
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia harum aperiam
                             deserunt impedit exercitationem tenetur dolorum debitis facilis,
                             quo beatae mollitia. Fugit ad labore impedit accusantium suscipit eveniet
                            et repudiandae!</p>
                    </div>
                </div>
            </div>

        </div>
   
  )
}

export default About
