import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ResponseTimeGraph = () => {
  const [responseTimes, setResponseTimes] = useState([]);

  useEffect(() => {
    fetch('/api/response_times')
      .then(response => response.json())
      .then(data => setResponseTimes(data));
  }, []);

  const data = {
    labels: responseTimes.map((_, index) => index + 1),
    datasets: [
      {
        label: 'API Response Time (ms)',
        data: responseTimes.map(rt => rt.response_time * 1000),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options} />;
};

export default ResponseTimeGraph;
