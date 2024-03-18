import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../i18n"

const Headlinks = () => {
  const { t, i18n } = useTranslation('Landing');

  const changelanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Changing language to:', lng);
  };

  return (
    <div className='xs:hidden sm:hidden md:flex text-md'>



      
    </div>
  );
};

export default Headlinks;
