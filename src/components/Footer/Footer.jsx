import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.links.home'), href: "/" },
    { name: t('footer.links.products'), href: "/products" },
    { name: t('footer.links.services'), href: "/services" },
    { name: t('footer.links.about'), href: "/about" },
    { name: t('footer.links.contact'), href: "/contact" }
  ];

  const services = [
    t('footer.services.support'),
    t('footer.services.fuel'),
    t('footer.services.maintenance'),
    t('footer.services.emergency')
  ];

  return (
    <footer className="bg-[#004aad] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img 
                src="/src/components/Navbar/Abunaveedlogo1.png" 
                alt={t('footer.logoAlt')} 
                className="h-12 w-auto"
                loading="lazy"
              />
              <span className="ml-2 text-xl font-bold">{t('footer.companyName')}</span>
            </div>
            <p className="text-blue-100 mb-4 text-sm md:text-base">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href={t('footer.social.facebook')} 
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label={t('footer.social.facebookAria')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href={`https://wa.me/${t('footer.social.whatsapp')}`} 
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label={t('footer.social.whatsappAria')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">
              {t('footer.links.title')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`link-${index}`}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                <a href={`tel:${t('footer.contact.phone')}`} className="hover:underline">
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                <a href={`mailto:${t('footer.contact.email')}`} className="hover:underline">
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                <address className="not-italic">
                  {t('footer.contact.address')}
                </address>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-2">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={`service-${index}`} className="text-blue-100 flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-200 rounded-full mt-2 mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-6 text-center text-blue-100 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;