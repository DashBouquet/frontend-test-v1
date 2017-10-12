import { combineReducers } from 'redux';
import todos from './todos';
import contacts from './contacts';
import contact from './contact';

export interface RootState {
  todos: TodoStoreState;
  contacts: ContactsStoreState;
  contact: ContactStoreState;
}

export default combineReducers<RootState>({
  todos,
  contacts,
  contact
});
