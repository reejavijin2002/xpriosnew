import React, { useEffect, useState } from "react";
import response from "../images/response.jpg";

const RealTimeResponse = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newResponse = {
        id: Date.now(),
        answer: Math.random() < 0.5 ? "Yes" : "No",
      };

      setResponses((prevResponses) => [newResponse, ...prevResponses]);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:flex">
      <div className="bg-white h-auto md:h-auto lg:h-auto xl:h-auto">
        <div className="bg-white md:p-8  xs:p-4rounded font-[poppins] w-full md:w-full lg:w-full xl:w-full">
          <h2 className="sm:text-2xl md:text-4xl xs:text-xl font-[poppins] font-extrabold mb-4">
            RealTime Responses
          </h2>

          {responses.length > 0 ? (
            <ul className="list-disc pl-4">
              {responses.map((response) => (
                <li key={response.id} className="text-fuchsia-700">
                  {`Response ID: ${response.id}, Answer: ${response.answer}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>No responses yet.</p>
          )}
        </div>
      </div>
      <div className="md:ml-20">
        <img src={response} alt="" height="500px" width="500px" />
      </div>
    </div>
  );
};

export default RealTimeResponse;
