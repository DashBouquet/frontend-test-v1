import * as Actions from '../constants/actions';
import { scopedCreator } from '../utils/createAction';

const createAction = scopedCreator('CORE');

export const loadInitialData = createAction(Actions.LOAD_INITIAL_DATA);
export const setInitialData = createAction(Actions.SET_INITIAL_DATA);

export const getContact = createAction(Actions.GET_CONTACT);
export const setContact = createAction(Actions.SET_CONTACT);

export const addTodo = createAction(Actions.ADD_TODO);
export const editTodo = createAction(Actions.EDIT_TODO);
export const deleteTodo = createAction(Actions.DELETE_TODO);
export const completeTodo = createAction(Actions.COMPLETE_TODO);
export const completeAll = createAction(Actions.COMPLETE_ALL);
export const clearCompleted = createAction(Actions.CLEAR_COMPLETED);
