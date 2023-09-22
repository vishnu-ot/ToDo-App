import React from "react";
import "./TodoContainer.css";
function TodoContainer({children}) {
  return <div className="todo-container">
    
    <h1 className="heading">Todo List</h1>
    {children}</div>;
}

export default TodoContainer;
