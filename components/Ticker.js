import React, { PropTypes, Component } from 'react';

export default class Ticker extends Component {
	
	render() {
		const { ticker, startTick } = this.props;

		return (
			<div>
				{ ticker }
				<button onClick={startTick}>Start Tick</button>
			</div>
		);
	}
}