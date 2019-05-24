import React, { Component } from "react";

import "./todo-list-item.css";

class TodoListItem extends Component {
  state = {
    done: false,
    important: this.props.important,
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  }

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  }

  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;

    const labelClassName = `todo-list-item${done ? ` done` : ``}${important ? ` important` : ``}`;

    return (
      <span className={labelClassName}>
        <span
          className='todo-list-item-label'
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
