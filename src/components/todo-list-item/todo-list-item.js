import React from "react";

import "./todo-list-item.css";

const TodoListItem = props => {
  const { label, done, important, onDelete, onDone, onImportant } = props;

  const labelClassName = `todo-list-item${done ? ` done` : ``}${
    important ? ` important` : ``
  }`;

  return (
    <span className={labelClassName}>
      <span className="todo-list-item-label" onClick={onDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
