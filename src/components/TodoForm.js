import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    setTodos([...todos, todoText]);
  };

  return (
    <div>
      <h1>todos</h1>
      <form className="todo-form">
        <input
          id="form-input"
          value={todoText}
          type="text"
          placeholder="What needs to be done?"
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <button
          className="button"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            if (todoText) {
              handleSubmit();
              setTodoText("");
            } else if (todos.includes(todoText)) {
              alert("Todo already exists");
            } else {
              alert("Please enter a todo");
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
