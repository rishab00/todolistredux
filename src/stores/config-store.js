import { createStore } from "redux";
import "regenerator-runtime/runtime";
import rootReducer from "./reducers/index.js";

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(mySagas);

const store = createStore(rootReducer);

export default store;
