import React from "react";
import "./InputSection.css";
function InputSection({ changeDataHandler, addButtonHandler, dataSet }) {
  return (
    <div className="input-section-container">
      <input
        type="text"
        onChange={changeDataHandler}
        value={dataSet}
        className="input-section"
      />
      <button onClick={addButtonHandler} className="add-todo-btn">
        Add Todo
      </button>
    </div>
  );
}

export default InputSection;
