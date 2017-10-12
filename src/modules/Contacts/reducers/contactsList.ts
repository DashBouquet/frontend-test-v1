import { createReducer } from '../../../utils/createReducer';
import { setInitialData, updateContacts } from '../../../core/actions';

const initialState = null;

export default createReducer({
  [setInitialData]: (state, payload) => payload.Contacts.data,
  [updateContacts]: (state, payload) => payload,
}, initialState);
