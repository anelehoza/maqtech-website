
import {NavLink} from 'react-router'
const Navigation = () => {
  return (
    <>
    <nav className="flex w-full fixed top-0 shadow-xl bg-[#f4f4f8] items-center py-2 lg:px-8">
      <div className="flex">
      <a href="/"> 
      <h1 data-test-id="logo" className="flex h-[60px] w-[70px] text-5xl ">MAQ <span className="text-[#1e38a3] ">tech</span></h1>
      </a>
      </div>
      <div className=" flex w-full justify-center"> 
      <NavLink to="/" className="mx-4 text-2xl">Home</NavLink>
      <NavLink to="/About" className="mx-4 text-2xl">About</NavLink>
      <NavLink to="/Services" className="mx-4 text-2xl ">Services</NavLink>
      </div>
         <div>
          <p className="bg-[#007bfc] p-2">Contact</p>
         </div>
    </nav>
    </>
  )
}

export default Navigation