import React from "react";
import { Tabs, Tab } from "@mui/material";
import "./heading.css";

const Heading = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs
  value={selectedTab}
  onChange={handleChange}
  className="tabs"
  indicatorColor="primary"
  textColor="primary"
  variant="scrollable"  
  scrollButtons="auto"  
>
      <Tab label="Overview" className={`tab ${selectedTab === 0 ? 'tab-selected' : ''}`} />
      <Tab label="Fundamentals" className={`tab ${selectedTab === 1 ? 'tab-selected' : ''}`} />
      <Tab label="News Insights" className={`tab ${selectedTab === 2 ? 'tab-selected' : ''}`} />
      <Tab label="Sentiments" className={`tab ${selectedTab === 3 ? 'tab-selected' : ''}`} />
      <Tab label="Team" className={`tab ${selectedTab === 4 ? 'tab-selected' : ''}`} />
      <Tab label="Technicals" className={`tab ${selectedTab === 5 ? 'tab-selected' : ''}`} />
      <Tab label="Tokenomics" className={`tab ${selectedTab === 6 ? 'tab-selected' : ''}`} />
    </Tabs>
  );
};

export default Heading;
