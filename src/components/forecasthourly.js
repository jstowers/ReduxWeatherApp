import React, { Component } from 'react';

export default class ForecastHourly extends Component  {

	constructor(props) {
		super(props);
	}

	renderDetailedForecast = (item) => {

		// console.log('item =', item);
		// console.log('item.dt_txt = ', item.dt_txt);

		const temp = (item.main.temp * (9/5) - 459.67).toFixed(0);

		return (
			<tr key= {item.dt}> 
				<td> {item.dt_txt} </td>
				<td> {temp} </td>
				<td> {item.weather[0].description} </td>
				<td> {item.wind.speed} </td>
			</tr>
		);
	}


	render() {

		return (

			<table>
				<thead>
					<tr>
						<th>Time</th>
						<th>Temperature (<sup>o</sup>F)</th>
						<th>Weather</th>
						<th>Wind Speed (mph)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderDetailedForecast)}
				</tbody>
			</table>
		);
	}

}
