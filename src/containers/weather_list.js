// Container to render a list of cities and their data
// Saturday, February 25, 2017

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	constructor(props) {
		super(props);

	}

	renderForecast(cityData) {

		const name = cityData.city.name;

		// this.props.weather => [{ }, { }]
		//console.log('this.props.weather =', this.props.weather);

		// add key to top-level element in a list

		return (
			<tr key={name}>
				<td>
					{name}
				</td>
			</tr>
		);
	}

	render() {

		// props => returns an object with weather as a property
		// the value of weather is an array, with each element 
		// representing a city searched by the user
		// the most recent city searched => this.props.weather[0]

		// accessing a value for each city's weather property:
		// => this.props.weather[0]{<value>}
		// console.log('WeatherList props.weather', this.props.weather); 

		// <tr> => defines a row
		// <td> => defines a cell

		return (
			<table className = 'table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (<sup>o</sup>F)</th>
						<th>Pressure (psi)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderForecast)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // => ES6 syntax identical to { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);

/*
	<td>
		{(city.main.temp * (9/5) - 459.67).toFixed(0)}
	</td>
	<td>
		{(city.main.pressure *0.014504).toFixed(1)}
	</td>
	<td>
		{city.main.humidity}
	</td>
*/