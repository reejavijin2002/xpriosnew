

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import image from "../images/about1.jpg";
import Headlinks from "./Headlinks";
import Header from "../partials/Header";
import Footer from "./Footer";
import "../i18n"

const AboutUs = () => {
  const { t } = useTranslation('AboutUs'); 

  return (
    <>
    
      <div id="about" className="bg-white shadow-md min-h-screen w-full  flex items-center justify-center">
        <div className="max-w-full  bg-white shadow-md rounded-md p-14">
          <h1 className="text-3xl font-extrabold   mb-4 text-center pb-5 mt-0 ">
            {t('title')}
          </h1>
          <div className="md:flex">
            <div className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">
              <p className="text-gray-700  mb-6">
                {t('description')}
              </p>
              <img src={image} alt="" height="100px" width="auto" className=" w-full md:h-[470px]" />
            </div>
            <div className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">
              <div className="mb-6">
                <h2 className="text-xl  font-bold mb-2">
                  {t('features.creation.title')}
                </h2>
                <p className="">
                  {t('features.creation.description')}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl  font-bold mb-2">
                  {t('features.languages.title')}
                </h2>
                <p className="">
                  {t('features.languages.description')}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl  font-bold mb-2">
                  {t('features.templates.title')}
                </h2>
                <p className="">
                  {t('features.templates.description')}
                </p>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="text-fuchsia-700 hover:underline  hover:text-fuchsia-500"
                >
                  {t('learnMore')}
                </Link>
              </div>
              <div className="mt-5"></div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default AboutUs;
