import { takeEvery } from 'redux-saga/effects';
import { fetchInitialData } from './initialData';
import { fetchContact } from './contact';
import { loadInitialData, getContact } from '../actions';

function * rootSaga() {
  yield [
    takeEvery(loadInitialData().type, fetchInitialData),
    takeEvery(getContact().type, fetchContact)
  ];
}

export default rootSaga;