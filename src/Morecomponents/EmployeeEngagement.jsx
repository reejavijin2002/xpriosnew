import React, { useState } from 'react';
import employee from '../images/employee.jpg';
import { Link } from 'react-router-dom';


const EmployeeEngagement = () => {
  const [responses, setResponses] = useState({
    jobSatisfaction: null,
    workLifeBalance: null,
    improvementSuggestions: '',
  });

  const handleJobSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, jobSatisfaction: value }));
  };

  const handleWorkLifeBalanceChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, workLifeBalance: value }));
  };

  const handleImprovementSuggestionsChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, improvementSuggestions: event.target.value }));
  };

  return (
    <div className='font-[poppins]'>
              <h1 className="sm:text-3xl xs:text-xl font-bold mb-4 text-center">Employee Engagement Survey</h1>
              <div className='md:flex'>

    <div className="container  mx-auto mt-8 p-4">

      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="jobSatisfaction">
            How satisfied are you with your current job?
          </label>
          <select
            id="jobSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleJobSatisfactionChange(e.target.value)}
            value={responses.jobSatisfaction || ''}
          >
            <option value="" disabled>Select satisfaction level</option>
            <option value="very-satisfied">Very Satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
            <option value="very-dissatisfied">Very Dissatisfied</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="workLifeBalance">
            How would you rate your work-life balance?
          </label>
          <select
            id="workLifeBalance"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleWorkLifeBalanceChange(e.target.value)}
            value={responses.workLifeBalance || ''}
          >
            <option value="" disabled>Select work-life balance</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
            <option value="very-poor">Very Poor</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="improvementSuggestions">
            Any suggestions for improving the work environment?
          </label>
          <textarea
            id="improvementSuggestions"
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-indigo-500"
            rows="4"
            placeholder="Type your suggestions here..."
            onChange={handleImprovementSuggestionsChange}
            value={responses.improvementSuggestions}
          />
        </div>

        <div className="text-center">
          <button
            className="bg-fuchsia-700 text-white px-4 py-2 rounded-md hover:bg-white hover:outline hover:text-fuchsia-700 focus:outline-none focus:shadow-outline-indigo"
            onClick={() => console.log(responses)}
          >
            Submit
          </button>
          
          
          
        </div>
      </div>
    </div>
    <div className='w-full'>
        <img src={employee} alt='' height="500px" width='500px' />
    </div>
    </div>
    </div>
  );
};

export default EmployeeEngagement;
