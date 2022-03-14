import { combineReducers } from "redux";
import todosReducers from "./todos.reducer.js";

const rootReducer = combineReducers({
  todosReducers: todosReducers,
});

export default rootReducer;
