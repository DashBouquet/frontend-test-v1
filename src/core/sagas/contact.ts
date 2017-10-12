import { put } from 'redux-saga/effects';
import { fetchContactById } from '../../api/Contacts';
import { setContact } from '../actions';

export
function* fetchContact(action:any) {
  const Contact = yield fetchContactById(action.payload.id);

  try {
    yield put(setContact({ Contact }));
  } catch (error) {
    console.log(error);
  }
}
