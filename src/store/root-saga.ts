import { fork } from 'redux-saga/effects';
// Sagas
import { productsSaga } from './products/saga';

export default function* rootSaga() {
  yield fork(productsSaga);
}
