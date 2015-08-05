import React, { PropTypes, Component } from 'react';

export default class Ticker extends Component {
	
	render() {
		const { ticker, startTick, stopTick } = this.props;
		
		return (
			<div>
				{ ticker.count }
				<button onClick={startTick} disabled={ ticker.start ? "disabled" : '' } >Start Tick</button>
				<button onClick={stopTick} disabled={ !ticker.start ? "disabled" : '' } >Stop Tick</button>
			</div>
		);
	}
}