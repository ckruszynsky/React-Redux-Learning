import React, { Component } from "react";
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <h1>Weather App </h1>
       <SearchBar />
       <WeatherList />
      </div>
    );
  }
}

export default App;
