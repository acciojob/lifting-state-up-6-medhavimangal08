import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./ToDoList";

const App = () => {
  let [todos, setTodos] = useState([
    "Learn React",
    "Build a React app",
    "Deploy the React app",
  ]);
  function handleComplete(index) {}
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Do not remove the main div */}
      <Child todos={todos} handleComplete={handleComplete}></Child>
    </div>
  );
};

export default App;
