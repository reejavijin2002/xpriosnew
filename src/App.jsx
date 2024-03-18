import React, { useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter, Link } from "react-router-dom";
 import "./css/style.css"



// Import pages
import Dashboard from "./pages/Dashboard";
import SurveyModal from "./components/SurveyModal";
import MyForm from "./components/ContactUs";
import AboutUs from "./components/About";
import Features from "./components/Features";
import Template from "./components/Template";
import Login from "./components/Login";
import Dashboardarrange from "./layout/Dashboardarrange";
import Surveytemplates from "./layout/Surveytemplates";
import Surveycreation from "./layout/Surveycreation";
import SurveyOverview from "./layout/Surveyoverview";
import RealTimeResponse from "./layout/Realtimeresponse";
import QRCodePage from "./layout/QrcodeandSms";
import HelpdeskPage from "./layout/Helpdesk";
import FeedbackPage from "./layout/Feedback";
import NotificationPage from "./layout/Notifications";
import Dashfirst from "./layout/Dashfirst";
import Dashboardicon from "./layout/Dashboardicon";
import Landingicon from "./components/Landingicon";
import CustomerSatisfactionSurvey from "./layout/CustomerSatisfactionSurvey";
import EmployeeEngagement from "./Morecomponents/EmployeeEngagement";
import EducationSurvey from "./Morecomponents/EducationSurvey";
import EventPlanningSurvey from "./Morecomponents/EventPlanningSurvey";
import MarketResearchSurvey from "./Morecomponents/MarketResearchSurvey";
import HealthcareSurvey from "./Morecomponents/HealthcareSurvey";
import NotFound from "./components/NotFound";



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/contact" element={<MyForm />} />
        <Route exact path="/About" element={<AboutUs />} />
        <Route exact path="/Features" element={<Features />} />
        <Route exact path="/Template" element={<Template />} />
        <Route exact path="/Login" element={<Login />} />

        <Route exact path="/dashboard" element={<SurveyModal />} />
        <Route exact path="/dashboard/createsurvey" element={<SurveyModal />} />
        <Route exact path="/Dashboardicon" element={<Dashboardicon/>}/>
        <Route exact path="/Landingicon" element={<Landingicon/>}/>
        <Route exact path="*" element={<NotFound/>}/>
       



       
       


        <Route path="/dashboardarrange" element={<Dashboardarrange />}>
        <Route
          path="Surveytemplates"
          element={<Surveytemplates />}
          />
         <Route path="Surveyoverview"
          element={<SurveyOverview/>} />  
          <Route 
          path="Surveycreation" 
          element={<Surveycreation />} />
          <Route 
          path="Realtimeresponse"
           element={<RealTimeResponse/>} />
          <Route 
          path="QrcodeandSms" 
          element={<QRCodePage/>} /> 
          
          <Route
           path="Feedback" 
           element={<FeedbackPage/>} /> 
          <Route 
          path="NotificationS"
           element={<NotificationPage/>}/>
           <Route 
          path=""
           element={<Dashfirst/>}/>
            <Route 
          path="CustomerSatisfactionSurvey"
           element={<CustomerSatisfactionSurvey/>}/>
           <Route 
          path="EmployeeEngagement"
           element={<EmployeeEngagement/>}/>
             <Route 
          path="EducationSurvey"
           element={<EducationSurvey/>}/>
             <Route 
          path="EventPlanningSurvey"
           element={<EventPlanningSurvey/>}/>
             <Route 
          path="MarketResearchSurvey"
           element={<MarketResearchSurvey/>}/>
             <Route 
          path="HealthcareSurvey"
           element={<HealthcareSurvey/>}/>
            
           
      </Route>
       

        
      </Routes>

      

     
    </>
  );
}

export default App;
