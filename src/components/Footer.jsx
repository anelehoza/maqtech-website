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
    <div className="sm:text-left items-center md:flex h-auto w-full bottom-0 items-center justify-between  bg-[#1e38a3] ">
        <div className="p-7"> 
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4'>Usefull links</h3>
            <div>
            <p><NavLink to="/" className='  text-[#f4f4f6]'>Home </NavLink></p>
            <p><NavLink to="/About" className='  text-[#f4f4f6]'>About</NavLink></p>
            <p><NavLink to="/Services" className=' text-[#f4f4f6]'>Services</NavLink></p>
            <Outlet />
        </div>
        </div>
        <div className="p-7">
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  ' >Socials</h3>
            <div className="flex">
            <FaFacebook />
            <span className='mb-4 px-4  text-[#f4f4f6]'>Facebook</span>
            </div>
            <div className="flex">
            <FaWhatsapp />
            <span className='mb-4 px-4  text-[#f4f4f6]'>Whatsapp</span>
            </div>
        </div>
        <div className="p-7">
          <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  '>Contact</h3>
          <div className="flex">
          <FaPhoneAlt />
          <span className='mb-4 px-4  text-[#f4f4f6]' >0719376610</span>
          </div>
            <div className="flex">
            <HiOutlineMail  />
            <span className='mb-4 px-4  text-[#f4f4f6]'>anele376@gmail.com</span>
            </div>
            
      </div>
    </div>
  <div className='flex justify-center text-sm bg-gray-800 p-4'> 
      <p className='text-[#f4f4f6]'>Developed by MAQtech-Anele Hoza</p>
    </div>
    
  </div>
  )
}

export default Footer