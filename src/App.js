import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import * as todosAction from "./stores/actions/todos.action";

function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <span>{todo}</span>
      <div>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function App() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const { todosList } = useSelector((state) => state.todosReducers);
  useEffect(() => {
    setTodos(todosList);
  }, [todosList]);

  const addTodo = (text) => {
    dispatch(todosAction.setTodo(text));
  };
  const removeTodo = (index) => {
    dispatch(todosAction.deleteTodo(index));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List - with Redux Store</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
