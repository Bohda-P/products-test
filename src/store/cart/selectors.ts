import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductsRootState = (state: RootState) => state.cart;

export const selectCartProducts = createSelector(selectProductsRootState, ({ products }) => products);

export const selectCartTotalPrice = createSelector(
  selectProductsRootState,
  ({ totalPrice }) => totalPrice
);
