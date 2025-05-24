// src/components/Hero.jsx
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(null);

  // Check for mobile viewport on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
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
    "/images/heroimgmobail/1.png",
    "/images/heroimgmobail/2.png",
    "/images/heroimgmobail/3.png",
    "/images/heroimgmobail/4.png",
    "/images/heroimgmobail/5.png",
    "/images/heroimgmobail/6.png",
    "/images/heroimgmobail/7.png",
    "/images/heroimgmobail/8.png",
    "/images/heroimgmobail/9.png",
  ];

  // Use appropriate images based on viewport
  const backgroundImages = useMemo(() => {
    return isMobile === null ? desktopImages : (isMobile ? mobileImages : desktopImages);
  }, [isMobile]);

  // Auto slide with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Add error handling for images
  const handleImageError = (e) => {
    console.error("Failed to load image:", e.target.style.backgroundImage);
    e.target.style.display = 'none';
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ height: isMobile ? '60vh' : '100vh' }}
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
              backgroundSize: isMobile ? 'cover' : 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%'
            }}
            aria-hidden={index !== currentSlide}
            onError={handleImageError}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Responsive positioning */}
      <div className={`relative z-10 h-full flex flex-col ${isMobile ? 'items-center justify-end pb-32' : 'items-end justify-center'} px-4 sm:px-6 lg:px-8`}>
        {!isMobile && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Welcome to Our Website
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-xs sm:max-w-md md:max-w-2xl mb-6 sm:mb-8">
              Discover amazing features and services...
            </p>
          </>
        )}
        <button 
          className={`${isMobile ? 'px-4 py-2 text-sm ' : 'px-6 sm:px-8 py-2 sm:py-3 text-base'} bg-blue-600 hover:bg-blue-700 text-white  font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500`}
          aria-label="Get started"
        >
          Get Started
        </button>
      </div>

      {/* Slide indicators - Responsive positioning */}
      <div className={`absolute ${isMobile ? 'bottom-4' : 'bottom-8'} left-0 right-0 flex justify-center space-x-2 z-10`}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              index === currentSlide
                ? "bg-white " + (isMobile ? 'w-4' : 'w-6')
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