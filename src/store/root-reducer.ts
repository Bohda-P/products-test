import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import { productsReducer } from './products/slice';
import { cartReducer } from './cart/slice';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
