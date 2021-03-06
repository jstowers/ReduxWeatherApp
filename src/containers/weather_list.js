// Container to render a list of cities and their weather data
// Saturday, February 25, 2017
// Rev. Wednesday, March 15, 2017

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import ForecastDetail from '../components/forecastdetail';

class WeatherList extends Component {

	constructor(props) {
		super(props);
	}

	// renders a forecast row for each city
	renderForecast = (cityData) => {

		// variables to pass to ForecastDetail component
		const name = cityData.city.name;
		const detailForecast = cityData.list;
		
		// convert temperatures from K to F
		const temps = cityData.list.map(weather => 
			(weather.main.temp * (9/5) - 459.67).toFixed(2));

		// convert pressures from hPa to psi
		const pressures = cityData.list.map(weather => 
			(weather.main.pressure * 0.014504).toFixed(2));		

		const humidities = cityData.list.map(weather => 
			(weather.main.humidity));

		// use ES6 destructuring to condense this code
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return (
			<tr key= {name}>
				<td className='snapshot'><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="F" /></td>
				<td><Chart data={pressures} color="green" units="psi" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
				<td><ForecastDetail
					city= {name}
					weather= {detailForecast} />
				</td>
			</tr>
		);
	}

	render() {

		// props => returns an object with weather as a property
		// 		this.props.weather => [{ }, { }]
		// the value of weather is an array, with each element an object 
		// representing a city searched by the user
		// the most recent city searched => this.props.weather[0]

		// accessing a value for each city's weather property:
		// => this.props.weather[0]{<value>}
		// console.log('WeatherList props.weather', this.props.weather); 

		// <tr> => defines a row
		// <th> => defines a column header
		// <td> => defines a cell

		return (
			<table className= 'table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (<sup>o</sup>F)</th>
						<th>Pressure (psi)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody className= 'city-snapshot'>
					{this.props.weather.map(this.renderForecast)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	// const weather = state.weather
	return { weather }; // => ES6 syntax identical to { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
