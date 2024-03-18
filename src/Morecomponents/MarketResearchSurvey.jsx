import React, { useState } from 'react';
import market from '../images/market.jpg';

const MarketResearchSurvey = () => {
  const [responses, setResponses] = useState({
    productSatisfaction: null,
    marketAwareness: null,
    improvementSuggestions: '',
  });

  const handleProductSatisfactionChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, productSatisfaction: value }));
  };

  const handleMarketAwarenessChange = (value) => {
    setResponses((prevResponses) => ({ ...prevResponses, marketAwareness: value }));
  };

  const handleImprovementSuggestionsChange = (event) => {
    setResponses((prevResponses) => ({ ...prevResponses, improvementSuggestions: event.target.value }));
  };

  return (
    <div className='font-[poppins]'>
    <h1 className="sm:text-3xl xs:text-xl font-bold mb-4 text-center">Market Research  Survey</h1>

    <div className="container md:flex mx-auto mt-8 p-4">

      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="productSatisfaction">
            How satisfied are you with our products/services?
          </label>
          <select
            id="productSatisfaction"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleProductSatisfactionChange(e.target.value)}
            value={responses.productSatisfaction || ''}
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
          <label className="block text-sm font-normal mb-2" htmlFor="marketAwareness">
            How aware are you of our company in the market?
          </label>
          <select
            id="marketAwareness"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => handleMarketAwarenessChange(e.target.value)}
            value={responses.marketAwareness || ''}
          >
            <option value="" disabled>Select market awareness</option>
            <option value="very-aware">Very Aware</option>
            <option value="aware">Aware</option>
            <option value="neutral">Neutral</option>
            <option value="unaware">Unaware</option>
            <option value="very-unaware">Very Unaware</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-normal mb-2" htmlFor="improvementSuggestions">
            Any suggestions for improving our products/services or market presence?
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
      <div className=''>
        <img src={market} alt='' height='500px' width='500px'/>
      </div>
    </div>
    </div>
  );
};

export default MarketResearchSurvey;
