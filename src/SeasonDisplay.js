import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    seasonText: "It's summer where you are.  Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    seasonText: "It's winter where you are.  Burr, it's chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
