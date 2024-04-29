import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from '../features/Auth/reducer';
import productReducer from '../features/Products/reducer'
import cartReducer from '../features/Cart/reducer'

import thunk from "redux-thunk";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer,composerEnhancer(applyMiddleware(thunk)));

export default store;
