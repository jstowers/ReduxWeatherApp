// Sparkline Char
// Reusable functional component that generates a sparkline chart

//	Saturday, February 25, 2017
/* 
	All data received from parent function renderForecast() 
	in the weather_list container.  No data coming from Redux.  
	=> So just need a component, not a container.
*/

import _ from 'lodash';
import React from 'react';

// import Sparklines for plotting weather data
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

// Just need a functional component
export default (props) => {

	return (
		<div>
			<Sparklines 
					svgHeight= {150} svgWidth= {200} data= {props.data}>
					<SparklinesLine color = {props.color} />
					<SparklinesReferenceLine type= "avg" />
			</Sparklines>
			<div>
				Avg = { average(props.data) + ' ' + props.units }
			</div>
		</div>
	);
}