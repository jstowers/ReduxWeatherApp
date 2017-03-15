import React, { Component } from 'react';

import { 
	Button,
	Modal 
} from 'react-bootstrap';

class ForecastHourly extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: true
		};
	}

	close = () => {

		this.setState({ showModal:!this.state.showModal });

	}

	render() {

		console.log('Inside ForecastHourly render()');
		console.log('ForecastHourly props', this.props);

		if(this.state.showModal){

			return (

				<div>
					<Modal.Dialog>
						<Modal.Title> 
							{ this.props.city } Detailed Forecast
						</Modal.Title>
						<Modal.Body>
							One fine body
						</Modal.Body>
						<Modal.Footer>
							<Button
								bsStyle="primary"
								onClick={this.close}>Close
							</Button>
						</Modal.Footer>

					</Modal.Dialog>
				</div>

			);
		}
	}
}

export default ForecastHourly