import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
//import ForecastDetail from '../components/forecastdetail';
//import ForecastHourly from '../components/forecasthourly';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
