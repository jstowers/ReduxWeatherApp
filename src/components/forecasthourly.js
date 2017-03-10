import React, { Component } from 'react';

class ForecastHourly extends Component {

	render() {

		console.log('Inside ForecastHourly render()');
		console.log('ForecastHourly props', this.props);

		return (
			<div>
				HELLO HOURLY
			</div>
		);
	}
}

export default ForecastHourly