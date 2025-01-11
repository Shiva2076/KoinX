import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrendingCoinsList.css';

const TrendingCoinsList = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => {
        setTrendingCoins(response.data.coins.slice(0, 3));
      })
      .catch((error) => console.error('Error fetching trending coins:', error));
  }, []);

  return (
    <div className=" coin-item">
      <h2>Trending Coins (24h)</h2>
      
        {trendingCoins.map((coin) => (
          <li key={coin.item.id} className="A">
            <img src={coin.item.small} alt={coin.item.name} />
            <div >
              <span className="coin-name">{coin.item.name}</span>
              <span className="coin-symbol">{coin.item.symbol.toUpperCase()}</span>
            </div>
          </li>
        ))}
      
    </div>
  );
};

export default TrendingCoinsList;
