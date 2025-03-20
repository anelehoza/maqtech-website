
import {NavLink} from 'react-router'
import { HiMenu } from "react-icons/hi";
const Navigation = () => {
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
            <p className="bg-[#007bfc] p-2">Contact</p>
          </div>
          <div>
            <HiMenu className=" text-2xl md: relative" />
          </div>
      </div>
    </div>
  )
}

export default Navigation