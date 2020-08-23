import React from "react";
import "../styles/CurrentWeatherResult.css";
const Result = (props) => {
  const { temp, pressure, wind, sunrise, sunset, city, icon } = props.weather;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  let iconurl = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <div className="weather-card">
      <div className="city-container">
        <h2>Pogoda dla miasta</h2>
        <h3 className="city">{city}</h3>
      </div>
      <img src={iconurl} alt="weather icon" className="weather-icon" />
      <div className="flex-container">
        <div className="info">
          <p>Temperatura:</p>
          <p className="value"> {temp} &#176;C </p>
        </div>
        <div className="info">
          <p>Wschód słońca:</p>
          <p className="value">{sunriseTime} </p>
        </div>
        <div className="info">
          <p>Zachód słońca:</p>
          <p className="value">{sunsetTime}</p>
        </div>

        <div className="info">
          <p>Wiatr:</p>
          <p className="value">{wind} m/s</p>
        </div>
        <div className="info">
          <p>Ciśnienie:</p>
          <p className="value">{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
