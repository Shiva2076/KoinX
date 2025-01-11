import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './OverviewSection.css';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OverviewSection = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        const data = await response.json();

        if (data && data.prices) {
          const prices = data.prices.map((price) => price[1]);
          const dates = data.prices.map((price) =>
            new Date(price[0]).toLocaleDateString()
          );

          setChartData({
            labels: dates,
            datasets: [
              {
                label: 'Bitcoin Price (USD)',
                data: prices,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="overview-section">
      <h2>Overview</h2>
      <div className="chart-container">
        <Line data={chartData} options={{ responsive: true }} />
      </div>
      <div className="performance-details">
        <div>
          <h3>Performance</h3>
          <p>Today's Low: $46,930.22</p>
          <p>Today's High: $49,343.83</p>
        </div>
        <div>
          <h3>Fundamentals</h3>
          <p>Bitcoin Price: $16,815.46</p>
          <p>Market Cap: $323,507,290,047</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
