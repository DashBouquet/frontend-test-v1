import { combineReducers } from 'redux';
import contacts from './contacts';
import contact from './contact';

export interface RootState {
  contacts: ContactsStoreState;
  contact: ContactStoreState;
}

export default combineReducers<RootState>({
  contacts,
  contact
});
