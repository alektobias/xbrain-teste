import React from 'react';
// import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

import { store, persistor } from './store';
import main from './styles/theme/main';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<ThemeProvider theme={main}>
						<Routes />
						<GlobalStyle />
					</ThemeProvider>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
