import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputSection from "./Components/InputSection/InputSection";
import TodoList from "./Components/TodoList/TodoList";
import TodoContainer from "./Components/TodoContainer/TodoContainer";

function App() {
  const LOCAL_STORAGE_KEY = "items";
  const [dataSet, setDataSet] = useState("");
  const [fieldValue, setFieldValue] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [editMode, setEditMode] = useState(false);
  const [newData, setNewData] = useState("");
  const [items, setItems] = useState([]);
  // const LOCAL_STORAGE_KEY = "items";
  const changeDataHandler = (e) => {
    setDataSet(e.target.value);
  };

  const newDataChangeHandler = (e) => {
    setNewData(e.target.value);
  };

  const addButtonHandler = () => {
    let data = {
      id: Date.now(),
      todoItem: dataSet,
      completed: false,
      editMode: false,
    };
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

  const deleteHandler = (id) => {
    let newDataAftrDlete = fieldValue.filter((item) => item.id != id);
    setFieldValue(newDataAftrDlete);
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

  const editHandler = (id) => {
    // setEditMode((prev) => !prev);
    let dataWithEditOption = fieldValue.map((item) => {
      if (item.id === id) {
        if (item.completed) {
          alert("Can't edit a Mark as Completed Todo");
          return item;
        } else {
          return { ...item, editMode: true };
        }
      } else return item;
    });
    setFieldValue(dataWithEditOption);
  };

  const saveCancelHandler = (id) => {
    let dataWithEditOption = fieldValue.map((item) => {
      if (item.id === id) {
        return { ...item, editMode: false };
      } else return item;
    });
    setFieldValue(dataWithEditOption);
  };

  const editSaveHandler = (id) => {
    if (newData === "") {
      alert("Please Enter a valid item");
      return;
    }
    let dataWithEditOption = fieldValue.map((item) => {
      if (item.id === id) {
        return { ...item, todoItem: newData, editMode: false };
      } else return item;
    });
    setFieldValue(dataWithEditOption);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(fieldValue));
  }, [fieldValue]);

  return (
    <>
      <TodoContainer>
        <InputSection
          dataSet={dataSet}
          changeDataHandler={changeDataHandler}
          addButtonHandler={addButtonHandler}
        />
        <TodoList
          fieldValue={fieldValue}
          completedHandler={completedHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          saveCancelHandler={saveCancelHandler}
          editSaveHandler={editSaveHandler}
          newDataChangeHandler={newDataChangeHandler}
        />
      </TodoContainer>
    </>
  );
}

export default App;
