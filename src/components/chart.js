// Sparkline Char
// Reusable functional component that generates a sparkline chart

//	Saturday, February 25, 2017
/* 
	All data received from parent function renderForecast() 
	in the weather_list container.  No data coming from Redux.  
	=> So just need a component, not a container.
*/

import React from 'react';

// import Sparklines for plotting weather data
import { Sparklines, SparklinesLine } from 'react-sparklines';


// Just need a functional component
export default (props) => {
	return (
		<div>
			<Sparklines height = {120} width = {180} data = {props.data}>
					<SparklinesLine color = {props.color} />
			</Sparklines>
		</div>
	);
}