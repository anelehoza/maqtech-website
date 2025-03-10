
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <>
    <div className="h-screen w-auto bg-[url(/src/assets/maqtech-bg.png)] bg-no-repeat bg-cover bg-bottom-right bg-fixed">
    <Header />
    <Main />
    <Footer />
    </div>
      
    </>
  )
}

export default App
