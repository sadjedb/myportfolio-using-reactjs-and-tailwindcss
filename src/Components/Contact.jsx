import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen flex justify-center items-center p-4 '>
      <form action="contact" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 inline border-red-700 text-gray-700'>Contact</p>
          <p className='py-4 text-gray-700'>submit the form bellow or send me an email at oscarnigga@gmail.com </p>
        </div>
        <input className='p-2  border-4 border-gray-300' type="text" placeholder='Name' name='name' />
        <input className='p-2 my-4 border-4 border-gray-300' type="email" placeholder='Email' name='email' />
        <textarea name="message" rows="10" placeholder='Message' className='border-4 border-gray-300'></textarea>
        <button className='flex text-black justify-center items-center mx-auto border-2 px-6 py-3 my-2 hover:text-white hover:bg-black duration-700' >let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
