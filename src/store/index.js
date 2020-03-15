import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RootReducer from './modules/rootReducer';

const persistConfig = {
	key: 'XBRAIN_SECRET',
	storage,
	whitelist: ['user'],
};

const store = createStore(persistReducer(persistConfig, RootReducer));

const persistor = persistStore(store);

export { store, persistor };
