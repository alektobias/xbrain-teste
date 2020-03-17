import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import ClientForm from '~/components/ClientForm';
import Product from '~/components/Product';
import products from '~/data/products';

import {
	Container,
	Header,
	ProductsGrid,
	Client,
	Total,
	TotalPrice,
	FinishButton,
} from './styles';

export default function Products() {
	const { products: cartProducts } = useSelector(state => state.cart);

	const formRef = useRef(null);

	const totalPrice = useMemo(() => {
		const partialValues = Object.keys(cartProducts).map(id => {
			const qtd = cartProducts[id].count;
			const productPrice = products.find(product => product.id === Number(id))
				.price;
			return qtd * productPrice;
		});
		const totalValue = partialValues.reduce(
			(prev, current) => prev + current,
			0
		);
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(totalValue);
	}, [cartProducts]);

	function handlePurchase() {
		formRef.current.submit();
	}

	return (
		<Container>
			<Header>Produtos</Header>
			<ProductsGrid>
				{products.map(product => (
					<Product data={product} key={product.id} />
				))}
			</ProductsGrid>
			<Header>Dados do Cliente</Header>
			<Client>
				<ClientForm ref={formRef} />
				<Total>
					<TotalPrice>{totalPrice}</TotalPrice>
					<FinishButton onClick={handlePurchase}>FINALIZAR COMPRA</FinishButton>
				</Total>
			</Client>
		</Container>
	);
}
