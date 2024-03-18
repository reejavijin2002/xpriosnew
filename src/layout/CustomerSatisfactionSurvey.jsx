import React, { useState } from 'react';
import customer from '../images/customer1.jpg';
import { Link } from 'react-router-dom';


const CustomerSatisfactionSurvey = () => {
  const [responses, setResponses] = useState({
    satisfaction: null,
    feedback: '',
    likelihoodToRecommend: null,
    favoriteFeature: '',
  });

  const handleSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, satisfaction: value }));
  };

  const handleFeedbackChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, feedback: event.target.value }));
  };

  const handleLikelihoodToRecommendChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, likelihoodToRecommend: value }));
  };

  const handleFavoriteFeatureChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, favoriteFeature: event.target.value }));
  };

  return (
    <div className='bg-white w-full'>
    <h1 className="sm:text-3xl xs:text-xl bg-white  font-extrabold mb-4 text-center">Customer Satisfaction Survey</h1>

    <div className="container mx-auto bg-white  md:flex  mt-8 ">

      <div className="max-w-md mx-auto bg-white p-6 rounded-md  ">
        <div className="mb-4">
          <label className="block text-md font-normal mb-2" htmlFor="satisfaction">
            How satisfied are you with our products/services?
          </label>
          <select
            id="satisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleSatisfactionChange(e.target.value)}
            value={responses.satisfaction || ''}
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
          <label className="block text-md font-normal mb-2" htmlFor="likelihoodToRecommend">
            How likely are you to recommend our products/services to others?
          </label>
          <select
            id="likelihoodToRecommend"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleLikelihoodToRecommendChange(e.target.value)}
            value={responses.likelihoodToRecommend || ''}
          >
            <option value="" disabled>Select likelihood to recommend</option>
            <option value="very-likely">Very Likely</option>
            <option value="likely">Likely</option>
            <option value="neutral">Neutral</option>
            <option value="unlikely">Unlikely</option>
            <option value="very-unlikely">Very Unlikely</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-md font-normal mb-2" htmlFor="favoriteFeature">
            What is your favorite feature of our products/services?
          </label>
          <input
            type="text"
            id="favoriteFeature"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Type your favorite feature"
            onChange={handleFavoriteFeatureChange}
            value={responses.favoriteFeature}
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-normal mb-2" htmlFor="feedback">
            Any additional comments or suggestions?
          </label>
          <textarea
            id="feedback"
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-indigo-500"
            rows="4"
            placeholder="Type your feedback here..."
            onChange={handleFeedbackChange}
            value={responses.feedback}
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
      <div><img src={customer} alt='' height='500px' width='500px'/></div>
    </div>
    </div>
  );
};

export default CustomerSatisfactionSurvey;
