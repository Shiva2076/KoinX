import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './YouMayAlsoLike.css';

const YouMayAlsoLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [youMayAlsoLikeCoins] = useState([
    { name: 'BNB', price: '$319.34', change: '+0.52%', trend: 'up' },
    { name: 'SOL', price: '$109.33', change: '-2.89%', trend: 'down' },
    { name: 'XRP', price: '$0.634810', change: '+0.78%', trend: 'up' },
    { name: 'ADA', price: '$0.614869', change: '-1.57%', trend: 'down' },
    { name: 'AVAX', price: '$41.05', change: '-3.78%', trend: 'down' },
  ]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => {
        setTrendingCoins(response.data.coins.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch trending coins');
        setLoading(false);
      });
  }, []);

  return (
    <div className="trending-coins-and-you-may-also-like">
      <section className="you-may-also-like">
        <h2>You May Also Like</h2>
        <div className="coins-container">
          {youMayAlsoLikeCoins.map((coin, index) => (
            <div className="coin-card" key={index}>
              <h3>{coin.name}</h3>
              <p>{coin.price}</p>
              <p className={`change ${coin.trend}`}>
                {coin.change}
              </p>
              <div className="chart-placeholder">
                <span>📈</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="trending-coins">
        <h2>Trending Coins (24h)</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && (
          <ul>
            {trendingCoins.map((coin, index) => (
              <li key={index} className="coin-item">
                <img src={coin.item.small} alt={coin.item.name} />
                <div className="coin-info">
                  <span className="coin-name">{coin.item.name}</span>
                  <span className="coin-symbol">{coin.item.symbol.toUpperCase()}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default YouMayAlsoLike;
