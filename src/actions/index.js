import axios from 'axios';

// Open Weather API key
const API_KEY = 'a0ebec0abab86c76daa22dcf1f6bae32';

// Using ES6 template strings to add API_KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// only change application state through actions and reducers
// to load our weather, we need to call an action creator to make an AJAX request

// Create a single constant for our action type that can
// then be exported and used for the reducer.
// A constant definition ensures naming consistency throughout the application.
export const FETCH_WEATHER = 'FETCH_WEATHER';

// this function will be exported and made available to other files
// action creators must always return an action
// an action is an object that includes a property 'type'
export function fetchWeather(city) {

	// for API calls, keeping country code static => us for United States
	const url = `${ROOT_URL}&q=${city},us`;

	// the axios get request returns a promise that we pass
	// into our actions payload
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		// returning the promise as the payload
		payload: request
	};
}

