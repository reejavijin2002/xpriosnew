import React, { useState } from 'react';
import eventImage from '../images/event.jpg';

const EventManagementSurvey = () => {
  const [responses, setResponses] = useState({
    beforeEventSatisfaction: null,
    duringEventSatisfaction: null,
    afterEventSatisfaction: null,
    improvementSuggestions: '',
  });

  const handleBeforeEventSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, beforeEventSatisfaction: value }));
  };

  const handleDuringEventSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, duringEventSatisfaction: value }));
  };

  const handleAfterEventSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, afterEventSatisfaction: value }));
  };

  const handleImprovementSuggestionsChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, improvementSuggestions: event.target.value }));
  };

  return (
    <div className="font-[poppins]">
      <h1 className="sm:text-3xl xs:text-xl font-bold mb-4 text-center">Event Management Survey</h1>

      <div className="container md:flex mx-auto mt-8 p-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-normal mb-2" htmlFor="beforeEventSatisfaction">
              How satisfied were you with the event management before the event?
            </label>
            <select
              id="beforeEventSatisfaction"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => handleBeforeEventSatisfactionChange(e.target.value)}
              value={responses.beforeEventSatisfaction || ''}
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
            <label className="block text-sm font-normal mb-2" htmlFor="duringEventSatisfaction">
              How satisfied were you with the event management during its execution?
            </label>
            <select
              id="duringEventSatisfaction"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => handleDuringEventSatisfactionChange(e.target.value)}
              value={responses.duringEventSatisfaction || ''}
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
            <label className="block text-sm font-normal mb-2" htmlFor="afterEventSatisfaction">
              How satisfied were you with the event management after its conclusion?
            </label>
            <select
              id="afterEventSatisfaction"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => handleAfterEventSatisfactionChange(e.target.value)}
              value={responses.afterEventSatisfaction || ''}
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
              Any suggestions for improving our event management services?
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

        <div>
          <img src={eventImage} alt="Event Management" height="500px" width="500px" />
        </div>
      </div>
    </div>
  );
};

export default EventManagementSurvey;

