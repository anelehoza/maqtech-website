import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between h-[200px] bottom-0 w-f bg-[#1e38a3] grid-cols-3 py-6 px-10'>
        <div className=' '>
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4'>Usefull links</h3>
            <p><a href="/" className='  text-[#f4f4f6]'>Home</a></p>
            <p><a href="/About" className='  text-[#f4f4f6]'>About</a></p>
            <p><a href="/Services" className=' text-[#f4f4f6]'>Services</a></p>
        </div>
        <div>
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  ' >Socials</h3>
            <p className='mb-4 px-4  text-[#f4f4f6]'>Facebook</p>
            <p className='mb-4 px-4  text-[#f4f4f6]'>Whatsapp</p>
        </div>
        <div>
            <h3 className='font-semibold text-2xl text-[#f4f4f6] mb-4  '>Contact</h3>
            <p className='mb-4 px-4  text-[#f4f4f6]' >0719376610</p>
            <p className='mb-4 px-4  text-[#f4f4f6]'>anele376@gmail.com</p>
        </div>
     
    </div>
    <div className='flex justify-center text-sm bg-gray-800 p-4'> 
      <p className='text-[#f4f4f6]'>Developed by MAQtech-Anele Hoza</p>
    </div>
    </>
  )
}

export default Footer