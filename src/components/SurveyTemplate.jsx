import React from "react";
import customer from "../images/customer1.jpg";
import employee from "../images/employee.jpg";
import market from "../images/market.jpg";

import event from "../images/event.jpg";

import education from "../images/education.jpg";
import health from "../images/health.jpg";
import "../i18n"
import { useTranslation } from "react-i18next";

const SurveyTemplatesComponent = () => {
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
       <h1 className="text-center md:text-4xl pt-10 lg:pl-80 lg:pr-80 sm:text-2xl xs:text-xl bg-stone-100  font-extrabold pb-10 w-full">
        {t("title")}
      </h1>
      <div id="templates"className="grid  bg-stone-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
        {surveyTemplates.map((template, index) => (
          
          <div
            key={index}
            className=" bg-white rounded-lg overflow-hidden  shadow-md  transition duration-300 ease-in-out  hover:scale-105 "
          >
            <a href={template.link}>
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-72 object-fill"
              />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {template.title}
              </h2>
              <p className="text-gray-600">{template.description}</p>
            </div>
          </div>
        
          
        ))}
      </div>
    </>
  );
};

export default SurveyTemplatesComponent;
