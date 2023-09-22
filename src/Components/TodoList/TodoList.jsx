import React from "react";
import "./TodoList.css";
function TodoList({
  fieldValue,
  completedHandler,
  editSaveHandler,
  deleteHandler,
  editHandler,
  newDataChangeHandler,
  saveCancelHandler,
}) {
  return (
    <div>
      {fieldValue.map((item) => {
        return (
          <div className="list-item" key={item.id}>
            {item.editMode ? (
              <input
                type="text"
                onChange={newDataChangeHandler}
                className="edit-input-field"
                // text={item.todoItem}
                // value={item.todoItem}
              />
            ) : (
              <div
                onClick={() => completedHandler(item.id)}
                className={item.completed ? "completed" : ""}
              >
                <p className="todo-item">{item.todoItem} </p>
              </div>
            )}

            {item.editMode ? (
              <button
                onClick={() => editSaveHandler(item.id)}
                className="btn-save"
              >
                Save
              </button>
            ) : (
              // <button onClick={() => editHandler(item.id)}>Edit</button>
              <img
                src="edit.svg"
                alt=""
                className="edit-btn"
                onClick={() => editHandler(item.id)}
              />
            )}

            {item.editMode ? (
              <button
                onClick={() => saveCancelHandler(item.id)}
                className="btn-cancel"
              >
                Cancel
              </button>
            ) : (
              // <button onClick={() => deleteHandler(item.id)}>Delete</button>
              <img
                src="delete.svg"
                alt=""
                className="dlt-btn"
                onClick={() => deleteHandler(item.id)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
