import React from 'react';
import './SentimentSection.css';
import CircularProgressBar from './CircularProgressBar';

const SentimentSection = () => {
  return (
    <div className="sentiment-section">
      <h2 className="section-heading">Sentiment</h2>
      <h3>Key Events <span><img src="./src/assets/SVG.png"></img></span></h3>

      <div className="key-events">
        <div className="event-card">
          <div className="event-icon blue-icon">
          <img src="./src/assets/R.png" alt="Description of the image"/>
          </div>
          <div className="event-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
            </p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-icon green-icon">
          <img src="./src/assets/F.png" alt="Description of the image"/>
          </div>
          <div className="event-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
            </p>
          </div>
        </div>
      </div>
      <div className="analyst-estimates">
        <h3>Analyst Estimates</h3>
        <div className="estimates-chart">
          <CircularProgressBar value={76} text="76%" />
          <div className="estimates-details">
  <div className="estimate-item">
    <span className="label">Buy</span>
    <div className="bar-container">
      <div className="bar buy-bar" style={{ width: '76%' }}></div>
    </div>
    <span className="percentage">76%</span>
  </div>

  <div className="estimate-item">
    <span className="label">Hold</span>
    <div className="bar-container">
      <div className="bar hold-bar" style={{ width: '8%' }}></div>
    </div>
    <span className="percentage">8%</span>
  </div>

  <div className="estimate-item">
    <span className="label">Sell</span>
    <div className="bar-container">
      <div className="bar sell-bar" style={{ width: '16%' }}></div>
    </div>
    <span className="percentage">16%</span>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
