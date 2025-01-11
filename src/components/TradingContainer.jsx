import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import GetStarted from "./GetStarted";
import TrendingCoinsList from "./TrendingCoinsList";
import image from "../assets/zzz.png";
import "./TradingContainer.css";

const TradingContainer = ({ trendingCoins }) => (
  <div className="chart-and-list">
    <div className="chart-container">
      <TradingViewWidget />
    </div>
    <div className="get-started-container">
      <div className="New">
        <a href="https://www.example.com"> {/* Replace with your desired URL */}
          <img src={image} alt="Image Description" />
        </a>
      </div>
      <div className="list-container">
        <TrendingCoinsList coins={trendingCoins} />
      </div>
    </div>
  </div>
);

export default TradingContainer;
