import { SagaIterator } from 'redux-saga';
import { put, call, all, takeLeading } from 'redux-saga/effects';
import { httpClient } from '../../api';
import { getProducts, getCategories, filterProduct } from './actions';
// Api
// Actions
import {
  getProductsSuccess,
  ProductResponse,
  getProductsFailure,
  getProductsCategoriesFailure,
  getProductsCategoriesSuccess,
} from './slice';

interface Response {
  data: ProductResponse;
}

/**
 * API methods
 */

const fetchProductsList = async (): Promise<Response> => {
  return httpClient.get('products');
};

const fetchFilteredProductsList = async (category: string): Promise<Response> => {
  return httpClient.get(`products/category/${category}`);
};

const fetchProductsCategories = async (): Promise<Response> => {
  return httpClient.get('products/categories');
};

/**
 * Sagas
 */

function* getProductsSaga() {
  try {
    const { data } = yield call(fetchProductsList);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getFilteredProductsSaga(action: ReturnType<typeof filterProduct>) {
  const category = action.payload;
  try {
    const { data } = yield call(fetchFilteredProductsList, category);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getProductsCategoriesSaga() {
  try {
    const { data } = yield call(fetchProductsCategories);
    yield put(getProductsCategoriesSuccess(data));
  } catch (error) {
    yield put(getProductsCategoriesFailure(error));
  }
}

/**
 * Root feature saga
 */
export function* productsSaga(): SagaIterator {
  yield all([
    yield takeLeading(getProducts, getProductsSaga),
    yield takeLeading(getCategories, getProductsCategoriesSaga),
    yield takeLeading(filterProduct, getFilteredProductsSaga),
  ]);
}
