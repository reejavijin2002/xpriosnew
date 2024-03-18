import React, { useState } from 'react';
import health from '../images/health.jpg';


const HealthcareSurvey = () => {
  const [responses, setResponses] = useState({
    medicalCareSatisfaction: null,
    patientWellBeingSatisfaction: null,
    communicationSatisfaction: null,
    improvementSuggestions: '',
  });

  const handleMedicalCareSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, medicalCareSatisfaction: value }));
  };

  const handlePatientWellBeingSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, patientWellBeingSatisfaction: value }));
  };

  const handleCommunicationSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, communicationSatisfaction: value }));
  };

  const handleImprovementSuggestionsChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, improvementSuggestions: event.target.value }));
  };

  return (
    <div className='font-[poppins]'>
    <h1 className="sm:text-3xl xs:text-xl font-bold mb-4 text-center">Healthcare Customer Satisfaction Survey</h1>

    <div className="container md:flex mx-auto mt-8 p-4">

      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="medicalCareSatisfaction">
            How satisfied are you with the medical care provided?
          </label>
          <select
            id="medicalCareSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleMedicalCareSatisfactionChange(e.target.value)}
            value={responses.medicalCareSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="patientWellBeingSatisfaction">
            How satisfied are you with your overall well-being as a patient?
          </label>
          <select
            id="patientWellBeingSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handlePatientWellBeingSatisfactionChange(e.target.value)}
            value={responses.patientWellBeingSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="communicationSatisfaction">
            How satisfied are you with the communication from healthcare providers?
          </label>
          <select
            id="communicationSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleCommunicationSatisfactionChange(e.target.value)}
            value={responses.communicationSatisfaction || ''}
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
            Any suggestions for improving healthcare services or communication?
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
    
    <div><img src={health} alt='' height="500px" width="500px" />
</div></div>
    </div>
  );
};

export default HealthcareSurvey;
