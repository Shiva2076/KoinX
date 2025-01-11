import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <CircularProgressbar
        value={76}
        text="70%"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#ebf9f4",  
          textColor: "#0fba83",           
          pathColor: "#ebf9f4",        
          trailColor: "#ebf9f4"      
        })}
      />
    </div>
  );
};

export default CircularProgressBar;




