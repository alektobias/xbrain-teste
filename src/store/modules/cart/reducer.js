import produce from 'immer';

import Types from './types';

const INITIAL_STATE = {
	products: {},
};

export default function cart(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		const { type, payload } = action;

		switch (type) {
			case Types.ADD_ITEM: {
				draft.products[payload.id] = { count: payload.count };
				break;
			}
			case Types.CLEAR_CART: {
				draft.products = {};
				break;
			}
			default:
				break;
		}
	});
}
