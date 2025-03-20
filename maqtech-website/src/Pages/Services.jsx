import { Outlet } from "react-router"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <>
    <Navigation />
    
    <div className="h-auto w-full grid grid-cols-1 gap-2 overflow-x-hidden mt-40 mb-20 md:grid-cols-2 ">
      <div className="m-10 bg-white shodow-xl items-center justify-center px-4 ">
        <h1 className="text-4xl font-semibold">Web Development</h1>
        <h3 className="py-[15px] text-2xl font-semibold">Explore my work</h3>
        <img className=" mb-5 w-[450px] " src="./src/assets/tyeks-home.png" alt="tyekshome image" />
        <p ><a href="https://tyekssecurity.co.za" className="bg-[#1e38a3] p-1 text-white rounded-2xl">click for Preview </a></p>
      </div>
      <div className="m-10 bg-white shodow-xl px-4">
        <h1 className="text-4xl font-semibold">UX/UI Design</h1>
        <h3 className="py-[15px] text-2xl font-semibold">Explore my work</h3>
        <img className="bg-white h-[200px] mb-5" src="./src/assets/image-1.png " alt="ui image" />
        <p className="text-2xl mb-5">Get elegant user-friendly designs that can help you connect with your audience.</p>
        <p>We do logos, flyers, invitation cards with strategic creativity, visually impactfull and brand identity.</p>
      </div>
    </div>
    <Footer />
    <Outlet />
    </>
  )
}

export default Services