import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputSection from "./Components/InputSection/InputSection";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [dataSet, setDataSet] = useState("");
  const [fieldValue, setFieldValue] = useState([]);

  const changeDataHandler = (e) => {
    setDataSet(e.target.value);
  };

  const addButtonHandler = () => {
    let data = { id: Date.now(), todoItem: dataSet, completed: false };
    console.log(dataSet, ".....input field value");
    if (dataSet === "") {
      alert("Please add a Todo item");
    } else {
      console.log("hhh");
      setFieldValue((prev) => {
        return [...prev, data];
      });
    }
    setDataSet("");
  };

  const completedHandler = (id) => {
    let completed = fieldValue.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setFieldValue(completed);
  };
  return (
    <>
      <InputSection
        dataSet={dataSet}
        changeDataHandler={changeDataHandler}
        addButtonHandler={addButtonHandler}
      />
      <TodoList fieldValue={fieldValue} completedHandler={completedHandler} />
    </>
  );
}

export default App;
