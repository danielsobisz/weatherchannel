import React from "react";
import Form from "../components/Form";
import "../styles/DaysWeather.css";
import DaysWeatherResult from "../components/DaysWeatherResult";
class DaysWeather extends React.Component {
  state = {
    value: "",
    city: "",
    dates: [],
    categorizedDates: [],
  };
  handleCityFetch = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=e7ef248f13087347697525b6e6672047&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Spróbuj ponownie");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          error: false,
          dates: data.list,
          categorizedDates: this.categorizeDates(data.list),
          city: prevState.value,
        }));
      })
      .catch((err) => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };
  categorizeDates = (date) => {
    const dates = date
      .map((item) => {
        return item.dt_txt.split(" ")[0];
      })
      .filter((item, i, currArr) => {
        return currArr.indexOf(item) === i;
      });

    let sortedResults = [];
    for (let theDate of dates) {
      sortedResults.push({
        name: theDate,
        weathers: [],
      });
    }

    for (let item of date) {
      let itemDate = item.dt_txt.split(" ")[0];

      for (let result of sortedResults) {
        if (result.name === itemDate) {
          result.weathers.push(item);
        }
      }
    }

    return sortedResults;
  };

  handleCityNameChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };
  //Change  MainText in component
  componentDidMount() {
    const { changeOnNewRoute } = this.props;
    changeOnNewRoute();
  }
  render() {
    return (
      <>
        <Form
          value={this.state.value}
          change={this.handleChange}
          submit={this.handleCitySubmit}
        />
        {this.state.city ? (
          <DaysWeatherResult
            city={this.state.city}
            daysList={this.state.categorizedDates}
          />
        ) : null}
      </>
    );
  }
}

export default DaysWeather;
