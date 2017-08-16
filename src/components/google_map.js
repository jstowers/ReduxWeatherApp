// February 26, 2017

// Google Maps JavaScript API
// Already wired in ton index.html
// google.maps = { } => an object used to display maps.


import React, { Component } from 'react';

class GoogleMap extends Component {

	// a lifecycle method called automatically after 
	// component renders on screen
	componentDidMount() {

		/* 
		Create an embedded Google map
		Google Maps will find this.refs.map on screen and embed a map in that element

		Two arguments:
		1.	Reference to an HTML element to render map
				=> this.refs.map
		2.	Options object { }
				=> zoom = 12 (good glimpse of city)
				=> center based on lat/lng
		*/

		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}

	// ref allows you to get direct access to an HTML
	// element that has been rendered to the page
	// this.refs.map => direct access to this html element

	render() {
		return <div ref ="map" />;
	}
}

export default GoogleMap