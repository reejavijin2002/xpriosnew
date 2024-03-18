import React from "react";
import img1 from "../images/whatsapp (1).png";
import img2 from "../images/facebook (1).png";
import img3 from "../images/instagram.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('Footer'); 

  return (
    <footer className="bg-white text-black ">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl  font-bold mb-4 text-sm">
              {t('title1')}
            </h3>
            <p className="text-black  text-sm">
              {t('p')}
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl  font-bold mb-4">
              {t('title2')}
            </h3>
            <p className="text-black  text-sm">
              {t('email')}: info@surveycreator.com
            </p>
            <p className="text-black  text-sm">
              {t('phone')}: (123) 456-7890
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-xl  font-bold mb-4">{t('title3')}</h3>
            <div className="flex items-center  ">
              <a href="#" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src={img1} alt="" height="25px" width="25px" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"  className="m-1">
                <img src={img2} alt="" height="25px" width="25px" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"  className="m-1">
                <img src={img3} alt="" height="25px" width="25px" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-100 py-2 text-center">
        <p className="text-black m-0 text-sm ">
          &copy; 2023 {t('last')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
