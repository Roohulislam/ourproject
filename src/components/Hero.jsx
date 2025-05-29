import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const desktopImages = [
    "/images/heroimg/1.jpg",
    "/images/heroimg/2.jpg",
    "/images/heroimg/3.jpg",
    "/images/heroimg/4.jpg",
    "/images/heroimg/5.jpg",
    "/images/heroimg/6.jpg",
    "/images/heroimg/7.jpg",
  ];

  const mobileImages = [
    "/images/heroimgmobail/11.png",
    "/images/heroimgmobail/22.png",
    "/images/heroimgmobail/33.png",
    "/images/heroimgmobail/44.png",
    "/images/heroimgmobail/55.png",
    "/images/heroimgmobail/66.png",
    "/images/heroimgmobail/77.png",
    "/images/heroimgmobail/88.png",
    "/images/heroimgmobail/99.png",
  ];

  const backgroundImages = useMemo(() => {
    if (isMobile === null) return desktopImages;
    return isMobile ? mobileImages : desktopImages;
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const heroHeight = useMemo(() => {
    if (isMobile) return '50vh';
    if (isTablet) return '100vh';
    return '110vh';
  }, [isMobile, isTablet]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '03455000098';
    const message = 'Hello, I would like to get more information';
    
    // Check if mobile device
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    }
  };

  return (
    <section 
      className="home-page relative w-full mt-0.5 overflow-hidden"
      style={{ height: heroHeight }}
      aria-label={t('hero.ariaLabel')}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%'
            }}
            aria-hidden={index !== currentSlide}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-12 sm:pb-0">
        {!isMobile && (
          <motion.div 
            className="text-center w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading - Only shown on desktop/tablet */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-80 sm:mb-6 leading-tight">
              {t('hero.title') || "Your Compelling Headline Here"}
            </h1>
            
            {/* Paragraph - Only shown on desktop/tablet */}
            <p className="text-lg sm:text-2xl md:text-3xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto">
              {t('hero.subtitle') || "A descriptive paragraph that explains your value proposition and engages visitors to take action."}
            </p>
          </motion.div>
        )}
        
        {/* Button - Shown on all devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center mb-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 lg:mb-18 md:mb-18 bg-blue-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-lg"
            onClick={handleWhatsAppClick}
          >
            {t('hero.ctaPrimary') || "Contact on WhatsApp"}
          </motion.button>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12'} left-0 right-0 flex justify-center space-x-2 z-10`}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'} rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              index === currentSlide
                ? "bg-white " + (isMobile ? 'w-6' : 'w-8')
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={t('hero.slideIndicator', { number: index + 1 })}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;