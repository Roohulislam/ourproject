import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { allroute } from './Routes/allroute';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
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