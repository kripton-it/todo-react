import React from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const todos = [
    {
      label: "Drink Coffee",
      important: false,
      id: 1
    },
    {
      label: "Learn React",
      important: true,
      id: 2
    },
    {
      label: "Find a Job",
      important: false,
      id: 3
    }
  ];
  return (
    <div className="todo-app">
      <Header remain={1} done={3} />
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
