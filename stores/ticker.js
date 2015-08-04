import { TICK } from '../constants/ActionTypes';

export default function ticker(state = 0, action) {
	switch (action.type) {
		case TICK:
			return state + 1;

		default:
			return state;
	}
}