import React from 'react';

import './header.css';

const Header = ({remain, done}) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>{remain} more to do, {done} done</h2>
  </div>
);

export default Header;