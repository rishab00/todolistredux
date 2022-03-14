import { put, takeEvery } from "redux-saga/effects";
import * as todoAction from "../actions/todos.action";

function* setTodo({ payload }) {
  try {
    yield put({ type: todoAction.SET_TODO, payload: payload });
  } catch (e) {
    //
  }
}

function* deleteTodo({ payload }) {
  try {
    yield put({ type: todoAction.DELETED_TODO, payload: payload });
  } catch (e) {
    //
  }
}

function* userSaga() {
  yield takeEvery(todoAction.SET_TODO, setTodo);
  yield takeEvery(todoAction.DELETED_TODO, deleteTodo);
}

export default userSaga;
