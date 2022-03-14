export const SET_TODO = "SET_TODO";
export const REQUESTED_TODOS = "REQUESTED_TODOS";
export const DELETED_TODO = "DELETED_TODOS";

export const getAllTodos = () => ({
  type: REQUESTED_TODOS,
});

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETED_TODO,
  payload,
});
