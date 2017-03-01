import React, { Component } from 'react';
import ForecastHourly from './forecasthourly';

class ForecastDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showDetail: false
		}
	}

	onClick() {
		event.preventDefault;
		console.log('ForecastDetail props', this.props);
		this.setState({showDetail:!this.state.showDetail});

		if (this.state.showDetail){
			return (
				<ForecastHourly
					city = {this.props.city}
					weather = {this.props.weather} />
			);
		}
	}
	
	/*
	componentDidUpdate() {

		if (this.state.showDetail){
			return (
				<ForecastHourly
					city = {this.props.city}
					weather = {this.props.weather} />
			);
		}
	}
	*/

	render() {

	  	return (
	  		<div>
	  			<button
					className= 'btn btn-primary'
					onClick={ () => this.onClick() }> Detailed
				</button>
	  		</div>
		);
	}
}

export default ForecastDetail