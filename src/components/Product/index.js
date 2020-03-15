import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { addItem } from '~/store/modules/cart/actions';

import {
	Container,
	Details,
	Title,
	Price,
	SplitPrice,
	Controller,
	ControllerButton,
	ControllerSubmit,
} from './styles';

export default function Product({ data }) {
	const dispatch = useDispatch();
	const { products } = useSelector(state => state.cart);
	const { id, photo, title, price } = data;

	const [count, setCount] = useState(products[id]?.count || 0);
	const [controller, setController] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addItem({ id, count }));
		setController(false);
	}

	const formattedPrice = useMemo(
		() =>
			new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(price),
		[price]
	);
	const splitPrice = useMemo(
		() =>
			new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(price / 12),
		[price]
	);
	const discountPrice = useMemo(
		() =>
			new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(price * 0.9),
		[price]
	);

	return (
		<Container onClick={() => setController(true)} url={photo}>
			<Details>
				<Title>{title}</Title>
				<Price>{formattedPrice}</Price>
				<SplitPrice>
					Em até 12x de {splitPrice} <br />
					{discountPrice} à vista (10% de desconto)
				</SplitPrice>
				<Controller onSubmit={handleSubmit} open={controller}>
					<div>
						<ControllerButton onClick={() => setCount(count - 1)}>
							<img src="/assets/baseline-remove-24px.svg" alt="button icon" />
						</ControllerButton>
						<input
							type="number"
							value={count}
							onChange={e => setCount(e.target.value)}
						/>
						<ControllerButton onClick={() => setCount(count + 1)}>
							<img src="/assets/baseline-add-24px.svg" alt="button icon" />
						</ControllerButton>
					</div>
					<ControllerSubmit variant="contained" fullWidth type="submit">
						ADICIONAR
					</ControllerSubmit>
				</Controller>
			</Details>
		</Container>
	);
}

Product.propTypes = {
	data: PropTypes.shape({
		photo: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
	}).isRequired,
};
