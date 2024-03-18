import React from "react";
import { Link } from "react-router-dom";

const Dashboardicon = () => {
  return (
    <nav className="bg-fuchsia-700 font-semibold  xs:w-full sm:w-full md:w-full text-white  p-4  h-screen">
      <ul className="space-y-4">
      <li className="mb-2">
          <Link
            to="/dashboardarrange"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboardarrange/surveycreation"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Survey Creation
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboardarrange/Surveyoverview"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Survey Overview
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboardarrange/Realtimeresponse"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Real-Time Response
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to="/dashboardarrange/Surveytemplates"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Survey Templates
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboardarrange/Qrcodeandsms"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            QR Code and SMS
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to="/dashboardarrange/Feedback"
            className="block py-2 px-4 hover:bg-fuchsia-600 transition duration-300 rounded"
          >
            Feedback
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Dashboardicon;
