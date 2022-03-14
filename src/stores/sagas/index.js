import { all } from "redux-saga/effects";
import todoSaga from "./todo.saga.js";

export default function* rootSaga() {
  yield all([todoSaga()]);
}
