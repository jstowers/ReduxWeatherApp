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
			console.log('In here')
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

		if(!this.state.showDetail) {
			return (
	  			<button
					className= 'btn btn-primary'
					onClick={ () => this.onClick() }> Detailed
				</button>
			);
		}

		else {
			return (
				<div>
					<button className= 'btn btn-primary'
						onClick={ () => this.onClick() }> Detailed
					</button>
					<ForecastHourly
						city = {this.props.city}
						weather = {this.props.weather} />
				</div>
			);
		}
	}
}

export default ForecastDetail