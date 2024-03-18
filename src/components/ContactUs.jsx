import React, { useState } from "react";
import Header from "../partials/Header";
import img1 from "../images/contact3.jpg";
import video from "../../src/gif/videocontact.mp4";
import { Link } from "react-router-dom";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import Headlinks from "./Headlinks";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import MapComponent from "./MapComponent";

const MyForm = () => {
  const { t } = useTranslation('Contact'); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessMail: "",
    contactNo: "",
    company: "",
    message: "",
    country: "USA",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };



  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.businessMail) {
      newErrors.businessMail = "Business email is required";
    } else if (!isValidEmail(formData.businessMail)) {
      newErrors.businessMail = "Invalid email format";
    }

    if (!formData.contactNo) {
      newErrors.contactNo = "Phone number is required";
    }

    if (!formData.company) {
      newErrors.company = "Company name is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FirstName:",formData.firstName)
    console.log("LastName:",formData.lastName)
    console.log("BusinessMail:",formData.businessMail)

    console.log("ContactNo:",formData.contactNo)
    console.log("Company:",formData.company)
    console.log("Country:",formData.country)
    console.log("Message:",formData.message)




    if (validateForm()) {
      
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };

  const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  return (
    <>
   
      <Header />

      <div className="justify-center  md:flex xs:bg-white  md:p-0  xs:p-10">
        <div className="xs:mt-0 md:mt- xs:p-2 md:w-1/2 sm:p-5">
        <form
      className="max-w-lg xs:p-2 sm:p-3 w-full md:ml-10  md-p-2 xs:bg-white text-black"
      onSubmit={handleSubmit}
    >
      <h1 className="py-10 xs:py-3 md:text-4xl mb-0 text-black-500 sm:text-2xl xs:text-xl font-bold text-black">
        {t('title')}
      </h1>
      <h2 className="py-10 xs:py-3 md:text-2xl mb-2 text-black-500 sm:text-1xl xs:text-xl font-normal">
        {t('sub')}
      </h2>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            {t('form.one')}
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.firstName ? 'border-red-500' : 'border-black-500'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="firstname"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
                        {t('form.two')}

          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.lastName ? 'border-red-500' : 'border-gray-200'
            } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="grid-last-name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="lastname"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-business-email"
          >
                        {t('form.three')}

          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.businessMail ? 'border-red-500' : 'border-black-500'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-business-email"
            type="text"
            name="businessMail"
            value={formData.businessMail}
            onChange={handleChange}
            placeholder="example@example.com"
          />
          {errors.businessMail && (
            <p className="text-red-500 text-xs italic">{errors.businessMail}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-company"
          >
                        {t('form.four')}

          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.company ? 'border-red-500' : 'border-black-500'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
          />
          {errors.company && (
            <p className="text-red-500 text-xs italic">{errors.company}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="flex">
        <div className="w-full md-w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-country"
          >
                        {t('form.five')}

          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.country ? 'border-red-500' : 'border-gray-200'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder=""
          />
          {errors.country && (
            <p className="text-red-500 text-xs italic">{errors.country}</p>
          )}
        </div>
        <div className="w-full md-w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
                        {t('form.six')}

          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-black border ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="grid-message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button
            type="submit"
            className="bg-fuchsia-700 hover:bg-white hover:outline hover:text-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    <div className="bg-white p-2  pt-0 ">
        <div className="  ">
          <div className="bg-gradient-to-r from-white via-transparent  to-stone-200 p-4 md:p-6 shadow-xl rounded-md mx-4 my-8 md:w-full ">
            <h2 className="text-xl font-extrabold mb-2">
            {t('card1t')}

            </h2>
            <p className="text-black font-light">
            {t('card1d')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-white via-transparent  to-stone-200 p-4 m shadow-xl rounded-md mx-4 my-8 md:w-full ">
            <h2 className="text-xl font-extrabold mb-2">
            {t('card2t')}

            </h2>
            <p className="text-black font-light">
            {t('card2d')}

            </p>
          </div>
        </div>
      </div>
    

        </div>

        <div className="bg-  ml-2 md:w-1/2 mt-5">
          <div className=" md:p-11 md:pb-0 md:pr-2 xs:p-1 mb-0 md:text-4xl xs:text-2xl  font-bold  text-black">
            <h1>
            {t('title2')}

            </h1>
          </div>
          <div className=" md:p-11 md:pb-0 md:pr-2 xs:p-1 md:text-2xl xs:text-xl text-black  font-normal  pb-0 ">
            <h5>
              {" "}
              {t('sub2')}

            </h5>
          </div>
          <ul className="md:p-11  md:pb-0 md:pr-2  xs:p-1 pb-0">
            <li>
            {t('p1')}
            </li>

            <li>
            {t('p2')}
            </li>
            <li>
              {t('p3')}
            </li>
          </ul>
          <div className="md:p-10 md:pt-0.5 md:pb-0 md:pr-2 xs:p-0 m-10 pt-0">
            <img src={img1} alt="" height="600px" width="600px" className="" />
          </div>
          <div className="mt-5"></div>
        </div>
      </div>

      <div className="bg-white">
        <div className="sm:flex sm:p-10  xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>{t('community')}:</p>
          </div>
          <div className="sm:w-3/4">
            <p>{t('communityd')}</p>
          </div>
        </div>
        <div className="sm:flex sm:p-10  xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>{t('ourstory')}</p>
          </div>
          <div className="sm:w-3/4">
            <p>
              {t('ourstoryd')}
            </p>
          </div>
        </div>
        <div className="sm:flex sm:p-10  xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>{t('guidelines')}:</p>
          </div>
          <div className="sm:w-3/4">
            <p>
            {t('guidelinesd')}
            </p>
          </div>
        </div>
        <div className="sm:flex sm:p-10  xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>{t('applycases')}:</p>
          </div>
          <div className="sm:w-3/4">
            <p>
             {t('applycasesdp1')}
            </p>
            <p>
            {t('applycasesdp2')}

            </p>
            <p>
            {t('applycasesdp3')}

            </p>
          </div>
        </div>
      </div>
      <MapComponent className="p-5"/>
      <div className="border-t border-gray-100 bg-white my-4 md:my-8"></div>
      


      <Footer/>

   
    </>
  );
};

export default MyForm;
