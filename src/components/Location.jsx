import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Location = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const locationData = {
    address: "Abu naveed oil Agency, Chilās, 05812",
    phone: "+92 3455000098",
    whatsapp: "+92 3455000098",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM",
    coordinates: "35.428516, 74.108550",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.150834689866!2d74.108550!3d35.428516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzQyLjYiTiA3NMowNic0Ni4xIkU!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
  };

  return (
    <section id='locations' className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Find Us Easily
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Visit our headquarters or contact us for distribution inquiries across Pakistan
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              Abunaveed Oil & Lubricant Agency
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">{locationData.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Coordinates: {locationData.coordinates}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">{locationData.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaWhatsapp className="text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">{locationData.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600 whitespace-pre-line">{locationData.hours}</p>
                </div>
              </div>

              <motion.a
                href="https://maps.app.goo.gl/kyzoeYkenMSNjusn6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all mt-4"
              >
                <FaDirections className="mr-2" />
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {!isMapLoaded ? (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="mt-4 text-gray-700">Loading map...</p>
                </div>
              </div>
            ) : null}

            <iframe
              src={locationData.embedUrl}
              className={`w-full h-full transition-all duration-500 ${isHovering ? 'scale-105' : 'scale-100'} ${!isMapLoaded ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
              allowFullScreen
              title="Abunaveed Oil & Lubricant Agency Location"
            ></iframe>

            <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md">
              <a 
                href="https://maps.app.goo.gl/kyzoeYkenMSNjusn6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FaMapMarkerAlt className="mr-1" />
                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;