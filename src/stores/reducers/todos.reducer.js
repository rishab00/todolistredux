import * as todoAction from "../actions/todos.action";

const initialState = {
  todosList: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case todoAction.SET_TODO:
      return {
        ...state,
        todosList: state.todosList.concat([action.payload]),
      };
    case todoAction.DELETED_TODO:
      return {
        ...state,
        todosList: state.todosList.filter(
          (todo, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}
