import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { allroute } from './Routes/allroute';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Whatsapp from './components/Whatsapp';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {allroute.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
        <Whatsapp />
      </div>
    </BrowserRouter>
  );
}

export default App;