import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
<nav className="bg-fuchsia-700 font-[poppins] font-semibold md:visible lg:visible xl:visible xs:w-0 sm:w-0 md:w-[250px] text-white xs:invisible sm:invisible p-4 md:h-full">
      <ul className="space-y-4">
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

export default Sidebar;
