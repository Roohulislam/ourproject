import './App.css'
import AboutUs from './components/Aboutus'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar/Navbar'
// import NotFound from './components/NotFound'
import Products from './components/Products/Products'
import Services from './components/Services/Service'
import Whatsapp from './components/Whatsapp'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Products/>
    <Services/>
    <Location/>
    <AboutUs/>
    <ContactUs/>
    <FAQ/>
    <Whatsapp/>
    {/* <NotFound/> */}
    <Footer/>
    </>
  )
}

export default App
