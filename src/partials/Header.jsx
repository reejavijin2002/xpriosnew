import React, { useState } from "react";


import { Link } from "react-router-dom";
import Headlinks from "../components/Headlinks";
import home from "../images/main.jpg";
import { MdViewHeadline } from "react-icons/md";
import logo from "../images/xprios.svg"
import { useTranslation } from "react-i18next";

function Header() {

  const { t, i18n } = useTranslation('Landing');

  const changelanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Changing language to:', lng);
    const bodyElement = document.querySelector("body");
    if (lng === "ar") {
      bodyElement.classList.add("rtl");
    } else {
      bodyElement.classList.remove("rtl");
    }
  };
  return (
    <header className="bg-stone-50 sticky   top-0   shadow border-slate-200z-30 ">
      <div className="px-4 ">
        <div className="flex items-center justify-between h-16 ">
          <Link to="/">
            <div className="flex caret-transparent">
              <div>
                <img src={logo} alt="" width="45px" height="45px" />
              </div>{" "}
              <div className="font-bold text-xl lg:text-2xl mt-2  ">
                <h3>XPRIOS</h3>
              </div>
            </div>
          </Link>

          <Headlinks /> 



          <div className="flex items-center space-x-3">
            <div></div>
            <div className=" xs:hidden sm:hidden md:flex text-sm">

            <div className="ml-4 mr-2">

                      <div className="flex  cursor-pointer ">
                      {/* <Link to='/' className='lg:      mr-4 mt-2 font-semibold  hover:text-fuchsia-600'>{t('nav1')}</Link> */}

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
  );
}

export default Header;
