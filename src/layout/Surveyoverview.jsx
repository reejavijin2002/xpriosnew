
import React from 'react';
import overview from '../images/overview.jpg'

const SurveyOverview = () => {
  
  const surveys = [
    { id: 1, title: 'Customer Satisfaction Survey' },
    { id: 2, title: 'Product Feedback Survey' },
    { id: 3, title: 'Employee Engagement Survey' },
    { id: 4, title: 'Market Reserch Survey' },
    { id: 5, title: 'Event Planning Survey' },
    { id: 6, title: 'Education And School Survey' },
    { id: 7, title: 'Health Care Survey' },
  ];

  return (
    <div className='md:flex w-full h-auto md:h-auto lg:h-auto xl:h-auto lg:p-20'>
    <div className="bg-white md:w-1/2 md:h-auto  ">
      <div className="bg-white lg:p-8 rounded h-full w-full font-[poppins]  md:w-full lg:w-full xl:w-full">
        <h2 className="md:text-4xl xs:text-xl font-extrabold font-[poppins] mb-4">Survey Overview</h2>

        {surveys.length > 0 ? (
          <ul className="list-disc pl-4">
            {surveys.map((survey) => (
              <li key={survey.id} className="text-fuchsia-700 text-lg">
                {survey.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No surveys available.</p>
        )}
      </div>
    
    </div>
      <div className='md:w-1/2'>
      <img src={overview} alt='' height='500px' width="500px"/>
    </div>
    </div>
  );
};

export default SurveyOverview;
