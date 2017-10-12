import { put } from 'redux-saga/effects';
import { fetchContacts } from '../../api/Contacts';
import { setInitialData } from '../actions';

export
function* fetchInitialData() {
  const Contacts = yield fetchContacts();

  try {
    yield put(setInitialData({ Contacts }));
  } catch (error) {
    console.log(error);
  }
}
