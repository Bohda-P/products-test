import { createAction } from '@reduxjs/toolkit';

export const getProducts = createAction('getProducts');
export const getCategories = createAction('getCategories');
export const filterProduct = createAction<string>('filterProduct');
