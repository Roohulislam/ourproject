import { useState, useEffect } from 'react';
import { IoToggle } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import logoi from "../Navbar/Abunaveedlogo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUrdu, setIsUrdu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsUrdu(!isUrdu);
  };

  // Navigation items in both languages
  const navItems = {
    english: {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      locations: 'Locations',
      about: 'About Us',
      contact: 'Contact Us',
      language: 'اردو',
      currentLang: 'English'
    },
    urdu: {
      home: 'ہوم',
      products: 'مصنوعات',
      services: 'خدمات',
      locations: 'مقامات',
      about: 'ہمارے بارے میں',
      contact: 'ہم سے رابطہ کریں',
      language: 'English',
      currentLang: 'اردو'
    }
  };

  // Get current language items
  const currentNavItems = isUrdu ? navItems.urdu : navItems.english;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#004aad] shadow-lg navbar-container">
      <div className="max-w-screen-4xl mx-auto px-2 sm:px-4 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main nav items */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-14 w-auto"
                src={logoi}
                alt="Company Logo"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 lg:ml-20 md:flex md:space-x-2">
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.home}
              </a>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.products}
              </a>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.services}
              </a>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.locations}
              </a>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.about}
              </a>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#004aad] px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentNavItems.contact}
              </a>
            </div>
          </div>

          {/* Language toggle and mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Current Language Indicator */}
            <span className="hidden md:inline text-white text-sm font-medium">
              {currentNavItems.currentLang}
            </span>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center p-2 rounded-full text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
              title="Toggle Language"
            >
              <IoToggle className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-[#004aad] focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - now appears from the right side */}
      <div className={`${isMenuOpen ? 'fixed inset-y-0 right-0' : 'hidden'} md:hidden w-1/3 bg-gray-100 z-50`}>
        <div className="h-full flex flex-col">
          {/* Language toggle section with gray background and black text */}
          <div className="bg-gray-200 p-4 flex justify-between items-center">
            <span className="text-black text-sm font-medium">
              {currentNavItems.currentLang}
            </span>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-black hover:bg-gray-300"
              title="Toggle Language"
            >
              <IoToggle className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.home}
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.products}
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.services}
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.locations}
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.about}
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentNavItems.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;