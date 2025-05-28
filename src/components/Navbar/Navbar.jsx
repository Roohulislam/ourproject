import { useState, useEffect } from 'react';
import { IoToggle } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import logoi from "../Navbar/Abunaveedlogo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Set initial document direction
  useEffect(() => {
    document.body.dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const navLinks = [
    { path: "/", key: "home" },
    { path: "/products", key: "products" },
    { path: "/services", key: "services" },
    { path: "/locations", key: "locations" },
    { path: "/aboutus", key: "about" },
    { path: "/contactus", key: "contact" }
  ];

  return (
    <nav className="bg-[#004aad]  shadow-lg navbar-container">
      <div className="max-w-screen-4xl mx-auto px-2 sm:px-4 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main nav items */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-14 w-auto" src={logoi} alt={t('navbar.logoAlt')} />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 lg:ml-20 md:flex md:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.path}
                  className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Language toggle and mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Current Language Indicator */}
            <span className="hidden md:inline text-white text-sm font-medium">
              {i18n.language === 'en' ? 'English' : 'اردو'}
            </span>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center p-2 rounded-full text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
              title={t('navbar.toggleLanguage')}
              aria-label={t('navbar.toggleLanguage')}
            >
              <IoToggle className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label={t('navbar.openMenu')}
              >
                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${isMenuOpen ? 'fixed inset-y-0 right-0' : 'hidden'} md:hidden w-1/3 bg-gray-100 z-50`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col">
          {/* Language toggle section */}
          <div className="bg-gray-200 p-4 flex justify-between items-center">
            <span className="text-black text-sm font-medium">
              {i18n.language === 'en' ? 'English' : 'اردو'}
            </span>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-black hover:bg-gray-300"
              title={t('navbar.toggleLanguage')}
              aria-label={t('navbar.toggleLanguage')}
            >
              <IoToggle className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.path}
                className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`navbar.${link.key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;