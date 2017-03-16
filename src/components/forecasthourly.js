import React, { Component } from 'react';

export default class ForecastHourly extends Component  {

	// console.log('ForecastHourly props = ', props);

	constructor(props) {
		super(props);
	}

	renderDetailedForecast = (item) => {

		console.log('item =', item);
		console.log('item.dt_txt = ', item.dt_txt);

		return (
			<tr key= {item.dt} 
				className = 'detail'>
				<td> {item.dt_txt} </td>
				<td> {item.main.temp} </td>
				<td> {item.weather[0].description} </td>
				<td> {item.wind.speed} </td>
			</tr>
		);
	}


	render() {

		return (

			<table className= 'table table-hover'>
				<thead>
					<tr>
						<th>Time</th>
						<th>Temperature (<sup>o</sup>F)</th>
						<th>Weather</th>
						<th>Wind Speed</th>
					</tr>
				</thead>
				<tbody className = 'hourly'>
					{this.props.weather.map(this.renderDetailedForecast)}
				</tbody>
			</table>
		);
	}

}
