import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const color = important ? "tomato" : "black";
  const style = {
    color
  };
  return <span style={style}>{label}</span>;
};

export default TodoListItem;
