import React from 'react';

import './filter.css';

const Filter = ({ label, isActive, onClick }) => {
  const className = `btn ${isActive ? `btn-info` : `btn-outline-secondary`}`;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >{label}</button>
  );
}

export default Filter;
