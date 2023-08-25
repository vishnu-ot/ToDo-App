import React from "react";
import "./TodoList.css";
function TodoList({ fieldValue, completedHandler }) {
  return (
    <div>
      {fieldValue.map((item) => {
        return (
          <div>
            <div
              onClick={() => completedHandler(item.id)}
              className={item.completed ? "completed" : ""}
            >
              <p className="todo-item">{item.todoItem}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
