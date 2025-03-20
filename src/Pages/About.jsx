import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Outlet } from "react-router"


const About = () => {
  return (
    <div>
    <Navigation />

      <div className="h-auto w-full grid grid-cols-2  justify-center mb-10 mt-45">
      <div className='w-full px-5 mb-2'>
            <h1 className='px-7 mb-4 py-6 text-2xl font-semibold transform-3d scale-3d'>Profile</h1>
            <p>I am a versatile, hands-on software developer with knowledge and expertise of working on a variety of projects from conception to delivery. I am conversant in a wide range of technologies - most notably HTML, CSS, JavaScript, Java,  SQL and NoSQL – and i follow the latest industry trends with great interest. My approach is methodical but creative, and I always look to code to the highest standards possible. I am a confident communicator and am comfortable working either independently or as part of a team.</p>
        </div>
        <div className='w-full py-6 px-5'>
            <img className="h-[500px]"src="./src/assets/profPic .jpg" alt="profile-photo" />
        </div>
      </div>
      <div className=" bg-white  w-full ">
            <h2 className="font-sans text-4xl text-[#1e38a3] font-extrabold w-full px-20 ">With expertise in the latest technologies, we ensure that every project is built with precision and aligned with your business objectives.</h2>
        </div>
        <div className="h-auto w-full mb-5">
        <h3 className="px-20 text-2xl py-5">Our development process involves multiple stages, ensuring quality and precision:</h3>
        <ul className="px-20 " >
          <li>Planning & Strategy: Mapping out your project timeline, milestones, and technical requirements.
          </li>
          <li>Custom Coding: Writing clean, efficient, and scalable code tailored to your specific needs.
          </li>
          <li>Responsive Design: Developing websites and applications optimized for all screen sizes.
          </li>
          <li>Performance Optimization: Improving loading speeds and overall site performance for the best user experience.
          </li>
          <li>Quality Assurance: Rigorous testing to identify and fix bugs before launch.
          </li>
          <li>Maintenance & Updates: Providing ongoing support to keep your digital products running smoothly.
          </li>
        </ul>
        </div>
    <Footer />
  <Outlet />
    </div>
    )
}

export default About