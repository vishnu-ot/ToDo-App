import React from "react";

function InputSection({ changeDataHandler, addButtonHandler, dataSet }) {
  return (
    <div>
      <input type="text" onChange={changeDataHandler} value={dataSet}/>
      <button onClick={addButtonHandler}>Add</button>
    </div>
  );
}

export default InputSection;
