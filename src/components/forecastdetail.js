import React, { Component } from 'react';

import { 
	Button,
	Modal 
} from 'react-bootstrap';

import ForecastHourly from './forecasthourly';

// How to open/close a React Bootstrap Modal
// http://stackoverflow.com/questions/29471368/how-to-open-close-react-bootstrap-modal-programmatically


export default class ForecastDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: null
		}
	}

	// Arrow functions capture the 'this' value of the enclosing context.
	// Here, the enclosing context is the class ForecastDetail

	openModal = () => {

		this.setState({ showModal: true });

	}

	close = () => {
		this.setState({ showModal: false });
	}

	onClick = () => {

		event.preventDefault;

		this.openModal();

	}


	render() {

		if (this.state.showModal) {
			return (
				<Modal.Dialog show={ this.state.showModal } onHide={ this.close }>
					<Modal.Title> 
						{ this.props.city } Detailed Forecast
					</Modal.Title>
					<Modal.Body>
						Great Body
					</Modal.Body>
					<Modal.Footer>
						<Button
							bsStyle="primary"
							onClick={this.close}>Close
						</Button>
					</Modal.Footer>
				</Modal.Dialog>	
			);
		}

		return (
			<div>
				<button
					className= 'btn btn-primary'
					onClick={ this.onClick }> Detailed
				</button>
			</div>
		);
	}
}

/*


// Use mapDispatchToProps and dispatch to hook up action creator triggerModal 
// to our forecast detail container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ triggerModal }, dispatch);
}

// Connect to action creator -- injects Redux-related props into the component
// Passing 'null' for first argument because this container not concerned with state.
export default connect(null, mapDispatchToProps)(ForecastDetail);


*/