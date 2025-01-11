import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
// import TradingChart from './components/TradingContainer';
import TrendingCoinsList from './components/TrendingCoinsList';
import OverviewSection from './components/OverviewSection';
import Heading from './components/About/Heading';
import SentimentSection from './components/About/SentimentSection';
import AboutBitcoin from './components/About/AboutBitcoin';
import Tokenomics from './components/About/Tokenomics';
import TeamSection from './components/About/TeamSection';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import TradingContainer from './components/TradingContainer';

function App() {


  return (
    <>
        <div className="container">
      <Header />
      <div> 
        <TradingContainer />
        <Heading />
        <OverviewSection />
        <SentimentSection />
        <AboutBitcoin />
        <Tokenomics />
        <TeamSection />
      </div>
      <div className="new-bg-color">
        <YouMayAlsoLike />
      </div>
    </div>
    </>
  )
}

export default App
