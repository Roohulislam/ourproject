import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(false);

  // Check for viewport on mount and resize
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

  // Use appropriate images based on viewport
  const backgroundImages = useMemo(() => {
    if (isMobile === null) return desktopImages;
    return isMobile ? mobileImages : desktopImages;
  }, [isMobile]);

  // Auto slide with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Dynamic height calculation
  const heroHeight = useMemo(() => {
    if (isMobile) return '50vh';
    if (isTablet) return '100vh';
    return '110vh';
  }, [isMobile, isTablet]);

  return (
    <section 
      className="relative w-full mt-0.5 overflow-hidden"
      style={{ height: heroHeight }}
      aria-label="Hero carousel"
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
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 sm:justify-center sm:items-end sm:pb-0 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center sm:text-right w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {!isMobile && (
            <>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Premium Lubricants &<br />Excavator Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto sm:ml-auto mb-6 sm:mb-8">
                Trusted oil solutions for automotive and industrial applications across Pakistan
              </p>
            </>
          )}
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-1 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
            {!isMobile && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-1 sm:px-8 sm:py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Contact Team
              </motion.button>
            )}
          </div>
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
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;