import { TICK } from '../constants/ActionTypes';

export function tick() {
	return dispatch => {
		setInterval(() => {
			dispatch({
				type: TICK
			});
		}, 1000)
	};	
}