import Navigation from "./Navigation"

const Header = () => {
    return (
      <>
      <Navigation />
          <div className="w-full h-screen md:relative">
            <div className="flex m-1 py-6">
              <h1 className="flex items-center font-sans text-5xl font-bold text-[#007bfc] py-30 w-[650px] px-15  ">Unleash The Power Of  Modern Website Tailored For Your Business.</h1>
              {/* <p className='font-500 text-xl mb-5 antialiased '>LET US HELP YOU TO HAVE PERFECT WEBSITE FOR YOUR GOALS.</p> */}
            </div>
          </div> 
      </>
    )
  }
  export default Header