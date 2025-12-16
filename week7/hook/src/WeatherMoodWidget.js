import React, { useState, useEffect } from "react";
import sunny from "./sunny.png";
import rainy from "./rainy.png";
import cloudy from "./cloudy.png";

function WeatherMoodWidget(props) {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(sunny);

  useEffect(() => {
    if (props.weather === "Sunny") {
      setImage(sunny);
    } else if (props.weather === "Rainy") {
      setImage(rainy);
    } else if (props.weather === "Cloudy") {
      setImage(cloudy);
    }
  }, [props.weather]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="weather-card">
      <h2 className="weather-title">{props.weather} Mood</h2>

      <button className="weather-btn" onClick={handleClick}>
        <span className="weather-count">{count}</span>
        <img className="weather-img" src={image} alt={props.weather} />
      </button>
    </div>
  );
}

export default WeatherMoodWidget;

