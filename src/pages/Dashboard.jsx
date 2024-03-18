import React, { useState } from "react";

import { Segment, Icon } from "semantic-ui-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChatBot from 'react-simple-chatbot';


import Header from "../partials/Header";
import SurveyTemplatesComponent from "../components/SurveyTemplate";
import Defferent from "../components/Defferent";
import Seeit from "../components/Seeit";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

import image from "../images/Meeting-amico.png";
import watsapp from "../images/wa-removebg-preview.png";
import { MdViewHeadline } from "react-icons/md";

import bot from "../images/chatbot.png";

import logo from "../images/xprios.svg";
import Headlinks from "../components/Headlinks";
import home from "../images/main.jpg";
import FeaturesPage from "../components/Features";
import AboutUs from "../components/About";
import AnimatedTitle from "../components/AnimatedTitle";
import Chatbot from "../components/Chatbot";

function Dashboard() {
  const { t, i18n } = useTranslation("Landing");
  const [chatOpen, setChatOpen] = useState(false);
  const [user, setUser] = useState('');
  const sessionStorageKey = 'myAppTranslations';


  const steps = [
    {
      id: '1',
      message: 'Welcome to Xprios Survey Tool!',
      trigger: 'getName',
    },
    {
      id: 'getName',
      message: 'Please enter your name.',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'greetUser',
    },
    {
      id: 'greetUser',
      message: ({ previousValue }) => {
        setUser(previousValue);
        return `Hi ${previousValue}! How can I assist you today?`;
      },
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 1, label: 'Survey Creation', trigger: 'surveyCreation' },
        { value: 2, label: 'Dashboards', trigger: 'dashboards' },
        { value: 3, label: 'Response Collection', trigger: 'responseCollection' },
        // Add more options for each feature
        { value: 4, label: 'Feature 4', trigger: 'feature4' },
        { value: 5, label: 'Feature 5', trigger: 'feature5' },
        { value: 'end', label: 'End Chat', trigger: 'endChat' },
      ],
      trigger: ({ value }) => value && !user, // Display options only if the user hasn't entered their name
    },
    {
      id: 'surveyCreation',
      message: 'Xprios Survey Tool allows you to easily create surveys using a variety of questions. How can I help you with survey creation?',
      trigger: 'options',
    },
    {
      id: 'dashboards',
      message: 'Empower your decision-making process with dynamic dashboards that provide swift access to vital insights. How can I help you with dashboards?',
      trigger: 'options',
    },
    {
      id: 'responseCollection',
      message: 'Gather responses in real-time and monitor survey progress. Users receive instant notifications upon new responses. How can I assist you further with response collection?',
      trigger: 'options',
    },
    // Add more steps for each feature
    {
      id: 'feature4',
      message: 'This is Feature 4. How can I assist you with it?',
      trigger: 'options',
    },
    {
      id: 'feature5',
      message: 'Welcome to Feature 5. How can I assist you with it?',
      trigger: 'options',
    },
    {
      id: 'endChat',
      message: 'Thank you for interacting with Xprios Survey Tool. If you have more questions, feel free to ask!',
      end: true,
    },
  ];


  const handleWhatsAppClick = () => {
    const phoneNumber = "#";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };
  document.addEventListener('DOMContentLoaded', function () {
    // Check initial language and apply RTL or LTR if needed
    const storedData = JSON.parse(sessionStorage.getItem(sessionStorageKey)) || {};
    const initialLanguage = storedData.languageCode;
    const bodyElement = document.querySelector("body");
  
    if (initialLanguage === "ar") {
      bodyElement.classList.add("rtl");
    } else {
      bodyElement.classList.add("ltr");
    }
  });
  
  const changelanguage = (lng) => {
    console.log("Changing language to:", lng);
    i18n.changeLanguage(lng);
  
    const bodyElement = document.querySelector("body");
    if (lng === "ar") {
      bodyElement.classList.add("rtl");
    } else {
      bodyElement.classList.remove("rtl");
    }
  
    // Save the selected language to sessionStorage
    const storedData = { languageCode: lng };
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(storedData));
  
    console.log("Language code saved to sessionStorage:", lng);
  };
  
  
  const toggleChat = () => {
    console.log('Toggle chat clicked');
    setChatOpen(!chatOpen);
    console.log('Chat open:', chatOpen);
  };
  const closeChat = () => {
    setChatOpen(false);
  };
  const handleChatClose = () => {
    closeChat(); // Function to close the chat
  };
  return (
    <>
      <div className="bg-stone-100">
        <div className="shadow-slate-700">
          <div className="relative flex flex-col flex-1">
            
            <header className="bg-stone-50 sticky   top-0   shadow border-slate-200z-30 ">
              <div className="px-4 ">
                <div className="flex items-center justify-between h-16 ">
                  <Link to="/">
                    <div className="flex caret-transparent">
                      <div>
                        <img src={logo} alt="" width="45px" height="45px" />
                      </div>{" "}
                      <div className="font-bold text-xl lg:text-2xl mt-2 font-[poppins] ">
                        <h3>XPRIOS</h3>
                      </div>
                    </div>
                  </Link>

                  <div className="xs:hidden cursor-pointer  sm:hidden md:flex text-md">
                    <ScrollLink
                      to=""
                      className="lg:px-4  md:px-1 font-semibold x hover:text-fuchsia-600"
                      smooth={true}
                      duration={800}
                    >
                      {t("nav1")}
                    </ScrollLink>

                    <ScrollLink
                      to="about"
                      className="lg:px-4  md:px-1 font-semibold x hover:text-fuchsia-600"
                      smooth={true}
                      duration={800}
                    >
                      {t("nav2")}
                    </ScrollLink>
                    <ScrollLink
                      to="templates"
                      className="lg:px-4  md:px-1 font-semibold x hover:text-fuchsia-600"
                      smooth={true}
                      duration={800}
                    >
                      {t("nav3")}
                    </ScrollLink>
                    <ScrollLink
                      to="feature"
                      className="lg:px-4  md:px-1 font-semibold x hover:text-fuchsia-600"
                      smooth={true}
                      duration={800}
                    >
                      {t("nav4")}
                    </ScrollLink>
                    <Link
                      to="/contact"
                      className="lg:px-4  md:px-1 font-semibold x hover:text-fuchsia-600"
                      smooth={true}
                      duration={800}
                    >
                      {t("nav5")}
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div></div>
                    <div className=" xs:hidden sm:hidden md:flex text-sm">
                      <div className="ml-4">
                        <div className="flex cursor-pointer  ">
                        <p
                    onClick={() => changelanguage("en")}
                    className={`py-1 px-2 mr-2 border-2 border-fuchsia-700 hover:bg-fuchsia-700 hover:text-white  font-semibold rounded-md ${
                      i18n.language === "en" && ""
                    }`}
                  >
                    En
                  </p>
                  <p
                    onClick={() => changelanguage("ar")}
                    className={`py-1 px-2 mr-2 border-2 border-fuchsia-700 hover:bg-fuchsia-700 hover:text-white font-semibold rounded-md ${
                      i18n.language === "ar" && ""
                    }`}
                  >
                    Ar
                  </p>
                        </div>
                      </div>
                      <Link to="/Login">
                        <img
                          className="rounded-full  border border-fuchsia-950 "
                          style={{
                            border: "0.2rem solid fuchsia",
                            width: "40px",
                            height: "40px",
                            transition: "border-color 0.3s ease", // Adding transition for a smoother effect
                          }}
                          src={home}
                          onMouseOver={(e) => {
                            e.target.style.borderColor = "transparent"; // Change border color to transparent on hover
                          }}
                          onMouseOut={(e) => {
                            e.target.style.borderColor = "fuchsia"; // Change border color back to the original color on mouse out
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="xs:visible md:hidden">
                    <Link to="/Landingicon">
                      <div className="xs:visible md:hidden">
                        <MdViewHeadline className="w-[25px] h-[25px] xs:visible md:invisible" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </header> 

            <div className="md:flex sm:p-8 xs:p-4 shadow-md pt-0 md:p-10 xs:bg-white">
              <div className="md:w-full sm:w-full sm:mt-10 xs:w-full md:p-5 xs:p-0 xs:mt-2 ">
                <AnimatedTitle title={t("title")} className="capitalize" />
                <h4 className="md:text-2xl lg:text-[25px] sm:text-lg xs:text-md xs:py-2   text-gray-600 xs:font-[400] sm:font-[400] md:py-3">
                  {t("description")}
                </h4>
                <div className="flex">
                  <div>
                    <Link to="/Login">
                      <button className="md:p-4 md:text-xl md:mr-4 xs:mr-1 bg-fuchsia-700 xs:text-xs font-semibold  xs:p-2 mt-5 rounded-md hover:bg-white hover:outline hover:text-fuchsia-700 border-solid border-black text-white   w-35 ">
                        {t("button")}
                      </button>
                    </Link>
                  </div>
                  <div></div>
                </div>

                {/* Add smooth scrolling links */}
                <div className="md:w-full sm:w-full xs:w-full md:p-5"></div>
              </div>

              <div className="md:w-full">
                <img src={image} alt="" width="500px" height="450px" />
              </div>
              {/* <div className="">
         <img
          src={bot}
          height="100px"
          width="100px"
          onClick={toggleChat}
          style={{
            position: "fixed",
            bottom: 140,
            right: 25,
            cursor: "pointer",
          }}
        />
        {chatOpen && (
          <Segment
            style={{
              position: "fixed",
              bottom: 80,
              right: 20,
              zIndex: 1000,
            }} 
          >
          
             <Chatbot
              steps={steps}
              opened={chatOpen}
              toggleFloating={toggleChat}
              headerTitle="Xprios Survey Tool"
            /> 
      
            <button
              name="close"
              size="large"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
                zIndex: 1001, 
              }}
              onClick={handleChatClose}
            >
              </button>
          </Segment>
        )}
      </div> */}

              {/* WhatsApp image */}
              <img
  onClick={handleWhatsAppClick}
  src={watsapp}
  alt=""
  className="fixed bottom-0 right-0 cursor-pointer mb-4 mr-4 rounded-full"
  style={{
    width: '130px',
    height: '130px',
    position: 'fixed',
    zIndex: 1000, // Adjust the value based on your layout and stacking requirements
  }}
/>
            </div>
          </div>
        </div>

        <AboutUs />
        <FeaturesPage />
        <SurveyTemplatesComponent />
        {/* <FeaturesPage/> */}
        <Defferent />
        <Seeit />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
