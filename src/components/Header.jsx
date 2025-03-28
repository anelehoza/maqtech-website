import Navigation from "./Navigation"
import Footer from "./Footer"
const Header = () => {
    return (
      <>
      <Navigation />
          <div>
            <div className="h-screen bg-[url(/src/assets/web-dev.jpg)] bg-no-repeat  bg-cover pt-10">
            <div className=" sm:text-left lg:w-[650px] mt-20 z-1 p-8">
            <h1 className="sm:text-left md:flex  justify-center text-4xl font-sans lg:text-5xl font-bold text-[#007bfc] ">Unleash The Power Of  Modern Website Tailored For Your Business.</h1>
            </div>
              <div className="sm:text-left md:flex items-center lg:flex items-center justify-center w-[300px] mt-1 p-8">
              <p className='sm:text-left sm:text-md md:flex md:text-lg lg:text-2xl text-white font-mono font-300'>LET US HELP YOU TO HAVE PERFECT WEBSITE FOR YOUR GOALS.</p>
              </div>
            </div>
          </div>
          
      </>
    )
  }
  export default Header