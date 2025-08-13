import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  // Initialize state with proper default values
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Calculate device type based on window size
  const isMobile = useMemo(() => windowSize.width <= 640, [windowSize.width]);
  const isTablet = useMemo(() => windowSize.width > 640 && windowSize.width <= 1024, [windowSize.width]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Image arrays
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
    "/images/heroimgmobail/1.png",
    "/images/heroimgmobail/2.png",
    "/images/heroimgmobail/3.png",
    "/images/heroimgmobail/4.png",
    "/images/heroimgmobail/5.png",
    "/images/heroimgmobail/6.png",
    "/images/heroimgmobail/7.png",
    "/images/heroimgmobail/8.png",
    "/images/heroimgmobail/9.png",
    "/images/heroimgmobail/10.png",
    "/images/heroimgmobail/11.png",
    "/images/heroimgmobail/12.png",
    "/images/heroimgmobail/13.png",
    "/images/heroimgmobail/14.png",
    "/images/heroimgmobail/15.png",
    "/images/heroimgmobail/16.png",
    "/images/heroimgmobail/17.png",
    "/images/heroimgmobail/18.png",
    "/images/heroimgmobail/19.png",
    "/images/heroimgmobail/20.png",
    "/images/heroimgmobail/21.png",
  ];

  // Select appropriate images based on device
  const backgroundImages = useMemo(() => {
    return isMobile ? mobileImages : desktopImages;
  }, [isMobile]);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Calculate hero section height
  const heroHeight = useMemo(() => {
    if (isMobile) return '60vh';
    if (isTablet) return '100vh';
    return '110vh';
  }, [isMobile, isTablet]);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = '03455000098';
    const message = 'Hello, I would like to get more information';
    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS || isAndroid) {
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    }
  };

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = (urls) => {
      urls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    // Preload first 3 images of each set
    preloadImages(desktopImages.slice(0, 3));
    preloadImages(mobileImages.slice(0, 3));
  }, []);

  return (
    <section 
      className="home-page relative w-full mt-0.5 overflow-hidden"
      style={{ height: heroHeight }}
      aria-label={t('hero.ariaLabel')}
    >
      {/* Background images with transition */}
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
      <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-2 sm:pb-0">
        {/* Desktop/Tablet Content */}
        {!isMobile && (
          <motion.div 
            className="text-center w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-80 sm:mb-6 leading-tight">
              {t('hero.title') || "Your Compelling Headline Here"}
            </h1>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto">
              {t('hero.subtitle') || "A descriptive paragraph that explains your value proposition."}
            </p>
          </motion.div>
        )}
        
        {/* CTA Button - Visible on all devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center mb-2 "
        >
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 ${isMobile ? 'text-sm' : 'text-base'}  bg-blue-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300`}
            onClick={handleWhatsAppClick}
            aria-label={t('hero.ctaAriaLabel') || "Contact via WhatsApp"}
          >
            {t('hero.ctaPrimary') || "Contact on WhatsApp"}
          </motion.button>
        </motion.div>
      </div>

      {/* Slide indicators */}
    
    </section>
  );
};

export default Hero;