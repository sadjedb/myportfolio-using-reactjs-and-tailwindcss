import React, { useState } from 'react'
import {FaBars , FaTimes , FaGithub , FaLinkedin  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFilePersonFill } from 'react-icons/bs';
import logo from "./../assets/logo.png"
import {Link} from "react-scroll"
const Navbar = () => {
    const [nav , setNav] = useState(false)
    function handleClick(){ 
      
        return(
            setNav(!nav)
        )
    }
   
  return (
    <div className='fixed w-full h-[80px] bg-black flex justify-between items-center px-4 text-gray-300 '>
        <div>
            <img src={logo} alt="logo" style={{width :'100px'}} />
        </div>
        {/* Menu */}
      <ul className='hidden md:flex'>
      <Link 
      className='p-4 cursor-pointer'
      to="home" 
      smooth={true} 
      duration={700} 
    >
      Home
    </Link>
    <Link 
     className='p-4 cursor-pointer'
      to="About" 
      smooth={true} 
      duration={700} 
    >
      About
    </Link>
    
    <Link 
      className='p-4 cursor-pointer'
      to="Skills" 
      smooth={true} 
      duration={700} 
    >
      Skills
    </Link>

    <Link 
      className='p-4 cursor-pointer'
      to="Work" 
      smooth={true} 
      duration={700} 
    >
      Work
    </Link>
    <Link 
    className='p-4 cursor-pointer'
      to="Contact" 
      smooth={true} 
      duration={700} 
    >
      Contact
    </Link>
      </ul>
      {/* Some shit */}
      <div  onClick={handleClick} className=   ' z-10  '>
        {nav ?<FaTimes  /> : <FaBars className='md:hidden' />}
    
      </div>
      {/* Mobile Menu */}
     {nav && <ul className=' absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={700} >Home </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="About" smooth={true} duration={700} >About </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Skills" smooth={true} duration={700} >Skills </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Work" smooth={true} duration={700} >Work </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Contact" smooth={true} duration={700} >Contact </Link></li>
      </ul>}
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-500'>
                <a  href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Linkedin <FaLinkedin size={30} / > 
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#333333]'>
                <a  href="/" className='flex justify-between items-center w-full text-gray-300'>
                Github <FaGithub size={30} / > 
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#6fc2b0]'>
                <a  href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Email <HiOutlineMail size={30} / > 
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#565f69]'>
                <a  href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Contact <BsFilePersonFill size={30} / > 
                </a>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
