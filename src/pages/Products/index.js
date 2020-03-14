import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import Product from '~/components/Product';
import products from '~/data/products';

import {
	Container,
	Header,
	ProductsGrid,
	ClientForm,
	Total,
	TotalPrice,
	FinishButton,
} from './styles';

export default function Products() {
	return (
		<Container>
			<Header>Produtos</Header>
			<ProductsGrid>
				{products.map(product => (
					<Product data={product} key={product.id} />
				))}
			</ProductsGrid>
			<Header>Dados do Cliente</Header>
			<ClientForm>
				<TextField
					label="Nome"
					placeholder="Nome do cliente aqui"
					variant="outlined"
					required
				/>
				<TextField
					label="Email"
					placeholder="Digite seu email aqui"
					variant="outlined"
					required
				/>
				<Select label="Sexo" variant="outlined" placeholder="Selecione">
					<MenuItem value="m">Masculino</MenuItem>
					<MenuItem value="f">Feminino</MenuItem>
					<MenuItem value="o">Outro</MenuItem>
				</Select>
			</ClientForm>
			<Total>
				<TotalPrice> R$ 654564</TotalPrice>
				<FinishButton>FINALIZAR COMPRA</FinishButton>
			</Total>
		</Container>
	);
}
