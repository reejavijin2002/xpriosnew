import React from "react";
import { Link } from "react-router-dom"; 

import customer from "../images/customer1.jpg";
import employee from "../images/employee.jpg";
import market from "../images/market.jpg";
import event from "../images/event.jpg";
import education from "../images/education.jpg";
import health from "../images/health.jpg";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import Headlinks from "./Headlinks";
import Header from "../partials/Header";
import Footer from "./Footer";
import "../i18n"
import { useTranslation } from "react-i18next";

const Template = () => {
  const { t } = useTranslation('Template'); 

  const surveyTemplates = [
    {
      title: t('templates.template1.title'),
      description:
      t('templates.template1.description'),
      
      image: customer,
    },
    {
      title: t('templates.template2.title'),
      description:
      t('templates.template2.description'),
      image: employee,
    },
    {
      title: t('templates.template3.title'),
      description:
      t('templates.template3.description'),
      image: market,
    },
    {
      title: t('templates.template4.title'),
      description:
      t('templates.template4.description'),
      image: event,
    },
    {
      title: t('templates.template5.title'),
      description:
      t('templates.template5.description'),
      image: education,
    },
    {
      title: t('templates.template6.title'),
      description:
      t('templates.template6.description'),
      image: health,
    },
  ];

  return (
    <>
  
       <Header />
      <h1 className="text-center md:text-4xl pt-10 md:pl-80 md:pr-80 sm:text-2xl xs:text-xl bg-white  font-extrabold pb-10 w-full">
        {t('title')}
      </h1>

      <div className="grid bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {surveyTemplates.map((template, index) => (
          <Link
            key={index}
            to={template.link}
            className="hover:shadow-lg focus:outline-none"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-52 object"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                  {template.title}
                </h2>
                <p className="text-gray-600">{template.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-100 bg-white my-4 md:my-8"></div>


      <Footer/>
 
    </>
  );
};

export default Template;
