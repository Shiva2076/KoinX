import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './Tokenomics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Tokenomics() {
  const data = {
    labels: ['Crowdsale Investors', 'Foundation'],
    datasets: [
      {
        label: 'Initial Distribution',
        data: [80, 20],
        backgroundColor: ['#007bff', '#ff9800'],
        hoverBackgroundColor: ['#0056b3', '#e68a00'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <section className="tokenomics">
      <h2>Tokenomics</h2>
      <h3>Initial Distribution</h3>

      <div className="tokenomics__content">
        

        <div className="tokenomics__description">
          <div className="tokenomics__chart">
          <Doughnut data={data} options={{ cutout: '70%' }} />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum
            nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo
            amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
