import Home from "../pages/Home";
import Products from "../components/Products/Products";
import Services from "../components/Services/Service";
import Location from "../components/Location";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import NotFound from "../components/NotFound";

export const allroute = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/services", element: <Services /> },
  { path: "/locations", element: <Location /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "*", element: <NotFound /> } // Catch-all route
];