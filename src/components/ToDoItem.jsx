import React from "react";

const ToDoItem = (props) => {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.element}</li>
    </div>
  );
};

export default ToDoItem;
