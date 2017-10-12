import * as Actions from '../constants/actions';
import { scopedCreator } from '../utils/createAction';

const createAction = scopedCreator('CORE');

export const loadInitialData = createAction(Actions.LOAD_INITIAL_DATA);
export const setInitialData = createAction(Actions.SET_INITIAL_DATA);

export const updateContacts = createAction(Actions.UPDATE_CONTACTS);

export const getContact = createAction(Actions.GET_CONTACT);
export const setContact = createAction(Actions.SET_CONTACT);
