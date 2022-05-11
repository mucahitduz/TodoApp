import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["React Öğren", "Kod Yaz"]);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
