import Types from './types';

export function addItem({ id, count }) {
	return {
		type: Types.ADD_ITEM,
		payload: { id, count },
	};
}
export function clearCart() {
	return {
		type: Types.CLEAR_CART,
	};
}
