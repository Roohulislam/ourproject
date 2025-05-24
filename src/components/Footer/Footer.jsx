import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#004aad] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img 
                src="/src/components/Navbar/Abunaveedlogo1.png" 
                alt="Abunaveed Oil and Lubricant Agency" 
                className="h-12"
              />
              <span className="ml-2 text-xl font-bold">Abunaveed</span>
            </div>
            <p className="text-blue-100 mb-4">
              Your trusted partner for premium lubricants and excavator services across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-blue-200" />
                <span>+92 345 5000098</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-200" />
                <span>info@abunaveed.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-200" />
                <span>Abu naveed oil Agency, Chilās, 05812</span>
              </li>
            </ul>
          </div>

          {/* Excavator Team */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">Excavator Team</h3>
            <ul className="space-y-3">
              <li className="text-blue-100">24/7 Equipment Support</li>
              <li className="text-blue-100">Bulk Fuel Delivery</li>
              <li className="text-blue-100">On-site Maintenance</li>
              <li className="text-blue-100">Emergency Services</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-6 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Abunaveed Oil and Lubricant Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;