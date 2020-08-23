import React from "react";
import Form from "../components/Form";
import CurrentWeatherResult from "../components/CurrentWeatherResult";

class CurrentWeather extends React.Component {
  state = {
    value: "",
    date: "",
    temp: "",
    city: "",
    wind: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    icon: "",
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=e7ef248f13087347697525b6e6672047&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Spróbuj ponownie");
      })
      .then((response) => response.json())
      .then((data) => {
        const date = new Date().toLocaleString();

        this.setState((prevState) => ({
          error: false,
          date: date,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp.toFixed(),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
          icon: data.weather[0].icon,
        }));
      })
      .catch((err) => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  };
  //Change  MainText in component
  componentDidMount() {
    const { changeOnNewRoute } = this.props;
    changeOnNewRoute();
  }
  render() {
    const { value, city } = this.state;

    return (
      <>
        <Form
          value={value}
          change={this.handleChange}
          submit={this.handleCitySubmit}
          weather={this.state}
        />
        {city ? <CurrentWeatherResult weather={this.state} /> : null}
      </>
    );
  }
}

export default CurrentWeather;
