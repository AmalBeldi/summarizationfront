import React from 'react';
import { Bar } from 'react-chartjs-2';

const HistogramChart = ({ histogramData }) => {
  const charts = Object.keys(histogramData).map((column) => {
    const columnData = histogramData[column];

    // Extract relevant properties
    const { labels, datasets } = columnData;

    return (
      <div key={column}>
        <h3>{column}</h3>
        <Bar
          data={{
            labels,
            datasets,
          }}
          options={{
            scales: {
              x: {
                type: 'category',
                labels: ['Min', 'Max', 'Average'],
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    );
  });

  return <div>{charts}</div>;
};

export default HistogramChart;
