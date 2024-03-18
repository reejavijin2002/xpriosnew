// Dashboardarrange.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header1";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Surveyoverview from "./Surveyoverview";
import Surveycreation from "./Surveycreation";
import Realtimeresponse from "./Realtimeresponse";
import QrcodeandSms from "./QrcodeandSms";
import Helpdesk from "./Helpdesk";
import Feedback from "./Feedback";
import Notifications from "./Notifications";
import Surveytemplates from "./Surveytemplates";
import Dashfirst from "./Dashfirst";
import CustomerSatisfactionSurvey from "./CustomerSatisfactionSurvey";
import EmployeeEngagement from "../Morecomponents/EmployeeEngagement";
import EducationSurvey from "../Morecomponents/EducationSurvey";
import EventPlanningSurvey from "../Morecomponents/EventPlanningSurvey";
import MarketResearchSurvey from "../Morecomponents/MarketResearchSurvey";
import HealthcareSurvey from "../Morecomponents/HealthcareSurvey";

const Dashboardarrange = () => {
  return (
    <>
      <div className="bg-white">
        <div>
          <Header />
        </div>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className=" ">
            <Routes>
              <Route path="/" element={<Dashfirst />} />

              <Route path="/Surveyoverview" element={<Surveyoverview />} />
              <Route path="/Surveycreation" element={<Surveycreation />} />
              <Route path="/Surveytemplates" element={<Surveytemplates />} />
              <Route path="/Realtimeresponse" element={<Realtimeresponse />} />
              <Route path="/QrcodeandSms" element={<QrcodeandSms />} />
              <Route path="/Feedback" element={<Feedback />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/CustomerSatisfactionSurvey" element={<CustomerSatisfactionSurvey/>} />
              <Route path="/EmployeeEngagement" element={<EmployeeEngagement/>} />
              <Route path="/EducationSurvey" element={<EducationSurvey/>} />
              <Route path="/EventPlanningSurvey" element={<EventPlanningSurvey/>} />
              <Route path="/MarketResearchSurvey" element={<MarketResearchSurvey/>} />
              <Route path="/HealthcareSurvey" element={<HealthcareSurvey/>} />



            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboardarrange;
