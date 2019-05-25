import React, { Component } from 'react';

import Filter from '../filter';

import './filter-group.css';

class FilterGroup extends Component {
  render() {
    const { filters, onFilter } = this.props;
    return (
      <div className="btn-group">
        {filters.map(({label, isActive, id}) => <Filter key={id} label={label} isActive={isActive} onClick={() => onFilter(id)}/>)}
      </div>
    );
  }
}

export default FilterGroup;
