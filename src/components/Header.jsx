import React from 'react';
import './Header.css';
import logo from '../assets/1. KoinX Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="KoinX Logo" className="header__logo" />
        
      </div>
      <div>
      <nav className="header__nav">
          <a href="#">Crypto Taxes</a>
          <a href="#">Free Tools</a>
          <a href="#">Resource Center</a>
          
        </nav>
        
      </div>
      <div className="header__nav">
      <div className="header__right">
   
   <a href="#">Get Started</a>

 </div>
      </div>
     
    </header>
  );
};

export default Header;