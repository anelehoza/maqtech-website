
const Homepage = () => {
  return (
    <div>
        <div className=" mt-10 p-6 items-center">
            <h1 className=" flex  text-3xl text-[#1e38a3] font-bold ">
              Crafting cutting-edge websites to infuse innovation into your online presence.</h1>
              <div className="lg:flex mt-15 gap-12">
              <div className=" sm:text-center sm:items-center md:items-center lg:text-lg">
                <h2 className="text-2xl font-semibold mb-3 ">We develop projects that are -</h2>
                <h3 className="text-2xl font-semibold mb-3">Scalable:</h3>
                <p className="sm:text-sm/8 m-1 lg:text-lg" >A modern and professional design tailored for your businesses, perfect for promoting your services.</p>
                <h3 className="text-2xl font-semibold mb-3">Fully Responsive:</h3>
                <p className="sm:text-sm/8 m-1 lg:text-lg">  Optimized for desktop, tablet, and mobile devices to provide a seamless user experience across all platforms.</p>
                <h3 className="text-2xl font-semibold mb-3">Seamless Animations:</h3>
                <p className="sm:text-sm/8 m-1 lg:text-lg "> Includes smooth animations and transitions to enhance user experience without overwhelming the design.</p>
          </div>
          <div className="size-60 animated-bounce ...">
              <img src="/src/assets/responsive.png" alt="" />
          </div>
              </div>
        </div>
    </div>
  )
}

export default Homepage