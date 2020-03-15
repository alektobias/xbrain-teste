import Types from './types';

export function setUser({ name, email, gender }) {
	return {
		type: Types.SET_USER,
		payload: { name, email, gender },
	};
}
