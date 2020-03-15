import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { clearCart } from '~/store/modules/cart/actions';

import { Container, Message, NewPurchaseButton } from './styles';

export default function Confirmation() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { price } = useLocation()?.state;
	const { name } = useSelector(state => state.user);

	function handleNewPurchase() {
		dispatch(clearCart());
		history.push('/');
	}

	return (
		<Container>
			<Message>
				<div>
					<h3>{name},</h3>
					<p>
						Sua compra no valor de <strong>{price || 'R$ 0,00'}</strong> foi finalizada com
						sucesso
					</p>
				</div>
				<img src="/assets/purchase.png" alt="compra feita" />
				<NewPurchaseButton onClick={handleNewPurchase}>
					INICIAR NOVA COMPRA
				</NewPurchaseButton>
			</Message>
		</Container>
	);
}
