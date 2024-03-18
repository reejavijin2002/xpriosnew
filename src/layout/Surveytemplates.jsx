import React from 'react';
import customer from '../images/customer1.jpg';
import employee from '../images/employee.jpg';
import market from '../images/market.jpg';
import event from '../images/event.jpg';
import education from '../images/education.jpg';
import health from '../images/health.jpg';
import { Link } from 'react-router-dom';

const SurveyTemplateCard = ({ title, description, link, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <a href={link}>
      <img src={image} alt={title} className="w-full h-52 object" />
    </a>
    <div className="p-3">
      <h2 className="text-xl font-bold text-gray-700 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SurveyTemplates = () => (
  <>
    <h1 className='text-center md:text-4xl pt-10 lg:pl-60 lg:pr-60 sm:text-2xl xs:text-xl bg-white font-[poppins] font-extrabold pb-10 w-full'>
      Obtain Survey Templates To Aid In Your Initial Steps
    </h1>
    <div className="max-w-screen-lg mx-auto">
      <div className="grid bg-white grid-cols-1 font-[poppins] md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <Link to='/dashboardarrange/CustomerSatisfactionSurvey'>
        <SurveyTemplateCard
          title='Customer Satisfaction'
          description='Enhance user experience and measure client happiness to improve products and overall business performance.'
          link='/customer-satisfaction'
          image={customer}
        /></Link>
        <Link to='/dashboardarrange/EmployeeEngagement'>
        <SurveyTemplateCard
          title='Employee Engagement'
          description='Build a healthy company culture by understanding how to retain top talent and foster workforce participation.'
          link='/employee-engagement'
          image={employee}
        />
        </Link>
        <Link to='/dashboardarrange/MarketResearchSurvey'>

        <SurveyTemplateCard
          title='Market Research'
          description='Stay ahead of the competition by keeping track of industry trends, conducting market studies, and analyzing competitor research.'
          link='/market-research'
          image={market}
        />  </Link>
                <Link to='/dashboardarrange/EventPlanningSurvey'>

        <SurveyTemplateCard
          title='Event Planning'
          description='Gather feedback before, during, and after events to ensure successful event organization and improve future gatherings.'
          link='/event-planning'
          image={event}
        />   </Link>
                <Link to='/dashboardarrange/EducationSurvey'>

        <SurveyTemplateCard
          title='Education and Schools'
          description='Improve academic programs and processes in learning organizations by collecting insights and feedback from students and staff.'
          link='/education-and-schools'
          image={education}
        />   </Link>
                <Link to='/dashboardarrange/HealthcareSurvey'>

        <SurveyTemplateCard
          title='Healthcare'
          description='Support patient-provider communication and enhance healthcare services by obtaining feedback on medical care and patient well-being.'
          link='/healthcare'
          image={health}
        />  </Link>
      </div>
    </div>
  </>
);

export default SurveyTemplates;

