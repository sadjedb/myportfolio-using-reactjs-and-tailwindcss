import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="Skills" className='w-full h-screen text-gray-700'>
        {/* container */}
      <div className='max-w-[1200px] flex flex-col mx-auto p-4 justify-center w-full h-full'>
        <div>
        <p className='text-4xl font-bold border-b-4 inline border-red-800'>Experience</p>
        <p className='py-4'>these are the technologies I've worked with</p>
        </div>
        <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={HTML} alt="html logo" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={CSS} alt="html logo" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={JavaScript} alt="html logo" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={ReactImg} alt="html logo" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={GitHub} alt="html logo" />
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md bg-gray-100 hover:scale-110 duration-700'>
                <img className='w-20 mx-auto' src={Tailwind} alt="html logo" />
                <p className='my-4'>Tailwind</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
