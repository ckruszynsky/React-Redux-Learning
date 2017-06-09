import React, { Component } from "react";
import SearchBar from '../containers/search-bar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <h1>Weather App </h1>
       <SearchBar />
      </div>
    );
  }
}

export default App;
