import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '~/pages/Products';

import { Container } from './styles';

export default function routes() {
	return (
		<Container>
			<Switch>
				<Route path="/" component={Products} exact />
			</Switch>
		</Container>
	);
}
