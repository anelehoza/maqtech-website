import {useState} from 'react'
import {NavLink} from 'react-router'
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, DialogPanel } from '@headlessui/react'
import Contact from './Contact';


const navigation =[
  {name: 'Home', to:'/'},
  {name: 'About', to:'/About'},
  {name: 'Services', to:'/Services'},
]
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
      <div className=" flex h-16 top-0 w-full items-center justify-between fixed z-50  shadow-xl bg-[#f4f4f8] px-5 sm:items-strech sm:justify-start">
        <div className="flex shrink-0 items-center">
            <NavLink to="/">
            <h1 data-test-id="logo" className="flex text-2xl text-[#007bfc]">MAQ<span className="text-[#1e38a3] ">tech</span> </h1>
            </NavLink>
          </div>
          <div className="hidden absolute items-center text-center justify-center right-150 sm:ml-6 sm:block " >
            <div className="flex space-x-4 m-3 lg:text-lg">
              <NavLink to="/" className=" ">Home</NavLink>
              <NavLink to="/About" className="">About</NavLink>
              <NavLink to="/Services" className="">Services</NavLink>
            </div>
          </div>
          <div className='absolute right-30 sm:hidden sm:text md:flex shrink-0'>
          <Contact />
          </div>
          <div className="lg:hidden ">
            <button type="button"
             onClick={() => setMobileMenuOpen(true)}
             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <HiMenu  className="size-6" />
             </button>
             <Dialog open={mobileMenuOpen} onClose={()=> setMobileMenuOpen(false)} className=" right-0 relative z-50">
             <div className="fixed inset-0 flex w-screen  justify-between  lg:hidden ">
             
           <DialogPanel  className="absolute top-16  max-w-lg block space-y-6 right-0 border bg-[#007bfc]  p-12">
           {navigation.map((item) => (
              <NavLink key={item.name} to={item.to} className="text-sm/6 block justify-between font-semibold text-gray-900">
                {item.name}
                </NavLink>
            ))}
            </DialogPanel>
            </div>
          </Dialog> 
          </div>
      </div>
    </div>
  )
}

export default Navigation