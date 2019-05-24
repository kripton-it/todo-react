import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemForm from "../add-item-form";

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
        todos: todos.filter(item => item.id !== id)
      };
    });
  };

  onAdd = (text = "new item") => {
    this.setState(({ todos }) => {
      const maxId = Math.max(...todos.map(({ id }) => id));

      const newItem = {
        label: `${text}, id: ${maxId + 1}`,
        important: false,
        id: maxId + 1
      };

      return {
        todos: [...todos, newItem]
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
        <AddItemForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
