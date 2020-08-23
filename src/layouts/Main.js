import React, { useState } from "react";
import "../styles/Main.css";
import { Switch, Route } from "react-router-dom";
import DaysWeather from "../pages/DaysWeather";
import CurrentWeather from "../pages/CurrentWeather";
//changing MainText depends on route
function getParaText() {
  const route = window.location.pathname;
  switch (route) {
    case "/weatherchannel":
      return "Sprawdź aktualną pogodę w dowolnym mieście";
    case "/weatherchannel/daysweather":
      return "Sprawdź prognozę na 5 dni w dowolnym mieście";
    default:
      return;
  }
}

export default function Main() {
  const [paraText, setParaText] = useState(getParaText());
  const changeOnNewRoute = () => {
    setParaText(getParaText());
  };
  return (
    <>
      <main>
        <p className="mainText">{paraText}</p>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <CurrentWeather changeOnNewRoute={changeOnNewRoute} />
            )}
          />
          <Route
            path="/daysweather"
            exact
            render={(props) => (
              <DaysWeather changeOnNewRoute={changeOnNewRoute} />
            )}
          />
        </Switch>
      </main>
    </>
  );
}
