import React from "react";

const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div>
      <div className="todo-item">
        <p> {todo} </p>
        <i
          className="fa fa-times-circle"
          onClick={() => {
            deleteTodo(id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default TodoItem;
