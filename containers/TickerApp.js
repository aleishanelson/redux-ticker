import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Ticker from '../components/Ticker';
import * as TickerActions from '../actions/TickerActions';

export default class TickerApp extends Component {
	render() {
		return (
			<Connector select={state => ({ticker: state.ticker})}>
				{this.renderChild}
			</Connector>
		);
	}

	renderChild({ ticker, dispatch }) {
		const actions = bindActionCreators(TickerActions, dispatch);
		return (
			<Ticker ticker={ticker} startTick={actions.tick} stopTick={actions.stopTick} />
		);
	}
}