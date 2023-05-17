import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, getCategories } from './actions';
import { addToCart } from '../cart/slice';

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductState {
  products: ProductResponse;
  categories: string[];
  loading: boolean;
  error: unknown;
}

const initialState: ProductState = {
  products: null,
  categories: [],
  loading: null,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsSuccess: (state, action: PayloadAction<ProductResponse>) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductsCategoriesSuccess: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
      state.loading = false;
    },
    getProductsCategoriesFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart, (state, action: PayloadAction<Product>) => {
      state.products.products = state.products.products.filter(
        (item) => item.id !== action.payload.id
      );
    });
    builder.addCase(getCategories, (state) => {
      state.loading = true;
    });
  },
});

export const {
  getProductsSuccess,
  getProductsFailure,
  getProductsCategoriesFailure,
  getProductsCategoriesSuccess,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
