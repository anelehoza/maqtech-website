import {useState} from 'react'
import {NavLink} from 'react-router'
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'



const navigation =[
  {name: 'Home', to:'/'},
  {name: 'About', to:'/About'},
  {name: 'Services', to:'/Services'},
]
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
      <div className="flex top-0 w-full items-center fixed justify-between z-50  shadow-xl bg-[#f4f4f8] lg:px-8">
      <div className="flex">
            <NavLink to="/">
            <h1 data-test-id="logo" className="flex h-[60px] w-[70px] text-5xl text-[#007bfc]">MAQ <span className="text-[#1e38a3] ">tech</span></h1>
            </NavLink>
          </div>
          <div className="hidden md:block" >
            <NavLink to="/" className="m-3 text-2xl">Home</NavLink>
            <NavLink to="/About" className=" m-3 text-2xl">About</NavLink>
            <NavLink to="/Services" className="m-3 text-2xl ">Services</NavLink>
          </div>
          <div>
          <Popover className="relative">
      <PopoverButton><p className="bg-[#007bfc] p-2">Contact</p></PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col">
       
      </PopoverPanel>
    </Popover>
          </div>
          <div className="lg:hidden">
            <button type="button"
             onClick={() => setMobileMenuOpen(true)}
             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <HiMenu  className="size-6" />
             </button>
             <Dialog open={mobileMenuOpen} onClose={()=> setMobileMenuOpen(false)} className=" right-0 relative z-50">
             <div className="fixed inset-0 flex w-screen  justify-between  lg:hidden ">
             
           <DialogPanel  className="max-w-lg block space-y-6 right-0 border bg-white p-12">
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