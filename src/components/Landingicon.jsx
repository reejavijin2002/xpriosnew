import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";

const Landingicon = () => {
  const { t, i18n } = useTranslation("Landing");
  const sessionStorageKey = 'myAppTranslations';


  document.addEventListener('DOMContentLoaded', function () {
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
  
    
    const storedData = { languageCode: lng };
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(storedData));
  
    console.log("Language code saved to sessionStorage:", lng);
  };
  
  return (
    <div className="flex items-center  bg-stone-300 pt-10  space-y-4 h-[1200px] flex-col">
      <div>
        <Link
          to="/"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Home
        </Link>
      </div>
      <div>
        <div>
          <Link
            to="/contact"
            className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            to="/Login"
            className="py-2 mt-4 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
          >
            Login
          </Link>
        </div>
        <div className=" cursor-pointer  ">
                        <p
                    onClick={() => changelanguage("en")}
                    className={`py-2 mt-4 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block ${
                      i18n.language === "en" && ""
                    }`}
                  >
                    En
                  </p>
                  <p
                    onClick={() => changelanguage("ar")}
                    className={`py-2 mt-4 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block ${
                      i18n.language === "ar" && ""
                    }`}
                  >
                    Ar
                  </p>
                        </div>
      </div>
    </div>
  );
};

export default Landingicon;
