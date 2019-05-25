import React from "react";

import "./search.css";

const Search = ({ onSearch, value }) => (
  <input
    type="text"
    placeholder="type to search"
    className="form-control search-input"
    onChange={({ target }) => onSearch(target.value)}
    value={value}
  />
);

export default Search;
