import React from "react";
import { useState } from "react";

const InputItem = (props) => {
  const [item, setItem] = useState("");

  const input = (event) => {
    const value = event.target.value;
    setItem(value);
    console.log(value);
  };
  return (
    <>
      <input onChange={input} type="text" value={item} />
      <button onClick={() => {
        props.add(item)
        setItem("")
      }}>
        <span>Add</span>
      </button>
    </>
  );
};

export default InputItem;
