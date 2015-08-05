import { TICK , STOP_TICK } from '../constants/ActionTypes';

export function tick() {
	return dispatch => {

		if (window.polling != undefined) {
			clearInterval(window.polling);
		}
		window.polling = setInterval(() => {
			dispatch({
				type: TICK
			});
		}, 1000)
	};	
}

export function stopTick() {
	return dispatch => {
		clearInterval(window.polling);
		dispatch({
			type: STOP_TICK
		});
	};
}