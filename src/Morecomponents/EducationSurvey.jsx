import React, { useState } from 'react';
import education from '../images/education.jpg';


const EducationSurvey = () => {
  const [responses, setResponses] = useState({
    academicProgramSatisfaction: null,
    processSatisfaction: null,
    overallSatisfaction: null,
    improvementSuggestions: '',
  });

  const handleAcademicProgramSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, academicProgramSatisfaction: value }));
  };

  const handleProcessSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, processSatisfaction: value }));
  };

  const handleOverallSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, overallSatisfaction: value }));
  };

  const handleImprovementSuggestionsChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, improvementSuggestions: event.target.value }));
  };

  return (
    <div className='font-[poppins]'>
    <h1 className="sm:text-3xl xs:text-xl font-bold mb-4 text-center">Education and Schools Survey</h1>

    <div className="container md:flex mx-auto mt-8 p-4">

      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="academicProgramSatisfaction">
            How satisfied are you with the academic programs offered?
          </label>
          <select
            id="academicProgramSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleAcademicProgramSatisfactionChange(e.target.value)}
            value={responses.academicProgramSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="processSatisfaction">
            How satisfied are you with the administrative and learning processes?
          </label>
          <select
            id="processSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleProcessSatisfactionChange(e.target.value)}
            value={responses.processSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="overallSatisfaction">
            Overall, how satisfied are you with the education provided?
          </label>
          <select
            id="overallSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleOverallSatisfactionChange(e.target.value)}
            value={responses.overallSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="improvementSuggestions">
            Any suggestions for improving academic programs or processes?
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
      <div><img src={education} alt='' height="500px" width="500px" />
</div>
    </div>
    </div>
  );
};

export default EducationSurvey;
