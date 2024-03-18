
import React, { useState } from 'react';
import feedback1 from "../images/feedback.jpg"

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div className='md:flex'>
    <div className="bg-white min-h-screen h-screen">
      <div className="bg-white p-8 rounded font-[poppins] w-full md:w-full lg:w-full xl:w-full">
        <h2 className="xs:text-2xl md:text-4xl font-extrabold font-[poppins] mb-4">Feedback</h2>

        <form onSubmit={handleFormSubmit}>
          <label className="block mb-2" htmlFor="feedback">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            rows="4"
            className="w-full px-3 py-2 border rounded mb-4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-fuchsia-700 text-white w-full py-2 px-4 rounded hover:bg-white hover:outline hover:text-fuchsia-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
     <div className='md:ml-5 md:mt-8'>
     <img src={feedback1} alt='' height='500px' width="500px"/>
 
     </div>
     </div>
  );
};

export default FeedbackPage;
