// Reducer handles fetchWeather action
// Saturday, 2/25/2017
// Sec. 5, Lec. 60, 9:00

import { FETCH_WEATHER } from '../actions/index';

// In our app, we want to show multiple rows at a time, with one row for each city.
// Need a data structure for our state that will be an array.

/* 
	When a new city is searched, we need to add its payload to the 
	existing state.
	
	WARNING!  But we don't want to mutate state, 
	we want to return a new instance of state.
	
	BAD: 	return state.push(action.payload.data);
			push() changes the existing array => mutates state

	BETTER: return state.concat(action.payload.data);
			concat() creates a new array with the old cities plus the new city
			no mutation of state
	
	BEST: 	return [ action.payload.data, ...state ]; // => [city, city, city]
			cleaner syntax that creates a new array
			1.  make a new array with the new payload data
			2.  spread syntax (...)
				takes existing elements in state array and inserts them
				into the new array
			3.	flattens the previous state array
			4.	new array format: [city (newest), city, city]

*/

export default function (state = [], action) {

	// Switch statement only handles fetchWeather() action type
	switch (action.type) {
		case FETCH_WEATHER:
			return [
				action.payload.data, ...state
			];
	}

	return state;
}