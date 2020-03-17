import { combineReducers } from 'redux';

import cart from './cart/reducer';
import user from './user/reducer';

const reducers = combineReducers({ cart, user });

export default reducers;
