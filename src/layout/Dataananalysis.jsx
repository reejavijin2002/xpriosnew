
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dataananalysis = () => {
  
  const chartData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Data Analysis',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Data Analysis</h2>

        <Bar
          data={chartData}
          options={{
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dataananalysis;
