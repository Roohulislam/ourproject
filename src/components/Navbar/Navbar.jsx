import { useState, useEffect, useRef } from 'react';
import { IoToggle } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import logoi from "../Navbar/Abunaveedlogo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const timerRef = useRef(null);
  
  const toggleMenu = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    if (newState) {
      timerRef.current = setTimeout(() => {
        setIsMenuOpen(false);
      }, 7000);
    }
  };

  const toggleLanguage = async () => {
    try {
      const newLanguage = currentLang === 'en' ? 'ur' : 'en';
      await i18n.changeLanguage(newLanguage);
    } catch (err) {
      console.error('Language change failed:', err);
    }
  };

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const navLinks = [
    { path: "/", key: "home" },
    { path: "/products", key: "products" },
    { path: "/services", key: "services" },
    { path: "/locations", key: "locations" },
    { path: "/aboutus", key: "about" },
    { path: "/contactus", key: "contact" }
  ];

  return (
    <nav className="bg-[#004aad] shadow-lg navbar-container">
      <div className="max-w-screen-4xl mx-auto px-2 sm:px-4 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-14 w-auto" src={logoi} alt={t('navbar.logoAlt')} />
            </div>
            
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

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-white text-sm font-medium">
              {currentLang === 'en' ? 'English' : 'اردو'}
            </span>
            
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center p-2 rounded-full text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
              title={t('navbar.toggleLanguage')}
              aria-label={t('navbar.toggleLanguage')}
            >
              <IoToggle className="h-7 w-7" />
            </button>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center p-2 rounded-full text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
                title={t('navbar.toggleLanguage')}
                aria-label={t('navbar.toggleLanguage')}
              >
                <IoToggle className="h-7 w-7" />
              </button>
              
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

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-opacity-50" onClick={() => {
            setIsMenuOpen(false);
            if (timerRef.current) clearTimeout(timerRef.current);
          }}></div>
          <div className={`fixed top-16 ${currentLang === 'ur' ? 'left-0' : 'right-0'} h-fit w-fit bg-gray-100 z-50`}>
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.path}
                    className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (timerRef.current) clearTimeout(timerRef.current);
                    }}
                  >
                    {t(`navbar.${link.key}`)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;