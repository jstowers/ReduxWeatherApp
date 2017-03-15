import React, { Component } from 'react';
import ForecastHourly from './forecasthourly';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import fetchWeather payload
// import { fetchWeather} from '../actions/index';


export default class ForecastDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showDetail: false
		}
	}

	// Arrow functions capture the 'this' value of the enclosing context,
	// here ForecastDetail

	onClick = () => {

		event.preventDefault;
		this.setState({showDetail:!this.state.showDetail});

		if (this.state.showDetail) {

			return (
				<ForecastHourly 
					city = {this.props.city}
					weather = {this.props.weather} 
				/>
			);
		}
	}

	render() {

		if (!this.state.showDetail){
			return (
				<div>
					<button
						className= 'btn btn-primary'
						onClick={ this.onClick }> Detailed
					</button>
				</div>
			);
		} else {
			return (
				<div>
					<button
						className= 'btn btn-primary'
						onClick={ this.onClick }> Detailed
					</button>
					<ForecastHourly 
						city = {this.props.city}
						weather = {this.props.weather} />
				</div>
			);
		}
	}
}




/*

// Use mapDispatchToProps and dispatch to hook up action creator fetchWeather 
// to our search_bar container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Connect to action creator -- injects Redux-related props into the component
// Passing 'null' for first argument because this container not concerned with state.
export default connect(null, mapDispatchToProps)(ForecastDetail);

*/
