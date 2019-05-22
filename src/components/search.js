import React from 'react';

const Search = () => {
  const text = "Type here to search";
  const style = {
    fontSize: 25
  };
  return <input placeholder={text} style={style} disabled />;
};

export default Search;