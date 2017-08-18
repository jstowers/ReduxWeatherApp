import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import fetchWeather payload
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		// Sec. 5, Lec. 53
		// bind the context of onInputChange()
		// this = instance of SearchBar
		// overriding local method
		// this.onInputChange = this.onInputChange.bind(this);

		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// all DOM event handlers come along with an event object
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
		// why does state not include the updated event.target.value here?
		// console.log('this.state=', this.state);
	}

	onFormSubmit = (e) => {
		// prevents page from re-rendering automatically
		e.preventDefault();

		// we need to go and fetch weather data!!
		this.props.fetchWeather(this.state.term);

		// clear out search input and re-render
		this.setState({ term:'' });
	}

	render() {

		return (
			<form 
				onSubmit= { this.onFormSubmit }
				className="input-group">
				<input 
					placeholder="Get five-day forecasts for your favorite cities"
					className="form-control"
					value= { this.state.term } 
					onChange= { this.onInputChange } />
				<span className="input-group-btn">
					<button 
						type="submit"
						className="btn btn-secondary">Submit
					</button>
				</span>
			</form>
		);
	}
}

// ---------------------- mapDispatchToProps() ----------------------------- //

// Egghead.io => http://bit.ly/2npPYwk
// It allows us to inject certain properties into the wrapped component
// that can then dispatch actions.


// Use mapDispatchToProps and dispatch to hook up action creator fetchWeather 
// to our search_bar container:

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Connect to action creator -- injects Redux-related props into the component
// Passing 'null' for first argument because this container not concerned with state.
export default connect(null, mapDispatchToProps)(SearchBar);