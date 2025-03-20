import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import {NavLink} from "react-router"
import {Outlet} from "react-router"
const Footer = () => {
  return (
    <div>
    <div className='flex justify-between h-[200px] bottom-0 w-full bg-[#1e38a3] grid-cols-3 py-6  '>
        <div className='px-10 '>
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4'>Usefull links</h3>
            <NavLink to="/" className='  text-[#f4f4f6]'>Home </NavLink>
            <NavLink to="/About" className='  text-[#f4f4f6]'>About</NavLink>
            <NavLink to="/Services" className=' text-[#f4f4f6]'>Services</NavLink>
            <Outlet />
        </div>
        <div>
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  ' >Socials</h3>
            <div className="flex">
            <FaFacebook className='text-2xl'/>
            <p className='mb-4 px-4  text-[#f4f4f6]'>Facebook</p>
            </div>
            <div className="flex">
            <FaWhatsapp className='text-2xl' />
            <p className='mb-4 px-4  text-[#f4f4f6]'>Whatsapp</p>
            </div>
        </div>
        <div>
          <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  '>Contact</h3>
          <div className="flex">
          <FaPhoneAlt className='text-2xl'/>
          <p className='mb-4 px-4  text-[#f4f4f6]' >0719376610</p>
          </div>
            <div className="flex">
            <HiOutlineMail className='text-2xl' />
            <p className='mb-4 px-4  text-[#f4f4f6]'>anele376@gmail.com</p>
            </div>
            
        </div>
    </div>
    <div className='w-screen flex justify-center text-sm bg-gray-800 p-4'> 
      <p className='text-[#f4f4f6]'>Developed by MAQtech-Anele Hoza</p>
    </div>
    </div>
  )
}

export default Footer