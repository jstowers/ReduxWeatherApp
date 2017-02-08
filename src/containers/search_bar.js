import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		// Sec. 5, Lec. 53
		// bind the context of onInputChange()
		// this = instance of SearchBar
		// overriding local method
		this.onInputChange = this.onInputChange.bind(this);
	}

	// all DOM event handlers come along with an event object
	onInputChange(event) {
		this.setState({ term: event.target.value });
		// why does state not include the event.target.value here?
		console.log('this.state=', this.state);
	}


	render() {

		return (
			<form className="input-group">
				<input 
					placeholder="Get five-day forecasts for your favorite cities"
					className="form-control"
					value = { this.state.term } 
					onChange = { this.onInputChange } />
				<span className="input-group-btn">
					<button 
						type="submit"
						className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}