import React from "react";
import dash1 from "../images/dashfirst.jpg";
import { Link } from "react-router-dom";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

const Dashfirst = () => {
  return (
    <>
    <div className="p-10 ">
    <WelcomeBanner/>
    </div>
      <div className="p-4 md:p-10 md:pt-0">
        <div className="bg-gradient-to-r from-white via-transparent  to-stone-300 pb-0 ml-0 pl-0 m-5 w-full mt-0 shadow-xl">
          <div className="container mx-auto p-4 md:p-10 flex flex-col md:flex-row justify-between items-center">
            <div>
              <img
                src={dash1}
                alt=""
                height="400px"
                width="400px"
                className="mb-4"
              />
            </div>

            <div className="text-black text-center md:text-left">
              <h1 className="sm:text-2xl xs:text-xl  font-extrabold  mt-4 md:mt-0">
                Create Surveys Easily with Our User-Friendly Platform!
              </h1>
              <Link to="/dashboardarrange/surveycreation">
                <button className="bg-fuchsia-700 text-white  py-2 px-4 mt-8 font-normal  rounded-lg hover:bg-white hover:outline hover:text-fuchsia-700">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4  pt-0 md:pl-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="bg-gradient-to-r from-white via-transparent  to-stone-300 p-4 md:p-10 shadow-xl rounded-md mx-4 my-8 md:w-full lg:w-1/2 xl:w-1/2">
            <h2 className="text-xl font-extrabold mb-2">
              Easy Survey Creation
            </h2>
            <p className="text-black font-light">
              Create surveys effortlessly with our user-friendly platform. No
              coding required!
            </p>
          </div>

          <div className="bg-gradient-to-r from-white via-transparent  to-stone-300 p-4 md:pl-10 shadow-xl rounded-md mx-4 my-8 md:w-full lg:w-1/2 xl:w-1/2">
            <h2 className="text-xl font-extrabold mb-2">
              Collect Valuable Insights
            </h2>
            <p className="text-black font-light">
              Gather valuable feedback and insights from your audience to make
              informed decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:pl-10">
        <div className="flex flex-col  md:flex-row justify-center md:justify-between">
          <div className="bg-gradient-to-r from-white via-transparent  to-stone-300 p-4 md:p-10 shadow-xl rounded-md mx-4 my-8 md:w-full lg:w-1/2 xl:w-1/2">
            <h2 className="text-xl font-extrabold mb-2">
              QR Code
            </h2>
            <p className="text-black font-light">
              Enhance survey outreach by incorporating QR codes in flyers,
              posters, or ads.
            </p>
          </div>

          <div className="bg-gradient-to-r from-white via-transparent  to-stone-300 p-4 md:pl-10 shadow-xl rounded-md mx-4 my-8 md:w-full lg:w-1/2 xl:w-1/2">
            <h2 className="text-xl font-extrabold mb-2">
              Real-time Report with Charts
            </h2>
            <p className="text-black font-light">
              Effortlessly access real-time reports featuring interactive charts
              immediately upon survey launch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashfirst;
