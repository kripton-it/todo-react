import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import FilterGroup from "../filter-group";
import AddItemForm from "../add-item-form";
import { toggleProperty, changeActiveFilter } from "../../utils";

import "./app.css";

class App extends Component {
  state = {
    todos: [
      this.createItem("Drink Coffee", 1),
      this.createItem("Learn React", 2),
      this.createItem("Find a Job", 3),
    ],
    search: ``,
    filters: [
      this.createFilter("All", 1, true),
      this.createFilter("Active", 2),
      this.createFilter("Done", 3),
    ],
  };

  createFilter(label, id, isActive = false) {
    return {
      label,
      id,
      isActive,
    }
  }

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

  onSearch = (value) => {
    console.log(value);
    this.setState({
      search: value.toLowerCase(),
    });
  }

  onFilter = (id) => {
    const { filters } = this.state;
    const activeFilterID = filters.find(filter => filter.isActive).id;
    console.log(activeFilterID);
    if (activeFilterID !== id) {
      const newFilters = changeActiveFilter(filters, id);
      this.setState({
        filters: newFilters,
      });
    }
  }

  searchFilter = ({ label }) => {
    const { search } = this.state;
    return label.toLowerCase().includes(search);
  }

  statusFilter = ({ done }) => {
    const { filters } = this.state;
    const status = filters.find(filter => filter.isActive).label;
    switch (status) {
      case `Done`:
        return done;
      case `Active`:
        return !done;
      default:
        return true;
    }
  }

  render() {
    const { todos, search, filters } = this.state;
    const filteredTodos = todos.filter(this.searchFilter).filter(this.statusFilter);
    const done = filteredTodos.map(({ done }) => done).filter(isDone => isDone).length;
    const remain = filteredTodos.length - done;
    return (
      <div className="todo-app">
        <Header remain={remain} done={done} />
        <div className="top-panel d-flex">
          <Search onSearch={this.onSearch} value={search} />
          <FilterGroup filters={filters} onFilter={this.onFilter}/>
        </div>
        <TodoList
          todos={filteredTodos}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
        />
        <AddItemForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
