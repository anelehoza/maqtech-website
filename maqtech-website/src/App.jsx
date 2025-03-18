
import Footer from "./components/Footer"
import Header from "./components/Header"
import Homepage from "./Pages/Homepage"

function App() {

  return (
    <>
    <div className=" bg-[url(/src/assets/maqtech-bg.png)] bg-no-repeat bg-cover bg-bottom-right bg-fixed overflow-x-hidden">
    <Header />
    <Homepage />
    <Footer />
    </div>
      
    </>
  )
}

export default App
