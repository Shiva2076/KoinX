import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import GetStarted from "./GetStarted";
import TrendingCoinsList from "./TrendingCoinsList";
import "./TradingContainer.css";

const TradingContainer = ({ trendingCoins }) => {
  return (
    <div className="chart-and-list">
      <div className="chart-container">
        <TradingViewWidget />
      </div>

      <div className="get-started-container">
        <div className="New">
          <img src="../src/assets/Frame 1000004851 (1).png" alt="Image Description" />
        </div>

        <div className="list-container">
          <TrendingCoinsList coins={trendingCoins} />
        </div>
      </div>
    </div>
  );
};

export default TradingContainer;
