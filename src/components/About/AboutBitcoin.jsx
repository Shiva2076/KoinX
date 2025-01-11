import React from 'react';
import './AboutBitcoin.css';

function AboutBitcoin() {
  return (
    <section className="about-bitcoin">
      <h2>About Bitcoin</h2>

      <div className="about-bitcoin__content">
        <h3>What is Bitcoin?</h3>
        <p>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B.
          BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time
          high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a
          circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          <hr></hr>
        </p>

        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p><p>

Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p><p>

Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
<hr/>
        </p>
        <h3>Already Holding Bitcoin?</h3>

        <div className="about-bitcoin__images">
          <div className="image-container">
            <img src="./src/assets/ABC.png" alt="Calculate your profits" />
          </div>
          <div className="image-container">
            <img src="./src/assets/BCD.png" alt="Calculate your tax liability" />
           
          </div>
        </div>
        <hr/>
        <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.</p>
      </div>
    </section>
  );
}

export default AboutBitcoin;
