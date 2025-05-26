import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer/Footer';
import Location from './components/Location';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Services from './components/Services/Service';
import Whatsapp from './components/Whatsapp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Whatsapp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;