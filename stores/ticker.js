import { TICK , STOP_TICK } from '../constants/ActionTypes';


const initialState = {
	count: 0,
	start: false
};

export default function ticker(state = initialState, action) {
	switch (action.type) {
		case TICK:
			return { ...state, count: state.count + 1, start: true };

		case STOP_TICK:
			return { ...state, start: false };

		default:
			return state;
	}
}