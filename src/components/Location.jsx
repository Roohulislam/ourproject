import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const locationData = {
    address: t('location.address'),
    phone: t('location.phone'),
    whatsapp: t('location.whatsapp'),
    hours: t('location.hours'),
    coordinates: t('location.coordinates'),
    embedUrl: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d316.95669754041603!2d74.10782830258961!3d35.42866734124945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d35.4286673!2d74.1083201!4m5!1s0x38e70501044fbb97%3A0xe469d79547d8d1b!2zQzRINSs5QzcsIE4tMzUsIENoaWzEgXMsIDE0MTAw!3m2!1d35.428564699999995!2d74.10844809999999!5e1!3m2!1sen!2s!4v1751054171362!5m2!1sen!2s"
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
            {t('location.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('location.subtitle')}
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
              {t('location.agencyName')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">{t('location.addressLabel')}</h4>
                  <p className="text-gray-600">{locationData.address}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('location.coordinatesLabel')}: {locationData.coordinates}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">{t('location.phoneLabel')}</h4>
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
                  <h4 className="font-medium text-gray-900">{t('location.hoursLabel')}</h4>
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
                {t('location.directionsButton')}
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
                  <p className="mt-4 text-gray-700">{t('location.loadingMap')}</p>
                </div>
              </div>
            ) : null}

            <iframe
              src={locationData.embedUrl}
              className={`w-full h-full transition-all duration-500 ${isHovering ? 'scale-105' : 'scale-100'} ${!isMapLoaded ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
              allowFullScreen
              title={t('location.mapTitle')}
            ></iframe>

            <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md">
              <a 
                href="https://maps.app.goo.gl/kyzoeYkenMSNjusn6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FaMapMarkerAlt className="mr-1" />
                {t('location.openMapsButton')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;