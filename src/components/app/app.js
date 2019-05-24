import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

class App extends Component {
  state = {
    todos: [
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
    ]
  };

  onDelete = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(item => item.id !== id),
      };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app">
        <Header remain={1} done={3} />
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todos} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
