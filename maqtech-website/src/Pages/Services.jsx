import { Outlet } from "react-router"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <>
    <Navigation />
    
    <div className="grid grid-cols-2 gap-17 jw-[700px] justify-center m-50">
      <div className="bg-white shodow-xl ">
        <h1 className="text-4xl font-semibold">Web Development</h1>
        <h3 className="py-[15px] text-2xl font-semibold">Explore my work</h3>
        <img className=" mb-5 " src="./src/assets/tyeks-home.png" alt="tyekshome image" />
        <p ><a href="https://tyekssecurity.co.za" className="bg-[#1e38a3] p-1 text-white rounded-2xl">click for Preview </a></p>
      </div>
      <div className="bg-white shodow-xl px-10">
        <h1 className="text-4xl font-semibold">UX/UI Design</h1>
        <h3 className="py-[15px] text-2xl font-semibold">Explore my work</h3>
        <img className="bg-white h-[200px] mb-5" src="./src/assets/image-1.png " alt="ui image" />
        <p className="text-md">Get elegant user-friendly designs that can help you connect with your audience</p>
        <p>We do logos, flyers, invitation cards with strategic creativity, visually impactfull and brand identity</p>
      </div>
    </div>
    <Footer />
    <Outlet />
    </>
  )
}

export default Services