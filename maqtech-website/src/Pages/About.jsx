import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Outlet } from "react-router"


const About = () => {
  return (
    <>
    <Navigation />
    <div className='bg-white shadow-xl flex justify-center  m-35 transform-3d scale-3d'>
        <div className='w-[700px] px-5 mb-2'>
            <h1 className='px-7 mb-4 py-6 text-2xl font-semibold transform-3d scale-3d'>Profile</h1>
            <p>I am a versatile, hands-on software developer with knowledge and expertise of working on a variety of projects from conception to delivery. I am conversant in a wide range of technologies - most notably HTML, CSS, JavaScript, Java,  SQL and NoSQL – and i follow the latest industry trends with great interest. My approach is methodical but creative, and I always look to code to the highest standards possible. I am a confident communicator and am comfortable working either independently or as part of a team.</p>
        </div>
        <div className='py-6'>
            <img src="./src/assets/profile-photo.jpg" alt="profile-photo" />
        </div>
        </div>
        <div className=" bg-white justify-center w-full transform-3d scale-3d">
            <h2 className="font-sans text-4xl text-[#1e38a3] font-extrabold w-[600px] mx-5 mb-4 ">With expertise in the latest technologies, we ensure that every project is built with precision and aligned with your business objectives.</h2>
            <h3 className="px-20">Our development process involves multiple stages, ensuring quality and precision:</h3>
            <ul className="px-20 mb-4" >
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
    </>
    )
}

export default About