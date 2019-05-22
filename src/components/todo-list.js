import React from "react";

import TodoListItem from "./todo-list-item";

import './todo-list.css';

const TodoList = ({ todos }) => {
  const list = todos.map((todo) => {
    const { id, ...todoProps } = todo;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem { ...todoProps } />
      </li>
    );
  });

  return <ul className="list-group todo-list">{list}</ul>;
};

export default TodoList;
