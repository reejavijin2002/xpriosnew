import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboardarrange from "../layout/Dashboardarrange";
import SurveyOverview from "../layout/Surveyoverview";
import Surveytemplates from "../layout/Surveytemplates";
import RealTimeResponse from "../layout/Realtimeresponse";
import HelpdeskPage from "../layout/Helpdesk";
import SurveyForm from "../layout/Surveycreation";
import QRCodePage from "../layout/QrcodeandSms";
import FeedbackPage from "../layout/Feedback";
import NotificationPage from "../layout/Notifications";

const HomePage = () => {
  return (
    <div>

      <Routes>
        <Route
          path="/"
          element={
            <Dashboardarrange>
              <Route path="Surveyoverview" element={<SurveyOverview />} />
              <Route path="Surveycreation" element={<SurveyForm />} />
              <Route path="Surveytemplates" element={<Surveytemplates />} />
              <Route path="Realtimeresponse" element={<RealTimeResponse />} />
              <Route path="QrcodeandSms" element={<QRCodePage />} />
              <Route path="Helpdesk" element={<HelpdeskPage />} />
              <Route path="Feedback" element={<FeedbackPage />} />
              <Route path="NotificationS" element={<NotificationPage />} />
            </Dashboardarrange>
          }
        />
      </Routes>
    </div>
  );
};

export default HomePage;
