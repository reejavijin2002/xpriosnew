import React, { useState } from 'react';
import create from "../images/create.jpg"

const Surveycreation = () => {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  return (
    <div className="container mx-auto h-auto md:h-screen lg:h-screen xl:h-screen my-8 xs:p-2 sm:p-4 md:p-8  md:flex">
    <div className='xs:ml-2 font-[poppins] xs:p-2   lg:p-5 sm:ml-4 w-full'>
  <h1 className="md:text-4xl xs:text-2xl font-extrabold mb-4 font-[poppins]">Creating Survey For Your Choice</h1>

  <div className="mb-4">
    <input
      type="text"
      placeholder="Enter survey title"
      value={surveyTitle}
      onChange={(e) => setSurveyTitle(e.target.value)}
      className="p-2 border border-gray-300 w-full mb-2"
    />

    <input
      type="text"
      placeholder="Enter your question"
      value={newQuestion}
      onChange={(e) => setNewQuestion(e.target.value)}
      className="p-2 border border-gray-300 w-full"
    />
    <button onClick={handleAddQuestion} className="bg-fuchsia-700 rounded-md ml-0 mt-4 hover:bg-white hover:outline w-full hover:text-fuchsia-700 text-white p-2 ">
      Add Question
    </button>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-2">Survey Title: {surveyTitle}</h2>
    <h3 className="text-md font-light mb-2">Questions:</h3>
    <ul>
      {questions.map((question, index) => (
        <li key={index} className="mb-2">{question}</li>
      ))}
    </ul>
    <button onClick={handleAddQuestion} className="bg-fuchsia-700 ml-0 mt-4 rounded-md hover:bg-white hover:outline hover:text-fuchsia-700 text-white p-2 block w-full">
      Create Survey
    </button>
  </div>
</div>

      <div className='md:ml-10 xs:ml-2 sm:ml-4 xs:mt-10 md:mt-0 w-full'>
        <img src={create} alt='' height='500px' width="500px"/>
      </div>
    </div>
  );
};

export default Surveycreation;
