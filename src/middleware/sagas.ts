import { takeEvery } from 'redux-saga/effects';
import { addItemToList } from "../sagas/addItem";
import { addTodo } from "../actions/todos";

function * rootSaga() {
  yield [
    takeEvery(addTodo().type, addItemToList)
  ];
}

export default rootSaga;