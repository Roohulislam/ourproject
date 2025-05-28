import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Location from './components/Location';
import Products from './components/Products/Products';
import Services from './components/Services/Service';
import Whatsapp from './components/Whatsapp';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language if not already set
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('en');
    }
    document.body.dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;