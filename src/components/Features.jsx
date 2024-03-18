import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import surveyCreationImage from "../images/survey.jpg";
import dashboardsImage from "../images/dash.jpg";
import qrCodeImage from "../images/qr.jpg";
import smsImage from "../images/message1.jpg";
import realTimeReportImage from "../images/charts.jpg";
import mobile from '../images/mobile.jpg'
import Headlinks from "./Headlinks";
import Header from "../partials/Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";


const Feature = ({ title, description, imageSrc }) => {


  return (
    <div id="feature" className="mb-8 p-6 rounded-md border  border-stone-100 bg-stone-100 hover:shadow-md hover:border-fuchsia-500">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-36 object-cover mb-4"
      />
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  const { t } = useTranslation('Feature'); 

  return (
    <>
   
      
      <div id="feature" className="bg-white min-h-screen py-12">
        <div id="feature" className="container mx-auto">
          <h1 className="text-3xl font-extrabold  text-center mb-8">
            {t('title')}
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8">
            <Feature
              title={t('features.feature1.title')}
              description={t('features.feature1.description')}
              imageSrc={surveyCreationImage}
            />

            <Feature
              title={t('features.feature2.title')}
              description={t('features.feature2.description')}
              imageSrc={dashboardsImage}
            />

            <Feature
              title={t('features.feature3.title')}
              description={t('features.feature3.description')}
              imageSrc={qrCodeImage}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-8">
            <Feature
              title={t('features.feature4.title')}
              description={t('features.feature4.description')}
              imageSrc={smsImage}
            />

            <Feature
              title={t('features.feature5.title')}
              description={t('features.feature5.description')}
              imageSrc={realTimeReportImage}
            />
             <Feature
              title={t('features.feature6.title')}
              description={t('features.feature6.description')}
              imageSrc={mobile}
            />
          </div>
          <div className="mt-5">
            
          </div>
        </div>
      </div>
      
  

      
  
    </>
  );
};

export default FeaturesPage;
