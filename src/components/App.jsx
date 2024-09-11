import React, { useState } from "react";

import ToDoItem from "./ToDoItem";
import InputItem from "./InputItem";

function App() {
  const [itemArray, setitemArray] = useState([]);

  const addItem = (item) => {
    return setitemArray((prev) => {
      return [...prev, item];
    });
  };

  const deleteItem = (deleteIndex) => {
    setitemArray((prevItem) => {
      return itemArray.filter((item, index) => {
        return index != deleteIndex;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputItem add={addItem}/>
      </div>
      <div>
        <ul>
          {itemArray.map((element, index) => (
            <ToDoItem
              key={index}
              id={index}
              element={element}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
