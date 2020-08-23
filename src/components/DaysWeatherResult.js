import React from "react";
import "../styles/DaysWeatherResult.css";
const DaysWeatherResult = (props) => {
  //maping and grouping forecast depends on a day
  const listDays = props.daysList.map((result, i) => {
    return (
      <div className="row-container">
        <p className="day">{result.name}</p>
        <div className="row" key={result.dt}>
          {result.weathers.slice(0, 4).map((weatherItem, i) => {
            const hours = new Date(weatherItem.dt * 1000).toLocaleTimeString(
              [],
              { timeStyle: "short" }
            );
            const icon = `http://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`;
            return (
              <div key={weatherItem.dt}>
                <div className="row-element">
                  <p className="time">{hours}</p>
                  <img src={icon} alt="weather icon" />
                  <p className="temp">
                    {" "}
                    {weatherItem.main.temp.toFixed()}&#176;C
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row" key={result.dt}>
          {result.weathers.slice(4).map((weatherItem, i) => {
            const hours = new Date(weatherItem.dt * 1000).toLocaleTimeString(
              [],
              { timeStyle: "short" }
            );
            const icon = `http://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`;
            return (
              <div key={weatherItem.dt}>
                <div className="row-element">
                  <p className="time">{hours}</p>
                  <img src={icon} alt="weather icon" />
                  <p className="temp">
                    {" "}
                    {weatherItem.main.temp.toFixed()}&#176;C{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="city-info">
        <h2>Pogoda dla miasta</h2>
        <h3>{props.city}</h3>
      </div>
      <div>{listDays}</div>
    </>
  );
};

export default DaysWeatherResult;
