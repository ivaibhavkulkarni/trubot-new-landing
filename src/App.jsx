import Header from "./pages/Header/Header"
import HeroSection from "./pages/Hero/HeroSection"
import OurServices from "./pages/OurServices/Ourservices"
import Products from "./pages/Products/Products"
import AboutUs from "./pages/AboutUs/AboutUs"
import Footer from "./pages/Footer/Footer"

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <OurServices/>
      <Products/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default App