import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Outlet } from "react-router"


const About = () => {
  return (
    <div>
    <Navigation />

      <div className="lg:flex flex-col-1 items-center gap-6 pt-25 p-7  md:flex-row ">
        <div className="basis-2/8">
          <img className="size-78 shadow-xl" src="/src/assets/profPic.png" alt="profile-photo" />
        </div>
        <div className='flex basis-1/2 items-center md:items-start'> 
          <span className="font-medium">I am a versatile, hands-on software developer with knowledge and expertise of working on a variety of projects from conception to delivery. I am conversant in a wide range of technologies - most notably HTML, CSS, JavaScript, Java,  SQL and NoSQL – and i follow the latest industry trends with great interest. My approach is methodical but creative, and I always look to code to the highest standards possible. I am a confident communicator and am comfortable working either independently or as part of a team.</span>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-6 p-7 bg-white md:flex-row md:gap-8 ">
            <h2 className="font-sans text-3xl text-[#1e38a3] font-semibold">With expertise in the latest technologies, we ensure that every project is built with precision and aligned with your business objectives.</h2>
        </div>
        <div className="flex flex-col items-center gap-6 p-7 bg-white md:flex-row md:gap-8">
          <div>
          <h3 className="text-2xl font-semibold mb-2">Our development process involves multiple stages, ensuring quality and precision:</h3>
          <p><span className="text-lg font-bold mb-2">Planning & Strategy:</span> Mapping out your project timeline, milestones, and technical requirements.</p>
          <p><span className="text-lg font-bold mb-2">Custom Coding:</span> Writing clean, efficient, and scalable code tailored to your specific needs.</p>
          <p><span className="text-lg font-bold mb-2">Responsive Design:</span> Developing websites and applications optimized for all screen sizes.</p>
         <p><span className="text-lg font-bold mb-2">Performance Optimization:</span> Improving loading speeds and overall site performance for the best user experience.</p>
         <p><span className="text-lg font-bold mb-2">Quality Assurance:</span> Rigorous testing to identify and fix bugs before launch.</p>
         <p><span className="text-lg font-bold mb-2">Maintenance & Updates:</span> Providing ongoing support to keep your digital products running smoothly.</p>
          </div>
        </div>
        <div>
        <Footer />
        <Outlet />
        </div>
    </div>
    )
}

export default About