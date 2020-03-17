import produce from 'immer';

import Types from './types';

const INITIAL_STATE = {
	name: '',
	email: '',
	gender: '',
};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		const { type, payload } = action;

		switch (type) {
			case 'persist/REHYDRATE': {
				draft.name = payload.user.name;
				draft.email = payload.user.email;
				draft.gender = payload.user.gender;
				break;
			}
			case Types.SET_USER: {
				draft.name = payload.name;
				draft.email = payload.email;
				draft.gender = payload.gender;
				break;
			}
			default:
				break;
		}
	});
}
