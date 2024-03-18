import React from 'react';

const LanguageSelector = ({ i18n, changelanguage }) => {
  const isEnglishSelected = i18n.language === 'en';

  return (
    <div>
      <div
        className={`py-1 border-2 ${isEnglishSelected ? 'border-fuchsia-700 hover:bg-fuchsia-700 font-semibold hover:text-white' : ''} rounded-md px-7`}
        onClick={() => changelanguage('en')}
      >
        <a href="#" className="block p-2">English</a>
      </div>
      <div
        className={`py-1 border-2 ${isEnglishSelected ? '' : 'border-fuchsia-700 hover:bg-fuchsia-700 font-semibold hover:text-white'} rounded-md px-7`}
        onClick={() => changelanguage('ar')}
      >
        <a href="#" className="block p-2">العربية</a>
      </div>
    </div>
  );
};

export default LanguageSelector;
