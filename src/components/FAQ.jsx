import { useState } from 'react';
import { 
  FaChevronDown, 
  FaOilCan, 
  FaHardHat, 
  FaQuestionCircle,
  FaPhone,
  FaWhatsapp,
  FaLanguage
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const toggleAccordion = (index) => {
    try {
      setActiveIndex(activeIndex === index ? null : index);
    } catch (err) {
      setError(t('faq.errorToggle'));
      console.error("Accordion error:", err);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-8 my-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <FaQuestionCircle className="text-red-500 text-4xl mb-4" />
          <h3 className="text-xl font-medium text-red-800 mb-2">{t('faq.errorTitle')}</h3>
          <p className="text-red-700 mb-4">{t('faq.errorText')}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            {t('faq.reload')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <button
            onClick={toggleLanguage}
            className="absolute top-0 right-0 flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <FaLanguage className="mr-2" />
            {i18n.language === 'en' ? 'اردو' : 'English'}
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lubricant FAQs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaOilCan className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-white">
                {t('faq.lubricantTitle')}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {t('faq.lubricantFAQs', { returnObjects: true }).map((faq, index) => (
                <div key={`lubricant-${index}`} className="p-6">
                  <button
                    onClick={() => toggleAccordion(`lubricant-${index}`)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    aria-expanded={activeIndex === `lubricant-${index}`}
                    aria-controls={`lubricant-answer-${index}`}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <FaChevronDown 
                      className={`ml-4 text-blue-600 transition-transform duration-300 ${
                        activeIndex === `lubricant-${index}` ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`lubricant-answer-${index}`}
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeIndex === `lubricant-${index}` ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="pb-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Excavator Team FAQs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-orange-600 px-6 py-4 flex items-center">
              <FaHardHat className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-white">
                {t('faq.excavatorTitle')}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {t('faq.excavatorFAQs', { returnObjects: true }).map((faq, index) => (
                <div key={`excavator-${index}`} className="p-6">
                  <button
                    onClick={() => toggleAccordion(`excavator-${index}`)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    aria-expanded={activeIndex === `excavator-${index}`}
                    aria-controls={`excavator-answer-${index}`}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <FaChevronDown 
                      className={`ml-4 text-orange-600 transition-transform duration-300 ${
                        activeIndex === `excavator-${index}` ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`excavator-answer-${index}`}
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeIndex === `excavator-${index}` ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="pb-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <FaQuestionCircle className="text-white text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('faq.supportTitle')}
            </h3>
            <p className="text-blue-100 mb-6">
              {t('faq.supportText')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+923455000098"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> {t('faq.call')}
              </a>
              <a
                href="https://wa.me/923455000098"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> {t('faq.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;