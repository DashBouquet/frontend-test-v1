import * as Actions from '../constants/actions';
import { scopedCreator } from '../utils/createAction';

const createAction = scopedCreator('CORE');

export const addTodo = createAction(Actions.ADD_TODO);
export const editTodo = createAction(Actions.EDIT_TODO);
export const deleteTodo = createAction(Actions.DELETE_TODO);
export const completeTodo = createAction(Actions.COMPLETE_TODO);
export const completeAll = createAction(Actions.COMPLETE_ALL);
export const clearCompleted = createAction(Actions.CLEAR_COMPLETED);
