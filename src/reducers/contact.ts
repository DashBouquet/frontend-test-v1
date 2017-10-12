import { createReducer } from '../utils/createReducer';
import { setContact } from '../core/actions';

const initialState: ContactStoreState = null;

export default createReducer({
  [setContact]: (state, payload) => payload.Contact
}, initialState);
