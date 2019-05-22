import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Search from './components/search';
import TodoList from './components/todo-list';

const App = () => {
  const todos = [
    {
      label: 'Drink Coffee',
      important: false,
      id: 1,
    },
    {
      label: 'Learn React',
      important: true,
      id: 2,
    },
    {
      label: 'Find a Job',
      important: false,
      id: 3,
    }
  ];
  return (
    <div>
      <Header />
      <Search />
      <TodoList todos={todos}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
