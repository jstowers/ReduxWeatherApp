// Container to render a list of cities and their data
// Saturday, February 25, 2017

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	constructor(props) {
		super(props);


	}

	renderForecast() {

		// this.props.weather => [{ }, { }]
		console.log('this.props.weather =', this.props.weather);

		return this.props.weather.map((city, index) => {
			return (
				<tr key= {index}>
					<td>
						{city.name}
					</td>
					<td>
						{city.main.temp}
					</td>
					<td>
						{city.main.pressure}
					</td>
					<td>
						{city.main.humidity}
					</td>
				</tr>
			);
		});
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
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.renderForecast()}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // => ES6 syntax identical to { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);