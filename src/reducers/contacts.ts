import { createReducer } from '../utils/createReducer';
import { setInitialData, updateContacts } from '../core/actions';

const initialState: ContactsStoreState = null;

export default createReducer({
  [setInitialData]: (state, payload) => payload.Contacts
}, initialState);
