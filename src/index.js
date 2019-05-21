import React from "react";
import ReactDOM from "react-dom";
// import App from './App';

const Header = () => <h1>My Todo List</h1>;

const Search = () => <input placeholder="search" />;

const TodoList = () => (
  <ul>
    <li>Learn React</li>
    <li>Learn Redux</li>
    <li>Build Todo App</li>
  </ul>
);

const App = () => (
  <div>
    <Header />
    <Search />
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
