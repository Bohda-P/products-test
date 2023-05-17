import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/slice';

export interface CartProduct extends Product {
  amount: number;
}

interface ProductState {
  products: CartProduct[];
  totalPrice: number;
}

const SessionStorageProducts = 'SessionStorageProducts';
const SessionStorageTotalPrice = 'SessionStorageTotalPrice';

const initialState: ProductState = {
  products: JSON.parse(sessionStorage.getItem(SessionStorageProducts)) || [],
  totalPrice: JSON.parse(sessionStorage.getItem(SessionStorageTotalPrice)) || 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push({ ...action.payload, amount: 1 });
      state.totalPrice = state.totalPrice + action.payload.price;
      sessionStorage.setItem(SessionStorageProducts, JSON.stringify(state.products));
      sessionStorage.setItem(SessionStorageTotalPrice, JSON.stringify(state.totalPrice));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.totalPrice =
        state.totalPrice - state.products.find((item) => item.id === action.payload).price;
      const filteredProducts = state.products.filter((item) => item.id !== action.payload);
      state.products = filteredProducts;
      sessionStorage.setItem(SessionStorageProducts, JSON.stringify(filteredProducts));
      sessionStorage.setItem(SessionStorageTotalPrice, JSON.stringify(state.totalPrice));
    },
    addOneAmount: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount + 1;
        }
        return item;
      });
      state.totalPrice =
        state.totalPrice + state.products.find((item) => item.id === action.payload).price;

      sessionStorage.setItem(SessionStorageProducts, JSON.stringify(state.products));
      sessionStorage.setItem(SessionStorageTotalPrice, JSON.stringify(state.totalPrice));
    },
    deleteOneAmount: (state, action: PayloadAction<number>) => {
      state.totalPrice =
        state.totalPrice - state.products.find((item) => item.id === action.payload).price;
      state.products = state.products.reduce((acc, item) => {
        if (item.id === action.payload && item.amount !== 1) {
          item.amount = item.amount - 1;
          acc.push(item);
        } else if (item.id === action.payload && item.amount === 1) {
        } else {
          acc.push(item);
        }
        return acc;
      }, []);

      sessionStorage.setItem(SessionStorageProducts, JSON.stringify(state.products));
      sessionStorage.setItem(SessionStorageTotalPrice, JSON.stringify(state.totalPrice));
    },
    resetCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, deleteFromCart, addOneAmount, deleteOneAmount, resetCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
