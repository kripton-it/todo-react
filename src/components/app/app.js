import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemForm from "../add-item-form";
import { toggleProperty } from "../../utils";

import "./app.css";

class App extends Component {
  state = {
    todos: [
      this.createItem("Drink Coffee", 1),
      this.createItem("Learn React", 2),
      this.createItem("Find a Job", 3)
    ]
  };

  createItem(label, id) {
    return {
      label,
      important: false,
      done: false,
      id
    };
  }

  onToggle = (id, property) => {
    this.setState(({ todos }) => ({
      todos: toggleProperty(todos, id, property),
    }));
  };

  onDelete = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(item => item.id !== id)
      };
    });
  };

  onAdd = (text) => {
    this.setState(({ todos }) => {
      const maxId = Math.max(...todos.map(({ id }) => id));

      const newItem = this.createItem(text, maxId + 1);

      return {
        todos: [...todos, newItem]
      };
    });
  };

  render() {
    const { todos } = this.state;
    const done = todos.map(({ done }) => done).filter(isDone => isDone).length;
    const remain = todos.length - done;
    return (
      <div className="todo-app">
        <Header remain={remain} done={done} />
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todos}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
        />
        <AddItemForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
