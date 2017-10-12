import { combineReducers } from 'redux';
import contacts from './contacts';
import contact from './contact';
import contactList from '../modules/Contacts/reducers/contactsList';

export interface RootState {
  contacts: ContactsStoreState;
  contact: ContactStoreState;
}

export default combineReducers<RootState>({
  contacts,
  contact,
  contactList
});
