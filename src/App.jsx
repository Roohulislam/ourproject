import './App.css'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
// import FAQ from './components/FAQ'
import Footer from './components/Footer/Footer'
// import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar/Navbar'
// import NotFound from './components/NotFound'
import Products from './components/Products/Products'
import Services from './components/Services/Service'
// import Team from './components/Team'
import Whatsapp from './components/Whatsapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {

  return (
     <BrowserRouter>
     
    <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/products" element={<Products/>} />
  <Route path="/locations" element={<Location/>} />
  <Route path="/aboutus" element={<AboutUs/>} />
  <Route path="/contactus" element={<ContactUs/>} />
    {/* <FAQ/>
    <Team/> */}
    {/* <NotFound/> */}
    </Routes>
    <Whatsapp/>
    <Footer/>
        </BrowserRouter>
  )
}

export default App
