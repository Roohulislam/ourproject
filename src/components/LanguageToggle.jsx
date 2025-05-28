import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-l ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ur')}
        className={`px-3 py-1 rounded-r ${i18n.language === 'ur' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        اردو
      </button>
    </div>
  );
};

export default LanguageToggle;
